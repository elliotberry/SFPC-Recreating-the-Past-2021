//First, I set the x position of the text in a variable, so that I can change it's value later in increments 

//I put everything in setup since I am drawing a static image, and drawing it in the draw function will just create problems

//I tried to replicate the faded affect of the page
//with the background canvas color. 



function setup() {
  createCanvas(400, 400);
  background(231, 231, 197)
  
  textSize(15);
  textFont("Georgia");
  
   for (let i = 0; i <= width+10; i += 6){
     for (let j = 0; j <=height+10; j += 13){
    text("1",i,j)
    
     }
   }
}
    
function draw() {}
  //background(220);
 
  
  
