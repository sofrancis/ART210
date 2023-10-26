//- Set night sky as background (CHECK)
//- Get stars to bounce from side to side off-screen (switched to looping) (LETS GOOOOO)
//- Make each star a button that when clicked on, displays stars in the night sky 
//temporarily (THIS SHOULD BE WORKING)
//    - Constellations will be pushed n popped afterwards or use if/then (SLAY)
//    - Have them as similar pngs with names (add names, drawing lines + dots instead,
//also include text for names nearby that disappears as well)

// could also randomize which constellation is created but rn they're not showing up
//dicks


let stars = [];
let starsDrawingLines = [];

let lineDuration = 4 * 60;
let x = 20;
let y = 50;
let xSpeed = 1.3;
let radius = 25; 

let backie; 
let treeline;
//define all variables + array for stars

function preload() {
  backie = loadImage('data/nightsky.png');
  treeline = loadImage('data/treeline.png');
  
  pistar = loadImage('data/pinkstar.png');
  rstar = loadImage('data/redstar.png');
  ostar = loadImage('data/orangestar.png');
  gstar = loadImage('data/greenstar.png');
  bstar = loadImage('data/bluestar.png');
  pstar = loadImage('data/purplestar.png');
//preload all images
  
}

function setup() {
//creates canvas that is the same width and height as night sky image
  createCanvas(1109, 736);

//resize treeline so it's in the picture
  treeline.resize(500, 700);
  
//if value is negative, goes from right to left
  stars.push({ image: pstar,  x: 0, y: 50, xSpeed: 2.3});
  stars.push({ image: gstar,  x: width-201, y: 150, xSpeed: -2.85});
  stars.push({ image: pistar,  x: 100, y: 300, xSpeed: 1.2});
  stars.push({ image: bstar,  x: width-500, y: 350, xSpeed: -4});
  stars.push({ image: rstar,  x: width-350, y: 450, xSpeed: -1.41});
  stars.push({ image: ostar,  x: 250, y: 600, xSpeed: 6.1});
}

function draw() {
  background(backie);
//constantly rewrite background to prevent conveyor line

  image(treeline, 500, 730);
//can't see?

  for (let star of stars) {
    image(star.image, star.x, star.y, 50, 50);
    star.x += star.xSpeed;
//make stars float across sky

  if (star.x - radius > width) {
    star.x = -radius;
  } else if (star.x + radius < 0) {
    star.x = width + radius;
//keep flying across screen

    if (starsDrawingLines.includes(star)) {
      drawLinesForStar(star);
//is star "drawing"?
   }
  }
 }
}

function mousePressed() {
  for (let star of stars) {
    let d = dist(mouseX, mouseY, star.x + 25, star.y + 25); 
    if (d < 25) {
      starsDrawingLines.push(star);
//star's been clicked, draw lines

     setTimeout(() => {
       const index = starsDrawingLines.indexOf(star);
       if (index !== -1) {
         starsDrawingLines.splice(index, 1);
//makes star disappear  from lines after 4 seconds (thank you chat)
        }
      }, lineDuration);
      break; 
// exit the loop if a star is clicked
    }
  }
}

function drawLinesForStar(star) {
  if (star.image === pstar) {
    line(100, 100, 300, 300);
    stroke(0, 0, 255);
  } else if (star.image === gstar) {
    line(200, 200, 400, 400); 
  } 
}
//you right here are not working you whore, the all-knowing machine even approved it wtf
