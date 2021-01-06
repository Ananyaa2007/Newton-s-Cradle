class Ball  {
    constructor(x,y,radius)   {
        var options = {
            restitution: 0.3,
            density: 1.2,
            friction: 0.5,
        }
        this.radius = radius;
        //this.diameter = diameter;
        this.body = Bodies.circle(x,y,radius,options);
        World.add(world,this.body);
    }
        display()   {
            push();
            var pos = this.body.position;
            var radius = this.radius;
            translate(pos.x,pos.y);
            ellipseMode(RADIUS);
            fill("purple");
            stroke("black");
            strokeWeight(7);
            ellipse(0,0,radius,radius);
            
            pop();
        }
    }