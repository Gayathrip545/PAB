class Pig
{
    constructor(x,y)
    {
        var options={
          restitution:0.8,
          friction:0,
          density:1.0
        }
        this.demo=B.rectangle(x,y,50,50,options);
        
        W.add(myworld,this.demo);
        this.width=50;
        this.height=50;
    }

    display()
    {
        var pos=this.demo.position;
        var angle=this.demo.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER)
        fill("green");
        rect(0,0,this.width,this.height);
        pop();
    }
}   