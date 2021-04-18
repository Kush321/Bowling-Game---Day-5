class Pin{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			restitution :0,
            friction :1,
            density:1.2
			}
		this.x=x;
		this.y=y;
		this.r=r;
		this.image=loadImage("images/bowlingpin.png");
		this.Visiblity = 255;
		this.body=Bodies.circle(this.x, this.y, this.r, options);
		World.add(world, this.body);
	}

	display()
	{
		var stonePos=this.body.position;	
		push()
		if(this.body.speed>0.1){
		World.remove(world,this.body);
		this.Visiblity = this.Visiblity - 255;
     	tint(255,this.Visiblity);
		}
		translate(stonePos.x, stonePos.y);
		//rectMode(CENTER);
		rotate(this.body.angle)
		fill(255,0,255)
		imageMode(CENTER);
		ellipseMode(CENTER);
		image(this.image, 0,0,this.r*2, this.r*2)
		pop()
 }
 score(){
    if (this.Visiblity < 250 && this.Visiblity > -1){
      score=score+1;
	  console.log("gsf");
    }
  }
}