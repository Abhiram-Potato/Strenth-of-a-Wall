var bullet, wall;
var speed, weight, thickness;

function setup() {
  createCanvas(1600,400);
speed = random(223, 321);
weight = random(30, 52);
thickness = random(22, 83);
}

function draw() {
  background(255,255,255);  
bullet = createSprite(50, 200, 15, 10);
bullet.shapeColor(255, 255, 250);
wall = createSprite(1500, 200, thickness, height/2);
wall.shapeColor = Color(80, 80, 80);
bullet.velocityX = speed;
if (bullet.collide(wall) && bullet.velocityX < 270){
wall.shapeColor = Color(0,255,0);
bullet.velocityX = 0;
}
if (bullet.collide(wall) && bullet.velocityX < 321){
wall.shapeColor = Color(255,0,0);
bullet.velocityX = 0;
}
  drawSprites();
}