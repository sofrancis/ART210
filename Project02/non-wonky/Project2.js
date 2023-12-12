//arrays for images shown, goodies, and baddies
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

//buttons to reject or bless
let blessButton;
let rejectButton;

let choices; //image that contains the bless and reject buttons
let rating; //image that contains the progress bar

//button to restart game
let restartButton;

//variable to hide progress bar once the game is over
let gameOver = false;




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
  createCanvas(1200, 1024); //creates canvas
  
  initializeInfidels();
  
  blessButton = createButton('Bless'); //creates button that reads "Bless"
  blessButton.size(150,80); //button size
  blessButton.position(36, 558);
  blessButton.style('background-color', '#00000000'); //sets background of the button to transparent
  blessButton.style('border', '#000000'); //sets border of the button to transparent
  blessButton.style('font-family', 'Fondamento'); //sets font to Fondamento
  blessButton.style('font-size', '40px'); //font size
  blessButton.style('color', '#DDA75E'); // tan
  blessButton.show(); //shows button
  blessButton.mousePressed(blessInfidels); //blesses an infidel when pressed
  
  
  
  rejectButton = createButton('Reject'); //creates button that reads "Reject"
  rejectButton.size(145, 80); //button size
  rejectButton.position(38, 765);
  rejectButton.style('background-color', '#00000000'); //sets background of the button to transparent
  rejectButton.style('border', '#000000'); //sets border of the button to transparent
  rejectButton.style('font-family', 'Fondamento'); //sets font to Fondamento
  rejectButton.style('font-size', '35px'); //font size
  rejectButton.style('color', '#DDA75E'); //tan
  rejectButton.show(); //shows button
  rejectButton.mousePressed(rejectInfidels); //rejects an infidel when pressed
  
  
  
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
}




function reset(){
  blessButton.show(); //displays bless button
  rejectButton.show(); //displays reject button
  restartButton.hide(); //hides the reset button
  
  initializeInfidels();
  
  score = 0; //resets score back to zero
  decisionsMade = 0; //resets decisions back to zero
  gameOver = false; //displays progress bar again
  progressBarDiameter = 200; //resets progress bar to "zero"
  currentInfidel = allInfidels.pop(); //resets infidels
  
  loop(); //begins draw function
}




function resetButtonPressed() {
  reset(); //executes the reset function above when the reset button is clicked on
}




function initializeInfidels() {
  allInfidels = shuffle(goodie.concat(baddie));
}




function draw() {
  background(255); //sets the color of the background to black
  
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
  
  //text to explain future controls
  fill(178, 109, 53); //dark tan
  textSize(23); //text size
  text('Click to bless infidel', 20, 705); //displays the text "Raise Hand"
  text('Click to reject infidel', 20, 908); //displays the text "Lower Hand"
  text(`Decisions: ${decisionsMade}/10`, 918, 580); //displays the amount of decisions left
  
  //displays text for sins (color, size, spacing)
  fill(115, 124, 80); //mild green
  textSize(35); //text size
  textLeading(40); //vertical text spacing
  text(`${currentInfidel}`, 50, 350); //displays the current infidel's sins
  
  //white text for sins and sentencing
  fill(255); //white
  textSize(60); //text size
  text('Sins: \n\n\n\n\nSentencing:', 30, 300); //displayed text  
  textFont('Fondamento'); //sets font for all text
  
  checkGameStatus(); //check game status 
  displayProgressBar(); //I'd like to think it's self-explanatory
}




function displayProgressBar() {
  if (!gameOver) { //displays progress bar conditionally so that it disappears when the game is over
  let progress = map(score, -4, 4, 0, progressBarDiameter, progressBarDiameter); //sets the progress location and the max size of the bar
  fill(117, 124, 85); //color of progress bar
  ellipse(1000, 400, progress, progress); //location and size of the progress bar
 }
}




  function updateScore(decision, character) {
    let correctDecision = (goodie.includes(character) && decision) || (baddie.includes(character) && !decision);
    score += correctDecision ? 1 : -1;
    score = constrain(score, -4, 4); // Keep score within -4 to 4
}




function checkGameStatus() { //WE HAVE A WINNER
  if (score >= 4) {
    image(winner, 0, 0); //displays "winning" image
    
    //sentencing for ending
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
    
    blessButton.hide(); //hide bless button
    rejectButton.hide(); //hide reject button
    restartButton.show(); //show restart button
    
    gameOver = true; //hides progress bar
    
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
    
    blessButton.hide();  //hide bless button
    rejectButton.hide(); //hide reject button
    restartButton.show(); //show restart button
    
    gameOver = true; //hides progress bar
    
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
    
    blessButton.hide();  //hide bless button
    rejectButton.hide(); //hide reject button
    restartButton.show(); //show restart button
    
    gameOver = true; //hides progress bar
    
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
  handleInfidelDecision(true);//blesses infidels
}



 
function rejectInfidels() {
  handleInfidelDecision(false);//rejects infidels
}




//function to simplify blessing/rejecting functions
function handleInfidelDecision(decision) {
  if (allInfidels.length === 0) {
    initializeInfidels();
  }
  updateScore(decision, currentInfidel);
  currentInfidel = allInfidels.pop();
  decisionsMade++;
}
