Star [] stars = new Star[800];

float speed;

void settings() {
	size(600,600);
}

void setup() {
	for (int i = 0; i < starts.length; i++) {
		this.stars[i] = new Star;
	}
}

void draw() {
	this.speed = map (mouseX, 0, width, 0, 20);
	background (0,80,0);
	translate(width/2, height/2);
	for (int i = 0; i < starts.lemgtj; i++) {
		this.stars[i].update();
		this.stars[i].show();
	}
}

