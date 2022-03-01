/*

Officer: 7817938
CaseNum: 501-3-49876129-7817938

Case 501 - John Von Neuman - stage 4

This is our last chance to catch that killer kid.
Let's hope that John Von Neuman can identify the killer.
To speak to him follow Madame McCarthy’s advice below.

John was ever the keen chess player. Many an hour was spent considering his next move.
To speak to John beyond the grave you must place a chess piece in each of the dashed circles.
Use the image() and the chessPiece variable command to place the pieces in their positions.
Do this by using two for loops in a nested pattern.
You will need to use some conditional statements in order to position each row to match the pattern.

There are many possible ways of completing this task,
but you should ONLY use the following commands:

 * for()
 * image()
 * if()

*/

var backgroundImg, chessPiece;

function preload() {
  backgroundImg = loadImage("background.jpg");
  chessPiece = loadImage("Piece.png");
}

function setup() {
  createCanvas(backgroundImg.width, backgroundImg.height);
  image(backgroundImg, 0, 0);
  imageMode(CENTER);
}

function draw() {
  // add your for loop below
  for (var j = 0; j < 6; j++) {
    for (var i = 0; i < 5; i++) {
      //   if (i == 0) {
      image(chessPiece, 639 + (j + i) * 58, 354 + i * 50);
      //   }
      //   if (i == 1) {
      //     image(chessPiece, 639 + (j + 1) * 58, 354 + i * 50);
      //   }
      //   if (i == 2) {
      //     image(chessPiece, 639 + (j + 2) * 58, 354 + i * 50);
      //   }
      //   if (i == 3) {
      //     image(chessPiece, 639 + (j + 3) * 58, 354 + i * 50);
      //   }
      //   if (i == 4) {
      //     image(chessPiece, 639 + (j + 4) * 58, 354 + i * 50);
      //   }
    }
  }
}
