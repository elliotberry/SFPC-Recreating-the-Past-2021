//This is a static image, so I put everything in the setup
//function instead of the draw function. 

function setup() {
  createCanvas(400, 400);
  background(231, 231, 197);
  //setting the angle mode to degrees instead of radians
  angleMode(DEGREES)
  
  //set text size, and font. 
  //the font, Impact, is inexact. Not the font Pritchard used.
  
  textSize(125);
  textFont("Impact");

  //necessary to use translate 
  translate(100,200);
  rotate(-45);
  
  text("F", 0, 0);
  text("R", 70,0);
  text("O", 0, 110);
  text("G", 70, 110)

  
}

function draw() {
  
}
