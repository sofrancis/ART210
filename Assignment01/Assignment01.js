//define variables
let songBackground = [];
let songText = [];
let songFont = [];
let song = [];
let currentSong = 0;
let angle = 0.0;
let backwards;
let forwards;
let play;

//load arrays and images
function preload() {
  song[0] = loadImage('data/twopointfive.png');
  song[1] = loadImage('data/istj.png');
  song[2] = loadImage('data/yours_truly.png');
  song[3] = loadImage('data/portals.png');
  song[4] = loadImage('data/munekita.png');

  songText[0] = "YiPiYaY by Aminè";
  songText[1] = "Blue Wave by NCT Dream";
  songText[2] = "Daydreamin' by Ariana Grande";
  songText[3] = "Tunnel Vision by Melanie Martinez";
  songText[4] = "Muñekita by Kali Uchis (with El Alfa and JT)";
  
  songBackground[0] = color(255, 238, 128);
  songBackground[1] = color(115, 201, 230);
  songBackground[2] = color(201, 232, 245);
  songBackground[3] = color(240, 185, 186);
  songBackground[4] = color(214, 156, 185);
  
  songFont[0] = ('Barriecito');
  songFont[1] = ('Sedgwick Ave Display');
  songFont[2] = ('Parisienne');
  songFont[3] = ('Macondo Swash Caps');
  songFont[4] = ('Arizonia');

  play = loadImage('data/playp.png');
  //resize all buttons to desired position and size
  play.resize(25, 125);

  forwards = loadImage('data/forwardsf.png');
  forwards.resize(120, 150);

  backwards = loadImage('data/backwardsb.png');
  backwards.resize(120, 150);

}

function setup() {
  createCanvas(800, 1030);
}

function draw() {
  //set color of background to match album cover
  background(songBackground[currentSong]);
  //align and position all text
  textSize(36);
  textAlign(CENTER);
  fill(0);
  //change text and fonts to match album covers
  text(songText[currentSong], width / 2, 800);
  textFont(songFont[currentSong]);

  //buttons
  image(play, 365, 845);
  image(backwards, 170, 860);
  image(forwards, 520, 860);
  
  //make album covers rotate
  translate(400, 400);
  rotate(angle);
  image(song[currentSong], -325, -325, 650, 650);
  angle += 0.02;
}

//function changes album covers when skip buttons are pushed
function mousePressed() {
  if (
    mouseX >= 520 &&
    mouseX <= 520 + 120 &&
    mouseY >= 860 &&
    mouseY <= 860 + 150
  ) {
    currentSong = (currentSong + 1) % song.length;
  }

  if (
    mouseX >= 170 &&
    mouseX <= 170 + 120 &&
    mouseY >= 860 &&
    mouseY <= 860 + 150
  ) {
    currentSong = (currentSong - 1 + song.length) % song.length;
  }
}
