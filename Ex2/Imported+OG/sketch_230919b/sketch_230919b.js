let angle = 0.0;
let rpImg;
let cdImgNJ;
let cdImgA;

function preload(){
 rpImg = loadImage('data/record_player.png'); 
 cdImgNJ = loadImage('data/cd2.png')
 cdImgA = loadImage('data/cd3.png')
}

function setup() {
  createCanvas(rpImg.width, rpImg.height);
  image(rpImg, 0, 0);
}

function draw() {
  fill(50);
  noStroke();
  circle(308.5, 306, 175);
  
  fill(20);
  noStroke();
  circle(308.5, 306, 20);

  let c = cos(angle);
  //move the shape to the center of the canvas
  translate(width / 2, height / 2);
  //apply the final rotation
  rotate(c);
  image(cdImgNJ, 300, 300);
}
