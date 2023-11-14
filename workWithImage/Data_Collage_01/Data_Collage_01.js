let objects = [];
let objImg = 8;

function preload () {
//preload images with loop
  for (let i = 0; i < objImg; i++){
  objects[i] = loadImage('data/objects/object' + (i + 1) + '.png');
 }
}

function setup() {
  createCanvas(1280, 720);
  noLoop();
}

function draw() {
  background(50, 50, 100);
  
//70% of base height
  let baseHeight = height * 0.7;
  
  for (let i = 0; i < objImg; i ++){
  let object = objects[i];
//  let objectHeight = baseHeight - (i * 20);
  let objectWidth = random(0, width);
  let objectHeight = random(0, height);
  
  object.resize(random(200, 500), random(200, 500));
  
  image(object, 0, objectHeight);
 }
}

function mousePressed() {
  shuffle(objects, true);
  redraw();
}
