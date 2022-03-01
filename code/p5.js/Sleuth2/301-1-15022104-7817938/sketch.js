/*
The case of the Python Syndicate
Stage 2


Officer: 7817938
CaseNum: 301-1-15022104-7817938

- Word on the street is that there is a new gang in town - The Python Syndicate.
It seems my bones were correct on this one. I need you to organise the gang
around the suspected leader Bones karpinski

- The variables for Bones karpinski have been declared and
initialised.
- Modify the x and y parameters of each image command using these two variables
so the images maintain their correct positions their correct positions on the board.
- To do this you will need to combine add and subtract operators with variables
Bones karpinski for for each parameter.
- Do not create any new variables
- Do not add any additional commands


*/

var photoBoard;
var countessHamiltonImage;
var cecilKarpinskiImage;
var bonesKarpinskiImage;
var linaLovelaceImage;
var rockyKrayImage;
var pawelKarpinskiImage;

var bonesKarpinskiXLocation = 701;
var bonesKarpinskiYLocation = 40;

function preload() {
  photoBoard = loadImage("photoBoard.png");
  countessHamiltonImage = loadImage("countessHamilton.png");
  cecilKarpinskiImage = loadImage("karpinskiBros1.png");
  bonesKarpinskiImage = loadImage("karpinskiDog.png");
  linaLovelaceImage = loadImage("lina.png");
  rockyKrayImage = loadImage("krayBrothers1.png");
  pawelKarpinskiImage = loadImage("karpinskiBros2.png");
}

function setup() {
  createCanvas(photoBoard.width, photoBoard.height);
}

function draw() {
  image(photoBoard, 0, 0);

  //And update these image commands with your x and y coordinates.
  image(bonesKarpinskiImage, bonesKarpinskiXLocation, bonesKarpinskiYLocation);

  image(
    countessHamiltonImage,
    bonesKarpinskiXLocation - 586,
    bonesKarpinskiYLocation
  );
  image(
    cecilKarpinskiImage,
    bonesKarpinskiXLocation - 293,
    bonesKarpinskiYLocation
  );
  image(
    linaLovelaceImage,
    bonesKarpinskiXLocation - 586,
    bonesKarpinskiYLocation + 269
  );
  image(
    rockyKrayImage,
    bonesKarpinskiXLocation - 293,
    bonesKarpinskiYLocation + 269
  );
  image(
    pawelKarpinskiImage,
    bonesKarpinskiXLocation,
    bonesKarpinskiYLocation + 269
  );
}
