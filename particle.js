class Particle {

	constructor(px,py,rad){
		this.RAD_FREQ = 100;
		this.RAD_RATIO = 3;
		this.pos = createVector(px,py);
		this.radius = rad;
		this.vel = createVector(0,0);
		this.color = createVector(0,0,0);
		this.index = 0;
		this.theta = 1;
		this.trigger;
		this.isDivide = false;
	}

	update(){
		// this.changerad();
		this.basicMove();
		this.pos.add(this.vel);
	}
	draw(){
		fill(0);//カラー指定する
		ellipse(this.pos.x,this.pos.y,this.radius);
	}
	basicMove(){
		this.theta += 0.05;
		this.index += random(0.06);

		this.vel.x = sin(this.theta)*5-1;
		this.vel.y = -exp(this.index)+1;
	}
	changerad(){
		this.trigger = random(0,this.RAD_FREQ);
		if(this.isDivide){
			this.radius /= this.RAD_RATIO;
			this.isDivide = false;
		}
		if(this.trigger == 4){
			this.radius *= this.RAD_RATIO;
			this.isDivide = true;
		}
	}
	//setter
	setPosition(px,py){
		this.pos = createVector(px,py);
	}

	setRadius(rad){
		this.radius = rad;
	}

	setColor(r, g, b){
		this.color = createVector(r, g, b);
	}
	//getter
	getPosition(){
		return this.pos;
	}

	getRadius(){
		return this.radius;
	}

	getColor(){
		return this.color;
	}
}