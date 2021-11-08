//Made using the p5.js web editor
//Standing link: https://editor.p5js.org/lllyyybbb/sketches/zQg_FMtgY

let time = 0

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  angleMode(DEGREES);
  colorMode(RGB)
}



function draw() {
  //time = time +1
  background(219,183,50);
  noFill()
  
  stroke(29, 64, 73)
  let phase = 0
  time = time + .50
  
  
  square(
  200 + (100 * sin(phase + 4*time)), // X position,
  200 + (100 * cos(phase + 3*time)), // Y position
  50 + (50 * sin(time)))
  
  phase = 10
  square(
  180 + (100 * sin(phase + 4*time)), // X position,
  180 + (100 * cos(phase + 3*time)), // Y position
  40 + (50 * sin(time)))
  
  phase = 20
  square(
  160 + (100 * sin(phase+ 4*time)), // X position,
  160 + (100 * cos(phase+ 3*time)), // Y position
  35 + (50 * sin(time)))
  
  phase = 30
  square(
  140 + (100 * sin(phase+4*time)), // X position,
  140 + (100 * cos(phase+3*time)), // Y position
  30 + (50 * sin(time)))
  
  phase = 40
  square(
  120 + (100 * sin(phase + 4*time)), // X position,
  120 + (100 * cos(phase + 3*time)), // Y position
  20 + (50 * sin(time)))
  
  phase = 50
  square(
  100 + (100 * sin(phase + 4*time)), // X position,
  100 + (100 * cos(phase + 3*time)), // Y position
  10 + (50 * sin(time)))
  
  phase = 60
  square(
  120 + (100 * sin(phase+4*time)), // X position,
  120 + (100 * cos(phase+3*time)), // Y position
  20 + (50 * sin(time)))
  
  phase = 70
  square(
  140 + (100 * sin(phase+4*time)), // X position,
  140 + (100 * cos(phase+3*time)), // Y position
  30 + (50 * sin(time)))

  
  phase = 80
  square(
  160 + (100 * sin(phase+4*time)), // X position,
  160 + (100 * cos(phase+3*time)), // Y position
  40 + (50 * sin(time)))
  
   phase = 90
  square(
  180 + (100 * sin(phase+4*time)), // X position,
  160 + (100 * cos(phase+3*time)), // Y position
  50 + (50 * sin(time)))
  
  
  //attempt at starting this elsewhere on the canvas
  
   square(
  400 + (400 * sin(phase + -4*time)), // X position,
  400 + (400 * cos(phase + -3*time)), // Y position
  50 + (50 * sin(time)))
  
  phase = 10
  square(
  380 + (400 * sin(phase + -4*time)), // X position,
  380 + (400 * cos(phase + -3*time)), // Y position
  40 + (50 * sin(time)))
  
  phase = 20
  square(
  360 + (400 * sin(phase+ 4*time)), // X position,
  360 + (400 * cos(phase+ 3*time)), // Y position
  35 + (50 * sin(time)))
  
  phase = 30
  square(
  340 + (400 * sin(phase+4*time)), // X position,
  340 + (400 * cos(phase+3*time)), // Y position
  30 + (50 * sin(time)))
  
  phase = 40
  square(
  320 + (400 * sin(phase + 4*time)), // X position,
  320 + (400 * cos(phase + 3*time)), // Y position
  20 + (50 * sin(time)))
  
  phase = 50
  square(
  300 + (400 * sin(phase + 4*time)), // X position,
  300 + (400 * cos(phase + 3*time)), // Y position
  10 + (50 * sin(time)))
  
  phase = 60
  square(
  280 + (400 * sin(phase+4*time)), // X position,
  280 + (400 * cos(phase+3*time)), // Y position
  20 + (50 * sin(time)))
  
  phase = 70
  square(
  260 + (400 * sin(phase+-4*time)), // X position,
  260 + (400 * cos(phase+-3*time)), // Y position
  30 + (50 * sin(time)))
  //time = time +1
  
  phase = 80
  square(
  240 + (400 * sin(phase+-4*time)), // X position,
  240 + (400 * cos(phase+-3*time)), // Y position
  40 + (50 * sin(time)))
  
   phase = 90
  square(
  220 + (400 * sin(phase+4*time)), // X position,
  220 + (400 * cos(phase+3*time)), // Y position
  50 + (50 * sin(time)))


//other squares
  stroke(87, 193, 219)
  square(
  100 + (100 * sin(2*time)), // X position,
  100 + (100 * cos(time)), // Y position
  50 + (50 * sin(time)))

 square(
  300 + (100 * sin(-2*time)), // X position,
  300 + (100 * cos(time)), // Y position
  50 + (50 * sin(time)))

stroke(18, 19, 219)
  square(
  100 + (200 * sin(-4*time)), // X position,
  300 + (250 * cos(-3*time)), // Y position
  50 + (50 * sin(time)))
  
  stroke(18, 19, 219)
  square(
  100 + (200 * sin(3*time)), // X position,
  400 + (50 * cos(4*time)), // Y position
  50 + (50 * sin(time)))
  
    stroke(255)
  square(
  150 + (200 * sin(3*time)), // X position,
  350 + (50 * cos(4*time)), // Y position
  25 + (50 * sin(15*time)))
  
  stroke(255)
  square(
  350 + (200 * sin(3*time)), // X position,
  50 + (50 * cos(4*time)), // Y position
  25 + (50 * sin(15*time)))
  
   stroke(255)
  square(
  50 + (400 * sin(3*time)), // X position,
  50 + (50 * cos(4*time)), // Y position
  25 + (50 * sin(15*time)))
  
   stroke(255)
  square(
  400 + (400 * sin(3*time)), // X position,
  350 + (50 * cos(4*time)), // Y position
  25 + (50 * sin(15*time)))
  
}
