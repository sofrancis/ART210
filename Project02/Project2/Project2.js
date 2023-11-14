let blessed;
let infidel;

function preload(){
  blessed = loadImage('data/blessedfr.png');
  infidel = loadImage('data/infidelfr.png');
}


function setup() {
  createCanvas(1200, 800);
  background(0);
}


function draw() {
  image(blessed, 175, 0, 800, 800);
  image(infidel, 500, 400, 400, 400);
}
