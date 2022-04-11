let d = 10;
let th = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  noCursor();
}

function draw() {
  background(170,0,0);
  angleMode(DEGREES);
  
  translate(width / 2, height / 2);
  stroke(200,50,20);
  strokeWeight(3);
  for (let i = 0; i < width+200; i += 10) {
      circle(0, 0, i);
    }

  th = th+6.5;
  d = d+0.02;
  let x = d * cos(th);
  let y = d * sin(th);
  let s = map(mouseY, 0, height, 0.3, 1);

  translate(mouseX-width/2, mouseY-height/2) 
  scale(s);
  stroke(0,100,50);
  strokeWeight(3);
   for (let i = 0; i < width/2; i += 10) {
      ellipse(x, y, i);
    }
}

function windowResized () {
resizeCanvas (windowWidth , windowHeight)
}