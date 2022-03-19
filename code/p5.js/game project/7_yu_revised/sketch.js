class Character {
  constructor(x, y, lives, world) {
    this.isLeft = false;
    this.isRight = false;
    this.isFalling = false;
    this.isPlummeting = false;
    this.lives = lives;
    this.x = x;
    this.y = y;
    this.is_dead = false;
    this.game_score = 0;
    this.world = world;
  }
  draw() {
    if (this.isLeft && this.isFalling) {
      fill(color('#3E7CB9'));
      rect(this.x - 6 - 18, this.y - 36 - 8, 12, 12); //left arm
      fill(color('#893240'));
      rect(this.x - 6 - 8 - 8, this.y - 16 - 10, 12, 8); //left leg
      fill(color('#EACC86'));
      rect(this.x - 16, this.y - 58 - 6, 32, 30); //head
      fill(color('#DE2A38'));
      rect(this.x - 14, this.y - 28 - 6, 28, 16); //body
      fill(color('#AA336B'));
      rect(this.x - 6 + 18, this.y - 18 - 6, 2, 6); //arm shadow
      fill(color('#3E7CB9'));
      rect(this.x - 6 + 18, this.y - 36, 12, 12); //right arm
      fill(color('#893240'));
      rect(this.x - 6 + 17, this.y - 20, 12, 8); //right leg
    } else if (this.isRight && this.isFalling) {
      fill(color('#3E7CB9'));
      rect(this.x - 6 + 18, this.y - 36 - 8, 12, 12); //right arm
      fill(color('#893240'));
      rect(this.x - 6 + 17, this.y - 16 - 10, 12, 8); //right leg
      fill(color('#EACC86'));
      rect(this.x - 16, this.y - 58 - 6, 32, 30); //head
      fill(color('#DE2A38'));
      rect(this.x - 14, this.y - 28 - 6, 28, 16); //body
      fill(color('#AA336B'));
      rect(this.x - 6 - 8, this.y - 18 - 6, 2, 6); //arm shadow
      fill(color('#3E7CB9'));
      rect(this.x - 6 - 18, this.y - 36, 12, 12); //left arm
      fill(color('#893240'));
      rect(this.x - 6 - 17, this.y - 20, 12, 8); //left leg
    } else if (this.isLeft) {
      fill(color('#3E7CB9'));
      rect(this.x - 6 - 13, this.y - 30, 12, 12); //left arm
      fill(color('#EACC86'));
      rect(this.x - 16, this.y - 58, 32, 30); //head
      fill(color('#DE2A38'));
      rect(this.x - 14, this.y - 28, 28, 16); //body
      fill(color('#3E7CB9'));
      rect(this.x - 6 + 13, this.y - 30, 12, 12); //right arm
      fill(color('#AA336B'));
      rect(this.x - 6 + 14, this.y - 18, 6, 6); //arm shadow
      fill(color('#893240'));
      rect(this.x - 6 - 8, this.y - 12, 12, 8); //left leg
      rect(this.x - 6 + 8, this.y - 12, 12, 8); //right leg
    } else if (this.isRight) {
      fill(color('#3E7CB9'));
      rect(this.x - 6 + 13, this.y - 30, 12, 12); //right arm
      fill(color('#EACC86'));
      rect(this.x - 16, this.y - 58, 32, 30); //head
      fill(color('#DE2A38'));
      rect(this.x - 14, this.y - 28, 28, 16); //body
      fill(color('#3E7CB9'));
      rect(this.x - 6 - 13, this.y - 30, 12, 12); //left arm
      fill(color('#AA336B'));
      rect(this.x - 6 - 8, this.y - 18, 6, 6); //arm shadow
      fill(color('#893240'));
      rect(this.x - 6 - 8, this.y - 12, 12, 8); //left leg
      rect(this.x - 6 + 8, this.y - 12, 12, 8); //right leg
    } else if (this.isFalling || this.isPlummeting) {
      fill(color('#EACC86'));
      rect(this.x - 16, this.y - 58 - 6, 32, 30); //head
      fill(color('#DE2A38'));
      rect(this.x - 14, this.y - 28 - 6, 28, 16); //body
      fill(color('#3E7CB9'));
      rect(this.x - 6 - 18, this.y - 36 - 8, 12, 12); //left arm
      rect(this.x - 6 + 18, this.y - 36 - 8, 12, 12); //right arm
      fill(color('#893240'));
      rect(this.x - 6 - 8, this.y - 16, 12, 8); //left leg
      rect(this.x - 6 + 8, this.y - 16, 12, 8); //right leg
    } else {
      fill(color('#EACC86'));
      rect(this.x - 16, this.y - 58, 32, 30); //head
      fill(color('#DE2A38'));
      rect(this.x - 14, this.y - 28, 28, 16); //body
      fill(color('#3E7CB9'));
      rect(this.x - 6 - 13, this.y - 30, 12, 12); //left arm
      rect(this.x - 6 + 13, this.y - 30, 12, 12); //right arm
      fill(color('#893240'));
      rect(this.x - 6 - 8, this.y - 12, 12, 8); //left leg
      rect(this.x - 6 + 8, this.y - 12, 12, 8); //right leg
    }
    this.drawGameOver();
  }

  update() {
    // Logic to make the game character move or the background scroll.
    if (this.isLeft) {
      if (this.x > width * 0.2) {
        this.x -= 5;
      } else {
        this.world.scrollPos += 5;
      }
    }
    if (this.isRight) {
      if (this.x < width * 0.8) {
        this.x += 5;
      } else {
        this.world.scrollPos -= 5; // negative for moving against the background
      }
    }

    // Logic to make the game character rise and fall.
    if (this.isFalling) {
      this.y += 3;
      if (this.y >= world.floorPos_y) {
        this.isFalling = false;
      }
    }

    if (this.isPlummeting) {
      if (this.y - 12 <= 576 - 8) {
        this.y += 7;
      }
      this.isLeft = false;
      this.isRight = false;
    }
    this.checkPlayerDie();
  }

  drawGameOver() {
    // Show Fame over and Level complete and return
    if (this.lives < 1) {
      fill(245, 215, 194, 180);
      rect(width / 2 - 250, 120, 500, 180);
      textSize(60);
      fill(215, 86, 23);
      text('Game Over', 345, 210);
      textSize(22);
      text('Press space to continue', 390, 260);
      return;
    }
  }

  keyPressed() {
    if (this.isPlummeting == false) {
      if (keyCode == 37) {
        this.isLeft = true;
      } else if (keyCode == 39) {
        this.isRight = true;
      } else if (keyCode == 32 && this.y >= this.world.floorPos_y) {
        this.y -= 100;
        this.isFalling = true;
        assets.jumpSound.play();
      }
    }
  }

  keyReleased() {
    if (keyCode == 37) {
      this.isLeft = false;
    } else if (keyCode == 39) {
      this.isRight = false;
    }
  }

  minusLives() {
    this.lives -= 1;
    this.world.resetCharacter(this);
  }

  checkPlayerDie() {
    if (!this.is_dead && this.lives > 0 && this.y - 12 >= 576 - 8) {
      this.is_dead = true;
      setTimeout(() => this.minusLives(), 500);
    }
  }
}

class Cloud {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  draw() {
    fill(255);
    ellipse(this.x + 110, this.y + 40, 60, 60);
    ellipse(this.x + 85, this.y + 40, 50, 50);
    ellipse(this.x + 125, this.y + 20, 40, 40);
    ellipse(this.x + 145, this.y + 40, 60, 60);
    ellipse(this.x + 165, this.y + 40, 40, 40);
  }
  update() {
    this.x += 0.05;
  }
}

class CactusMountain {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  draw() {
    fill(75, 102, 52);
    ellipse(this.x + 500 - 250 + 60, this.y + 170, 160);
    rect(this.x + 460 - 250 + 20, this.y + 170, 160, 240 - 78);
    drawPricklesL(5, this.x + 255, this.y + 99, 8, 20);
    drawPricklesL(7, this.x + 285, this.y + 99, 8, 20);
    drawPricklesR(12, this.x + 327, this.y + 99, 8, 20);
    drawPricklesR(12, this.x + 371, this.y + 99, 8, 20);

    fill(120, 145, 66);
    arc(this.x + 420 - 250 + 60, this.y + 270, 160, 160, PI, TWO_PI, CHORD);
    rect(this.x + 380 - 230, this.y + 270, 160, 144 - 82);
    drawPricklesL(7, this.x + 170, this.y + 200, 8, 20);
    drawPricklesL(7, this.x + 200, this.y + 200, 8, 20);
    drawPricklesR(7, this.x + 240, this.y + 200, 8, 20);
    drawPricklesR(7, this.x + 290, this.y + 200, 8, 20);

    fill(149, 176, 95);
    arc(this.x + 655 - 280, this.y + 332, 160, 160, PI, TWO_PI, CHORD);
    drawPricklesL(4, this.x + 320, this.y + 255, 8, 20);
    drawPricklesL(4, this.x + 350, this.y + 255, 8, 20);
    drawPricklesR(4, this.x + 385, this.y + 255, 8, 20);
    drawPricklesR(4, this.x + 430, this.y + 255, 8, 20);

    function drawPricklesL(num, x, y, len, density) {
      push();
      stroke(0);
      strokeWeight(3);
      for (var j = 1; j < num; j++) {
        line(x, y + j * density, x - len, y + len + j * density);
      }
      pop();
    }

    function drawPricklesR(num, x, y, len, density) {
      push();
      stroke(0);
      strokeWeight(3);
      for (var j = 1; j < num; j++) {
        line(x, y + j * density, x + len, y + len + j * density);
      }
      pop();
    }
  }
}

class Canyon {
  constructor(x, y, width) {
    this.x = x;
    this.y = y;
    this.width = width;
  }
  draw() {
    fill(0);
    rect(this.x + 40, this.y, this.width - 16, height - this.y);
  }

  update(character) {
    if (!character.isPlummeting) {
      this.checkCanyon(character);
    }
  }

  checkCanyon(character) {
    if (
      this.x + 40 + this.width - 16 >= character.world.gameChar_world_x - 6 + 13 + 12 &&
      character.world.gameChar_world_x - 6 - 13 >= this.x + 40 &&
      character.y >= this.y
    ) {
      character.isPlummeting = true;
      assets.fallSound.play();
    }
  }
}

class CactusTree {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  draw() {
    fill(120, 146, 67);
    rect(this.x, this.y - 40, 24, 40);
    ellipse(this.x - 2, this.y - 50, 26, 49);
    ellipse(this.x + 28, this.y - 32, 26, 49);
  }
}

class Collectable {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.isFound = false;
  }
  draw() {
    if (!this.isFound) {
      image(assets.diamond, this.x + 320, this.y + 299);
    }
  }

  update(character) {
    if (!this.isFound) {
      this.checkCollectable(character);
    }
  }

  checkCollectable(character) {
    if (dist(character.world.gameChar_world_x - 14, character.y - 28, this.x + 320, this.y + 305) < 25) {
      this.isFound = true;
      character.game_score += 1;
      assets.collectItemSound.play();
    }
  }
}

class Flagpole {
  constructor(x, y, world) {
    this.x = x;
    this.y = y;
    this.isReached = false;
    this.world = world;
  }
  draw() {
    push();
    stroke(179, 174, 168);
    strokeWeight(5);
    line(this.x, this.y - 4, this.x, this.y - 180);
    pop();
    fill(247, 62, 92);
    if (this.isReached) {
      triangle(this.x - 1, this.y - 180 - 10, this.x - 52, this.y - 180 - 10 + 30, this.x - 1, this.y - 180 - 10 + 40);
      this.showGameEnd();
    } else {
      triangle(
        this.x - 1,
        this.y - 180 - 10 + 139,
        this.x - 52,
        this.y - 180 - 10 + 30 + 139,
        this.x - 1,
        this.y - 180 - 10 + 40 + 139,
      );
    }
    fill(217, 54, 81);
    ellipse(this.x, this.y - 180 - 7, 14);
    fill(33, 35, 28);
    rect(this.x - 20, this.y - 10, 40, 10);
  }

  update() {
    if (!this.isReached && abs(this.world.gameChar_world_x - this.x) < 15) {
      assets.flagSound.play();
      this.isReached = true;
    }
  }

  showGameEnd() {
    fill(247, 240, 232, 180);
    rect(width / 2 - 280 - this.world.scrollPos, 120, 560, 180);
    textSize(60);
    fill(255, 140, 0);
    text('Level complete', 315 - this.world.scrollPos, 210);
    textSize(22);
    text('Press space to continue', 390 - this.world.scrollPos, 260);
  }
}

class Scoreborad {
  draw(character) {
    fill(255);
    textSize(16);
    text('Game score: ' + character.game_score, 20, 26);
    text('Lives: ', 20, 50);
    for (var i = 0; i < character.lives; i++) {
      noStroke();
      fill(255, 215, 0);
      this.star(80 + i * 20, 46, 5, 10, 5);
    }
  }

  star(x, y, radius1, radius2, npoints) {
    let angle = TWO_PI / npoints;
    let halfAngle = angle / 2.0;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = x + cos(a) * radius2;
      let sy = y + sin(a) * radius2;
      vertex(sx, sy);
      sx = x + cos(a + halfAngle) * radius1;
      sy = y + sin(a + halfAngle) * radius1;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }
}

class Assets {
  constructor() {
    this.diamond = loadImage('image/diamond38.png');
    soundFormats('mp3', 'wav');
    this.jumpSound = loadSound('assets/smb_jump-small.wav');
    this.jumpSound.setVolume(0.2);
    this.collectItemSound = loadSound('assets/smw_coin.wav');
    this.flagSound = loadSound('assets/smb_flagpole.wav');
    this.flagSound.setVolume(0.2);
    this.fallSound = loadSound('assets/415991__matrixxx__retro-drop-01.wav');
    this.fallSound.setVolume(0.1);
  }
}

class World {
  constructor() {
    this.gameChar_world_x = 0;
    this.scrollPos = 0;
    this.floorPos_y = (height * 3) / 4;
    this.cactusTrees = [-800, -400, 100, 360, 1000, 1300, 1900, 2000, 2500, 3000].map(
      (x) => new CactusTree(x, this.floorPos_y),
    );
    this.clouds = [
      new Cloud(-1500, 150),
      new Cloud(-900, 100),
      new Cloud(-300, 190),
      new Cloud(100, 100),
      new Cloud(600, 200),
      new Cloud(800, 100),
      new Cloud(1200, 230),
      new Cloud(1700, 160),
      new Cloud(1900, 100),
      new Cloud(2500, 100),
      new Cloud(2700, 200),
      new Cloud(3100, 80),
      new Cloud(3300, 150),
    ];
    // this.clouds = [
    //   { x: 100, y: 100 },
    //   { x: 600, y: 200 },
    // ].map(({ x, y }) => new Cloud(x, y));
    this.cactusMountains = [
      new CactusMountain(-410, 100),
      new CactusMountain(300, 100),
      new CactusMountain(1250, 100),
      new CactusMountain(2000, 100),
      new CactusMountain(3000, 100),
    ];
    this.canyons = [
      new Canyon(180, this.floorPos_y, 100),
      new Canyon(760, this.floorPos_y, 100),
      new Canyon(1080, this.floorPos_y, 100),
      new Canyon(1700, this.floorPos_y, 100),
      new Canyon(2700, this.floorPos_y, 100),
    ];
    this.collectable = [
      new Collectable(70, 100),
      new Collectable(620, 100),
      new Collectable(1550, 100),
      new Collectable(1900, 100),
      new Collectable(2600, 100),
      new Collectable(3150, 100),
      new Collectable(3200, 100),
      new Collectable(3250, 100),
    ];
    this.flagpole = new Flagpole(3700, this.floorPos_y, this);
    this.scoreboard = new Scoreborad();
    this.character = new Character(width / 2, this.floorPos_y, 3, this);
  }
  draw() {
    background(98, 109, 253); // fill the sky blue
    noStroke();
    fill(226, 211, 103);
    rect(0, this.floorPos_y, width, height / 4); // draw some green ground

    push();
    translate(this.scrollPos, 0);
    this.clouds.map((c) => c.draw());
    this.cactusMountains.map((c) => c.draw());
    this.cactusTrees.map((c) => c.draw());
    this.canyons.map((c) => c.draw());
    this.collectable.map((c) => c.draw());
    this.flagpole.draw();
    pop();

    this.scoreboard.draw(this.character);
    this.character.draw();
  }

  update() {
    this.gameChar_world_x = this.character.x - this.scrollPos;
    this.character.update();
    this.clouds.map((c) => c.update());
    this.canyons.map((c) => c.update(this.character));
    this.collectable.map((c) => c.update(this.character));
    this.flagpole.update();
  }

  resetCharacter(lastCharacter) {
    this.character = new Character(width / 2, this.floorPos_y, lastCharacter.lives, this);
  }
}

var assets;
var world;

function preload() {
  assets = new Assets();
}

function setup() {
  createCanvas(1024, 576);
  world = new World();
}

function draw() {
  world.draw();
  world.update();
}

function keyReleased() {
  world.character.keyReleased();
}
function keyPressed() {
  world.character.keyPressed();
}
