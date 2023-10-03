let circleColor;

function setup() {
  createCanvas(800, 800);
  circleColor = color(100, 150, 255);
}


function draw() {
  background (220);
  
  fill(circleColor);
  noStroke();
  ellipse(mouseX, mouseY, 50, 50);
}

//both of these create a bolion (on/off)
function mousePressed() {
 circleColor = color(255, 100, 150); 
}

function mouseReleased() {
  circleColor = color(100, 150, 255);
}
