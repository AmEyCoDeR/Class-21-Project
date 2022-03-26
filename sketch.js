
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var Grounddown, sidhawala1,sidhawala2;

var ball;

let engine;
let world;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	Grounddown = new groundlol(400,690,800,10);
	sidhawala1 = new groundlol(550,650,10,70);
	sidhawala2 = new groundlol(675,650,10,70);

	var ball_options = {
		isStatic: false,
        restitution: 0.3,
		friction: 0,
		density: 10
	}

	//Create the Bodies Here.
   ball = Matter.Bodies.circle(50,400,10,ball_options);
   World.add(world,ball);

	Engine.run(engine);
  
}


function draw() {
	
  rectMode(CENTER);
  ellipseMode(RADIUS);


  background(225);
  Grounddown.show();
  sidhawala1.show();
  sidhawala2.show();


  drawSprites();
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,10);
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0, y:0},{x:20, y:0});
		Matter.Body.applyForce(ball,{x:0, y:0},{x:0, y:20})
	}
}


