/*

- Copy your game project code into this file
- for the p5.Sound library look here https://p5js.org/reference/#/libraries/p5.sound
- for finding cool sounds perhaps look here
https://freesound.org/


*/

var jumpSound;
var isInitialised;
var isLoaded;

function preload() {
  isLoaded = false;
  soundFormats('mp3', 'wav');
  jumpSound = loadSound('assets/segway_loop.mp3', function () {
    console.log('sound is loaded');
    isLoaded = true;
  });
}

function setup() {
  createCanvas(500, 500);
  isInitialised = false;
  textAlign(CENTER);
}

function draw() {
  background(135, 206, 235);
  fill(0);
  if (!isInitialised) {
    text('Press any key to begin', width / 2, height / 2);
  }
}
function keyPressed() {
  if (!isInitialised) {
    isInitialised = true;
    jumpSound.setVolume(0.1);
    var r = map(mouseX, 0, width, 0.5, 3.0);
    //   jumpSound.loop(0, 0.5, 0.1, 0.1);
    if (isLoaded) {
      jumpSound.loop(0, r);
    }
  } else {
    if (key == ' ') {
      if (jumpSound.isPaused()) {
        jumpSound.play();
      } else {
        jumpSound.pause();
      }
    }
  }
}
