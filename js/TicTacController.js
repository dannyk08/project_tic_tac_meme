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
		// self.ticTacToe.board = ["", "", "", "", "", "", "", "", ""];
		// Player is able to click their option
		self.playerMove = playerMove;
		self.counter = 9;
		
		

		// Game logic functions 		
		
		self.endGame = false;
		self.turn = 1;
		self.winner = "";
		// self.ticTacToe.board = self.ticTacToe.board;
		// Firebase shit here
		getLobby();
		// self.addToFBApp = addToFBApp;
		
		// self.lobby= lobby;

		self.winningMessage = function () {
			//if the string is empty then nothing should appear
			if ((self.winner === "") && (self.counter===0) ){
				// self.ticTacToe.board = "";
				return "There's a draw!!!";
				self.ticTacToe.$save();
			}
			else if (self.winner === ""){
				return "";
				self.ticTacToe.$save();
			}
			//else return winning Player!
			else {
				self.ticTacToe.board = ("Player " + self.winner + " Won").toUpperCase();
				return "Player " + self.winner + " Wins!!!";
				self.ticTacToe.$save();
			}
			setTimeout(restartGame, 1000);

			
		};

		// switches turns between players 
		function playerMove($index){
			self.counter--;
			console.log(self.counter);
			if(self.ticTacToe.board[$index] === ""){
				if (self.turn === 1) {
					self.ticTacToe.board[$index] = "X";
					self.ticTacToe.$save();
					console.log($index);
					self.turn = 2;
				}
				else {
					self.ticTacToe.board[$index] = "O";
					self.ticTacToe.$save();
					console.log($index);
					self.turn = 1;
				}
				checkWin(console.log(self.ticTacToe.board));			
			}
			else {
				// alert("You can't click this!"); 
			}
		}

		function checkWin($index){
				// Game Logic for "X"
				if ((self.ticTacToe.board[0] === "X" && self.ticTacToe.board[1] === "X" && self.ticTacToe.board[2] === "X" ) ||
				 (self.ticTacToe.board[3] === "X" && self.ticTacToe.board[4] === "X" && self.ticTacToe.board[5] === "X" ) ||
				 (self.ticTacToe.board[6] === "X" && self.ticTacToe.board[7] === "X" && self.ticTacToe.board[8] === "X" ) ||
				 (self.ticTacToe.board[0] === "X" && self.ticTacToe.board[3] === "X" && self.ticTacToe.board[6] === "X" ) ||
				 (self.ticTacToe.board[1] === "X" && self.ticTacToe.board[4] === "X" && self.ticTacToe.board[7] === "X" ) ||
				 (self.ticTacToe.board[2] === "X" && self.ticTacToe.board[5] === "X" && self.ticTacToe.board[8] === "X" ) ||
				 (self.ticTacToe.board[0] === "X" && self.ticTacToe.board[4] === "X" && self.ticTacToe.board[8] === "X" ) ||
				 (self.ticTacToe.board[2] === "X" && self.ticTacToe.board[4] === "X" && self.ticTacToe.board[6] === "X" )){
					// endGame will toggle to true if there's a winner
					self.endGame = true;
					// Pop up text for winner
					if (self.endGame === true){
						console.log(self.ticTacToe.board[$index]="Player" + self.turn + " Wins!");
						self.winner = self.turn;
						// resetGame();
					}
				}
				// Game Logic for "O"
				else if ((self.ticTacToe.board[0] === "O" && self.ticTacToe.board[1] === "O" && self.ticTacToe.board[2] === "O" ) ||
				 (self.ticTacToe.board[3] === "O" && self.ticTacToe.board[4] === "O" && self.ticTacToe.board[5] === "O" ) ||
				 (self.ticTacToe.board[6] === "O" && self.ticTacToe.board[7] === "O" && self.ticTacToe.board[8] === "O" ) ||
				 (self.ticTacToe.board[0] === "O" && self.ticTacToe.board[3] === "O" && self.ticTacToe.board[6] === "O" ) ||
				 (self.ticTacToe.board[1] === "O" && self.ticTacToe.board[4] === "O" && self.ticTacToe.board[7] === "O" ) ||
				 (self.ticTacToe.board[2] === "O" && self.ticTacToe.board[5] === "O" && self.ticTacToe.board[8] === "O" ) ||
				 (self.ticTacToe.board[0] === "O" && self.ticTacToe.board[4] === "O" && self.ticTacToe.board[8] === "O" ) ||
				 (self.ticTacToe.board[2] === "O" && self.ticTacToe.board[4] === "O" && self.ticTacToe.board[6] === "O" )){
					// endGame will toggle to true if there's a winner
					self.endGame = true;
					// Pop up text for winner
					if (self.endGame === true){
						console.log(self.ticTacToe.board[$index]="Player" + self.turn + " Wins!");
						self.winner = self.turn;
						// resetGame();
					}
				}
				
		}

		function restartGame(){
			self.ticTacToe.board[$index] = [""];
		}

		function getLobby() {
			var ref = new Firebase("https://supergame.firebaseio.com/game");
			var ticTacToe = $firebase(ref).$asObject();
			self.ticTacToe = ticTacToe;
			self.switchPlayers= self.playerMove;
			self.ticTacToe.board = ["", "", "", "", "", "", "", "", ""];
			self.ticTacToe.numTurns = 0;
			self.ticTacToe.$save();

		}

		
		
// this is the closing bracket for the entire controller
}