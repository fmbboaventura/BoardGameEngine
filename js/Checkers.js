exports.boardGame = {
  id: "Checkers",

  gameData: {
    playerOptions: {
      playerCount: 2,
      playerId: ["Red", "Green"],
      playerAttributes: [
        {name: "Active Tokens", value: 0, description: "Number of Tokens outside the base", image: "assets/imgs/tokenpile.svg", visible:true},
        {name: "Active Token List", value: [], description: "", image: "", visible:false},
        {name: "combo", value: 0, description: "", image: "", visible:false}
      ]
    },
    board: {
      background:"assets/imgs/checkers.png",
      boardType: "point-to-point", // point-to-point ou grid
      positions: [
        // De baixo para cima
        // Primeira fileira. Posição inicial das peças brancas
        {capacity:1, location:[0.195, 0.908], positionId:0,  positionType:"black", prev: [], next: [1]},
        {capacity:1, location:[0.281, 0.908], positionId:1,  positionType:"white", prev: [0], next: [2]},
        {capacity:1, location:[0.368, 0.908], positionId:2,  positionType:"black", prev: [1], next: [3]},
        {capacity:1, location:[0.452, 0.908], positionId:3,  positionType:"white", prev: [2], next: [4]},
        {capacity:1, location:[0.540, 0.908], positionId:4,  positionType:"black", prev: [3], next: [5]},
        {capacity:1, location:[0.627, 0.908], positionId:5,  positionType:"white", prev: [4], next: [6]},
        {capacity:1, location:[0.713, 0.908], positionId:6,  positionType:"black", prev: [5], next: [7]},
        {capacity:1, location:[0.800, 0.908], positionId:7,  positionType:"white", prev: [6], next: [8]},

        // Segunda fileira. Posição inicial das peças brancas
        {capacity:1, location:[0.195, 0.792], positionId:8,  positionType:"white", prev: [], next: [1]},
        {capacity:1, location:[0.281, 0.792], positionId:9,  positionType:"black", prev: [0], next: [2]},
        {capacity:1, location:[0.368, 0.792], positionId:10,  positionType:"white", prev: [1], next: [3]},
        {capacity:1, location:[0.452, 0.792], positionId:11,  positionType:"black", prev: [2], next: [4]},
        {capacity:1, location:[0.540, 0.792], positionId:12,  positionType:"white", prev: [3], next: [5]},
        {capacity:1, location:[0.627, 0.792], positionId:13,  positionType:"black", prev: [4], next: [6]},
        {capacity:1, location:[0.713, 0.792], positionId:14,  positionType:"white", prev: [5], next: [7]},
        {capacity:1, location:[0.800, 0.792], positionId:15,  positionType:"black", prev: [6], next: [8]},

        // Terceira fileira.
        {capacity:1, location:[0.195, 0.675], positionId:16,  positionType:"black", prev: [], next: [1]},
        {capacity:1, location:[0.281, 0.675], positionId:17,  positionType:"white", prev: [0], next: [2]},
        {capacity:1, location:[0.368, 0.675], positionId:18,  positionType:"black", prev: [1], next: [3]},
        {capacity:1, location:[0.452, 0.675], positionId:19,  positionType:"white", prev: [2], next: [4]},
        {capacity:1, location:[0.540, 0.675], positionId:20,  positionType:"black", prev: [3], next: [5]},
        {capacity:1, location:[0.627, 0.675], positionId:21,  positionType:"white", prev: [4], next: [6]},
        {capacity:1, location:[0.713, 0.675], positionId:22,  positionType:"black", prev: [5], next: [7]},
        {capacity:1, location:[0.800, 0.675], positionId:23,  positionType:"white", prev: [6], next: [8]},

        // Quarta fileira.
        {capacity:1, location:[0.195, 0.558], positionId:24,  positionType:"white", prev: [], next: [1]},
        {capacity:1, location:[0.281, 0.558], positionId:25,  positionType:"black", prev: [0], next: [2]},
        {capacity:1, location:[0.368, 0.558], positionId:26,  positionType:"white", prev: [1], next: [3]},
        {capacity:1, location:[0.452, 0.558], positionId:27,  positionType:"black", prev: [2], next: [4]},
        {capacity:1, location:[0.540, 0.558], positionId:28,  positionType:"white", prev: [3], next: [5]},
        {capacity:1, location:[0.627, 0.558], positionId:29,  positionType:"black", prev: [4], next: [6]},
        {capacity:1, location:[0.713, 0.558], positionId:30,  positionType:"white", prev: [5], next: [7]},
        {capacity:1, location:[0.800, 0.558], positionId:31,  positionType:"black", prev: [6], next: [8]},

        // Quinta fileira.
        {capacity:1, location:[0.195, 0.442], positionId:32,  positionType:"black", prev: [], next: [1]},
        {capacity:1, location:[0.281, 0.442], positionId:33,  positionType:"white", prev: [0], next: [2]},
        {capacity:1, location:[0.368, 0.442], positionId:34,  positionType:"black", prev: [1], next: [3]},
        {capacity:1, location:[0.452, 0.442], positionId:35,  positionType:"white", prev: [2], next: [4]},
        {capacity:1, location:[0.540, 0.442], positionId:36,  positionType:"black", prev: [3], next: [5]},
        {capacity:1, location:[0.627, 0.442], positionId:37,  positionType:"white", prev: [4], next: [6]},
        {capacity:1, location:[0.713, 0.442], positionId:38,  positionType:"black", prev: [5], next: [7]},
        {capacity:1, location:[0.800, 0.442], positionId:39,  positionType:"white", prev: [6], next: [8]},

        // Sexta fileira.
        {capacity:1, location:[0.195, 0.325], positionId:40,  positionType:"white", prev: [], next: [1]},
        {capacity:1, location:[0.281, 0.325], positionId:41,  positionType:"black", prev: [0], next: [2]},
        {capacity:1, location:[0.368, 0.325], positionId:42,  positionType:"white", prev: [1], next: [3]},
        {capacity:1, location:[0.452, 0.325], positionId:43,  positionType:"black", prev: [2], next: [4]},
        {capacity:1, location:[0.540, 0.325], positionId:44,  positionType:"white", prev: [3], next: [5]},
        {capacity:1, location:[0.627, 0.325], positionId:45,  positionType:"black", prev: [4], next: [6]},
        {capacity:1, location:[0.713, 0.325], positionId:46,  positionType:"white", prev: [5], next: [7]},
        {capacity:1, location:[0.800, 0.325], positionId:47,  positionType:"black", prev: [6], next: [8]},

        // Sétima fileira. Posição inicial das peças pretas.
        {capacity:1, location:[0.195, 0.208], positionId:48,  positionType:"black", prev: [], next: [1]},
        {capacity:1, location:[0.281, 0.208], positionId:49,  positionType:"white", prev: [0], next: [2]},
        {capacity:1, location:[0.368, 0.208], positionId:50,  positionType:"black", prev: [1], next: [3]},
        {capacity:1, location:[0.452, 0.208], positionId:51,  positionType:"white", prev: [2], next: [4]},
        {capacity:1, location:[0.540, 0.208], positionId:52,  positionType:"black", prev: [3], next: [5]},
        {capacity:1, location:[0.627, 0.208], positionId:53,  positionType:"white", prev: [4], next: [6]},
        {capacity:1, location:[0.713, 0.208], positionId:54,  positionType:"black", prev: [5], next: [7]},
        {capacity:1, location:[0.800, 0.208], positionId:55,  positionType:"white", prev: [6], next: [8]},

        // Oitava fileira. Posição inicial das peças pretas.
        {capacity:1, location:[0.195, 0.092], positionId:56,  positionType:"white", prev: [], next: [1]},
        {capacity:1, location:[0.281, 0.092], positionId:57,  positionType:"black", prev: [0], next: [2]},
        {capacity:1, location:[0.368, 0.092], positionId:58,  positionType:"white", prev: [1], next: [3]},
        {capacity:1, location:[0.452, 0.092], positionId:59,  positionType:"black", prev: [2], next: [4]},
        {capacity:1, location:[0.540, 0.092], positionId:60,  positionType:"white", prev: [3], next: [5]},
        {capacity:1, location:[0.627, 0.092], positionId:61,  positionType:"black", prev: [4], next: [6]},
        {capacity:1, location:[0.713, 0.092], positionId:62,  positionType:"white", prev: [5], next: [7]},
        {capacity:1, location:[0.800, 0.092], positionId:63,  positionType:"black", prev: [6], next: [8]},
        // Primeira fileira. Posição inicial das peças brancas
        // [{capacity:1, location:[0.215, 0.94], positionId:0,  positionType:"black", prev: [], next: [1]},
        // {capacity:1, location:[0.260, 0.94], positionId:1,  positionType:"white", prev: [0], next: [2]},
        // {capacity:1, location:[0.305, 0.94], positionId:2,  positionType:"black", prev: [1], next: [3]},
        // {capacity:1, location:[0.350, 0.94], positionId:3,  positionType:"white", prev: [2], next: [4]},
        // {capacity:1, location:[0.395, 0.94], positionId:4,  positionType:"black", prev: [3], next: [5]},
        // {capacity:1, location:[0.440, 0.94], positionId:5,  positionType:"white", prev: [4], next: [6]},
        // {capacity:1, location:[0.485, 0.94], positionId:6,  positionType:"black", prev: [5], next: [7]},
        // {capacity:1, location:[0.530, 0.94], positionId:7,  positionType:"white", prev: [6], next: [8]}],
        //
        // // Segunda fileira. Posição inicial das peças brancas
        // [{capacity:1, location:[0.215, 0.88], positionId:8,  positionType:"white", prev: [], next: [1]},
        // {capacity:1, location:[0.260, 0.88], positionId:9,  positionType:"black", prev: [0], next: [2]},
        // {capacity:1, location:[0.305, 0.88], positionId:10,  positionType:"white", prev: [1], next: [3]},
        // {capacity:1, location:[0.350, 0.88], positionId:11,  positionType:"black", prev: [2], next: [4]},
        // {capacity:1, location:[0.395, 0.88], positionId:12,  positionType:"white", prev: [3], next: [5]},
        // {capacity:1, location:[0.440, 0.88], positionId:13,  positionType:"black", prev: [4], next: [6]},
        // {capacity:1, location:[0.485, 0.88], positionId:14,  positionType:"white", prev: [5], next: [7]},
        // {capacity:1, location:[0.530, 0.88], positionId:15,  positionType:"black", prev: [6], next: [8]}],
      ]
    },
    component: {
      dice: [
        {dieType:"nSidedDie", numberOfSides:6}
      ],
      tokens: [
        {positionId: 41, tokenType: "red", tokenImage: "assets/imgs/black0.png", ownerId:"Red"},
        {positionId: 43, tokenType: "red", tokenImage: "assets/imgs/black0.png", ownerId:"Red"},
        {positionId: 45, tokenType: "red", tokenImage: "assets/imgs/black0.png", ownerId:"Red"},
        {positionId: 47, tokenType: "red", tokenImage: "assets/imgs/black0.png", ownerId:"Red"},
        {positionId: 48, tokenType: "red", tokenImage: "assets/imgs/black0.png", ownerId:"Red"},
        {positionId: 50, tokenType: "red", tokenImage: "assets/imgs/black0.png", ownerId:"Red"},
        {positionId: 52, tokenType: "red", tokenImage: "assets/imgs/black0.png", ownerId:"Red"},
        {positionId: 54, tokenType: "red", tokenImage: "assets/imgs/black0.png", ownerId:"Red"},
        {positionId: 57, tokenType: "red", tokenImage: "assets/imgs/black0.png", ownerId:"Red"},
        {positionId: 59, tokenType: "red", tokenImage: "assets/imgs/black0.png", ownerId:"Red"},
        {positionId: 61, tokenType: "red", tokenImage: "assets/imgs/black0.png", ownerId:"Red"},
        {positionId: 63, tokenType: "red", tokenImage: "assets/imgs/black0.png", ownerId:"Red"},

        {positionId: 0, tokenType: "green", tokenImage: "assets/imgs/white0.png", ownerId:"Green"},
        {positionId: 2, tokenType: "green", tokenImage: "assets/imgs/white0.png", ownerId:"Green"},
        {positionId: 4, tokenType: "green", tokenImage: "assets/imgs/white0.png", ownerId:"Green"},
        {positionId: 6, tokenType: "green", tokenImage: "assets/imgs/white0.png", ownerId:"Green"},
        {positionId: 9, tokenType: "green", tokenImage: "assets/imgs/white0.png", ownerId:"Green"},
        {positionId: 11, tokenType: "green", tokenImage: "assets/imgs/white0.png", ownerId:"Green"},
        {positionId: 13, tokenType: "green", tokenImage: "assets/imgs/white0.png", ownerId:"Green"},
        {positionId: 15, tokenType: "green", tokenImage: "assets/imgs/white0.png", ownerId:"Green"},
        {positionId: 16, tokenType: "green", tokenImage: "assets/imgs/white0.png", ownerId:"Green"},
        {positionId: 18, tokenType: "green", tokenImage: "assets/imgs/white0.png", ownerId:"Green"},
        {positionId: 20, tokenType: "green", tokenImage: "assets/imgs/white0.png", ownerId:"Green"},
        {positionId: 22, tokenType: "green", tokenImage: "assets/imgs/white0.png", ownerId:"Green"}
      ]
    }
  },

  gameFlow: {
    actions: [
      {actionType: "rollDice", actionLabel: "Roll Dice"},
      {actionType: "selectToken", actionLabel: "Select Token to move"},
      {actionType: "moveToken", actionLabel: ""}
    ],
    rules: {
      movement: {
        branchRule: function (GameStatus) { // Ou "manual" ou uma função
          let currentToken = GameStatus.currentPlayer.selectedToken;
          let currentPosition = currentToken.position;
          let positionMap = {
            red:0,
            green:1,
            yellow:2,
            blue:3
          };

          if (currentPosition.positionType == "finish") {
            return currentPosition.next[positionMap[currentToken.tokenType]];
          } else if (currentToken.tokenType != currentPosition.positionType) {
            return currentPosition.next[0];
          } else return currentPosition.next[1];
        },
        positionSelectRule: null, // Ou uma função
      },
      turnOptions: {
        playerOrder: function (GameStatus, currentPlayer){
          if (GameStatus.currentTurn == 1) return "Red";

          let nextPlayer = {Red:"Green", Green:"Yellow", Yellow:"Blue", Blue:"Red"};

          if (currentPlayer.diceValue != 6)
            return nextPlayer[currentPlayer.id];

          if (currentPlayer.attributes["combo"] == 3){
            currentPlayer.attributes["combo"] = 0;
            return nextPlayer[currentPlayer.id];
          }

          GameStatus.elapsedTurns--;
          GameStatus.currentTurn--;
          return currentPlayer.id;
        },
        actionQueue:["rollDice", "selectToken", "moveToken"]
      },
      conditionsToWin: {
        numRemainingTokens: {tokenType:null, evalOption:"exact", value:0, evalEvent:"update"}
      }
    },
    gameEvents: {
      diceEvent: function (GameStatus, diceValue) {
        switch (diceValue) {
          case 6:
            GameStatus.currentPlayer.attributes["combo"]++;
            if (GameStatus.currentPlayer.attributes["combo"] == 3) {
              GameStatus.endTurn("You got three 6's in a row. You lost your turn ¯\\_(ツ)_/¯");
            } else {
              GameStatus.setMessage(
                "You got " + ((GameStatus.currentPlayer.attributes["combo"] == 1)? 'a': "ANOTHER") +
                " 6!! You can move a token from your base into the game AND you get to play another turn!");
            }
            break;
          case 1:
            GameStatus.setMessage("You got a 1! You can move a token from " +
              "your base into the game!");
            GameStatus.currentPlayer.attributes["combo"] = 0;
            break;
          default:
            if (GameStatus.currentPlayer.attributes["Active Tokens"] == 0){
              GameStatus.endTurn(`You got a ${diceValue}. You need a 1 or a 6`
                + " to move a token into the game.");
            } else GameStatus.setMessage(`You got a ${diceValue}!`);
            GameStatus.currentPlayer.attributes["combo"] = 0;
            break;
        }
      },
      passingEvent: function (GameStatus) {
        console.log("Passing...");
      },
      stoppingEvent: function (GameStatus) {
        let currentToken = GameStatus.currentPlayer.selectedToken;
        let stopPosition = currentToken.position;
        let activeTokenList = [];

        function addActiveToken(activeTokenList, token) {
          // Adiciona o token na lista de tokens ativos
          activeTokenList.push(token.id);

          // Atualiza o numero de tokens ativos
          GameStatus.playerStatus[token.ownerId].attributes["Active Tokens"] =
            activeTokenList.length;
        }

        function removeActiveToken(activeTokenList, token) {
          // Se o token não está na lista, não há o que remover
          if (activeTokenList.indexOf(token.id) == -1)
            return;

          // Remove o token da lista de tokens ativos
          activeTokenList.splice(
            activeTokenList.indexOf(token.id), 1
          );

          // Atualiza o numero de tokens
          GameStatus.playerStatus[token.ownerId].attributes["Active Tokens"] =
            activeTokenList.length;
        }

        if (stopPosition.tokens.length > stopPosition.capacity) {
          // Pega o primeiro token que estava na posição
          let firstToken = stopPosition.tokens[0];

          // Se os tokens tiverem o mesmo tipo...
          if (currentToken.tokenType == firstToken.tokenType) {
            // Reseta a posição do token atual
            currentToken.resetPositionTurn();
            GameStatus.setMessage("You landed on your own token! Returning to starting position.");

          } else { // Caso contrário
            // manda o token do inimigo pra base
            firstToken.resetPositionGame();

            // Remove o token da lista de tokens ativos
            activeTokenList = GameStatus.playerStatus[firstToken.ownerId].attributes["Active Token List"];
            removeActiveToken(activeTokenList, firstToken);
            GameStatus.setMessage("You sent an enemy token back to its base!");
          }
        }

        activeTokenList = GameStatus.playerStatus[currentToken.ownerId].attributes["Active Token List"];

        // Se o token parou fora da base e se o token não está na lista de ativos...
        if (!currentToken.position.positionType.includes("Base") &&
          !currentToken.position.positionType.includes("finish") &&
          activeTokenList.indexOf(currentToken.id) == -1) {
          // Adiciona o token na lista de tokens ativos
          addActiveToken(activeTokenList, currentToken);

        // Se o token parou na base
        } else if (currentToken.position.positionType.includes("Base")) {
          // Remove o token da lista de tokens ativos
          removeActiveToken(activeTokenList, currentToken);

        // Se o token parou na linha de chegada
        } else if (currentToken.position.positionType == "finish") {
          removeActiveToken(activeTokenList, currentToken);
          GameStatus.playerStatus[currentToken.ownerId].removeToken(currentToken);
        }
      },
      endTurn: function(GameStatus) {

      },
      endGame: function(GameStatus, winner) {
        console.log("Win");
        GameStatus.setMessage(`Game Over! ${winner.id} wins!`);
      },
      tokenEliminated: function(GameStatus) {
        console.log("Token Eliminated");
      },
      tokenSelected: function(GameStatus, selectedToken) {
        if (
          selectedToken.position.positionType.includes("Base") &&
          GameStatus.currentPlayer.diceValue != 6 &&
          GameStatus.currentPlayer.diceValue != 1 &&
          GameStatus.currentPlayer.attributes["Active Tokens"] > 0
        ) {
          GameStatus.repeatAction(`You got a ${GameStatus.currentPlayer.diceValue}.`
            + "You need a 1 or a 6 to move a token into the game."
            + " Please select another token.");
        } else GameStatus.setMessage(" ");
      },
      playerEliminated: function(GameStatus, player) {
        console.log(player.id);
        GameStatus.setMessage(`${player.id} was eliminated!`);
      }
    }
  }
}
