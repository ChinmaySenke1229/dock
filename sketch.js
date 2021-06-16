var iss,issImg;
var hasDocked;
var spacecraft,spacecraft1Img,spacecraft2Img,spacecraft3Img,spacecraft4Img;
var spacebg;

function preload(){
  
  issImg=loadImage("iss.png");
  spacebg=loadImage("spacebg.jpg");
  spacecraft1Img=loadImage("spacecraft1.png");
  spacecraft2Img=loadImage("spacecraft2.png");
  spacecraft3Img=loadImage("spacecraft3.png");
  spacecraft4Img=loadImage("spacecraft4.png");

  
}


function setup() {
  createCanvas(800,400);
 iss= createSprite(330, 130, 50, 50);
 iss.addImage(issImg);
 iss.scale=0.7;
hasDocked=false;
 spacecraft=createSprite(280,240,50,50);
 spacecraft.addImage(spacecraft1Img);
 spacecraft.scale=0.15;
}

function draw() {
  background(spacebg);  
  if(!hasDocked){
    if(keyIsDown(LEFT_ARROW)){
      spacecraft.x=spacecraft.x-10;
      spacecraft.addImage(spacecraft3Img);
    }
    if(keyIsDown(RIGHT_ARROW)){
      spacecraft.x=spacecraft.x+10;
      spacecraft.addImage(spacecraft4Img);
    }
    if(keyIsDown(DOWN_ARROW)){
      spacecraft.addImage(spacecraft2Img);
    }
    if(keyDown(UP_ARROW)){
      spacecraft.y=spacecraft.y-5
      spacecraft.addImage(spacecraft1Img);
    }
  if(spacecraft.x===iss.x){
    hasDocked=true;
    
  }
  }
  
  if(hasDocked){
    fill("red");
    textSize(30);
    text("DOCKING SUCCESSFULL",200,350);
  }

  drawSprites()
  
}