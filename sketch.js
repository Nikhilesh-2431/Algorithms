var fixedrect,movingrect;
function setup()
 { createCanvas(800,400);
 fixedrect=createSprite(400, 200, 50, 50);
 fixedrect.shapeColor="green" 
  movingrect=createSprite(500,200,100,20);
  movingrect.shapeColor="green";
 }
   function draw()
  { background(255,255,255);
  if (movingrect.x - fixedrect.x < fixedrect.width/2 + movingrect.width/2 &&
  fixedrect.x - movingrect.x < fixedrect.width/2 + movingrect.width/2 &&
  movingrect.y -  fixedrect.y < fixedrect.height/2 + movingrect.height/2 &&
  fixedrect.y - movingrect.y < fixedrect.height/2 + movingrect.height/2)

  { fixedrect.shapeColor="red";
    movingrect.shapeColor="red"; 
  }
  movingrect.x= World.mouseX;
  movingrect.y=World.mouseY;
  drawSprites(); }



