class Ground{
    constructor(){
        var ground_options = {
            isStatic : true
          }
        
          this.ground = Bodies.rectangle(450,390,900,20,ground_options)
          World.add(myWorld,this.ground);
    }
    display(){
        var pos =  this.ground.position;
        noStroke();
        fill("brown");
        rectMode(CENTER);
        rect(pos.x,pos.y,900,20);
    }
}