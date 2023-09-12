function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(215, 213, 201);
  strokeWeight(2);
  stroke(252, 129, 1);
  fill(252, 129, 1);
  quad(200, 10, 290, 150, 200, 275, 100, 150); 
  fill(252, 129, 1);
  
//those purple blue circle things but the slightly bluer one
  stroke(39, 29, 119);
  fill(5, 5, 176);
  ellipse(345, 50, 20);
//the other purple blue circle thingies
  fill(39, 29, 119);
  ellipse(320, 100, 20);
  ellipse(300, 140, 20);
  ellipse(220, 145, 20);
  ellipse(260, 215, 20);
  ellipse(210, 280, 20);
  ellipse(120, 280, 20);
  ellipse(143, 345, 17);
  //red circle
  stroke(255, 0, 0);
  fill(255, 0, 0);
  ellipse(55, 175, 15);
  
//triangles
  stroke(217, 201, 15);
  fill(217, 201, 15);
  triangle(300, 0, 330, 35, 390, 0);
  triangle(360, 0, 400, 70, 400, 0);
  
  //lines
  stroke(51, 56, 83);
  line(0, 200, 400, 325);
  line(300, 0, 400, 55);
  line(210, 0, 400, 100);

//line yellow
  stroke(217, 201, 15);
  line(210, 95, 270, 70);
  line(220, 115, 280, 90);
  

//red curves
  noFill();
  stroke(255, 0, 0);
beginShape();
  curveVertex(49, 51);
  curveVertex(49, 51);
  curveVertex(110, 90);
  curveVertex(130, 140);
  curveVertex(111, 197);
  curveVertex(111, 197);
endShape();

  noFill();
  stroke(255, 0, 0);
beginShape();
   curveVertex(225, 325);
   curveVertex(225, 325);
   curveVertex(275, 315);
   curveVertex(340, 260);
   curveVertex(400, 155);
   curveVertex(400, 155);
endShape();

  noFill();
  stroke(124, 121, 129);
beginShape();
  curveVertex(60, 0);
  curveVertex(60, 0);
  curveVertex(160, 50);
  curveVertex(240, 75);
  curveVertex(340, 85);
  curveVertex(400, 80);
  curveVertex(400, 80);
endShape();

noFill();
  stroke(255, 0, 0);
beginShape();
  curveVertex(180, 120);
  curveVertex(180, 120);
  curveVertex(200, 160);
  curveVertex(200, 195);
  curveVertex(165, 230);
  curveVertex(165, 230);
endShape();

noFill();
  stroke(127, 118, 122);
beginShape();
  curveVertex(245, 0);
  curveVertex(245, 0);
  curveVertex(290, 15);
  curveVertex(320, 35);
  curveVertex(365, 80);
  curveVertex(380, 110);
  curveVertex(380, 110);
endShape();

noFill();
  stroke(93, 95, 76);
beginShape();
  curveVertex(350, 0);
  curveVertex(350, 0);
  curveVertex(352, 8);
  curveVertex(365, 20);
  curveVertex(382, 23);
  curveVertex(400, 20);
  curveVertex(400, 20);
endShape();

  fill(0)
  text(mouseX + "," + mouseY, 20, 20)
  
}
