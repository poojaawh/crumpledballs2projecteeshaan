
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1;
var bin1;
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
paper1 = new Paper(300, 600, 50);
bin1 = new Bin(600, 690, 20, 60);
bin2 = new Bin(650, 690, 70, 20);
bin3 = new Bin(700, 690, 20, 60);
ground = createSprite(400, 690, 800, 20); // ground should not be a SPRITE, it must be a matter.js body
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display();
  bin1.display();
  bin2.display();
  bin3.display();
  drawSprites();
 
}
function keyPressed(){
if(keyCode === UP_ARROW){
Matter.Body.applyForce(paper1.body, paper1.body.position,{x:85, y:-85})
}
}



