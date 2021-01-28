var fairy,fairyImage,background1,star,starImage



 
 
function preload()
{
  
  fairyImage = loadAnimation("images/fairy1.png","images/fairy2.png");
  background1 =loadImage("images/starnight.png");
starImage=loadImage("images/star.png");
}

function setup()
{
  createCanvas(600,600);
  fairy=createSprite(100,400,40,40);
  fairy.addAnimation("fairy",fairyImage);
  fairy.scale=0.2
  
 star=createSprite(400,100,40,40);
 star.addImage(starImage)
 star.scale=0.4
}


function draw() 
{
  background( background1);
if (star.isTouching(fairy)){
star.velocityY=0
fairy.velocityX=0
}

  keyPressed()
  drawSprites();
}
function keyPressed(){

  
  if (keyCode === LEFT_ARROW) {
    fairy.velocityX = -5;
    
  }  

  if (keyCode === RIGHT_ARROW) {
    fairy.velocityX = 5;
    
  }  

  if (keyCode === DOWN_ARROW) {
    star.velocityY = 7;
    
  }  

}

