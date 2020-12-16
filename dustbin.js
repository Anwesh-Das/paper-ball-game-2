class Dustbin{
  constructor(x,y,width,height) {
    var options = {
        isStatic: true
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);

    this.image = loadImage("dustbin.png");

  }
  display(){
    rectMode(CENTER);
    imageMode(CENTER);
    image(this.image,600,330,180,220);
  }
}