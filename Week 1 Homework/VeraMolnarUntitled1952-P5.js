let a = 35
function setup() {
  createCanvas(230, 230);
  background(0)
  angleMode(DEGREES)
  rect(30,30,a)
  rect(90,30,a)
  rect(150,30,a)
  
  rect(30, 90, a)
  rect(90, 90, a)
  rect(150, 90,a)
  
  rect(30,150,a)
  rect(150,150,a)
  
  translate(110,170)
  rectMode(CENTER)
  rotate(-4)
  rect(0,0,a)
}

function draw() {
  // put drawing code here
}
