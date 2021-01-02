class Bird
{
    constructor(x,y)
    {
        var options={
            density:1.5,
            friction: 1.0,
            restitution:0.5
        }
        this.demo=B.rectangle(x,y,50,50,options);
        
        W.add(myworld,this.demo);
        this.width=50;
        this.height=50;
    }

    display()
    {
        var pos=this.demo.position;
        pos.x=mouseX;
        pos.y=mouseY;
        var angle=this.demo.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER)
        fill("red");
        rect(0,0,this.width,this.height);
        pop();
    }
}   