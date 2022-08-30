/*
Hack it: Zombie Attack

The program creates a horde of zombies that cross the canvas. Read the code
and make the following enhancements

1. Split the code up into muliple files one for each constructor
2. Give each zombie a health property
3. Add a shovel! When the zombie is clicked on the head their health decreases
	* Add a 'clicked' method to the zombie to check if x and y coordinates, taken as arguments
	 are over the zombies head (you can use the dist function) and decrease health
	* In the horde constructor create a new method to check each zombies clicked method
	* also remove from the array any zombies whoes health is below 0.
	* call the method in horde from mousePressed();
4. When a zombie is killed make sure a new zombie is added to the horde.
5. Extension: Make it a game where the idea is to keep the zombies from the right of the screen
for as long as possible.
*/

//variable to store the zombie horde
var horde;
var sunflowers;

function setup() {
  createCanvas(800, 600);

  //create a new horde and add zombies
  horde = new Horde();
  horde.addZombies(7);
  sunflowers = new Sunflowers(3);
}

function draw() {
  background(77, 112, 107);
  sunflowers.draw();
  sunflowers.checkBeEatten();
  horde.drawZombies();
  horde.update();
  if (sunflowers.sunflowers.length == 0) {
    push();
    textSize(40);
    textAlign(CENTER);
    text('Game Over!', width / 2, height / 2);
    pop();
  }
}

//Constructor for the horde
function Horde() {
  //an array of zombies
  this.zombies = [];

  //call each zombies drawing code and update it's location ready to be drawn again
  this.drawZombies = function () {
    for (var i = 0; i < this.zombies.length; i++) {
      this.zombies[i].draw();
      this.zombies[i].updateLocation();
    }
  };
  this.update = function () {
    for (var i = this.zombies.length - 1; i >= 0; i--) {
      if (this.zombies[i].health == 0 || this.zombies[i].x > width + 30) {
        this.zombies.splice(i, 1);
        this.zombies.push(new zombie(random(20, height - 50)));
      }
    }
  };

  //add n zombies to the horde
  this.addZombies = function (n) {
    for (var i = 0; i < n; i++) {
      this.zombies.push(new zombie(random(20, height - 50)));
    }
  };

  this.checkClicked = function (x, y) {
    for (var i = this.zombies.length - 1; i >= 0; i--) {
      if (this.zombies[i].clicked(x, y)) {
        if (this.zombies[i].health >= 1) {
          this.zombies[i].health -= 1;
        }
      }
    }
  };
}

//constructor for the Zombies
function zombie(y) {
  //initial x so all zombies start to the left of the screen
  this.x = -10;
  this.y = y;
  this.last_x = this.x;
  //set a random speed
  this.speed = random(0.2, 0.5);

  this.health = round(random(3, 10));

  //draw the zombie to the screen
  this.draw = function () {
    push();
    //arms
    fill(128, 0, 128);
    rect(this.x - 10, this.y - 50, 65, 15);
    rect(this.x - 10, this.y + 35, 65, 15);
    //shoulders
    rect(this.x - 20, this.y - 50, 35, 100, 10);
    //head
    fill(50);
    ellipse(this.x, this.y, 50);

    //show health
    fill(255);
    textAlign(CENTER);
    text(this.health, this.x, this.y - 10);
    pop();

    this.clicked = function (x, y) {
      return dist(this.x, this.y, x, y) < 25;
    };
  };

  //update the zombies x location as it lumbers across the screen
  this.updateLocation = function () {
    this.last_x = this.x;
    this.x += this.speed;
  };
}
function Sunflowers(n) {
  this.sunflowers = [];
  for (let i = 0; i < n; i++) {
    this.sunflowers.push(new Sunflower());
  }
  this.draw = function () {
    for (let i = 0; i < this.sunflowers.length; i++) {
      this.sunflowers[i].draw();
    }
  };
  this.checkBeEatten = function () {
    for (let i = this.sunflowers.length - 1; i >= 0; i--) {
      if (this.sunflowers[i].beEatten(horde.zombies)) {
        this.sunflowers[i].health -= 1;
        if (this.sunflowers[i].health == 0) {
          this.sunflowers.splice(i, 1);
        }
      }
    }
  };
}
function Sunflower() {
  this.x = width - 50;
  this.y = round(random(10, height - 60) / 12) * 12;
  this.health = 3;
  this.draw = function () {
    push();
    fill(255, 140, 0);
    stroke(255, 215, 0);
    strokeWeight(20);
    ellipse(this.x, this.y, 50);
    fill(0);
    textAlign(CENTER);
    noStroke();
    text(this.health, this.x, this.y + 5);
    pop();
  };
  this.beEatten = function (z) {
    for (let i = 0; i < z.length; i++) {
      let zombie = z[i];
      if (zombie.y > this.y - 58 && zombie.y < this.y + 58) {
        if (zombie.x > this.x - 58 && zombie.last_x < this.x - 58) {
          return true;
        }
      }
    }
  };
}

function mousePressed() {
  if (sunflowers.sunflowers.length > 0) {
    horde.checkClicked(mouseX, mouseY);
  }
}
