angular
	.module("TicTacApp")
	.controller("TicTacController", TicTacController);

// TicTacController.$inject = ['$firebase'];

// $inject > $firsbase inside the controller brackets and the function

// TicTacController.$inject = ['TicTacBoard'];

	// var self = this;

	function TicTacController(){

		var self = this;

		self.gameBoard = new Array(9);

		self.playerMove = playerMove;

		self.checkWin = checkWin;

		self.turn = 1;



// clickable tiles 
// check whose turn it is 

// set value to X or O
// change player turn variable 
// check for win
		function playerMove($index){
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
				
				if ((self.gameBoard[0] === "X" && self.gameBoard[1] === "X" && self.gameBoard[2] === "X" ) ||
				 (self.gameBoard[3] === "X" && self.gameBoard[4] === "X" && self.gameBoard[5] === "X" ) ||
				 (self.gameBoard[6] === "X" && self.gameBoard[7] === "X" && self.gameBoard[8] === "X" ) ||
				 (self.gameBoard[0] === "X" && self.gameBoard[3] === "X" && self.gameBoard[6] === "X" ) ||
				 (self.gameBoard[1] === "X" && self.gameBoard[4] === "X" && self.gameBoard[7] === "X" ) ||
				 (self.gameBoard[2] === "X" && self.gameBoard[5] === "X" && self.gameBoard[8] === "X" ) ||
				 (self.gameBoard[0] === "X" && self.gameBoard[4] === "X" && self.gameBoard[8] === "X" ) ||
				 (self.gameBoard[6] === "X" && self.gameBoard[4] === "X" && self.gameBoard[2] === "X" )){
					console.log("You WON!!!");
				}
				else if ((self.gameBoard[0] === "O" && self.gameBoard[1] === "O" && self.gameBoard[2] === "O" ) ||
				 (self.gameBoard[3] === "O" && self.gameBoard[4] === "O" && self.gameBoard[5] === "O" ) ||
				 (self.gameBoard[6] === "O" && self.gameBoard[7] === "O" && self.gameBoard[8] === "O" ) ||
				 (self.gameBoard[0] === "O" && self.gameBoard[3] === "O" && self.gameBoard[6] === "O" ) ||
				 (self.gameBoard[1] === "O" && self.gameBoard[4] === "O" && self.gameBoard[7] === "O" ) ||
				 (self.gameBoard[2] === "O" && self.gameBoard[5] === "O" && self.gameBoard[8] === "O" ) ||
				 (self.gameBoard[0] === "O" && self.gameBoard[4] === "O" && self.gameBoard[8] === "O" ) ||
				 (self.gameBoard[6] === "O" && self.gameBoard[4] === "O" && self.gameBoard[2] === "O" )){
					console.log("You WON!!!");
				}
			
				// else if (self.gameBoard === ("O"||"X")){
				// 	console.log("There's been a draw.");
				// }
		} 


		// self.playingBoard = new TicTacBoard( 9 );
		self.gameName = "Tic Tac Meme!";
		self.gameVersion = "1.0" ;
		self.player1 = player1;
		self.player2 = player2;
	
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