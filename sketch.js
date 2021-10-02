var bg,bgImg;
var farmer;
var farmer_img;

var flag = false;
var spflag = false;

var watercanImg, watercan;
var spoon, spoonImg;

var todo, todoImg;

var tulip1_img, tulip1;
var tulip2_img, tulip2;

var p1 = 0;
var p2 = 0;
var p3 = 0;

function preload(){
  bgImg = loadImage("background.jfif");

  watercanImg = loadImage("wateringcan.jfif");
  spoonImg = loadImage("spoon.png");

  farmer_img = loadImage("farmer.png");
  tulip1_img = loadImage("tulip-flower.png");
  tulip2_img = loadImage("tulip.png");

}

function setup() {
createCanvas(1200,800);

//creating the player sprite
farmer = createSprite(200,600,100,100);
 farmer.addImage(farmer_img);
   //farmer.scale = 0.3;
   farmer.debug = false;
   //farmer.setCollider("rectangle",0,0,300,300);

  tulip1 = createSprite(400,600,20,20);
  tulip1.addImage(tulip1_img);
  tulip1.scale = 0.2;

  tulip2 = createSprite(500,600,20,20);
  tulip2.addImage(tulip2_img);
  tulip2.scale = 0.5;

  watercan = createSprite(800,600,40,40);
  watercan.addImage(watercanImg);
  watercan.scale = 0.5;

  spoon = createSprite(900,660,40,40)
  spoon.addImage(spoonImg);
  spoon.scale = 0.5;
  }



function draw() {

  background(bgImg); 

  if(keyDown('left')){
    farmer.x = farmer.x - 5;
  }

  if(keyDown('right')){
    farmer.x = farmer.x + 5;
  }

  ///////////////////////////////////////////////////////////////////////////

  if(mousePressedOver(watercan) && farmer.x > watercan.x){
    flag = true;
  }

  if(flag === true){
    watercan.x = farmer.x;
  }

  if(keyDown('space')){
    flag = false;
    spflag = false;
    
    watercan.x = 800;
    spoon.x = 900;
  }

  ////////////////////////////////////////////////////////////////////////////

  if(mousePressedOver(spoon) && farmer.x > spoon.x){
    spflag = true;
  }

  if(spflag === true){
    spoon.x = farmer.x;
  }

 

/*  
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}
*/

/*
if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}
*/

drawSprites();

  textSize(50);
  textAlign(LEFT, TOP);
  textFont("Impact");
  fill("white");

  stroke("brown");
  strokeWeight(5);

  text("task 1 ="+ p1, 0,0);
  text("task 2 ="+ p2, 0,50);
  text("task 3 ="+ p3, 0,100);

}
