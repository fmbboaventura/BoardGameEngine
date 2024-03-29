function getGameIndex(){
  var urlString = window.location.href; //window.location.href
  var url = new URL(urlString);
  var gameIndex = parseInt(url.searchParams.get("select"));
  return gameIndex;
}

window.onload = function () {
  var gameState = "";

  var tokenSprites = {};
  var positionSprites = {};
  var group = {};

  var boardGameAdapter = require('js/BoardGameAdapter.js');
  boardGameAdapter.setGameConfig("js/"+boardGameAdapter.boardGameList[getGameIndex()]);
  boardGameAdapter.startGameStatus();
  boardGameAdapter.setUpdateCallback(updateCallback);

  function updateTokens(boardGameAdapter) {

    // para cada jogador do mapa de token sprites...
    for (let playerId in tokenSprites) {
      if (tokenSprites.hasOwnProperty(playerId)) {

        if (!boardGameAdapter.getGameStatus("playerStatus")[playerId])
          continue;

        // Pega os tokens do boardGameAdapter
        let tokens = boardGameAdapter.getGameStatus("playerStatus")[playerId].tokens;

        // para cada tokenSprite pertencente ao jogador playerId...
        for (var tokenId in tokenSprites[playerId]) {
          if (tokenSprites[playerId].hasOwnProperty(tokenId)) {

            // Se a lista de tokens do boardGameAdapter não possui o
            // mesmo tokenId do mapa de token sprites, o token sprite
            // é removido do mapa.
            if (!tokens[tokenId]) {
              tokenSprites[playerId][tokenId].destroy();
              delete tokenSprites[playerId][tokenId];
              continue;
            }

            // atualiza o sprite de acordo com o tipo do token
            if (!tokenSprites[playerId][tokenId].key.includes(tokens[tokenId].tokenType)) {
              tokenSprites[playerId][tokenId].destroy();
              tokenSprites[playerId][tokenId] =
                createSprite(tokens[tokenId].tokenType + playerId, tokenId, playerId);
            }

            // Caso contrário, atualiza o sprite com as posições do boardGameAdapter
            tokenSprites[playerId][tokenId].x = backgroundWidth*tokens[tokenId].position.location[0];
            tokenSprites[playerId][tokenId].y = backgroundHeight*tokens[tokenId].position.location[1];
            tokenSprites[playerId][tokenId].z =
              (playerId != boardGameAdapter.getGameStatus("currentPlayer").id)? 0 : Infinity;
            group.sort(Phaser.Group.SORT_ASCENDING);
          }
        }
      }
    }
  }

  function updatePlayerAttributes(boardGameAdapter){
    let playerAttributes = boardGameAdapter.getGameStatus("currentPlayer").attributes;
    let attributeElem = null;
    let innerHTML = null;

    Object.getOwnPropertyNames(playerAttributes).forEach(function (attributeName){
      attributeElem = document.getElementById(attributeName);
      if (!attributeElem) return;

      innerHTML = attributeElem.innerHTML;
      attributeElem.innerHTML = innerHTML.slice(0, innerHTML.lastIndexOf('=')+1)
        + " " + playerAttributes[attributeName];
    });
  }

  function updateActions(boardGameAdapter) {
    let currentAction = boardGameAdapter.getGameStatus("currentAction");
    let elements = document.getElementById('actions').children;

    for (var i = 0; i < elements.length; i++) {
      elements[i].style.display = (elements[i].id == currentAction.actionType) ?
        "block" : "none";
    }
  }

  function updateTurnsDisplay(boardGameAdapter) {
    document.getElementById('playerId').textContent =
      "Current Player: " + boardGameAdapter.getGameStatus("currentPlayer").id;

    document.getElementById('turn').textContent = (
      "Turn = " + boardGameAdapter.getGameStatus("currentTurn")
    ) + ((boardGameAdapter.getGameConfig("maxTurnCount") > 0) ?
    "/" + boardGameAdapter.getGameConfig("maxTurnCount") : "");
  }

  function updateMessage(boardGameAdapter) {
    document.getElementById('message').textContent =
      boardGameAdapter.getGameStatus("message");
  }

  function createSprite(key, tokenId, id) {
    let sprite = group.create(0, 0, key);
    sprite.anchor.set(0.5); // TODO: remover ancora (?)
    sprite.inputEnabled = true;
    sprite.events.onInputDown.add(
      function(){
        console.log('click token');
        boardGameAdapter.updateGameStatus({tokenId:tokenId, playerId:id});
        //updateCallback(boardGameAdapter);
      }, this);
    return sprite;
  }

  function updateCallback() {
    updatePlayerAttributes(boardGameAdapter);
    updateActions(boardGameAdapter);
    updateTurnsDisplay(boardGameAdapter);
    updateMessage(boardGameAdapter);
    updateTokens(boardGameAdapter);

    if (boardGameAdapter.getGameStatus("statusId") == "moving") {
      if (boardGameAdapter.getGameStatus("steps") == 0)
        boardGameAdapter.updateGameStatus("moveToken");
      else setTimeout(function () {boardGameAdapter.updateGameStatus("moveToken")},500);
    }
  }

  var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-game', { preload: preload, create: create });

  // Carregando as imagens do jogo
  function preload() {

    // Carregando tabuleiro
    game.load.image('background', boardGameAdapter.getGameConfig("boardBackground"));

    // Carregando icones dos atributos do jogador
    let attributeImg = boardGameAdapter.getGameConfig("playerAttributeImg");
    let attributeDesc = boardGameAdapter.getGameConfig("playerAttributeDesc");
    for (var attributeName in attributeImg) {
      if (attributeImg.hasOwnProperty(attributeName)) {
        let playerAttributeDiv = document.getElementById('playerAttribute');
        // <img src="assets/imgs/tokenpile.svg" alt="Player Attribute"
        // width="42" height="42" style="vertical-align:middle"> Prop1 = 0

        let icon = document.createElement("IMG");
        icon.id = "teste";
        icon.src = attributeImg[attributeName];
        icon.alt = attributeName;
        icon.width = 42;
        icon.height = 42;
        icon.style.verticalAlign = 'middle';

        let p = document.createElement("p");
        let text = document.createTextNode(" " + attributeName + " = ");
        p.id = attributeName;
        p.title = (attributeDesc[attributeName] === undefined)?
          attributeName : attributeDesc[attributeName];

        if (attributeImg[attributeName] != "") p.appendChild(icon);
        p.appendChild(text);

        playerAttributeDiv.appendChild(p);
      }
    }

    // Criando itens das açoes
    let actions = boardGameAdapter.getGameStatus("actions");
    for (var actionType in actions) {
      if (actions.hasOwnProperty(actionType)) {
        let action = actions[actionType];
        let actionDiv = document.getElementById('actions');

        // <p><a href="#">Link</a></p>
        let label = {};
        if (action.actionType == "selectToken" ||
          action.actionType == "selectPosition") {
          label = document.createElement("SPAN");
        } else {
          label = document.createElement("a");
          label.href = "#";
          label.onclick = function() {
            boardGameAdapter.updateGameStatus(action.actionType);
            //updateCallback(boardGameAdapter);
          };
        }
        label.textContent = action.actionLabel;

        let p = document.createElement("p");
        p.id = action.actionType;
        p.style.display = "none";
        p.appendChild(label);
        actionDiv.appendChild(p);
      }
    }

    // Carregando icones dos tokens
    let tokenTypes = boardGameAdapter.getGameConfig("tokenType");
    for (var typeId in tokenTypes)
      if (tokenTypes.hasOwnProperty(typeId)) {
        let tokenType = tokenTypes[typeId];

        for (var playerId in tokenType.tokenImage)
          if (tokenType.tokenImage.hasOwnProperty(playerId)) {
            //console.log(typeId + playerId);
            game.load.image(typeId + playerId, tokenType.tokenImage[playerId]);
          }
      }
  }

  // Insere os componentes do jogo no mundo
  function create() {
    var backgroundImg = game.add.sprite(0, 0, 'background');
    backgroundWidth = backgroundImg.width;
    backgroundHeight = backgroundImg.height;

    group = game.add.group();

    let playerStatus = boardGameAdapter.getGameStatus('playerStatus');
    let tokenTypes = boardGameAdapter.getGameConfig("tokenType");

    // para cada jogador em player status
    for (let id in playerStatus) {
      if (playerStatus.hasOwnProperty(id)) {

        // Recupera os tokens do jogador
        let tokens = playerStatus[id].tokens;

        // Cria uma entrada para o jogador id no mapa de token sprites
        tokenSprites[id] = {};

        // para cada token do jogador
        for (let tokenId in tokens) {
          if (tokens.hasOwnProperty(tokenId)) {

            // Cria um sprite e seta a posição do token e o callback
            let sprite =  createSprite(tokens[tokenId].tokenType + id, tokenId, id);

            // Insere o sprite no mapa
            tokenSprites[id][tokenId] = sprite;
          }
        }
      }
    }

    // para cada posição...
    let positionList = boardGameAdapter.getGameStatus('boardPositionList');
    for (let position in positionList) {
      position = positionList[position];
      let w = backgroundWidth*position.area.width;
      let h = backgroundHeight*position.area.height;
      let x = backgroundWidth*position.location[0];
      let y = backgroundHeight*position.location[1];

      let posSprite = game.add.sprite(x,y);
      group.add(posSprite);
      posSprite.z = 1;
      posSprite.width = w;
      posSprite.height = h;
      posSprite.anchor.set(0.5);
      // posSprite.beginFill(0xFF0000, 0);
      // posSprite.drawRect(x, y, w, h);

      posSprite.inputEnabled = true;

      posSprite.events.onInputUp.add(onClick, this);﻿

      function onClick(target, pointer){
       console.log("click position");
       boardGameAdapter.updateGameStatus(position.positionId);
      }
    }
    updateCallback();
  }
}
