/*

Officer: 7817938
CaseNum: 701-1-96112234-7817938

Case 701 - Credible cat thief - stage 2

Kid they need you down at the precinct again.
This time it's a sneaky cat thief who has been absconding with the neighbourhoods felines for some time.
Luckily old Mrs Olivetti caught a glimpse of them as they disappeared over her back fence.
We’ve a bunch of likely characters lined-up but we need your brains to solve the mystery.

Please create a function that takes a suspect object as parameter from the data structure below.
Your function should return a boolean value indicating whether or not they match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.
It should only return "true" if the suspect matches the description in full.

The function is already being called in draw() but it is your job to implement it.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function matchSuspect(suspectObj){}
 - if()

Witness statement:

I remember walking down the street and then I saw them. The person I saw was female. They definately weigh less than 78 Kg. It was very dark and I could barely see, I would say they were shorter than 201 cm. They had no hair. I'm not quite sure. I'll never forget their brown eyes. They were wearing a green army coat. Can I go home now Sir? 

*/

var lineupLog = [
  {
    name: "DEEDEE MOHWAWK",
    eyes: "pale",
    hair: "long white",
    gender: "female",
    weight: 64,
    height: 178,
  },
  {
    name: "JAUNITA WARMAN",
    eyes: "pale",
    hair: "shaved",
    gender: "male",
    weight: 73,
    height: 172,
  },
  {
    name: "LAVERNE DEAUVILLE",
    eyes: "brown",
    hair: "no",
    gender: "female",
    weight: 68,
    height: 192,
  },
  {
    name: "NICOLE COURTWOOD",
    eyes: "grey",
    hair: "white",
    gender: "male",
    weight: 80,
    height: 182,
  },
  {
    name: "ERMELINDA JACQUELIN",
    eyes: "black",
    hair: "ginger",
    gender: "male",
    weight: 100,
    height: 205,
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
function matchSuspect(suspectObj) {
  if (
    suspectObj.gender == "female" &&
    suspectObj.weight < 78 &&
    suspectObj.height < 201 &&
    suspectObj.hair == "no" &&
    suspectObj.eyes == "brown"
  ) {
    return true;
  }
}

function draw() {
  //You don't need to alter this code
  image(backgroundImg, 0, 0);

  for (let i = 0; i < lineupLog.length; i++) {
    if (matchSuspect(lineupLog[i]) == true) {
      fill(255, 0, 0);
      text(lineupLog[i].name + " is guilty!", 60, 60 + i * 20);
    } else {
      fill(0, 155, 0);
      text(lineupLog[i].name + " is not guilty", 60, 60 + i * 20);
    }
  }
}
