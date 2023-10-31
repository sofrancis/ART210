//comments: 
// - fix left size of screen
// - move trees to background (combine in photoshop)
//   - change background is what i'm feeling
// - change sizes of stars
// - add bounce to stars across screen
// - randomize sizes of stars?

let stars = [];
let constellationDrawingLines = [];

let lineDuration = 24 * 60;
let backie;
let pinkstar, redstar, orangestar, greenstar, bluestar, purplestar;
let capricorn, gemini, virgo, taurus, leo, libra;

function preload() {
  backie = loadImage('data/nightskytotal.png');
  treeline = loadImage('data/treeline.png');
  pinkstar = loadImage('data/pinkstar.png');
  redstar = loadImage('data/redstar.png');
  orangestar = loadImage('data/orangestar.png');
  greenstar = loadImage('data/greenstar.png');
  bluestar = loadImage('data/bluestar.png');
  purplestar = loadImage('data/purplestar.png');
  
  capricorn = loadImage('data/capricorn.png');
  gemini = loadImage('data/gemini.png');
  virgo = loadImage('data/virgo.png');
  taurus = loadImage('data/taurus.png');
  leo = loadImage('data/leo.png');
  libra = loadImage('data/libra.png');
}

function setup() {
  createCanvas(1109, 736);

  stars.push({ image: purplestar,  x: 0, y: 25, xSpeed: 2.3});
  stars.push({ image: greenstar,  x: width-201, y: 100, xSpeed: -2.85});
  stars.push({ image: pinkstar,  x: 100, y: 175, xSpeed: 1.2});
  stars.push({ image: bluestar,  x: width-500, y: 250, xSpeed: -4});
  stars.push({ image: redstar,  x: width-350, y: 325, xSpeed: -1.41});
  stars.push({ image: orangestar,  x: 250, y: 400, xSpeed: 6.1});
}

function draw() {
  background(backie);

//resizes and displays stars from array
  for (let star of stars) {
    image(star.image, star.x, star.y, 100, 100);
    star.x += star.xSpeed;

    if (star.x - 25 > width) {
      star.x = -25;
    } else if (star.x + 25 < 0) {
      star.x = width + 25;
    }

//if you clicked on a star, draw constellation
    if (constellationDrawingLines.includes(star)) {
      drawLinesForConstellation(star);
    }
  }
//shows treeline
  image(treeline, 0, 1100-height);
}

function mousePressed() {
  for (let star of stars) {
    //check if the mouse click is inside the star image
    if (
      mouseX >= star.x &&
      mouseX <= star.x + 50 &&
      mouseY >= star.y &&
      mouseY <= star.y + 50
    ) {
//checks/removes star from drawing line array
      if (constellationDrawingLines.includes(star)) {
        const index = constellationDrawingLines.indexOf(star);
        constellationDrawingLines.splice(index, 1);
      } else {
        constellationDrawingLines.push(star);
      }

      setTimeout(() => {
        const index = constellationDrawingLines.indexOf(star);
        if (index !== -1) {
          constellationDrawingLines.splice(index, 1);
        }
      }, lineDuration);
    }
  }
}

//displays images depending on what star is clicked on (randomize?)
function drawLinesForConstellation(star) {
  if (star.image === purplestar) {
    image(capricorn, 200, 0);
  } else if (star.image === greenstar) {
    image(gemini, 200, 0);
  } else if (star.image === pinkstar) {
    image(leo, 200, 0);
  } else if (star.image === bluestar) {
    image(libra, 200, 0);
  } else if (star.image === redstar) {
    image(taurus, 200, 0);
  } else if (star.image === orangestar) {
    image(virgo, 200, 0);
  }
}
