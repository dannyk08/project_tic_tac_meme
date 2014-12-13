// TODOS
// clickable tiles 
// check whose turn it is 

// set value to X or O
// change player turn variable 
// check for win

// sync the game to firebase!


// $inject > $firebase inside the controller brackets and the function
// TicTacController.$inject = ['TicTacBoard'];
// var self = this;

angular
	.module("TicTacApp")
	.controller("TicTacController", TicTacController);

	TicTacController.$inject = ['$firebase'];

	function TicTacController($firebase){
		// negates redundancy and weird javascript shit from happening
		var self = this;
		
		// Decoration variables that will look nice 
		self.gameName = "Tic Tac Meme!";
		self.gameVersion = "1.0" ;

		// Switch between one or two players
		// self.player1 = player1;
		// self.player2 = player2;

		// sets an array of 9 divs in the html > body
		self.gameBoard = new Array(9);
		// Player is able to click their option
		self.playerMove = playerMove;
		self.counter = 9;
		
		var ref = new Firebase("https://supergame.firebaseio.com/game");

		// Game logic functions 		
		
		self.endGame = false;
		self.turn = 1;
		self.winner = "";

		// Firebase shit here
		// self.addToFBApp = addToFBApp;
		
		// self.lobby= lobby;

		self.winningMessage = function () {
			//if the string is empty then nothing should appear
			if ((self.winner === "") && (self.counter===0) ){
				self.gameBoard = "";
				return "There's a draw!!!";
			}
			else if (self.winner === ""){
				return "";
			}
			//else return winning Player!
			else {
				self.gameBoard = ("Player " + self.winner + " Won").toUpperCase();
				return "Player " + self.winner + " Wins!!!";
			}
		};

		// switches turns between players 
		function playerMove($index){
			self.counter--;
			console.log(self.counter);
			if(self.gameBoard[$index] === undefined){
				if (self.turn === 1) {
					self.gameBoard[$index] = "X";
					console.log($index);

					self.turn = 2;
					// addToFBApp();
				}
				else {
					self.gameBoard[$index] = "O";
					console.log($index);
					self.turn = 1;
					// addToFBApp();
				}	

				checkWin(console.log(self.gameBoard));			
			}

			else {
				// alert("You can't click this!"); 
			}
		}

		function checkWin($index){
				// Game Logic for "X"
				if ((self.gameBoard[0] === "X" && self.gameBoard[1] === "X" && self.gameBoard[2] === "X" ) ||
				 (self.gameBoard[3] === "X" && self.gameBoard[4] === "X" && self.gameBoard[5] === "X" ) ||
				 (self.gameBoard[6] === "X" && self.gameBoard[7] === "X" && self.gameBoard[8] === "X" ) ||
				 (self.gameBoard[0] === "X" && self.gameBoard[3] === "X" && self.gameBoard[6] === "X" ) ||
				 (self.gameBoard[1] === "X" && self.gameBoard[4] === "X" && self.gameBoard[7] === "X" ) ||
				 (self.gameBoard[2] === "X" && self.gameBoard[5] === "X" && self.gameBoard[8] === "X" ) ||
				 (self.gameBoard[0] === "X" && self.gameBoard[4] === "X" && self.gameBoard[8] === "X" ) ||
				 (self.gameBoard[2] === "X" && self.gameBoard[4] === "X" && self.gameBoard[6] === "X" )){
					// endGame will toggle to true if there's a winner
					self.endGame = true;
					// Pop up text for winner
					if (self.endGame === true){
						console.log(self.gameBoard[$index]="Player" + self.turn + " Wins!");
						self.winner = self.turn;
						// resetGame();
					}
				}
				// Game Logic for "O"
				else if ((self.gameBoard[0] === "O" && self.gameBoard[1] === "O" && self.gameBoard[2] === "O" ) ||
				 (self.gameBoard[3] === "O" && self.gameBoard[4] === "O" && self.gameBoard[5] === "O" ) ||
				 (self.gameBoard[6] === "O" && self.gameBoard[7] === "O" && self.gameBoard[8] === "O" ) ||
				 (self.gameBoard[0] === "O" && self.gameBoard[3] === "O" && self.gameBoard[6] === "O" ) ||
				 (self.gameBoard[1] === "O" && self.gameBoard[4] === "O" && self.gameBoard[7] === "O" ) ||
				 (self.gameBoard[2] === "O" && self.gameBoard[5] === "O" && self.gameBoard[8] === "O" ) ||
				 (self.gameBoard[0] === "O" && self.gameBoard[4] === "O" && self.gameBoard[8] === "O" ) ||
				 (self.gameBoard[2] === "O" && self.gameBoard[4] === "O" && self.gameBoard[6] === "O" )){
					// endGame will toggle to true if there's a winner
					self.endGame = true;
					// Pop up text for winner
					if (self.endGame === true){
						console.log(self.gameBoard[$index]="Player" + self.turn + " Wins!");
						self.winner = self.turn;
						// resetGame();
					}
				}
				getLobby();
		}

		// function restartGame(){
		// 	if(self.)
		// }
		function getLobby() {
			var ticTacToe = $firebase(ref).$asObject();
			self.ticTacToe = ticTacToe;
			//self.switchPlayers= self.playerMove;
			self.ticTacToe.gameTic = self.gameBoard;
			self.ticTacToe.$save();
		}

		
		// self.lobby.$loaded(function(){
		

		// 	console.log("LOBBY LOADED!");
		// 	console.log(self.lobby.name);

		// 	// Initializes numPlayers if it doesn't exist


		// 	if (!self.lobby.numPlayers){
		// 		self.lobby.numPlayers = 0;
		// 		self.lobby.whoseTurn = 0;
		// 		self.lobby.$save();
		// 	}

		// 	// Set playerNum, increment total number of players
		// 	// $transaction will guarantee that no two players have the same number 
		// 	// reasearch this!
		// 	self.playerNum = self.lobby.numPlayers;
		// 	self.lobby.numPlayers = self.lobby.numPlayers + 1;
		// 	self.lobby.$save();

		// });
		
	// 	function addToFBApp(newPlayerMoves) {
	// 		self.playerMoves = $add(newPlayerMoves);

	// 	// new Firebase("https://supergame.firebaseio.com/lobby");
	// 	// var globalMoves = $firebase(playerMoves).$asArray();
	// 	// return globalMoves;
	// 	}

	// function getPlayer1(){
	// 	var whatever = new Firebase("https://dromero08app.firebaseio.com/player1");
	// 	// var player = $firebase(ref).$asArray();
	// 	// return player;
	// }
	// function getPlayer2(){
	// 	var whatever = new Firebase("https://dromero08app.firebaseio.com/player1");
	// 	// var player2 = $firebase(ref).$asArray();
	// 	// return player2;
	// }

}