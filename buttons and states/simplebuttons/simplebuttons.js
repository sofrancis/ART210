let button;
let button2;

function setup() {
  createCanvas(400, 400);
  
  //change background button
  button = createButton('Change Background');
  button.position(20,20);
  button.mousePressed(changeBG);
  //create circle button
  button2 = createButton('Draw Circle');
  button2.position(20, 50);
  button2.mousePressed(drawCircle);
}

function draw() {
  //since button is created in function setup, it doesn't need anything inside draw
}

function changeBG(){
  //creates random value/color. 'col' stands for color and is a variable specifically made for this code
  let col = color(random(255), random(255), random(255));
  background(col);
}

function drawCircle(){
  fill(random(255), random(255), random(255));
  //first values are coordinates, second are size
  ellipse(random(width), random(height), random(50), random(50));
}
