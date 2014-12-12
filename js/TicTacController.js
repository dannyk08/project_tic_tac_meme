// TODOS
// clickable tiles 
// check whose turn it is 

// set value to X or O
// change player turn variable 
// check for win

// TicTacController.$inject = ['$firebase'];
// $inject > $firebase inside the controller brackets and the function
// TicTacController.$inject = ['TicTacBoard'];
// var self = this;

angular
	.module("TicTacApp")
	.controller("TicTacController", TicTacController);

	function TicTacController(){
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
		self.counter = 0;
		
		// Game logic functions 
		// self.checkWin = checkWin;
		self.endGame = false;
		// self.gameDraw = gameDraw;
		self.turn = 1;
		self.winner = "";
		self.winningMessage = function () {
			//if the string is empty then nothing should appear
			if ((self.winner === "") && (self.counter>=9) ){
				return "There's a draw!!!";
			}
			else if (self.winner === ""){
				return "";
			}
			//else return winning Player!
			else {
				return "Player " + self.winner + " Wins!!!";
			}
		};


		function playerMove($index){
			self.counter++;
			console.log(self.counter);
			if(self.gameBoard[$index] === undefined){
				if (self.turn === 1) {
					self.gameBoard[$index] = "X";
					console.log($index);

					self.turn = 2;
					
				}
				else {
					self.gameBoard[$index] = "O";
					console.log($index);
					self.turn = 1;
					
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
					}
				}
		}


		
	
	// function getMeme() {
	// 	var whatever = new Firebase("https://dromero08app.firebaseio.com/TicTacMeme");
	// 	// var america = $firebase(ref).$asObject();
	// 	// return america;
	// }

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