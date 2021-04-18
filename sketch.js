const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;
var backgroundImg, ballImg, pinImg;
var pull;
var score=0;
var ballsUsed=1;
var distance;
var PLAY=1;
var END=0;
var START=2;
var gameState=START;
var startImg,start;
function preload(){
  backgroundImg=loadImage("images/bg.jfif");
  ballImg=loadImage("images/bowlingball.png");
  pinImg=loadImage("images/bowlingpin.png");
  startImg=loadImage("images/start.png");
}

function setup() {
  createCanvas(600,700);
  engine = Engine.create();
	world = engine.world;
  ball=new Ball(300,550,60);
  pull=new String(ball.body,{x:300,y:550});
  pin1=new Pin(300,200,40);
  pin2=new Pin(335,150,40);
  pin3=new Pin(265,150,40);
  pin4=new Pin(360,100,40);
  pin5=new Pin(240,100,40);
  pin6=new Pin(390,60,40);
  pin7=new Pin(210,60,40);
  pin8=new Pin(300,100,40);
  pin9=new Pin(330,60,40);
  pin10=new Pin(270,60,40);
  start=createSprite(300,400,100,50);
  start.addImage(startImg);
  start.scale=0.5;
}

function draw() {
  background(backgroundImg);
  Engine.update(engine);
  if(gameState===PLAY){
  textSize(24);
  fill("red");
  text("Press space for another chance", 10,30);
  text("Score: "+score,10,60);
  ball.display();
  pull.display();
  pin1.display();
  pin2.display();
  pin3.display();
  pin4.display();
  pin5.display();
  pin6.display();
  pin7.display();
  pin8.display();
  pin9.display();
  pin10.display();
  detectCollision(ball,pin1);
  detectCollision(ball,pin2);
  detectCollision(ball,pin3);
  detectCollision(ball,pin4);
  detectCollision(ball,pin5);
  detectCollision(ball,pin6);
  detectCollision(ball,pin7);
  detectCollision(ball,pin8);
  detectCollision(ball,pin9);
  detectCollision(ball,pin10);
  }
  if(score===10&&ballsUsed===1){
    text("STRIKE",300,200);
    gameState=END;
  }else if(score===10&&ballsUsed===2){
    text("SPARE",300,200);
    gameState=END;
  }
  if(gameState===END){

  }
  if(gameState===START){
    textSize(24);
    fill("green");
    text("Press s to start",250,500);
    if(keyWentDown("s")){
      start.destroy();
      gameState=PLAY;
    }
  }
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX, y:mouseY})
}
function mouseReleased(){
  pull.fly();
}
function detectCollision(lstone,lmango){
  mangoBodyPosition=lmango.body.position;
  stoneBodyPosition=lstone.body.position;
  distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
  if(distance<=lmango.r+lstone.r+70){
    //World.remove(world,lmango.body);
    Matter.Body.setStatic(lmango.body,false)
    lmango.score();
  }
}
function keyPressed(){
  if(keyCode === 32&&gameState===PLAY){
     Matter.Body.setPosition(ball.body,{x:300, y:550});
     pull.attach(ball.body);
     ballsUsed=ballsUsed+1;
  }
}
