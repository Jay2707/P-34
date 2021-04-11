class Drops{
 constructor(x,y,r){
    var options = {
        'restitution':0.8,
        'friction':0.1,
        'density':0.5
    } 
    this.body = Bodies.circle(x,y,r,options);
    World.add(world,this.body);

    this.radius = r;
 }  
  display(){
    var maxDrops = 100;
    if(this.rain.position.y > height){
      Matter.Body.setPosition(this.rain,{x:random(0,400),y:random(0,400)})
    }  
    for(var i = 0; i < maxDrops; i++){
      drops.push(new createDrop(random(0,400),random(0,400)));
    }

    fill("blue");
    ellipse(random[250,300,350,450,400,200,100,370,310],random[650,630,665],this.radius,this.radius);
  }
}