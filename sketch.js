const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	engine.world.gravity.y = 10;

	roof = new Roof();
	
	bobObject1 = new Bob(280,450);
	bobObject2 = new Bob(340,450);
	bobObject3 = new Bob(400,450);
	bobObject4 = new Bob(460,450);
	bobObject5 = new Bob(520,450);
	
	

	rope1 = new Rope(bobObject1.body, roof.body,-100);
	rope2 = new Rope(bobObject2.body, roof.body,-50);
	rope3 = new Rope(bobObject3.body, roof.body,0);
	rope4 = new Rope(bobObject4.body, roof.body,50);
	rope5 = new Rope(bobObject5.body, roof.body,100);

	Engine.run(engine)
  
}


function draw() {
  rectMode(CENTER);
  background(225);
 

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
 rope5.display();

 bobObject1.display();
 bobObject2.display();
  bobObject3.display();
  bobObject4.display();
 bobObject5.display();

  roof.display();

  

 
 
}
function keyPressed(){

	if(keyCode === UP_ARROW){
		
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:mouseX,y:mouseY});
	
	}

}

function mouseDragged(){
	Matter.Body.setPosition(bobObject1.body,{x:-80,y:50})
}