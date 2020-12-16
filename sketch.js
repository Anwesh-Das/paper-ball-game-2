const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dust1,dust2,dust3;

function preload()
{
	
}

function setup() {
	createCanvas(800,800);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

  Engine.run(engine);

  dust1 = new Dustbin(600,430,200,20);
  dust2 = new Dustbin(650,360,20,220);
  dust3 = new Dustbin(500,360,20,220);
  
  ground = new Ground(400,440,800,8);
  
  paper = new Paper(56,420,60);
  
}

function draw() {
  rectMode(CENTER);
  background("white");

  paper.display();
  dust1.display();
  dust2.display();
  dust3.display();
  ground.display();

  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:80,y:-80});
  }
}