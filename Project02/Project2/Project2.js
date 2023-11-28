//arrays for images shown, goodies, and baddies
let infidelImg = [];
let goodie = ['- Decapitation\n- Infidelity', '- Filthy conversation\n- Fratercide', '- Not correcting children\n- Excessively lustful', '- Unnatural beauty\n- Cannibalism', '- Killed a parent \n- Returned an insult', '- Wrathful\n- Rudeness', '- Judges others unfairly\n- Youthful lust', '- Overindulging\n- Enslaved to their passions', '- Stubborness\n- Refusing to die for others', '- Seeking riches\n- Sorceries'];
let baddie = ['- Unclean\n- Accepting bribes', '- Sloth\n- Urging others to violence', '- Complaining about nothing\n- Devious', '- Threatening children\n- Busybody', '- Cursing innocents\n- Became a cult leader', '- Tempting others\n- Blinding a child', '- Falsely convicted another\n- Covetous', '- Not submitting to a law\n- Greedy', '- Envious\n- Vain'];
let allInfidels = shuffle(goodie.concat(baddie));
let currentInfidel;

let score = 0;
let decisionsMade = 0;
let progressBarWidth;

let occuText = [];
let winner;
let loser;

let blessed;
//buttons to reject or bless
let blessButton;
let rejectButton;
//fancy circles
let choices;
let rating;

function preload(){
//preload background image and fancy circles
  blessed = loadImage('data/blessedfr.png');
  choices = loadImage('data/choices.png');
  rating = loadImage('data/fillin.png');
  winner = loadImage('data/superblessed.png');
  loser = loadImage('data/otherblessed.png');

//array of infidel images
  infidelImg[0] = loadImage('data/infidels/infidelfr.png');
  infidelImg[1] = loadImage('data/infidels/purpleinfidel.png');
  infidelImg[2] = loadImage('data/infidels/blueinfidel.png');
  infidelImg[3] = loadImage('data/infidels/greeninfidel.png');

  occuText[0] = "Officer";  
  randomInfidelIndex = floor(random(infidelImg.length));
}

function setup() {
  createCanvas(1200, 1024);
  
  blessButton = createButton('Bless');
  blessButton.size(150,80);
  blessButton.position(36, 558);
  blessButton.style('background-color', '#00000000');
  blessButton.style('border', '#000000');
  blessButton.style('font-family', 'Fondamento');
  blessButton.style('font-size', '30px');  
  blessButton.style('color', '#DDA75E');
  blessButton.mousePressed(blessInfidels);
  
  rejectButton = createButton('Reject');
  rejectButton.size(145, 80);
  rejectButton.position(38, 741);
  rejectButton.style('background-color', '#00000000');
  rejectButton.style('border', '#000000');
  rejectButton.style('font-family', 'Fondamento');
  rejectButton.style('font-size', '28px');
  rejectButton.style('color', '#B26D35');
  rejectButton.mousePressed(rejectInfidels);  
  
  progressBarWidth = width / 2;
  currentInfidel = allInfidels.pop();
  
}

function draw() {
  background(255);
  
  image(blessed, 0, 0);
  image(infidelImg[randomInfidelIndex], 400, 475, 500, 550);
  image(choices, 30, 520);
  image(choices, 30, 700);
  choices.resize(160, 160);
  
  image(rating, 850, 250);
  rating.resize(300, 300);
  
  //top text
  fill(255);
  textSize(85);
  text('Pr  tect th   In  oce  ts', 220, 135);

//lil mystery message
  textSize(86);
  fill(225, 0, 0);
  text('o', 305.1, 135.4);
  text('e', 578, 135.4);
  text('n', 712, 135.4);
  text('n', 877, 135.4);  
  
  fill(255); 
  textSize(60);
  text('Sins: \n\n\n\n\nSentencing:', 30, 300);
  
  fill(115, 124, 80); 
  textSize(35);
  textLeading(40);
  text(`${currentInfidel}`, 50, 350);
  text(`Decisions: ${decisionsMade}/10`, 880, 600);
  
  textFont('Fondamento');
  
  checkGameStatus();
  displayProgressBar();
}

function displayProgressBar() {
  let progress = map(score, -4, 4, 0, progressBarWidth); 
  fill(100);
  rect(width / 4, height / 2 - 10, progressBarWidth, 20); 
  fill(0, 255, 0);
  rect(width / 4, height / 2 - 10, progress, 20);
}

function keyPressed() {
  if (decisionsMade < 10 && currentInfidel) {
    let decision = key === 'F'; 
    updateScore(decision, currentInfidel);
    currentInfidel = allInfidels.pop();
    decisionsMade++;
  }
}

function updateScore(decision, character) {
  let correctDecision = (goodie.includes(character) && decision) || (baddie.includes(character) && !decision);
  score += correctDecision ? 1 : -1;
  score = constrain(score, -4, 4); // Keep score within -4 to 4
}
 
function checkGameStatus() {
  if (score >= 4) {
//    text('You Win!', width / 2, 300);
    image(winner, 0, 0);
    noLoop(); // Stops the draw loop
  } else if (score <= -4) {
//    text('You Lose!', width / 2, 300);
    noLoop(); // Stops the draw loop
  } else if (decisionsMade >= 10) {
//    text('Game Over!', width / 2, 300);
    image(loser, 0, 0);
    noLoop(); // Stops the draw loop
  }
}

function shuffle(array) {

  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function blessInfidels() {
  
}

function rejectInfidels() {

}
