let x = 50;
let y = 50;
let xSpeed = 2;
let ySpeed = 3;
let col = [255, 255, 255];
let acceleration = 1;
let diameter = 50;
let radius = diameter / 2;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  fill(col);
  ellipse(x, y, diameter, diameter);
  
  if (mouseX > width / 2){
    x += xSpeed;
  } else {
    x -= xSpeed;
  }
  
  if (mouseY > height / 2){
    y += ySpeed;
  } else {
    y -= ySpeed;
  }
  
  if (mouseIsPressed){
    xSpeed += acceleration;
    ySpeed += acceleration;
  }
  
  x += xSpeed;
  y += ySpeed;
  
  if (x + radius > width || x - radius < 0){
    xSpeed *= -1;
    col = [random(255), random(255), random(255)];
  }
  
  if (y + radius > height || y - radius < 0){
    ySpeed *= -1;
    col = [random(255), random(255), random(255)];
  }
}
