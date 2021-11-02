//Trying to do 2 rectangles in ps.j5 after doing it in Python.
//First time using p5.js

function setup() {
  // put setup code here
  createCanvas(400, 400);
}

function draw() {
  // put drawing code here
  background("white");
  fill("black");
  rect(55, 150, 55, 155);
  noStroke();
  fill("blue");
  rect(300,50, 55,155)
}
