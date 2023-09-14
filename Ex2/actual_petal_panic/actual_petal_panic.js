//array to store flowers
let flowers = [];

function setup() {
  createCanvas(800, 600);
  strokeWeight(2);
}

function draw() {
  background(220);
  
//draws all the flowers
  for(let flower of flowers){
//increase the flower's rotation angle
    flower.angle += 0.02;
    if (flower.type === 'daisy'){
      drawDaisy(flower.x, flower.y, flower.size, flower.angle);
    } else {
      drawTulip(flower.x, flower.y, flower.size, flower.angle);
    }
  }
}

//this is a standard p5.js function called every time a mouse click is registered
function mousePressed() {
  
//create a flower at mouse position
  let flower = {
    x: mouseX,
    y: mouseY,
    size: random(20, 50),
    type: random(1) < 0.5 ? 'daisy' : 'tulip',
    angle: 0
  };
  
//push all the information for a "flower" to function as a flower
  flowers.push(flower);
}

//drawDaisy custom function that draws a Daisy at a specific position, size, and rotation
function drawDaisy(x, y, size, angle){//this part specifies what the function needs to make a daisy
 push(); //save the current transform matrix
 translate(x, y); //move the origin(anchor point) to wherever the flower's position is
 rotate(angle);
 
 fill(255, 255, 0); //yellow
 ellipse(0, 0, size, size) //center
//petals below
 fill(255);
 for (let a = 0; a < TWO_PI; a += PI / 8){
   let px = cos(a) * size / 2;
   let py = sin(a) * size / 2;
//both above are gathering variables for petals, the ellipse draws the petals
   ellipse(px, py, size/2, size/2);
 }
 pop(); //restores normal matrix function
}

function drawTulip(x, y, size, angle){
  push(); //saves the current transform matrix
  translate(x, y); //moves the origin point to wherever the mouse's coordinates are
  rotate(angle); //rotates the image
  
  fill(255, 0, 0);
  for (let a = 0; a < TWO_PI; a += PI / 6) {
  let px = cos(a) * size / 2;
  let py = sin(a) * size / 2;
//both above to get petals
  ellipse(px, py, size / 3, size / 2); //draws petals
  }
  fill(0, 128, 0); //greenish
  rect(0 - size / 20, 0, size / 10, size / 2); //stem

  pop();
}
