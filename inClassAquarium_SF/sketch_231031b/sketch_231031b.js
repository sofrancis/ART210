let starImages = []; // Array to store multiple star images
let stars = [];

function preload() {
  // Load multiple star images
  starImages.push(loadImage('data/purplestar.png'));
  starImages.push(loadImage('data/redstar.png'));
  starImages.push(loadImage('data/greenstar.png'));
  // Add more images as needed
}

function setup() {
  createCanvas(720, 400); // Create the canvas inside setup()
  noStroke();
  frameRate(30);
  ellipseMode(RADIUS);

  // Define the boundaries of the bouncing area
  let boundaryX = 50;
  let boundaryY = 50;
  let canvasWidth = width - boundaryX;
  let canvasHeight = height - boundaryY;

  // Create multiple star objects with different properties
  for (let i = 0; i < starImages.length; i++) {
    let star = {
      image: starImages[i],
      xpos: random(boundaryX, canvasWidth),
      ypos: random(boundaryY, canvasHeight),
      xspeed: random(1, 4),
      yspeed: random(1, 4),
      xdirection: 1,
      ydirection: 1,
    };
    stars.push(star);
  }
}

function draw() {
  background(102);

  for (let star of stars) {
    // Update the position of the star
    star.xpos = star.xpos + star.xspeed * star.xdirection;
    star.ypos = star.ypos + star.yspeed * star.ydirection;

    // Test to see if the star exceeds the boundaries of the bouncing area
    if (star.xpos > canvasWidth - rad || star.xpos < rad) {
      star.xdirection *= -1;
    }
    if (star.ypos > canvasHeight - rad || star.ypos < rad) {
      star.ydirection *= -1;
    }

    // Draw the star using its image and position
    image(star.image, star.xpos, star.ypos, 60, 60); // Adjust the width and height as needed
  }
}
