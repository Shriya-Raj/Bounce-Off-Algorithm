var fixedrect,movingrect;

function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(100,100,50,50);
  fixedrect.shapeColor="red";
  //fixedrect.velocityY=3;
  movingrect=createSprite(700,300,50,50);
  movingrect.shapeColor="white";
  movingrect.velocityY=-1;
  movingrect.velocityX=-4;
}

function draw() {
  background(0); 
  if(fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2&&
    movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2){
      fixedrect.velocityX=fixedrect.velocityX*(-1);
      movingrect.velocityX=movingrect.velocityX*(-1);
    }
    if(fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2&&
      movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2){
       fixedrect.velocityY=fixedrect.velocityY*(-1);
       movingrect.velocityY=movingrect.velocityY*(-1);
    }
  drawSprites();
}