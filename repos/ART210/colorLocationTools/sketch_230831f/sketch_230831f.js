
let img; 
let points = [];

function preload(){
  img = loadImage('stadia2edit.png');
}

function setup() {
  createCanvas(400, 400);
  image(img, 0, 0);
}

function draw() {
  for (let point of points) {
    fill(point.r, point.g, point.b);
    stroke(255);
    strokeWeight(1);
    ellipse(point.x, point.y, 10);
  }
}

function mouseClicked() {
  if(mouseX < img.width && mouseY < img.height){
    let c = get(mouseX, mouseY);
    let r = red(c);
    let g = green(c);
    let b = blue(c);
    
   console.log(`x: ${mouseX}, y: ${mouseY}, R: ${r}, G: ${g}, B: ${b}`);
   
   points.push({x: mouseX, y: mouseY, r: r, g: g, b: b});
  }
 }
 
