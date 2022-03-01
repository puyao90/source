/*
201 - The case of Judge Hopper
Stage 4 - The warehouse

Officer: 7817938
CaseNum: 201-3-44862727-7817938

As you enter the ALGOL warehouse you are struck by the most horrendous stench - it’s not the fish. Lying amongst piles of fish carcasses you find the body of Judge Hopper. Gathering yourself together, you tie a handkerchief around your nose and mouth and quickly set about recording the evidence.

Draw around the Judge’s body ...

You should need around 20 vertices to draw round the judge and make sure you close your shape!


*/

var img;

function preload() {
  img = loadImage("scene.png");
}

function setup() {
  createCanvas(img.width, img.height);
}

function draw() {
  image(img, 0, 0);
  stroke(255, 0, 0);
  strokeWeight(3);
  noFill();

  // write the code to draw around the Judge's body below
  beginShape();
  vertex(608, 121);
  vertex(566, 132);
  vertex(548, 159);
  vertex(512, 172);
  vertex(493, 206);
  vertex(468, 285);
  vertex(433, 331);
  vertex(390, 306);
  vertex(323, 349);
  vertex(326, 377);
  vertex(353, 376);
  vertex(386, 346);
  vertex(395, 428);
  vertex(430, 484);
  vertex(528, 492);
  vertex(606, 505);
  vertex(628, 534);
  vertex(648, 528);
  vertex(650, 489);
  vertex(520, 416);
  vertex(664, 213);
  vertex(678, 156);
  vertex(608, 121);
  endShape();
}
