var fixedRect,movingRect

function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(400, 200, 100, 50);
  fixedRect.shapeColor="yellow";
  movingRect=createSprite(500,200,100,200);
  movingRect.shapeColor="yellow";
}

function draw() {
  background(0);  
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  
  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2
    && fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2
    && movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2
    && fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2){
      movingRect.shapeColor="red";
      fixedRect.shapeColor="red";
    }
  else{
    movingRect.shapeColor="yellow";
    fixedRect.shapeColor="yellow";
  }
  drawSprites();



}