var car,wall;
var speed,weight;



function setup() {
  createCanvas(1600,400);
  speed=random(55,98);
  weight=random(400,1500)
  
}

function draw() {
  background(255,255,255);
  car = createSprite(50,200,50,20);
 
  wall = createSprite(1599,200,60,height/2);
  wall.shapeColor=color(80,80,80);
  car.velocityX = speed;

if(wall.x-car.x< (car.width+wall.width)/2)
{
  car.velocityX=0;
  var deformation=0.5 * weight * speed* speed/22509;
  if(deformation>180)
  {
    car.shapeColor="blue";
  }
  if(deformation<180 && deformtion>100)
  {
   car.shapeColor="brown";
  }
   if(deformation<100)
   {
    car.shapeColor= "red"
   }
}

  drawSprites();
}