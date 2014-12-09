angular
	.module("TicTacApp")
	.controller("TicTacController", TicTacController);

// TicTacController.$inject = ['$firebase'];

// $inject > $firsbase inside the controller brackets and the function

TicTacController.$inject = ['MemeBoard'];

function TicTacController(MemeBoard){
	
	this.gameName = "TicTacMeme";
	this.activeBoard = new MemeBoard( 3 );

	
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