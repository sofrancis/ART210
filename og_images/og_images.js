let song = [];
let currentSong = 0;
let angle = 0;
let rpImg;

function preload(){
 rpImg = loadImage('data/record_player.png'); 
 song[0] = loadImage('data/cdNJ.png')
 song[1] = loadImage('data/cdA.png')
}

function setup() {
  createCanvas(rpImg.width, rpImg.height);
  image(rpImg, 0, 0);
  imageMode(CENTER);
}

function draw() {
  
  fill(50);
  noStroke();
  circle(308.5, 306, 175);
  
  fill(20);
  noStroke();
  circle(308.5, 306, 20);

  translate(308.5, 306);
  rotate(angle);
  image(song[currentSong], 0, 0, 600, 600);
  angle += 0.02;
}

function mousePressed(){
  currentSong = (currentSong + 1) % song.length;
}
