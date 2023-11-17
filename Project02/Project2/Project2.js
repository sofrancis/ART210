let infidelImg = [];
let sinText = [];
let occuText = [];
let blessed;

//preload all images and text bits as an array
function preload(){
  blessed = loadImage('data/blessedfr.png');
  
  infidelImg[0] = loadImage('data/infidels/infidelfr.png');
  infidelImg[1] = loadImage('data/infidels/purpleinfidel.png');
  infidelImg[2] = loadImage('data/infidels/blueinfidel.png');
  infidelImg[3] = loadImage('data/infidels/greeninfidel.png');
  
  sinText[0] = "- Decapitation\n- Infidelity";
  sinText[1] = "- Filthy conversation\n- Fratercide";
  sinText[2] = "- Unclean\n- Accepting bribes";
  sinText[3] = "- Sloth\n- Urging others to violence";
  sinText[4] = "- Complaining about nothing\n- Devious";
  sinText[5] = "- Not correcting children\n- Excessively lustful";
  sinText[6] = "- Threatening children\n- Busybody";
  sinText[7] = "- Cursing innocents\n- Became a cult leader";
  sinText[8] = "- Unnatural beauty\n- Cannibalism";
  sinText[9] = "- Tempting others\n- Blinding a child";
  sinText[10] = "- Killed a parent \n- Returned an insult";
  sinText[11] = "- Falsely convicted another\n- Covetous";
  sinText[12] = "- Wrathful\n- Rudeness";
  sinText[13] = "- Judges others unfairly\n- Youthful lust";
  sinText[14] = "- Not submitting to a law\n- Greedy";
  sinText[15] = "- Overindulging\n- Enslaved to their passions";
  sinText[16] = "- Envious\n- Vain";
  sinText[17] = "- Stubborness\n- Refusing to die for others";
  sinText[18] = "- Seeking riches\n- Sorceries";
  
  occuText[0] = "Officer";  
  
  randomSinIndex = floor(random(sinText.length));
  randomInfidelIndex = floor(random(infidelImg.length));
}

function setup() {
  createCanvas(1200, 1024);
}

function draw() {
  image(blessed, 0, 0);
  image(infidelImg[randomInfidelIndex], 400, 475, 500, 550);
  
  //top text
  fill(255);
  textSize(85);
  text('Protect the Innocents', 220, 135);

//lil mystery message
  textSize(86);
  fill(225, 0, 0);
  text('o', 305.1, 135.4);
  text('e', 578, 135.4);
  text('n', 712, 135.4);
  text('n', 880.5, 135.4);  
  
  fill(255); 
  textSize(60);
  text('Sins: \n\n\n\n\nOccupation:', 30, 300);
  
  fill(115, 124, 80); 
  textSize(35);
  textLeading(40);
  text(sinText[randomSinIndex], 50, 350);
  
  textFont('Fondamento');
}

//- assign trust/betray values to certain infidels
//- make bars for each measurement that increase as one is betrayed or trusted
//- if/then statement for when bars are completely filled up either way to display the
//  end screen (code displays text, photoshopped image, and button that can be clicked
//  on to restart

//use code from first assignment for buttons on right to bless/curse
