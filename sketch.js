const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(1250, 600);

	engine = Engine.create();
	world = engine.world;
	
	textSize(20);
	fill("black")
	text("Press the 'UpArrow' to move the Cradle",650,20)

	//Create the Bodies Here.
   roof = new Roof(650,50,1000,20);
   ball1 = new Ball(450,500,50);
   ball2 = new Ball(550,500,50);
   ball3 = new Ball(650,500,50);
   ball4 = new Ball(750,500,50);
   ball5 = new Ball(850,500,50);
   rope1 = new Rope(ball3.body,roof.body,-2,0);
   rope2 = new Rope(ball4.body,roof.body,90,0);
   rope3 = new Rope(ball5.body,roof.body,190,0);
   rope4 = new Rope(ball2.body,roof.body,-98,0);
   rope5 = new Rope(ball1.body,roof.body,-200,0);

	Engine.run(engine);
  Engine.update(engine)  
}
function draw() {
  rectMode(CENTER);
  background("lightpink");
  drawSprites();
  roof.display();
  rope1.display();
  rope2.display()
  rope3.display();
  rope4.display();
  rope5.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
}

function keyPressed(){
  if(keyCode === UP_ARROW){
Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-500,y:-500});
}
}
