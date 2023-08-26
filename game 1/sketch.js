var balloon ;

var cloud,bird , invisibleline,invisibleline2

var score = 0;
var Highscore = 0;
var PLAY = 1 
var END = 0 
var gameState = PLAY

function preload(){

cloudImage = loadImage("cloud.png");

} 

function setup(){
  createCanvas(800,400);
  balloon = createSprite(50,300,20,20)

  invisibleline = createSprite(400,390,800,10);
  invisibleline2 = createSprite(400,10,800,10);

}

function draw(){
  background("skyblue");
  text("Score:" + score,700,50)
    text("Highscore:" + Highscore,700,70)
    score = score + Math.round(frameCount/100);

  if(gameState === PLAY){
  
    if(keyDown("space")){
      balloon.velocityY = -10
    }
    balloon.velocityY+= 0.5
    balloon.collide(invisibleline);
    balloon.collide(invisibleline2);
  
    invisibleline.visible = false
    invisibleline2.visible = false

    if(score > Highscore){
      Highscore = score
    }

    spawnClouds()
    spawnbirds()

//     if(balloon.isTouching(cloud)){
//        gameState = END;
//     }
//    }
//  else if (gameState === END){

//      balloon.velocityY = 0

  }

  

  
 
  
 

  drawSprites();
}

function spawnClouds (){
  if(frameCount % 60 === 0){
  var cloud = createSprite(800,200,10,20);
  cloud.y = Math.round(random(400,50));
  cloud.addImage(cloudImage);
  cloud.scale= 0.5;
  cloud.velocityX=-4;
  cloud.lifeTime=250;

  }
}

function spawnbirds (){
  if(frameCount % 60 === 0){
    var bird = createSprite(790,200,10,20);
    bird.y = Math.round(random(400,50));
    //bird.addImage();
   // bird.scale= 0.5;
    bird.velocityX=-4;
    bird.lifeTime=250;
    }
  }




