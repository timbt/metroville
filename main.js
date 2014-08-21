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

function Grid () {}

function drawLine (x,canvas) {
	var y = 250;
	context.fillStyle = "#000000";
	context.fillRect(0,y,x,10);
	window.requestAnimationFrame(function() {
		drawLine(x + 1, canvas);
	});
}

//main method
window.onload = function(){
	var canvas = document.getElementById("canvas1");
	context = canvas.getContext("2d");
	var block = new tile_Grass;
	block.render(100,100,context);
	drawLine(0,canvas);

};
