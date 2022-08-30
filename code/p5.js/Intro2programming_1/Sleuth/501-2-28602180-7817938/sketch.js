/*

Officer: 7817938
CaseNum: 501-2-28602180-7817938

Case 501 - Marrieta Von Neuman - stage 3

For Marrieta a different approach is needed again.
Follow Madame McCarthy’s advice below.

Marrieta was a doting mother but she was also mean player of dice.
To speak to Marrieta beyond the grave you must place a dice in each of the dashed circles.
Use the image() and the itemImage variable command to place each dice in its position.
You will need to use two for loops in a nested pattern to create the grid.

There are many possible ways of completing this task,
but you should ONLY use the following commands:

 * for()
 * image()

*/

var backgroundImg, itemImage;

function preload() {
  backgroundImg = loadImage("background.jpg");
  itemImage = loadImage("Dice.png");
}

function setup() {
  createCanvas(backgroundImg.width, backgroundImg.height);
  image(backgroundImg, 0, 0);

  imageMode(CENTER);
}

function draw() {
  // add your for loop below
  for (var i = 0; i < 6; i++) {
    for (var j = 0; j < 6; j++) {
      image(itemImage, 514 + j * 74, 275 + i * 57);
    }
  }
}
