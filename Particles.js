class Particles{
    constructor(x,y,r){
        var options= {
            restitution: 1,
            friction: 0,
            isStatic:false
        }
        this.r=r;
        this.x=x;
        this.y=y;
        this.particle = Bodies.circle(x,y,r,options);
        this.color= color(random(0,255), random(0,255), random(0,255));
        World.add(world,this.particle);
    }

    display(){
      //  fill(random(0,255), random(0,255), random(0,255));
   var pos= this.particle.position;
   var angle=this.particle.angle;
   push()
   translate(pos.x,pos.y);
   rotate(angle);
   fill(this.color);
   ellipseMode(RADIUS);
   ellipse(0,0,this.r,this.r);
   pop();
       
    }
}