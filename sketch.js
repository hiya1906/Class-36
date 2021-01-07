var database;
var player,form,game,playerCount;
var gameState = 0;


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
  game = new Game();
  game.start();
  game.getState();
}

function draw(){
  background("white");
}
