//at least 1024 by 768 (CHECK)
//at least three variables (CHECK)
//two unique states (CREATE BUT COVERED)
//two variables must be an array or a string (CHECK)
//any extra content (drawings, sketches, color swatches, etc. submitted in a text doc
//1-2 sentence statement for project that gives contect to the piece

//have a spotify player
//same code from imported + og for spinning and array
let song = [];
let currentSong = 0;
let angle = 0.0;

function preload(){
 song[0] = loadImage('data/twopointfive.png');
 song[1] = loadImage('data/istj.png');
 song[2] = loadImage('data/yours_truly.png');
 song[3] = loadImage('data/portals.png');
 song[4] = loadImage('data/munekita.png');
}

function setup() {
  createCanvas(800, 1030);  
}

function draw() {
  image(
  
  translate(400, 250);
  rotate(angle);
  image(song[currentSong], -175, -175, 350, 350);
  angle += 0.02;
}

function mousePressed(){
 currentSong = (currentSong + 1) % song.length; 
}
