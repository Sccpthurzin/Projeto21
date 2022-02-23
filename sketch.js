const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var bola

let engine;
let world;

var parede1
var parede2
var parede3

function setup() {
  createCanvas(1600,700);
  engine = Engine.create();

  
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);

  //Propriedades da bola
  var propriedadesdabola = {
      retitution:0.3,
      friction:0.5,
      frictionAir:0.001,
      density:1.2
  }
  bola = Bodies.circle(260,100,20,propriedadesdabola);
  World.add (world,bola);

  parede1 = new parede (width/2,670,width,20);
  parede2 = new parede (1100,600,20,120);
  parede3= new parede (1350,600,20,120);
    
  }
  


function draw() 
{
  background("lightgreen");
  Engine.update(engine);
  ellipse(bola.position.x,bola.position.y,20,20);

  parede1.show();
  parede2.show();
  parede3.show();


}
function keyPressed(){
   if (keyCode==UP_ARROW){
  Matter.Body.applyForce(bola,bola.position,{
  x:50,y:-50
  });

   }

}