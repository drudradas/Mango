
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var tree1;
var boy1;
var rope;
var stone;
//522var gameState = "onSling";
var mango1, mango2, mango3, mango4, mango5;
function preload()
{
	boy1 = loadImage("boy copy.png")
	tree1  = loadImage("tree.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(400,650,800,20);
	//tree1 = new tree(590,370,450,550);
	//boy1 = new Boy(100,585,150,200);
	stone = new Stone(130,600,15);
	rope = new Rope(stone.body,{x:130,y:550});
	mango1 = new mango(550,350,30,30);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  image(boy1,100,490,150,200);
  image(tree1,400,60,400,600)

  drawSprites();
 ground.display();
 mango1.display();
 //tree1.display();
 //boy1.display();
 stone.display(); 
 rope.display();
 
}
function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
  }

  function mouseReleased(){
	
	rope.fly();

}



