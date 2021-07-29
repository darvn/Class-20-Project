var space_station, space_stationImg, sleep, brush, gym1, gym2, eat, drink, move, bath;
var astronaut;
var edge1, edge2, edge3, edge4;


function preload(){

  space_stationImg = loadImage("iss.png");
  sleep = loadAnimation("sleep.png");
  eat = loadAnimation("eat1.png", "eat2.png");
  drink = loadAnimation("drink1.png", "drink2.png");
  move = loadAnimation("move.png", "move1.png");
  gym1 = loadAnimation("gym1.png", "gym2.png");
  gym2 = loadAnimation("gym11.png", "gym12.png");
  bath = loadAnimation("bath1.png", "bath2.png");
  brush = loadAnimation("brush.png");
}

function setup() {
  createCanvas(800,450);
  space_station = createSprite(400, 200);
  space_station.addImage(space_stationImg);
  space_station.scale = 0.163

 astronaut = createSprite(300, 230);
 astronaut.addAnimation("sleeping", sleep);
 astronaut.scale = 0.1;

 edge1 = createSprite(5, 225, 5, 500);
 edge2 = createSprite(795, 225, 5, 500);
 edge3 = createSprite(400, 5, 900, 5);
 edge4 = createSprite(400, 445, 900, 5);

 edge1.visible = false;
 edge2.visible = false;
 edge3.visible = false;
 edge4.visible = false;



}

function draw() {
  background(255,255,255);  

  astronaut.bounceOff(edge1);
  astronaut.bounceOff(edge2);
  astronaut.bounceOff(edge3);
  astronaut.bounceOff(edge4);

 
 if(keyDown("UP_ARROW")){
   astronaut.addAnimation("brushing", brush);
   astronaut.changeAnimation("brushing");
   astronaut.y = 300;
   astronaut.x = 300;
   astronaut.velocityX = 0
   astronaut.velocityY = 0
 }

 if(keyDown("DOWN_ARROW")){
  astronaut.addAnimation("workingOut", gym2);
  astronaut.changeAnimation("workingOut");
  astronaut.y = 300;
  astronaut.x = 550;
  astronaut.velocityX = 0
  astronaut.velocityY = 0
}

if(keyDown("RIGHT_ARROW")){
  astronaut.addAnimation("cleaning", bath);
  astronaut.changeAnimation("cleaning");
  astronaut.y = 150;
  astronaut.x = 400;
  astronaut.velocityX = 0
  astronaut.velocityY = 0
}

if(keyDown("LEFT_ARROW")){
  astronaut.addAnimation("eating", eat);
  astronaut.changeAnimation("eating");
  astronaut.y = 250;
  astronaut.x = 275;
  astronaut.velocityX = 0
  astronaut.velocityY = 0
}

if(keyDown("space")){
  astronaut.addAnimation("moving", move);
  astronaut.changeAnimation("moving");
  astronaut.velocityY = 1;
  astronaut.velocityX = 2;
  astronaut.y = 250;
  astronaut.x = 275;
}






  drawSprites();
  
  textSize(20);
  fill("white")
  text("Instructions : ",30,30);

  textSize(15);
  fill("white")
  text("Up Arrow = Brush Teeth ",30,50);

  textSize(15);
  fill("white")
  text("Down Arrow = Work Out ",30,65);

  textSize(15);
  fill("white")
  text("Left Arrow = Eat ",30,80);

  textSize(15);
  fill("white")
  text("Right Arrow = Clean Yourself",30,95);

  textSize(15);
  fill("white")
  text("Space = Move ",30,110);


}