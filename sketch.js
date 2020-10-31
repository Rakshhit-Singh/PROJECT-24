
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperObject, ground;
var dustbin1, dustbin2, dustbin3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2,690,width,20);

	paperObject = new Paper(60,590,55);

	dustbin1=new Dustbin(700,630,20,100);
	dustbin2=new Dustbin(500,630,20,100);
	dustbin3=new Dustbin(600,670,200,20);	

	Engine.run(engine);
  
}


function draw() {
    background(0);

Engine.update(engine);

  ground.display();
  paperObject.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  keyPressed();
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body, paperObject.body.position, {x:20,y:-97});
		console.log(paperObject.body.position)
	}

}


