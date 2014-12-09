angular
	.module('TicTacApp')
	.factory('MemeBoard', MemeBoard);

function MemeBoard() {

	var TILE_STATES = ['unselected-tile', 'selected-tile'];

	var MemeBoard = function( numTiles ) {
		this.numTiles = numTiles;
		this.tiles = new Array( numTiles );

		this.toggleTile = toggleTile;
		this.getTileState = getTileState;

		function toggleTile( num ) {
			this.tiles[num] = (this.tiles[num] + 1) % TILE_STATES.length;
		}

		function getTileState( num ) {
			return TILE_STATES[this.tiles[num]];
		}
		
		for (var i=0; i<this.tiles.length; i++) {
			this.tiles[i] = 0;
		}
	};

	return MemeBoard;

}