/*
801
Stage 2: Don Giovanni

Officer: 7817938
CaseNum: 801-1-28363675-7817938

Our person in the box office at the Console City opera house has just informed us that the influential order of Swartz will be attending Don Giovanni tonight. This vein lot should be easy to spot thanks to their distinguished scarf. They must be up to something kid...

They are all sitting in the 3rd seat of each row.

We better act fast and tighten up our operation. This is a slicker operation than before, you’ll have to use a single for loop to pick them out and set recognised property of the operaBuffs to true

Solve the case using only:
For (not nested)
operaBuffs[ ][ ]


*/

var crowdImg;
var spotlight;

var operaBuffs = [
  [
    {x: 50, y: 50, recognised: false},
    {x: 150, y: 50, recognised: false},
    {x: 250, y: 50, recognised: false},
    {x: 350, y: 50, recognised: false},
    {x: 450, y: 50, recognised: false},
    {x: 550, y: 50, recognised: false},
    {x: 650, y: 50, recognised: false},
    {x: 750, y: 50, recognised: false},
    {x: 850, y: 50, recognised: false},
    {x: 950, y: 50, recognised: false},
  ],
  [
    {x: 50, y: 130, recognised: false},
    {x: 150, y: 130, recognised: false},
    {x: 250, y: 130, recognised: false},
    {x: 350, y: 130, recognised: false},
    {x: 450, y: 130, recognised: false},
    {x: 550, y: 130, recognised: false},
    {x: 650, y: 130, recognised: false},
    {x: 750, y: 130, recognised: false},
    {x: 850, y: 130, recognised: false},
    {x: 950, y: 130, recognised: false},
  ],
  [
    {x: 50, y: 210, recognised: false},
    {x: 150, y: 210, recognised: false},
    {x: 250, y: 210, recognised: false},
    {x: 350, y: 210, recognised: false},
    {x: 450, y: 210, recognised: false},
    {x: 550, y: 210, recognised: false},
    {x: 650, y: 210, recognised: false},
    {x: 750, y: 210, recognised: false},
    {x: 850, y: 210, recognised: false},
    {x: 950, y: 210, recognised: false},
  ],
  [
    {x: 50, y: 290, recognised: false},
    {x: 150, y: 290, recognised: false},
    {x: 250, y: 290, recognised: false},
    {x: 350, y: 290, recognised: false},
    {x: 450, y: 290, recognised: false},
    {x: 550, y: 290, recognised: false},
    {x: 650, y: 290, recognised: false},
    {x: 750, y: 290, recognised: false},
    {x: 850, y: 290, recognised: false},
    {x: 950, y: 290, recognised: false},
  ],
  [
    {x: 50, y: 370, recognised: false},
    {x: 150, y: 370, recognised: false},
    {x: 250, y: 370, recognised: false},
    {x: 350, y: 370, recognised: false},
    {x: 450, y: 370, recognised: false},
    {x: 550, y: 370, recognised: false},
    {x: 650, y: 370, recognised: false},
    {x: 750, y: 370, recognised: false},
    {x: 850, y: 370, recognised: false},
    {x: 950, y: 370, recognised: false},
  ],
  [
    {x: 50, y: 450, recognised: false},
    {x: 150, y: 450, recognised: false},
    {x: 250, y: 450, recognised: false},
    {x: 350, y: 450, recognised: false},
    {x: 450, y: 450, recognised: false},
    {x: 550, y: 450, recognised: false},
    {x: 650, y: 450, recognised: false},
    {x: 750, y: 450, recognised: false},
    {x: 850, y: 450, recognised: false},
    {x: 950, y: 450, recognised: false},
  ],
  [
    {x: 50, y: 530, recognised: false},
    {x: 150, y: 530, recognised: false},
    {x: 250, y: 530, recognised: false},
    {x: 350, y: 530, recognised: false},
    {x: 450, y: 530, recognised: false},
    {x: 550, y: 530, recognised: false},
    {x: 650, y: 530, recognised: false},
    {x: 750, y: 530, recognised: false},
    {x: 850, y: 530, recognised: false},
    {x: 950, y: 530, recognised: false},
  ],
  [
    {x: 50, y: 610, recognised: false},
    {x: 150, y: 610, recognised: false},
    {x: 250, y: 610, recognised: false},
    {x: 350, y: 610, recognised: false},
    {x: 450, y: 610, recognised: false},
    {x: 550, y: 610, recognised: false},
    {x: 650, y: 610, recognised: false},
    {x: 750, y: 610, recognised: false},
    {x: 850, y: 610, recognised: false},
    {x: 950, y: 610, recognised: false},
  ],
  [
    {x: 50, y: 690, recognised: false},
    {x: 150, y: 690, recognised: false},
    {x: 250, y: 690, recognised: false},
    {x: 350, y: 690, recognised: false},
    {x: 450, y: 690, recognised: false},
    {x: 550, y: 690, recognised: false},
    {x: 650, y: 690, recognised: false},
    {x: 750, y: 690, recognised: false},
    {x: 850, y: 690, recognised: false},
    {x: 950, y: 690, recognised: false},
  ],
  [
    {x: 50, y: 770, recognised: false},
    {x: 150, y: 770, recognised: false},
    {x: 250, y: 770, recognised: false},
    {x: 350, y: 770, recognised: false},
    {x: 450, y: 770, recognised: false},
    {x: 550, y: 770, recognised: false},
    {x: 650, y: 770, recognised: false},
    {x: 750, y: 770, recognised: false},
    {x: 850, y: 770, recognised: false},
    {x: 950, y: 770, recognised: false},
  ],
];

function setup() {
  createCanvas(1100, 1100);

  crowdImg = loadImage("crowd.png");
  spotlight = loadImage("spotlight.png");
}

function draw() {
  image(crowdImg, 0, 0);
  ////////////YOUR CODE GOES HERE////////////////////////
  for (let index = 0; index < operaBuffs.length; index++) {
    operaBuffs[index][2].recognised = true;
  }

  ///////////DON'T CHANGE ANY CODE BELOW HERE////////////
  blendMode(BLEND);
  background(80);
  highlight();
  blendMode(DARKEST);
  image(crowdImg, 0, 0);
}

function highlight() {
  fill(255, 0, 0, 100);

  for (var i = 0; i < operaBuffs.length; i++) {
    for (var j = 0; j < operaBuffs[i].length; j++) {
      if (operaBuffs[i][j].recognised) {
        image(spotlight, operaBuffs[i][j].x, operaBuffs[i][j].y, 100, 100);
      }
    }
  }
}
