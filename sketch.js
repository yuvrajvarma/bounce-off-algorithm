var fixedrect,movingrect;





function setup() {
  createCanvas(800,400);
 fixedrect = createSprite(400, 200, 50, 80);
 fixedrect.shapeColor="green";
 movingrect = createSprite(400, 200, 80, 30);
 movingrect.shapeColor="green";

 movingrect.velocityX=+5;
 fixedrect.velocityX=-5;
}

function draw() {
  background(255,255,255);  
 // movingrect.x=World.mouseX;
  //movingrect.y=World.mouseY;
  /*if (movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2&&
     fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2&&
     movingrect.y-fixedrect.x<movingrect.height/2+fixedrect.height/2&&
     fixedrect.y-movingrect.x<movingrect.height/2+fixedrect.height/2

    
    
    ){

    fixedrect.shapeColor="red";
    movingrect.shapeColor="red";
 }
   else{
    fixedrect.shapeColor="green";
    movingrect.shapeColor="green";

   }*/

  bounceOff(movingrect,fixedrect);


  drawSprites();
}

function bounceOff(object1,object2){
if (object1.x-object2.x<object1.width/2+object2.width/2&&
  object2.x-object1.x<object2.width/2+object1.width/2){
  object1.velocityX=object1.velocityX*(-1);   
  object2.velocityX=object2.velocityX*(-1);   
}
else(object2.y-object1.x<object2.height/2+object1.height/2&&
    object1.y-object2.x<object1.height/2+object1.height/2){
    object1.velocityY=object1.velocityY*(-1);   
    object2.velocityY=object2.velocityY*(-1);   
       
    }
}