//arrays for images of infidels shown
let infidelImg = [];
//arrays for all the sins of individual infidels
let goodie = ['- Decapitation\n- Infidelity', '- Filthy conversation\n- Fratercide', '- Not correcting children\n- Excessively lustful', '- Unnatural beauty\n- Cannibalism', '- Killed a parent \n- Returned an insult', '- Wrathful\n- Rudeness', '- Judges others unfairly\n- Youthful lust', '- Overindulging\n- Enslaved to their passions', '- Stubborness\n- Refusing to die for others', '- Seeking riches\n- Sorceries'];
let baddie = ['- Unclean\n- Accepting bribes', '- Sloth\n- Urging others to violence', '- Complaining about nothing\n- Devious', '- Threatening children\n- Busybody', '- Cursing innocents\n- Became a cult leader', '- Tempting others\n- Blinding a child', '- Falsely convicted another\n- Covetous', '- Not submitting to a law\n- Greedy', '- Envious\n- Vain'];

let allInfidels = shuffle(goodie.concat(baddie)); //shufles goodies and baddies together
let currentInfidel; //defines the current infidel as a variable

let score = 0; //sets score to zero
let decisionsMade = 0; //sets the amount of decisions made to zero

let progressBarDiameter; //sets the progress bar as a variable

//images for winning, losing, and the white figure displayed while playing
let winner;
let loser;
let blessed;

let choices; //image that contains the bless and reject buttons
let rating; //image that contains the progress bar

//button to restart game
let restartButton;

//variable to hide progress bar once the game is over
let gameOver = false;

let video; //variable to capture webcam feed
let targetColor; //array that represents the target color that is being tracked
let blessBox; //object that represents the initial position/dimensions of a box that "blesses"
let rejectBox; //object that represents the initial position/dimensions of a box that "blesses"

//makes the width of the box the radius of a circle 
let blessCircleRadius;
let rejectCircleRadius;

let smoothedX = 610;
let smoothedY = 320;
let easing = 0.05;

//distance to the bless/reject circles
let distanceToBlessCircle;
let distanceToRejectCircle;

//selectively show/hide code
let showVideo = true;
let isMousePressedEnabled = true;




function preload(){
//preload background image and fancy circles
  blessed = loadImage('data/blessedfr.png');
  choices = loadImage('data/choices.png');
  rating = loadImage('data/fillin.png');
  winner = loadImage('data/superblessed.png');
  loser = loadImage('data/otherblessed.png');
  superloser = loadImage('data/notblessed.png');

//array of infidel images
  infidelImg[0] = loadImage('data/infidels/infidelfr.png');
  infidelImg[1] = loadImage('data/infidels/purpleinfidel.png');
  infidelImg[2] = loadImage('data/infidels/blueinfidel.png');
  infidelImg[3] = loadImage('data/infidels/greeninfidel.png');

  randomInfidelIndex = floor(random(infidelImg.length)); //displays a random infidel image
}




function setup() {
  try {
  createCanvas(1200, 1024); //creates canvas
  video = createCapture(VIDEO); //creates video capture  
  video.size(width, height);
  targetColor = [255, 0, 0];
  video.hide();
  
  //sets boudaries for the bless/reject areas
  blessBox = {x: 110, y: 600, w: 230, h: 230}; //dimensions of the blessBox
  rejectBox = {x: 110, y: 804, w: 230, h: 230}; //dimensions of the rejectBox
  
  //uses boundaries set for areas to set radii to make the boxes circles
  blessCircleRadius = blessBox.w / 2;
  rejectCircleRadius = rejectBox.w / 2;
  
  
  initializeInfidels();//sets up infidels  
  
  restartButton = createButton('Continue\nPenance?'); //creates button that reads "Continue Penance?"
  restartButton.size(145, 80); //button size
  restartButton.position(900, 400);
  restartButton.style('background-color', '#00000000'); //sets background of the button to transparent
  restartButton.style('border', '#000000'); //sets border of the button to transparent
  restartButton.style('font-family', 'Fondamento'); //sets font to Fondamento
  restartButton.style('font-size', '60px'); //font size
  restartButton.style('color', '#FFFFFF'); //white
  restartButton.hide(); //hides button
  restartButton.mousePressed(resetButtonPressed); //resets game when pressed
  
  progressBarDiameter = 200; //sets max size of the progress bar to 200 pixels
  currentInfidel = allInfidels.pop();
  
  } catch (error) {
  console.error('Setup Error', error);//sends error message to developer console if code doesn't work
  }
}




function reset(){
  restartButton.hide(); //hides the reset button
  
  score = 0; //resets score back to zero
  decisionsMade = 0; //resets decisions back to zero
  initializeInfidels(); //sets up infidels again  
  
  gameOver = false; //displays progress bar again
  progressBarDiameter = 200; //resets progress bar to "zero"
  currentInfidel = allInfidels.pop(); //resets infidels
  
  showVideo = true;
  isMousePressedEnabled = true;

  loop(); //begins draw function
}

function miniReset() {
  smoothedX = 610;
  smoothedY = 320;
  targetColor = [255, 0, 0];
}

function resetButtonPressed() {
  reset(); //executes the reset function above when the reset button is clicked on
  miniReset();
}





function initializeInfidels() {
  allInfidels = shuffle(goodie.concat(baddie)); //reshuffles baddies/goodies
}




function draw() {
  try {
  background(255); //sets the color of the background to black
  noStroke();
  
  image(blessed, 0, 0); //displays the main shape cloaked in white
  image(infidelImg[randomInfidelIndex], 400, 475, 500, 550); //displays an image of an infidel
  image(choices, 30, 520); //displays the top circle containing the bless button
  image(choices, 30, 725); //displays the bottom circle containing the reject button
  choices.resize(160, 160); //resizes the circles containing the bless/reject buttons
  
  image(rating, 850, 250); //displays the circle containing the progress bar
  rating.resize(300, 300); //resizes the circle containing the progress bar
  
  //top text
  fill(255); //white
  textSize(85); //text size
  text('Pr  tect th   In  oce  ts', 220, 135); //displayed text

  //lil mystery message
  textSize(86); //text size
  fill(225, 0, 0); //red
  text('o', 305.1, 135.4); //displayed letter
  text('e', 578, 135.4); //displayed letter
  text('n', 712, 135.4); //displayed letter
  text('n', 877, 135.4); //displayed letter
  
  //text to explain controls
  fill(178, 109, 53); //dark tan
  textSize(23); //text size
  text('Forgive Infidel', 35, 705); //displays the text "Raise Hand"
  text('Reject Infidel', 40, 908); //displays the text "Lower Hand"
  text(`Decisions: ${decisionsMade}/10`, 918, 580); //displays the amount of decisions left

  //bottom instruction text controls
  fill(115, 124, 80); //mild green  
  textLeading(20);
  text('Click on a clearly distinguishable\n                                object in view.', 850, 900);
  text('Move said object to the\n         red or green areas.', 950, 960);
  
  
  //displays text for sins (color, size, spacing)
  fill(115, 124, 80); //mild green
  textSize(35); //text size
  textLeading(40); //vertical text spacing
  text(`${currentInfidel}`, 50, 350); //displays the current infidel's sins

  //white text for sins and sentencing
  fill(255); //white
  textSize(60); //text size
  text('Sins: \n\n\n\n\nSentencing:', 30, 300); //displayed text  
  textFont('Fondamento'); //sets font for all texy
  
  //"button" areas that activate the bless/reject infidel functions
  fill(0, 64, 13); //dark green
  ellipse(blessBox.x, blessBox.y, blessCircleRadius, blessCircleRadius); //bless circle
  fill(64, 0, 0); //dark red
  ellipse(rejectBox.x, rejectBox.y, rejectCircleRadius, rejectCircleRadius); //reject circle
  
    //decision dot
  fill(255); //white
  noStroke(); //no stroke
  ellipse(smoothedX, smoothedY, 20, 20);
  
  checkGameStatus(); //check game status 
  displayProgressBar(); //I'd like to think it's self-explanatory  

  updatePosition(); //updates position
  
  if (showVideo) {
  tint(255, 102);
  image(video, 0, 0, width, height); //display video feed
  noTint();
  }
  
  let distanceToBlessCircle = dist(smoothedX, smoothedY, blessBox.x, blessBox.y);
  let distanceToRejectCircle = dist(smoothedX, smoothedY, rejectBox.x, rejectBox.y);
  
  
  if (distanceToBlessCircle < blessCircleRadius - 5){ //if the distance of the white circle is five pixels less than the radius of the bless circle, execute the blessInfidels function
    blessInfidels();
  }
  
   if (distanceToRejectCircle < rejectCircleRadius - 5){ //if the distance of the white circle is five pixels less than the radius of the bless circle, execute the rejectInfidels function
    rejectInfidels();
  }
  
  } catch (error) {
    console.error('Draw error', error); //sends error message to developer console if code doesn't work
  }
  
}


function updatePosition() {
  try{
//average position of pixels that match a condition
  let avgX = 0;
  let avgY = 0;
  let count = 0;
  
  video.loadPixels();//loads pixels into frame
  for (let y = 0; y < video.height; y++) {
    for (let x = 0; x < video.width; x++) {
      const index = (x + y * video.width) * 4; //calculates the index of the current pixel
      //rgb values of each pixel
      let r = video.pixels[index + 0];
      let g = video.pixels[index + 1];
      let b = video.pixels[index + 2];
      //distance between the selected pixel and the target color
      let d = dist(r, g, b, red(targetColor[0]), green(targetColor[1]), blue(targetColor[2]));
      //if pixel is below a certain threshold
      if (d < 50) {
        avgX += x;
        avgY += y;
        count++;
   }
  }
 }
  video.updatePixels();
  //if pixels matching target value are found, updates the smoothedX and smoothedY to their average value
  if (count > 0) {
  avgX = avgX / count;
  avgY = avgY / count;
  smoothedX += (avgX - smoothedX) * easing;
  smoothedY += (avgY - smoothedY) * easing; 
  }
 } catch (error) {
  console.error ('Capture pixels error: ', error); //check for error in the pixel tracking choice
}
}



//now this function is special because i've spent 11 nope 12 hours now on it and the frame rate slows everything down to the point where it takes a whole five minutes to even test things and i want a warm cider and maybe a chair to the head
function mousePressed() {
  try {
  if (isMousePressedEnabled) {
    // Check if the mouse click is outside the area where color tracking should be disabled
    if (!(mouseX >= 145 && mouseX <= 1045 && mouseY >= 80 && mouseY <= 480)) {
      // Get the color of the pixel at the mouse position
      let c = video.get(mouseX, mouseY);
      targetColor = [red(c), green(c), blue(c)]; // Set the new target color
      console.log('Color Values: ', red(c), green(c), blue(c)); // log the RGB values of whatever was clicked on
    }
   } 
  } catch (error) {
  console.error ('Tracking/press issue', error); //check for error in the selective color tracking function
 } 
}




function displayProgressBar() {
  if (!gameOver) { //displays progress bar conditionally so that it disappears when the game is over
  let progress = map(score, -4, 4, 0, progressBarDiameter, progressBarDiameter); //sets the progress location and the max size of the bar
  noStroke();
  fill(117, 124, 85); //color of progress bar
  ellipse(1000, 400, progress, progress); //location and size of the progress bar
 }
}




function updateScore(decision, character) {
  let correctDecision = (goodie.includes(character) && decision) || (baddie.includes(character) && !decision);
  score += correctDecision ? 1 : -1;
  score = constrain(score, -4, 4); // Keep score within -4 to 4
}



//multiple endings for game
function checkGameStatus() { //WE HAVE A WINNER
  if (score >= 4) {
    image(winner, 0, 0); //displays "winning" image
    
    //sentencing for ending
    noStroke();
    fill(255, 0, 0);
    textSize(140);
    text('Canonization', 200, 140);
    
    //explains sentencing
    fill(221, 167, 94); //tan
    textSize(40); //text size
    text('Your good deeds\nwill not be\nremembered.', 50, 450);
    
    //text to instruct player
    fill(169, 112, 64); //dark tan
    textSize(23); //text size
    text('Click on "Penance"', 930, 590); //displays text "Click on 'Penance'"

    restartButton.show(); //show restart button
    
    gameOver = true; //hides progress bar
    showVideo = false;
    isMousePressedEnabled = false;
    
    noLoop(); //stops drawing function
    
    
    
  } else if (score <= -4) { //YOU SUCK AND NO ONE LIKES YOU
    image(superloser, 0, 0); // displays "losing" image
    
    //sentencing for ending
    fill(255, 0, 0);
    textSize(140);
    text('Execution', 300, 140);    
    
    //explains sentencing
    fill(221, 167, 94); //tan
    textSize(40); //text size
    text('You will live on\nin infamy.', 100, 500);
    
    //text to instruct player
    fill(169, 112, 64); //dark tan
    textSize(23); //text size
    text('Click on "Penance"', 930, 590); //displays text "Click on 'Penance'"

    restartButton.show(); //show restart button
    
    gameOver = true; //hides progress bar
    showVideo = false;
    isMousePressedEnabled = false;
        
    noLoop(); //stops drawing function
    
    
    
  } else if (decisionsMade >= 10) { //YOU'RE INDECISIVE AND SO IS YOUR MOM
    image(loser, 0, 0); // displays "losing" image
    
    //sentencing for ending
    fill(255, 0, 0);
    textSize(140);
    text('Excommunication', 70, 180);
   
    //explains sentencing
    fill(221, 167, 94); //tan
    textSize(40); //text size
    text('You are weak.', 100, 620);
    
    //text to instruct player
    fill(169, 112, 64); //dark tan
    textSize(23); //text size
    text('Click on "Penance"', 930, 590); //displays text "Click on 'Penance'"

    restartButton.show(); //show restart button
    
    gameOver = true; //hides progress bar
    showVideo = false;
    isMousePressedEnabled = false;
    
    noLoop(); //stops drawing function
  }
}




//shuffles array of infidels
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}




function blessInfidels() {
  handleInfidelDecision(true);
  miniReset();
}
function rejectInfidels() {
  handleInfidelDecision(false);
  miniReset();
}

function handleInfidelDecision(decision) {
  if (allInfidels.length === 0) {
    initializeInfidels();
  }
  updateScore(decision, currentInfidel);
  currentInfidel = allInfidels.pop();
  decisionsMade++;
}
