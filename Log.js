class Log
{
    constructor(x,y,height,angle)
    {
        var options={
            
            restitution:0.5,
            friction:0,
            density:1.0

        }
        this.demo=B.rectangle(x,y,20,height,angle,options);
        
        W.add(myworld,this.demo);
        this.width=20;
        this.height=height;
        Matter.Body.setAngle(this.demo,angle);
    }

    display()
    {
        var pos=this.demo.position;
        var angle=this.demo.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER)
        fill("brown");
        rect(0,0,this.width,this.height);
        pop();
    }
}   