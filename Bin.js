class Bin{
    constructor(x, y){
        var options= {
            isStatic: true,
        }
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.body = Bodies.rectangle(this.x, this,y, this.width, this.height, options);
        this.image = loadImage("trashbin.png")
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;

        push();
        translate(this.x, this.y);
        rectMode(CENTER);
        //fill("silver");
        image(this.image, 0, 0, pos.x, pos.y);
        pop();
    }
}