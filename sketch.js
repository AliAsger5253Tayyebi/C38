var gameState = 0;
var playerCount;
var game,player,form;
var players;

var car1,car2,car3,car4;
var cars = [];
function setup(){
  database = firebase.database();

  console.log(database);
  createCanvas(displayWidth - 30,displayHeight - 250);
   game = new Game ();


   game.readGameState();

 game.start();
}

function draw(){
  
   
  if (playerCount === 4){
    
    game.writeGamestate(1);
  }
  if (gameState === 1){
    clear();
    game.play();
  }
}

