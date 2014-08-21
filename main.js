//Global constants
var VIEW_WIDTH = 500;
var VIEW_HEIGHT = 500;
var TILE_WIDTH = 50;
var TILE_HEIGHT = 50;
var NUM_X_TILES = 10;
var NUM_Y_TILES = 10;

function tile_Grass() {
	this.render = function(x,y,context){
		context.fillStyle = "#00FF00";
		context.fillRect(x,y, TILE_WIDTH - 1, TILE_HEIGHT -1);
	};
}

function Grid () {
	var loc = [[]];
	
	this.init = function () {
		for (i = 0; i < NUM_X_TILES; i++){
			for (j = 0; j < NUM_Y_TILES; j++){
				this.loc[i][j] = new tile_Grass();
			}
		}
	};
}

//main method
window.onload = function(){
	var canvas = document.getElementById("canvas1");
	context = canvas.getContext("2d");
	var block = new tile_Grass;
	block.render(100,100,context);

};
