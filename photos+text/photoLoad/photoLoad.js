let img;

function preload(){
 img = loadImage('data/swimming_pool.png'); 
}

function setup() {
  //img function will draw from original size, have to manually imput values if image is resized
  createCanvas(600, 400);
  background(220);
  
  img.resize(600, 400);
  image(img, 0, 0);
  
  let croppedImg = img.get (0, 0 , 100, 100);
  image (croppedImg, 250, 0);
  
  //text
  fill(50);
  textSize(32);
  text('Your Text Here', 10, 50);
  
}

function draw() {
  
  let tintVal = map(mouseX, 0, width, 0, 255);
  tint(255, tintVal);
  image(img, 0, 0);
  //if the mouse is on the canvas, code can be run
  if (mouseX > 0 && mouseX < width && mouseY < 0 && mouseY < height){
      fill(255, 0, 0);
      textSize(24);
      text('Hovering over image', width/2, height/2);
  }
}
