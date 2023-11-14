let objectImages = [];
let placeImages = [];

let gridSize = 5;
let showObjects = false;

let lastUpdateTime = 0;
let updateInterval = 1000;

let grid = [];

function preload(){
  for (let i = 1; i < 9; i++){
  objectImages.push(loadImage('data/objects/object' + i + '.png'));
 }
  for (let i = 1; i < 11; i++){
  placeImages.push(loadImage('data/places/place' + i + '.png')); 
  }
}

function setup() {
  createCanvas(800, 800);
  initGrid();
//if anything is told to redraw/rerender, it can redo the setup as well so that the
//setup stays as-is
}


function draw(){
  let currentTime = millis();
  if (currentTime - lastUpdateTime > updateInterval){
    updateSingleImage();
    lastUpdateTime = currentTime;
  }
  displayGrid();
}

function initGrid(){
  let images = showObjects ? objectImages : placeImages;
  for (let x = 0; x < gridSize; x++){
    grid[x] = [];
    for (let y = 0; y < gridSize; y++){
      grid[x][y] = random(images);
  }
 }
}

function updateSingleImage(){
  let images = showObjects ? objectImages : placeImages;
  let x = int(random(gridSize));
  let y = int(random(gridSize));
  grid[x][y] = random(images);
}

function displayGrid(){
  let cellWidth = width / gridSize;
  let cellHeight = height / gridSize;

  for (let x = 0; x < gridSize; x++) {
    for (let y = 0; y < gridSize; y++) {
      image(grid[x][y], x * cellWidth, y * cellHeight, cellWidth, cellHeight);
   }
  }
}

function mousePressed() {
  showObjects = !showObjects;
//! means not, so don't show objects when the mouse is pressed
  updateGrid();
}

function updateGrid(){
  let images = showObjects ? objectImages : placeImages;
  for (let x = 0; x < gridSize; x++){
    for (let y = 0; y < gridSize; y++) {
      grid[x][y] = random(images);
  }
 }
}
