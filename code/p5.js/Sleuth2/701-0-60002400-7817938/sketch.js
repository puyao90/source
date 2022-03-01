/*

Officer: 7817938
CaseNum: 701-0-60002400-7817938

Case 701 - Probable pick pocket - stage 1

There has been a spate of pickpocketing downtown and we’ve been asked to lend a hand down at the precinct.
They’ve managed to collect a witness statement from an unsuspecting tourist larraine oorin and also rounded up a bunch of the usual suspects.
We need you to unravel this mess and work out who is the guilty one.

Please create a function that takes a suspect object as parameter from the data structure below.
Your function should return a boolean value indicating whether or not they match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.
It should only return "true" if the suspect matches the description in full.

The function is already being called in draw() but it is your job to implement it.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function checkSuspectTraits(suspectObj){}
 - if()

Witness statement:

I remember walking down the street and then I saw them. It's hard to say. It was so scary! I distinctly remember that they were wearing a pink scarf, I remember thinking that was quite unusual. They were wearing a red parka. Their expression seemed menacing. That's all I know officer. 

*/

var allSuspects = [
  {
    name: "BRIDGET SILVEIRA",
    coat: "white fur coat",
    expression: "empty",
    item: "purple hat",
  },
  {
    name: "PIERRE ADVERSANE",
    coat: "yellow poncho",
    expression: "blank",
    item: "pair of leather trousers",
  },
  {
    name: "KITTY PEGORD",
    coat: "red parka",
    expression: "menacing",
    item: "pink scarf",
  },
];

var myFont;
var backgroundImg;

function preload() {
  myFont = loadFont("SpecialElite.ttf");
  backgroundImg = loadImage("Background.png");
}

function setup() {
  createCanvas(640, 480);
  textFont(myFont);
}

// Declare your function here
function checkSuspectTraits(suspectObj) {
  if (
    suspectObj.item == "pink scarf" &&
    suspectObj.coat == "red parka" &&
    suspectObj.expression == "menacing"
  ) {
    return true;
  }
}

function draw() {
  //You don't need to alter this code
  image(backgroundImg, 0, 0);

  for (let i = 0; i < allSuspects.length; i++) {
    if (checkSuspectTraits(allSuspects[i]) == true) {
      fill(255, 0, 0);
      text(allSuspects[i].name + " is guilty!", 60, 60 + i * 20);
    } else {
      fill(0, 155, 0);
      text(allSuspects[i].name + " is not guilty", 60, 60 + i * 20);
    }
  }
}
