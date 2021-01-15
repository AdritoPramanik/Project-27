class Rope{
    constructor(body1, body2, offsetX, offsetY){
        offsetX = this.offsetX;
        offsetY = this.offsetY;
        var options={
            bodyA:body1, 
            bodyB:body2,
            pointB:{x:offsetX, y:offsetY}
            }
            this.rope=Constraint.create(options);
            World.add(world, this.rope);
    }
    display(){
        var pointA=this.rope.bodyA.position;
        var pointC=this.rope.bodyB.position;
        strokeWeight(3);

        line(pointA.x, pointA.y, pointC.x, pointC.y);

    }
}