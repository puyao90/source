/*
The case of the Python Syndicate
Stage 1

Officer: 7817938
CaseNum: 301-0-35084843-7817938

I gotta give it to you kid, you’ve made an excellent start, but now it’s time
to take things up a level. For some time I’ve suspected that there’s something
big going down in Console City.

These cases that we’ve been working are all connected somehow. I need to use
that considerable brain of yours to work it all out. Let’s start by laying out
who we know.

Place each mugshot in its designated position by doing the following:

- Create a new variable for the X and Y coordinates of each mugshot.
    - One has already been done for you.
    - Make sure you use the same style and format for the variable name.
- Find coordinates for the mugshot and initialise your variable with these
values.
- Replace the hard-coded constants in the corresponding image command so that
the mugshot appears in its designated position.

*/

var photoBoard;
var bones_karpinski_image;
var rocky_kray_image;
var anna_karpinski_image;
var pawel_karpinski_image;
var cecil_karpinski_image;
var countess_hamilton_image;

//declare your new variables below
var pawel_karpinski_x_location = 115;
var pawel_karpinski_y_location = 309;

var bones_karpinski_x_location = 115;
var bones_karpinski_y_location = 40;

var rocky_kray_x_location = 408;
var rocky_kray_y_location = 40;

var anna_karpinski_x_location = 701;
var anna_karpinski_y_location = 40;

var cecil_karpinski_x_location = 408;
var cecil_karpinski_y_location = 309;

var countess_hamilton_x_location = 701;
var countess_hamilton_y_location = 309;

function preload() {
  photoBoard = loadImage("photoBoard.png");
  bones_karpinski_image = loadImage("karpinskiDog.png");
  rocky_kray_image = loadImage("krayBrothers1.png");
  anna_karpinski_image = loadImage("karpinskiWoman.png");
  pawel_karpinski_image = loadImage("karpinskiBros2.png");
  cecil_karpinski_image = loadImage("karpinskiBros1.png");
  countess_hamilton_image = loadImage("countessHamilton.png");
}

function setup() {
  createCanvas(photoBoard.width, photoBoard.height);
}

function draw() {
  image(photoBoard, 0, 0);

  //And update these image commands with your x and y coordinates.
  image(
    pawel_karpinski_image,
    pawel_karpinski_x_location,
    pawel_karpinski_y_location
  );

  //   image(bones_karpinski_image, 115, 40);
  image(
    bones_karpinski_image,
    bones_karpinski_x_location,
    bones_karpinski_y_location
  );

  //image(rocky_kray_image, 408, 40);
  image(rocky_kray_image, rocky_kray_x_location, rocky_kray_y_location);

  //image(anna_karpinski_image, 701, 40);
  image(
    anna_karpinski_image,
    anna_karpinski_x_location,
    anna_karpinski_y_location
  );
  //image(cecil_karpinski_image, 408, 309);
  image(
    cecil_karpinski_image,
    cecil_karpinski_x_location,
    cecil_karpinski_y_location
  );
  //image(countess_hamilton_image, 701, 309);
  image(
    countess_hamilton_image,
    countess_hamilton_x_location,
    countess_hamilton_y_location
  );
}
