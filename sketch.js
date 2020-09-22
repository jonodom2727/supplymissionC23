var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var box1
var box2
var box3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	box1=createSprite(355,620,20,100)
	box2=createSprite(415,650,100,20)
	box3=createSprite(475,620,20,100)
	box1.shapeColor="red"
	box2.shapeColor="red"
	box3.shapeColor="red" 

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	box1=Bodies.rectangle(300,620,20,100,{isStatic:true}) 
	World.add(world, box1);

	box2=Bodies.rectangle(355,650,100,20,{isStatic:true})
	World.add(world, box2);

	box3=Bodies.rectangle(430,620,20,100,{isStatic:true}) 
	World.add(world, box2);

	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine); 
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody,false); 
	
  }
}

function keyPressed() { if (keyCode === LEFT_ARROW)
	 { helicopterSprite.x=helicopterSprite.x-20; translation={x:-20,y:0}
	  Matter.Body.translate(packageBody, translation) } 
	  
	  else if (keyCode === RIGHT_ARROW) { helicopterSprite.x=helicopterSprite.x+20; translation={x:20,y:0}
	   Matter.Body.translate(packageBody, translation) }

	   else if (keyCode === DOWN_ARROW) { Matter.Body.setStatic(packageBody,false); } }

