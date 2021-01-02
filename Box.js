class Box
{
    constructor(x,y,width,height)
    {
        var options={
          restitution:0.8,
          friction:0.5,
          density:1.0
        }
        this.demo=B.rectangle(x,y,width,height,options);
        
        W.add(myworld,this.demo);
        this.width=width;
        this.height=height;
    }

    display()
    {
        var pos=this.demo.position;
        var angle=this.demo.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER)
        fill(255);
        rect(0,0,this.width,this.height);
        pop();
    }
}   