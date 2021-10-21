class Box {
    constructor (x,y,width,height) {

        var ball_options ={
            'restitution':0.8, 
            'friction':0.3,
            'density':1.0
        }
        
        this.ball = Bodies.rectangle(x,y,width,height, ball_options);
        this.w = width 
        this.h = height
        World.add(world,this.ball);
    }

    display () {
        var pos =this.ball.position;
         var angle = this.ball.angle; push();
          translate(pos.x, pos.y); 
          rotate(angle); 
          rectMode(CENTER); 
          fill(255); rect(0, 0, this.w, this.h); 
          pop();
    }
}
