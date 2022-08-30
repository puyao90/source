// function getPlayer(trigger, resetter, checkInterval = 30) {
//   return {
//     played: false,
//     // triggered by level change, only return once true value in a period
//     shouldPlay: function () {
//       if (this.played && resetter()) {
//         this.played = false;
//       }
//       if (trigger() && !this.played) {
//         this.played = true;
//         // this.scheduleReset();
//         return true;
//       }
//     },
//     //   // evaluate resetter and check in future, default 30ms, check 30 times every 1s
//     //   scheduleReset: function () {
//     //     setTimeout(() => {
//     //       // console.log('check we can reset, and play next time', resetter());
//     //       if (resetter()) {
//     //         this.played = false;
//     //       } else {
//     //         this.scheduleReset();
//     //       }
//     //     }, checkInterval);
//     //   },
//     // };
//   };
// }

class Character {
  constructor(gameChar_screen_x, y, lives, gameScore, world) {
    this.isLeft = false;
    this.isRight = false;
    this.isFalling = false;
    this.isPlummeting = false;
    this.lives = lives;
    this.gameChar_screen_x = gameChar_screen_x;
    this.gameChar_world_x = gameChar_screen_x;
    this.y = y;
    this.is_dead = false;
    this.freeze = false;
    this.gameScore = gameScore;
    this.world = world;
    this.init_x = gameChar_screen_x;
    this.init_y = y;
    this.flashing = false;
    this.flashingFrameCount = 0;
    this.catchByUFO = false;
    this.speed_x = 0;
    this.speed_y = 0;
    this.scale_speed = 0;
    this.scale_size = 1;
    this.contactBarrierLeft = false;
    this.contactBarrierRight = false;
  }

  drawStandingFrontFacing() {
    fill(color('#EACC86'));
    rect(this.gameChar_world_x - 16, this.y - 58 + 3, 32, 30); //head
    fill(color('#DE2A38'));
    rect(this.gameChar_world_x - 14, this.y - 28 + 3, 28, 16); //body
    fill(color('#3E7CB9'));
    rect(this.gameChar_world_x - 6 - 13, this.y - 30 + 3, 12, 12); //left arm
    rect(this.gameChar_world_x - 6 + 13, this.y - 30 + 3, 12, 12); //right arm
    fill(color('#893240'));
    rect(this.gameChar_world_x - 6 - 8, this.y - 9, 12, 8); //left leg
    rect(this.gameChar_world_x - 6 + 8, this.y - 9, 12, 8); //right leg
  }

  draw() {
    // console.log(this.gameChar_world_x);
    if (this.scale_speed > 0) {
      push();
      translate(this.gameChar_world_x - 16, this.y - 58 - 6 + 3);
      this.scale_size = this.scale_speed * this.scale_size;
      scale(this.scale_size);
      fill(color('#EACC86'));
      rect(0, 0, 32, 30); //head
      fill(color('#DE2A38'));
      rect(2, 30, 28, 16); //body
      fill(color('#3E7CB9'));
      rect(-8, 20, 12, 12); //left arm
      rect(28, 20, 12, 12); //right arm
      fill(color('#893240'));
      rect(2, 48, 12, 8); //left leg
      rect(18, 48, 12, 8); //right leg
      pop();
    } else {
      if (this.flashing && this.lives > 0) {
        if (
          (this.flashingFrameCount > 10 && this.flashingFrameCount < 20) ||
          (this.flashingFrameCount > 30 && this.flashingFrameCount < 40) ||
          (this.flashingFrameCount > 50 && this.flashingFrameCount < 60)
        ) {
          this.drawStandingFrontFacing();
        }
        if (this.flashingFrameCount >= 70) {
          this.flashing = false;
        }
        this.flashingFrameCount += 1;
        // return;
      } else {
        if (this.isLeft && this.isFalling) {
          fill(color('#3E7CB9'));
          rect(this.gameChar_world_x - 6 - 18, this.y - 36 - 8 + 3, 12, 12); //left arm
          fill(color('#893240'));
          rect(this.gameChar_world_x - 6 - 8 - 8, this.y - 16 - 10 + 3, 12, 8); //left leg
          fill(color('#EACC86'));
          rect(this.gameChar_world_x - 16, this.y - 58 - 6 + 3, 32, 30); //head
          fill(color('#DE2A38'));
          rect(this.gameChar_world_x - 14, this.y - 28 - 6 + 3, 28, 16); //body
          fill(color('#AA336B'));
          rect(this.gameChar_world_x - 6 + 18, this.y - 18 - 6 + 3, 2, 6); //arm shadow
          fill(color('#3E7CB9'));
          rect(this.gameChar_world_x - 6 + 18, this.y - 36 + 3, 12, 12); //right arm
          fill(color('#893240'));
          rect(this.gameChar_world_x - 6 + 17, this.y - 20 + 3, 12, 8); //right leg
        } else if (this.isRight && this.isFalling) {
          fill(color('#3E7CB9'));
          rect(this.gameChar_world_x - 6 + 18, this.y - 36 - 8 + 3, 12, 12); //right arm
          fill(color('#893240'));
          rect(this.gameChar_world_x - 6 + 17, this.y - 16 - 10 + 3, 12, 8); //right leg
          fill(color('#EACC86'));
          rect(this.gameChar_world_x - 16, this.y - 58 - 6 + 3, 32, 30); //head
          fill(color('#DE2A38'));
          rect(this.gameChar_world_x - 14, this.y - 28 - 6 + 3, 28, 16); //body
          fill(color('#AA336B'));
          rect(this.gameChar_world_x - 6 - 8, this.y - 18 - 6 + 3, 2, 6); //arm shadow
          fill(color('#3E7CB9'));
          rect(this.gameChar_world_x - 6 - 18, this.y - 36 + 3, 12, 12); //left arm
          fill(color('#893240'));
          rect(this.gameChar_world_x - 6 - 17, this.y - 20 + 3, 12, 8); //left leg
        } else if (this.isLeft) {
          fill(color('#3E7CB9'));
          rect(this.gameChar_world_x - 6 - 13, this.y - 30 + 3, 12, 12); //left arm
          fill(color('#EACC86'));
          rect(this.gameChar_world_x - 16, this.y - 58 + 3, 32, 30); //head
          fill(color('#DE2A38'));
          rect(this.gameChar_world_x - 14, this.y - 28 + 3, 28, 16); //body
          fill(color('#3E7CB9'));
          rect(this.gameChar_world_x - 6 + 13, this.y - 30 + 3, 12, 12); //right arm
          fill(color('#AA336B'));
          rect(this.gameChar_world_x - 6 + 14, this.y - 18 + 3, 6, 6); //arm shadow
          fill(color('#893240'));
          rect(this.gameChar_world_x - 6 - 8, this.y - 12 + 3, 12, 8); //left leg
          rect(this.gameChar_world_x - 6 + 8, this.y - 12 + 3, 12, 8); //right leg
        } else if (this.isRight) {
          fill(color('#3E7CB9'));
          rect(this.gameChar_world_x - 6 + 13, this.y - 30 + 3, 12, 12); //right arm
          fill(color('#EACC86'));
          rect(this.gameChar_world_x - 16, this.y - 58 + 3, 32, 30); //head
          fill(color('#DE2A38'));
          rect(this.gameChar_world_x - 14, this.y - 28 + 3, 28, 16); //body
          fill(color('#3E7CB9'));
          rect(this.gameChar_world_x - 6 - 13, this.y - 30 + 3, 12, 12); //left arm
          fill(color('#AA336B'));
          rect(this.gameChar_world_x - 6 - 8, this.y - 18 + 3, 6, 6); //arm shadow
          fill(color('#893240'));
          rect(this.gameChar_world_x - 6 - 8, this.y - 12 + 3, 12, 8); //left leg
          rect(this.gameChar_world_x - 6 + 8, this.y - 12 + 3, 12, 8); //right leg
        } else if (this.isFalling || this.isPlummeting) {
          fill(color('#EACC86'));
          rect(this.gameChar_world_x - 16, this.y - 58 - 6 + 3, 32, 30); //head
          fill(color('#DE2A38'));
          rect(this.gameChar_world_x - 14, this.y - 28 - 6 + 3, 28, 16); //body
          fill(color('#3E7CB9'));
          rect(this.gameChar_world_x - 6 - 18, this.y - 36 - 8 + 3, 12, 12); //left arm
          rect(this.gameChar_world_x - 6 + 18, this.y - 36 - 8 + 3, 12, 12); //right arm
          fill(color('#893240'));
          rect(this.gameChar_world_x - 6 - 8, this.y - 16 + 3, 12, 8); //left leg
          rect(this.gameChar_world_x - 6 + 8, this.y - 16 + 3, 12, 8); //right leg
        } else {
          this.drawStandingFrontFacing();
        }
      }
    }
  }

  update() {
    if (this.freeze || this.is_dead) {
      return;
    }

    if (this.catchByUFO) {
      if (this.speed_x + this.speed_y == 0) {
        // let delta_x = this.gameChar_world_x - (this.catchByUFO.x + this.catchByUFO.width / 2);
        let delta_y = this.y - 56 - (this.catchByUFO.y + 10);
        // this.speed_x = delta_x / 200;
        this.speed_y = delta_y / 200;
        this.scale_speed = 0.995;
      }
      this.y -= this.speed_y;
      // this.gameChar_world_x -= this.speed_x;
      this.gameChar_world_x = this.catchByUFO.x + this.catchByUFO.width / 2 + 10;
      if (this.y - 56 < this.catchByUFO.y + 10) {
        // this.speed_x = 0;
        this.speed_y = 0;
        this.checkPlayerDie();
      }
      return;
    }
    if (this.isLeft && !this.contactBarrierRight) {
      this.gameChar_world_x -= 5;
    }
    if (this.isRight && !this.contactBarrierLeft) {
      this.gameChar_world_x += 5;
    }
    for (let i = 0; i < this.world.torchs.length; i++) {
      if (this.checkBarrierLeft(this.world.torchs[i])) {
        console.log('l');
        this.contactBarrierLeft = true;
        break;
      } else {
        this.contactBarrierLeft = false;
      }
    }
    for (let i = 0; i < this.world.torchs.length; i++) {
      if (this.checkBarrierRight(this.world.torchs[i])) {
        console.log('r');
        this.contactBarrierRight = true;
        break;
      } else {
        this.contactBarrierRight = false;
      }
    }

    // Logic to make the game character rise and fall.
    if (this.y < this.world.floorPos_y) {
      let isContact = false;
      for (let i = 0; i < world.platformStatic.length; i++) {
        if (this.checkPlatform(world.platformStatic[i])) {
          isContact = true;
          this.y = world.platformStatic[i].y;
          this.isFalling = false;
          break;
        }
      }
      for (let i = 0; i < world.movingPlatform.length; i++) {
        if (this.checkPlatform(world.movingPlatform[i])) {
          isContact = true;
          this.gameChar_world_x += world.movingPlatform[i].dir;
          this.isFalling = false;
          break;
        }
      }
      for (let i = 0; i < world.torchs.length; i++) {
        if (this.checkBarrierTop(world.torchs[i])) {
          isContact = true;
          this.y = world.torchs[i].y;
          this.isFalling = false;
          break;
        }
      }
      if (!isContact) {
        this.isFalling = true;
        if (this.isFalling) {
          this.y += 3;
          if (this.y >= this.world.floorPos_y) {
            this.y = this.world.floorPos_y;
          }
        }
      }
    } else {
      this.isFalling = false;
    }

    if (this.isPlummeting && this.y - 12 <= height - 8) {
      this.y += 7;
      this.isLeft = false;
      this.isRight = false;
      if (this.y - 12 >= height - 8) {
        this.checkPlayerDie();
      }
    }
  }

  checkPlatform(p) {
    return (
      this.gameChar_world_x > p.x && this.gameChar_world_x < p.x + p.width && p.y - this.y >= 0 && p.y - this.y < 4
    );
  }

  checkBarrierLeft(b) {
    return b.x - (this.gameChar_world_x + 19) >= 0 && b.x - (this.gameChar_world_x + 19) <= 5 && this.y > b.y;
  }
  checkBarrierRight(b) {
    return (
      this.gameChar_world_x - 19 - (b.x + b.width) >= 0 &&
      this.gameChar_world_x - 19 - (b.x + b.width) <= 5 &&
      this.y > b.y
    );
  }
  checkBarrierTop(b) {
    return (
      this.gameChar_world_x + 19 > b.x &&
      this.gameChar_world_x - 19 < b.x + b.width &&
      b.y - this.y >= 0 &&
      b.y - this.y < 3
    );
  }

  keyPressed() {
    if (this.lives == 0 || this.world.flagpole.isReached) {
      if (keyCode == 32 || key == 'w') {
        world = new World(3);
      }
    }
    if (this.freeze || this.is_dead) {
      return;
    }
    if (!this.isPlummeting) {
      if (keyCode == 37 || key == 'a') {
        this.isLeft = true;
      } else if (keyCode == 39 || key == 'd') {
        this.isRight = true;
      } else if ((keyCode == 32 || key == 'w') && !this.isFalling) {
        this.y -= 100;
        assets.jumpSound.play();
      }
    }
  }

  keyReleased() {
    if (this.freeze || this.is_dead) {
      return;
    }
    if (keyCode == 37 || key == 'a') {
      this.isLeft = false;
    } else if (keyCode == 39 || key == 'd') {
      this.isRight = false;
    }
  }

  minusLives() {
    this.lives -= 1;
    if (this.lives > 0) {
      world = new World(this.lives);
    }
  }

  checkPlayerDie() {
    assets.lostALifeSound.play();
    if (!this.is_dead && this.lives > 0) {
      this.is_dead = true;
      setTimeout(() => this.minusLives(), 2500);
    }
  }
}

class Platforms {
  constructor(x, y, width) {
    this.x = x;
    this.y = y;
    this.width = width;
  }
  draw() {
    fill(107, 68, 52);
    rect(this.x, this.y, this.width, 20, 10);
    fill(181, 139, 94);
    rect(this.x + 4, this.y, this.width - 8, 4, 10);
  }
}

class MovingPlatforms extends Platforms {
  constructor(x, y, width, range, dir = 1) {
    super(x, y, width);
    this.anchor = x;
    this.range = range;
    this.dir = dir;
  }
  update() {
    this.x += this.dir;
    if (abs(this.x - this.anchor) > this.range) {
      this.dir *= -1;
    }
  }
}
class Torch {
  constructor(x, y, width, height, frame = 0) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.fire = false;
    this.frame = frame;
    this.hurtCharacter = false;
  }
  draw() {
    if (this.fire) {
      image(assets.fire, this.x, this.y - 56, this.width, 56);
    }
    fill(247, 152, 0);
    rect(this.x, this.y, this.width, this.height - 70, 10);
    fill(195, 115, 0);
    rect(this.x, this.y + (this.height - 70), this.width, this.height - 70, 10);
    fill(209, 58, 17);
    rect(this.x + 4, this.y + (this.height - 70) + (this.height - 70), this.width - 8, this.height - 20);
  }
  update(character) {
    if (!this.hurtCharacter && this.fire && this.checkHurt(character)) {
      this.hurtCharacter = true;
      character.checkPlayerDie();
      return;
    }

    this.frame += 1;
    if (this.frame == 100) {
      if (character.gameChar_world_x > 1650 && character.gameChar_world_x < 3300) {
        assets.fireSound.play();
      }
      this.fire = true;
    }
    if (this.frame == 200) {
      this.fire = false;
      this.frame = 0;
    }
  }
  checkHurt(character) {
    return (
      character.gameChar_world_x > this.x &&
      character.gameChar_world_x < this.x + this.width &&
      character.y <= this.y &&
      character.y >= this.y - 56
    );
  }
}

class BackgroundSky {
  constructor(dayColor, nightColor) {
    this.dayColor = dayColor;
    this.nightColor = nightColor;
    this.currentColor = color(dayColor.levels[0], dayColor.levels[1], dayColor.levels[2]);
  }
  draw() {
    background(this.currentColor);
  }
  update(characterPosX) {
    if (characterPosX >= 1500) {
      this.currentColor = gradient(characterPosX, 1500, 2100, this.dayColor, this.nightColor);
    }
    if (characterPosX > 2100) {
      this.currentColor = this.nightColor;
    }
  }
}
class Crabs {
  constructor(x, y, range, width, height, dir = 1) {
    this.x = x;
    this.y = y;
    this.yInit = y;
    this.width = width;
    this.height = height;
    this.heightInit = height;
    this.anchor = x;
    this.range = range;
    this.dir = dir;
    this.killed = false;
    this.squashed = false;
    this.hurtCharacter = false;
  }
  draw() {
    if (!this.killed) {
      fill(70);
      image(assets.crab, this.x, this.y, this.width, this.height);
    }
  }

  update(character) {
    // console.log(this.squashed);
    if (this.killed || character.is_dead) {
      return;
    }
    this.roaming();
    this.fold();
    if (!this.squashed && !character.is_dead && this.checkNearby(world.character)) {
      if (character.isFalling) {
        this.squashed = true;
        assets.stompSound.play();
        setTimeout(
          (function (crab) {
            return () => (crab.killed = true);
          })(this),
          2000,
        );
      } else {
        this.hurtCharacter = true;
        character.checkPlayerDie();
      }
    }
  }

  fold() {
    if (this.squashed) {
      if (this.y < this.yInit + this.heightInit - 8 && this.height > 8) {
        this.y += 1.5;
        this.height -= 1.5;
      }
    }
  }

  roaming() {
    if (!this.squashed) {
      this.x += this.dir;
      if (abs(this.x - this.anchor) > this.range) {
        this.dir *= -1;
      }
    }
  }

  checkNearby(character) {
    // console.log(character.isFalling);
    if (
      dist(character.gameChar_world_x, character.y - 17, this.x + this.width / 2, this.y + this.height / 2) <
      this.width / 2 + 18
    ) {
      return true;
    }
    return false;
  }
}
class Fishs {
  constructor(x, y, width, height, startSpeed = -8, gravity = 0.15, world) {
    this.x = x;
    this.yInit = y;
    this.y = y;
    this.width = width;
    this.height = height;
    this.startSpeed = startSpeed;
    this.currentSpeed = startSpeed;
    this.gravity = gravity;
    // this.playSound = false;
    // this.playedSound = false;
    this.killed = false;
    this.world = world;
    this.disappear = false;
    // this.player = getPlayer(
    //   () => this.y > 458 && this.y < 468,
    //   () => this.y > 480,
    //   30,
    // );
  }
  draw() {
    if (!this.disappear) {
      fill(100);
      image(assets.fish, this.x, this.y, this.width, this.height);
    }
  }
  update() {
    if (this.world.character.is_dead) {
      return;
    }
    this.currentSpeed += this.gravity;
    this.y += this.currentSpeed;
    if (450 >= this.y && 450 < this.y + this.currentSpeed && this.world.character.gameChar_world_x < 2037) {
      assets.waterSplashSound.play();
    }
    if (this.y > this.yInit && !this.killed) {
      this.y = this.yInit;
      // this.playedSound = false;
      this.currentSpeed = this.startSpeed;
    }

    // if (!this.playedSound && this.y > 458 && this.y < 468) {
    //   this.playSound = true;
    // } else {
    //   this.playSound = false;
    // }
    // if (!this.playedSound && this.playSound) {
    //   assets.waterSplashSound.play();
    //   this.playedSound = true;
    // }

    // if (this.player.shouldPlay()) {
    //   assets.waterSplashSound.play();
    // }

    if (this.killed) {
      this.currentSpeed = 5;
      if (this.y > height + 50) {
        this.disappear = true;
      }
    }

    if (!this.killed && !this.world.character.is_dead && this.checkNearby(this.world.character)) {
      if (this.world.character.isFalling) {
        this.killed = true;
        assets.stompSound.play();
      } else {
        this.world.character.checkPlayerDie();
      }
    }
  }
  checkNearby(character) {
    if (
      dist(character.gameChar_world_x, character.y - 17, this.x + this.width / 2, this.y + this.height / 2) <
      this.width / 2 + 18
    ) {
      return true;
    }
    return false;
  }
}

class UFO {
  constructor(x, y, width, height, world, range = 280) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.world = world;
    this.shoot = false;
    this.frame = 0;
    this.anchor = x;
    this.range = range;
    this.dir = 1;
  }

  draw() {
    fill(100);
    image(assets.ufo, this.x, this.y, this.width, this.height);
    if (this.shoot) {
      fill(247, 204, 76, 130);
      beginShape();
      vertex(this.x + this.width / 2 - 10, this.y + this.height - 6);
      vertex(this.x + this.width / 2 + 10, this.y + this.height - 6);
      vertex(this.x + this.width / 2 + 80, 432);
      vertex(this.x + this.width / 2 - 80, 432);
      endShape();
    }
  }

  update(character) {
    if (character.catchByUFO) {
      return;
    }
    this.x += this.dir;
    if (abs(this.x - this.anchor) > this.range) {
      this.dir *= -1;
    }
    this.frame += 1;
    if (this.frame == 175) {
      if (character.gameChar_world_x > 1437 && character.gameChar_world_x < 2870) {
        assets.ufoRays.play();
      }
      this.shoot = true;
    }
    if (this.frame == 350) {
      this.shoot = false;
      this.frame = 0;
    }
    if (!character.catchByUFO && this.shoot && this.checkCapture(character)) {
      for (const t of this.world.torchs) {
        if (t.hurtCharacter) {
          return;
        }
      }
      for (const c of this.world.crabs) {
        if (c.hurtCharacter) {
          return;
        }
      }
      character.catchByUFO = this;
      assets.ufoSound.play();
    }
  }
  checkCapture(character) {
    let t = 56 / (432 - (this.y + this.height));
    return (
      character.gameChar_world_x > this.x + this.width / 2 - 66 + (432 - character.y) * t &&
      character.gameChar_world_x < this.x + this.width / 2 + 66 - (432 - character.y) * t
    );
  }
}

class Cloud {
  constructor(x, y, backgroundSky) {
    this.x = x;
    this.y = y;
    this.backgroundSky = backgroundSky;
    this.startColor = color(255);
    this.currentColor = color(this.startColor.levels[0], this.startColor.levels[1], this.startColor.levels[2]);
    this.hide = false;
  }

  draw() {
    if (!this.hide) {
      fill(this.currentColor);
      ellipse(this.x + 110, this.y + 40, 60, 60);
      ellipse(this.x + 85, this.y + 40, 50, 50);
      ellipse(this.x + 125, this.y + 20, 40, 40);
      ellipse(this.x + 145, this.y + 40, 60, 60);
      ellipse(this.x + 165, this.y + 40, 40, 40);
    }
  }
  update(characterPosX) {
    this.x += 0.15;
    if (characterPosX >= 1500) {
      this.currentColor = gradient(characterPosX, 1500, 2100, this.startColor, color(20, 16, 70));
    }
    if (characterPosX > 2100) {
      this.currentColor = color(20, 16, 70);
      this.hide = true;
    }
  }
}
class Stars {
  constructor() {
    this.startColor = color(241, 242, 226, 0);
    this.currentColor = color(
      this.startColor.levels[0],
      this.startColor.levels[1],
      this.startColor.levels[2],
      this.startColor.levels[3],
    );
    this.star_posX = random(1000, 4500);
    this.star_posY = random(0, 300);
  }
  draw() {
    fill(this.currentColor);
    noStroke();
    star(this.star_posX, this.star_posY, 2, 4, 4);
  }
  update(characterPosX) {
    if (characterPosX >= 1500) {
      this.currentColor = gradient(characterPosX, 1500, 2100, this.startColor, color(241, 242, 226, 255));
    }
    if (characterPosX > 2100) {
      this.currentColor = color(241, 242, 226, 255);
    }
  }
}
class StartsRotate extends Stars {
  constructor() {
    super();
  }
  draw() {
    push();
    fill(this.currentColor);
    noStroke();
    translate(this.star_posX, this.star_posY);
    rotate(frameCount / 100.0);
    star(0, 0, 3, 9, 4);
    pop();
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
  constructor(x, y, width, backgroundSky) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.backgroundSky = backgroundSky;
  }
  draw() {
    fill(this.backgroundSky.currentColor);
    rect(this.x + 40, this.y, this.width - 16, height - this.y);
  }

  update(character) {
    if (!character.isPlummeting) {
      this.checkCanyon(character);
    }
    this.backgroundSky.update(character.gameChar_world_x);
  }

  checkCanyon(character) {
    if (
      this.x + 40 + this.width - 6 >= character.gameChar_world_x - 6 + 13 + 12 &&
      character.gameChar_world_x - 6 - 13 >= this.x + 30 &&
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
    push();
    if (!this.isFound) {
      fill(244, 185, 60);
      stroke(253, 222, 20);
      strokeWeight(5);
      rect(this.x, this.y, 14, 26, 12);
    }
    pop();
  }

  update(character) {
    if (!this.isFound && !character.catchByUFO) {
      this.checkCollectable(character);
    }
  }

  checkCollectable(character) {
    if (dist(character.gameChar_world_x, character.y - 17, this.x + 12, this.y + 14) < 31) {
      this.isFound = true;
      character.gameScore += 1;
      assets.collectItemSound.play();
    }
  }
}

class Flagpole {
  constructor(x, y, world) {
    this.x = x;
    this.y = y;
    this.triangleY = y;
    this.isReached = false;
    this.world = world;
    this.gameEnd = false;
  }
  draw() {
    push();
    stroke(179, 174, 168);
    strokeWeight(5);
    line(this.x, this.y - 4, this.x, this.y - 180);
    pop();
    fill(247, 62, 92);
    triangle(
      this.x - 1,
      this.triangleY - 180 - 10 + 139,
      this.x - 52,
      this.triangleY - 180 - 10 + 30 + 139,
      this.x - 1,
      this.triangleY - 180 - 10 + 40 + 139,
    );
    if (!this.gameEnd && this.isReached && this.triangleY <= this.y - 138) {
      this.gameEnd = true;
      assets.levelCompleteSound.play();
    }
    if (this.gameEnd) {
      this.showGameEnd();
    }
    fill(217, 54, 81);
    ellipse(this.x, this.y - 180 - 7, 14);
    fill(184, 141, 95);
    rect(this.x - 20, this.y - 10, 40, 10);
  }

  update(character) {
    // console.log(this.triangleY, this.y - 138);
    if (!this.isReached && abs(character.gameChar_world_x - this.x) < 15) {
      assets.flagSound.play();
      character.freeze = true;
      this.isReached = true;
    }
    if (this.isReached && this.triangleY > this.y - 138) {
      this.triangleY -= 2;
    }
  }

  showGameEnd() {
    fill(247, 240, 232, 180);
    rect(width / 2 - 280 + this.world.cameraPos_x, 120, 560, 180);
    textSize(60);
    fill(255, 140, 0);
    text('Level complete', 315 + this.world.cameraPos_x, 210);
    textSize(22);
    text('Press space to restart', 390 + this.world.cameraPos_x, 260);
  }
}

class Scoreborad {
  draw(character) {
    fill(255);
    textSize(16);
    text('Game score: ' + character.gameScore, 20, 26);
    text('Lives: ', 20, 50);
    for (var i = 0; i < character.lives; i++) {
      noStroke();
      fill(255, 215, 0);
      star(80 + i * 20, 46, 5, 10, 5);
    }
  }
}

class Ocean {
  constructor(x, y, wave_length = 28) {
    this.x = x;
    this.y = y;
    this.start_x = x;
    this.wave_length = wave_length;
  }
  draw() {
    image(assets.ocean, this.x, this.y);
  }
  update() {
    this.x += 0.5;
    if (this.x - this.start_x == this.wave_length) {
      this.x = this.start_x;
    }
  }
}
class Assets {
  constructor() {
    this.ocean = loadImage('image/ocean.png');
    this.crab = loadImage('image/crabpure.png');
    this.fish = loadImage('image/fishpure.png');
    this.ufo = loadImage('image/ufo.png');
    this.fire = loadImage('image/fire.png');
    soundFormats('mp3', 'wav');
    this.jumpSound = loadSound('assets/jump.wav');
    this.jumpSound.setVolume(0.2);
    this.collectItemSound = loadSound('assets/coin.wav');
    this.flagSound = loadSound('assets/flagpole.wav');
    this.flagSound.setVolume(0.2);
    this.fallSound = loadSound('assets/drop.wav');
    this.fallSound.setVolume(0.1);
    this.waterSplashSound = loadSound('assets/water_splash.mp3');
    this.waterSplashSound.setVolume(0.3);
    this.stompSound = loadSound('assets/stomp.wav');
    this.lostALifeSound = loadSound('assets/lostLife.wav');
    this.lostALifeSound.setVolume(0.5);
    this.levelCompleteSound = loadSound('assets/levelComplete.wav');
    this.fireSound = loadSound('assets/fire.wav');
    this.fireSound.setVolume(0.1);
    this.ufoSound = loadSound('assets/ufo.wav');
    this.ufoSound.setVolume(0.3);
    this.ufoRays = loadSound('assets/ufoRays2.wav');
    this.ufoRays.setVolume(0.08);
  }
}

class World {
  constructor(lives) {
    this.lives = lives;
    this.backgroundSky = new BackgroundSky(color(98, 109, 253), color(20, 16, 70));
    this.stars = [];
    for (let i = 0; i < 46; i++) {
      this.stars.push(new Stars());
    }
    for (let i = 0; i < 10; i++) {
      this.stars.push(new StartsRotate());
    }
    this.cameraPos_x = 0;
    this.camera_target_posX = 0;
    this.floorPos_y = (height * 3) / 4;
    this.cactusTrees = [-300, -200, 10, 600, 1690, 1790, 2500, 2700, 2800, 3300, 3400].map(
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
      new CactusMountain(-800, 100),
      new CactusMountain(100, 100),
      new CactusMountain(2000, 100),
      new CactusMountain(3740, 100),
    ];
    this.canyons = [
      new Canyon(20, this.floorPos_y, 100, this.backgroundSky),
      new Canyon(620, this.floorPos_y, 1000, this.backgroundSky),
      new Canyon(2867, this.floorPos_y, 350, this.backgroundSky),
    ];
    this.platformStatic = [
      new Platforms(280, this.floorPos_y - 60, 80),
      new Platforms(390, this.floorPos_y - 110, 80),
      new Platforms(490, this.floorPos_y - 170, 80),
      new Platforms(100, this.floorPos_y - 180, 300),

      new Platforms(660, this.floorPos_y - 40, 150),
      new Platforms(790, this.floorPos_y - 90, 340),
      new Platforms(1130, this.floorPos_y - 50, 520),
      // new Platforms(1505, this.floorPos_y - 105, 140),

      new Platforms(2870, this.floorPos_y - 50, 80),
      new Platforms(2950, this.floorPos_y - 110, 80),
      new Platforms(3050, this.floorPos_y - 160, 80),
      new Platforms(3150, this.floorPos_y - 120, 80),
    ];
    this.movingPlatform = [new MovingPlatforms(550, this.floorPos_y - 255, 150, 120)];
    this.torchs = [new Torch(2060, 352, 42, 80), new Torch(2360, 352, 42, 80), new Torch(2660, 352, 42, 80)];
    this.crabs = [
      new Crabs(-30, 400, 50, 40, 29),
      new Crabs(270, 400, 110, 40, 29),
      new Crabs(270, 220, 60, 40, 29),
      new Crabs(2210, 400, 50, 40, 29),
      new Crabs(2540, 400, 70, 40, 29),
    ];
    this.fishs = [
      new Fishs(700, 490, 32, 32, -9.2, 0.15, this),
      new Fishs(990, 490, 32, 32, -8, 0.15, this),
      new Fishs(1090, 530, 32, 32, -8, 0.15, this),
      new Fishs(1450, 470, 32, 32, -9.2, 0.15, this),
    ];
    this.ufo = new UFO(2060, 100, 100, 55, this);
    this.collectable = [
      new Collectable(540, 110),
      new Collectable(572, 110),
      new Collectable(604, 110),
      new Collectable(636, 110),

      new Collectable(108, 213),
      new Collectable(140, 213),
      new Collectable(172, 213),

      new Collectable(700, 330),
      new Collectable(732, 330),
      new Collectable(700, 290),
      new Collectable(732, 290),

      new Collectable(908, 250),
      new Collectable(940, 250),
      new Collectable(972, 250),
      new Collectable(1004, 250),

      new Collectable(1280, 280),
      new Collectable(1312, 280),
      new Collectable(1344, 280),
      new Collectable(1376, 280),

      new Collectable(1850, 310),
      new Collectable(1850, 350),
      new Collectable(1882, 310),
      new Collectable(1882, 350),
      new Collectable(1914, 310),
      new Collectable(1914, 350),

      new Collectable(2190, 310),
      new Collectable(2190, 350),
      new Collectable(2222, 310),
      new Collectable(2222, 350),
      new Collectable(2254, 310),
      new Collectable(2254, 350),

      new Collectable(2490, 310),
      new Collectable(2490, 350),
      new Collectable(2522, 310),
      new Collectable(2522, 350),
      new Collectable(2554, 310),
      new Collectable(2554, 350),

      new Collectable(3410, 350),
      new Collectable(3442, 350),
      new Collectable(3410, 310),
      new Collectable(3442, 310),
      new Collectable(3474, 350),
      new Collectable(3506, 350),
      new Collectable(3474, 310),
      new Collectable(3506, 310),
      new Collectable(3538, 350),
      new Collectable(3538, 310),
      // new Collectable(848, 119),
      // new Collectable(899, 143),
      // new Collectable(935, 186),
      // new Collectable(971, 230),
    ];
    this.flagpole = new Flagpole(3700, this.floorPos_y, this);
    this.scoreboard = new Scoreborad();
    this.character = new Character(width / 2, this.floorPos_y, this.lives, 0, this);
    this.ocean = new Ocean(-56, 450);
  }

  draw() {
    this.backgroundSky.draw();
    noStroke();
    fill(226, 211, 103);
    rect(0, this.floorPos_y, width, height / 4);
    push();
    translate(-this.cameraPos_x, 0);
    this.stars.map((c) => c.draw());
    this.clouds.map((c) => c.draw());
    this.cactusMountains.map((c) => c.draw());
    this.cactusTrees.map((c) => c.draw());
    this.canyons.map((c) => c.draw());
    this.platformStatic.map((c) => c.draw());
    this.movingPlatform.map((c) => c.draw());
    this.torchs.map((c) => c.draw());
    this.crabs.map((c) => c.draw());
    this.fishs.map((c) => c.draw());
    this.collectable.map((c) => c.draw());
    this.flagpole.draw();
    this.character.draw();
    this.ufo.draw();
    if (this.character.lives == 0) {
      drawGameOver(this);
    }
    pop();
    this.scoreboard.draw(this.character);
    this.ocean.draw();
  }

  update() {
    this.camera_target_posX = this.character.gameChar_world_x - this.character.gameChar_screen_x;
    this.cameraPos_x = this.cameraPos_x * 0.95 + this.camera_target_posX * (1 - 0.95);
    this.backgroundSky.update(this.character.gameChar_world_x);
    this.character.update();
    this.clouds.map((c) => c.update(this.character.gameChar_world_x));
    this.stars.map((c) => c.update(this.character.gameChar_world_x));
    this.canyons.map((c) => c.update(this.character));
    this.movingPlatform.map((c) => c.update());
    this.torchs.map((c) => c.update(this.character));
    this.crabs.map((c) => c.update(this.character));
    this.fishs.map((c) => c.update());
    this.ufo.update(this.character);
    this.collectable.map((c) => c.update(this.character));
    this.flagpole.update(this.character);
    this.ocean.update();
  }
}

function gradient(currentValue, startNumber, endNumber, startColor, endColor) {
  return color(
    map(currentValue, startNumber, endNumber, startColor.levels[0], endColor.levels[0]),
    map(currentValue, startNumber, endNumber, startColor.levels[1], endColor.levels[1]),
    map(currentValue, startNumber, endNumber, startColor.levels[2], endColor.levels[2]),
    map(currentValue, startNumber, endNumber, startColor.levels[3], endColor.levels[3]),
  );
}
function star(x, y, radius1, radius2, npoints) {
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
function drawGameOver(world) {
  fill(245, 215, 194, 180);
  rect(width / 2 - 250 + world.cameraPos_x, 120, 500, 180);
  textSize(60);
  fill(215, 86, 23);
  text('Game Over', 345 + world.cameraPos_x, 210);
  textSize(22);
  text('Press space to restart', 390 + world.cameraPos_x, 260);
  world.character.freeze = true;
}

var assets;
var world;

function preload() {
  assets = new Assets();
}

function setup() {
  createCanvas(1024, 576);
  world = new World(3);
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
