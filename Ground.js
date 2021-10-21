class Ground {
    constructor () {

        var ground_options ={
            isStatic: true
        }
    
        this.ground = Bodies.rectangle(200,390,200,20,ground_options);
        World.add(world,this.ground);

    }

    display () {
         rectMode (CENTER)
        rect(this.ground.position.x,this.ground.position.y,400,20);
    }
}