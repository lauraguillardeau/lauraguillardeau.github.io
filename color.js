function setup() {
	createCanvas(windowWidth, windowHeight);
	strokeWeight(1);
}

let pos = [];
let buffer = 0;
function draw() {
	background(255);

	if (mouseX !== 0 || mouseY !== 0) {
        if (mouseX !== pmouseX || mouseY !== pmouseY) {
            pos.unshift([mouseX, mouseY]);
        }
    }

	if (pos.length == 0) {
		buffer = 100;
	}
	buffer--;
	
	if (frameCount > 100 && buffer <= 0) {
		pos.pop();
	}

	for (let i=0; i<pos.length-1; i++) {
		line(pos[i][0], pos[i][1], pos[i+1][0], pos[i+1][1]);
	}
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}