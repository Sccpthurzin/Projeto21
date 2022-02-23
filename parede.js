class parede {

constructor(x,y,width,height){
    var propriedadesdaparede={
        isStatic:true

    }
this.x=x
this.y=y
this.width=width
this.height=height
this.body=Bodies.rectangle(x,y,width,height,propriedadesdaparede);
World.add(world,this.body);

}
show(){
push();
translate(this.body.position.x,this.body.position.y);

rectMode(CENTER);
fill("red");
rect (0,0,this.width,this.height);

pop();
}

}
