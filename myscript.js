//--------------Particleクラス定義-----------------------
class Particle {
	constructor(px,py,rad){
		this.RAD_FREQ = 100;
		this.RAD_RATIO = 3;
		this.pos = createVector(px,py);
		this.radius = rad;
		this.vel = createVector(0,0);
		this.color = createVector(100,100,100);
		this.index = 0;
		this.theta = 1;
		this.trigger;//int
		this.isDivide = false;//bool
	}
	update(){
		// this.changerad();
		this.basicMove();
		this.pos.add(this.vel);
	}
	draw(){
		fill(this.color.x,this.color.y,this.color.z);
		noStroke();
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








var  particle = [];
var ColorTypeNum = 4;
var colorTrigger;
function setup(){
	canvas = createCanvas(windowWidth,windowHeight);
	canvas.parent("canvas");
}

function draw(){
	background(248,251,248);
	for(var i = particle.length;i < 600;i++){//前フレームで消された分のparticleを補充する
        particle.push(new Particle(random(windowWidth),random(windowHeight*3/2),random(3.0,6.0)));
        colorTrigger = int(random(ColorTypeNum))+1;
        switch (colorTrigger) {
            case 1:
                particle[i].setColor(128,128,0);
                break;
            case 2:
                particle[i].setColor(255,255,0);
                break;
            case 3:
                particle[i].setColor(26,26,0);
                break;
            case 4:
                particle[i].setColor(255,128,0);
                break;
        }
    }
    for(var i = 0;i < particle.length;i++){
        particle[i].update();
        particle[i].draw();
        if(particle[i].getPosition().y < 0){//画面の外に出たパーティクルは削除する
                particle.splice(i,1);
        }
    }
}
function windowResized(){
	resizeCanvas(windowWidth,windowHeight);
}