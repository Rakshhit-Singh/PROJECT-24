const Engine = Matter.Engine; 
const World = Matter.World; 
const Bodies = Matter.Bodies; 
const Body = Matter.Body; 
var side1,side1,bottom,ball,ground,dustbinimage; 

function preload() { 

} 

function setup() { 
createCanvas(800, 700); 
engine = Engine.create(); 
world = engine.world; 
//Create the Bodies Here. 
side1= new Dustbin(425,615,20,150) 
side2= new Dustbin(625,615,20,150) 
bottom= new Dustbin(525,675,200,20) 
ground= new Dustbin(400,690,800,10) 
ball = new Paper(100,50,50) 
Engine.run(engine); 

} 

function draw() { 
rectMode(CENTER); 
background("black"); 
side1.display();
side2.display();
ground.display();
bottom.display(); 
ball.display(); 
} 

function keyPressed(){ 
    if (keyCode === UP_ARROW){ 
        Matter.Body.applyForce(ball.body,ball.body.position,{x:45,y:-225}) 
    } 
}
