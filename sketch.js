const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var drop;
var man,lightening;
var lighteningimg,manimg;

function preload(){
  lighteningimg = loadAnimation("1.png","2.png","3.png","4.png"); 
  manimg = loadAnimation("walking_8.png","walking_7.png","walking_6.png","walking_5.png","walking_4.png","walking_3.png","walking_2.png","walking_1.png",) 
}

function setup(){
  createCanvas(500,700); 
  engine = Engine.create();
  world = engine.world; 

   drop = new Drops(random[250,300,350,450,400,200,100,370,310],random[650,630,665],2);
  
   man = createSprite(210,550,50,50);
   man.addAnimation("walking",manimg);
   man.scale = 0.4;

   lightening = createSprite(210,143,50,50);
   lightening.addAnimation("lightening",lighteningimg);
   lightening.scale = 0.4;
  }

function draw(){
  background(0);
  Engine.update(engine);
  
  drop.display();

  drawSprites();
}   

