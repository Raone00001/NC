class BaseClass {
    constructor(x, y, radius) {
      var paper_options = {
          
        'isStatic':false,
        'restitution':1.2,
        'friction':0.4,
        'density':1

      }

      this.body = Bodies.circle(x, y, radius, paper_options);
      World.add(world, this.body);

    }

    display(){

      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      fill("Hotpink");
      ellipseMode(RADIUS);
      ellipse(0, 0, 25, 25);
      pop();
                                                                                
    }
  }
  