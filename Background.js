let particles = [];
let time_appear = [];

function display_background(coordX, coordY){
	push()
	fill(0, 20, 31);
	strokeWeight(0);
	rect(-coordX-game_Width/2, -coordY-game_Height/2, game_Width*2, game_Height*2);
	if(particles.length==0){
		for(let i=3;i<=255;i+=3){
			particles.push([random(-game_Width/8, game_Width*9/8), random(-game_Height/8, game_Height*9/8)]);
			time_appear.push(i);
		}
	}
	else{
		for(let i=0;i<=84;i++){
			time_appear[i]-=3;
			if(time_appear[i]==0){
				time_appear.splice(i, 1);
				particles.splice(i, 1);
			}
		}
		time_appear.push(255);
		particles.push([random(-game_Width/8, game_Width*9/8), random(-game_Height/8, game_Height*9/8)]);
	}
	for(let i=0;i<=84;i++){
		push()
		let col = color(255);
		col.setAlpha(time_appear[i]);
		fill(col);
		square(particles[i][0]-cameraX, particles[i][1]-cameraY, 10);
		pop()
	}
	pop()
}