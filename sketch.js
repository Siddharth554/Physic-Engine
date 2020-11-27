

const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;


var engine,world,ground;

function setup() {
  createCanvas(400,400);
//Create our own engine
engine=Engine.create();
//Create my world
world=engine.world;
var ground_ob1={
  isStatic:true
}

var ball_ob1={
restitution:0.8

}



//Create an object
ground=Bodies.rectangle(200,390,200,20,ground_ob1);
ball=Bodies.circle(200,100,20,ball_ob1);



//Add bodies to the world
World.add(world,ground);
console.log(ground);
World.add(world,ball);
  
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
 rectMode(CENTER);
 rect(ground.position.x,ground.position.y,400,20);
 ellipseMode(RADIUS);
 ellipse(ball.position.x,ball.position.y,50,50);
  
}