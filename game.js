class Game {
    constructor(){

    }
    readGameState(){
        var gameref  =  database.ref("gameState")
        gameref.on("value",(data)=>{
            gameState  = data.val();

        })
    }
    //async 
    writeGamestate(state){
  database.ref("/").update({
      'gameState' : state
  })
   

    }
    
start(){
if (gameState === 0){
    player = new Player();
    form = new Form();
player.readPlayerCount();
form.display();
}
car1 = createSprite(100,600,20,50)
car2 = createSprite(150,600,20,50)
car3 = createSprite(200,600,20,50)
car4 = createSprite(250,600,20,50)
cars = [car1,car2,car3,car4];
}
    play(){
        form.hide();
        Player.readPlayers();
        textSize(20);
        text ("Game Start",displayWidth/2,displayHeight/6)
        var texty = 100;
        var x =  0;
         var y= 0; 
         var index = 0;
        for (var i in players){
         x = x+200;
         y = displayHeight - players[i].distance;
cars[index].x = x;
cars[index].y = y;
index += 1;

            if(i === "player"+player.index){
                cars[index].shapeColor = "red";
                
                
            }
            else
            fill("black");
      text(players[i].name+":"+players[i].distance,350,texty)
      
      y +=30  
        }
        if (keyDown(UP_ARROW)){
            player.distance += 50;
            
            player.update();
        }
 drawSprites();
    }
}