const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;
const Constraint=Matter.Constraint;
const body=Matter.Body;
const MouseConstraint=Matter.MouseConstraint;
var world,engine;
var canvasmouse,mConstraint;
var bob1;






function setup() {
  createCanvas(windowWidth/2,windowHeight/1.5);
  engine=Engine.create();
  world=engine.world;
  let canvasmouse=Mouse.create(canvas.elt);
  canvasmouse.pixelRatio=pixelDensity();
  let options={
    mouse:canvasmouse
  }
  mConstraint=MouseConstraint.create(engine,options);
  World.add(world,mConstraint);
bobposx=300;
bobd=40
bobposy=(height/4)+500
bob1=new Pendulum(bobposx-bobd*2,bobposy,"black");
bob2=new Pendulum(bobposx-bobd,bobposy,"black");
bob3=new Pendulum(bobposx,bobposy,"black");
bob4=new Pendulum(bobposx+bobd,bobposy,"black");
bob5=new Pendulum(bobposx+bobd*2,bobposy,"black");

sling1= new Chain(bob1.body,{x:bobposx-bobd*2,y:bobposy});
sling2= new Chain(bob2.body,{x:bobposx-bobd,bobposy});
sling3= new Chain(bob3.body,{x:bobposx,y:bobposy});
sling4= new Chain(bob4.body,{x:bobposx+bobd,y:bobposy});
sling5= new Chain(bob5.body,{x:bobposx+bobd*2,y:bobposy});
  
}

function draw() {
  background("white");  
  bob1.display;
  bob4.display;
  bob3.display;
  bob5.display;
  bob2.display;
  sling1.display;
  sling2.display;
  sling3.display;
  sling4.display;
  sling5.display;
  

}
function mouseDragged(){
  Matter.Body.setPosition(bob1.body,{x:mouseX,y:mouseY});
}