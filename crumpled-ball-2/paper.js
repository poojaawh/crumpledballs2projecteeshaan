class Paper{
    constructor(x, y, radius) {
        var options = {
            
            restitution:0.3,
            friction:0.5,
            density:1.2
            
        }
        this.body = Bodies.circle(x, y, radius, options); //here correction is Bodies.circle and it takes radius, not width and height
        this.radius = radius;
        
        World.add(world, this.body);
      }
      display(){
       // console.log(this.body);
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle); // use this.body.angle
        
        ellipse( 0, 0, this.radius, this.radius); // here correction is this.radius
        pop();
      }
}