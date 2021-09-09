class Bob{
constructor(x, y){
    var options={
       
        restitution:1.0,
        friction:0.3,
        density:0.8
    }
    this.body = Bodies.circle(x,y,25,options);
        World.add(world,this.body)
}
display(){
    
    push()
    fill("purple");
    ellipse(this.body.position.x, this.body.position.y, 50,50);
    pop();
}
}