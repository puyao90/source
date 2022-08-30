/*

Officer: 7817938
CaseNum: 701-2-46473005-7817938

Case 701 - Recognisable robber - stage 3

Kid you’re becoming a victim of your own success.
I just had a call from DI Max down at the precinct. He specifically requested your services.
They finally have a reliable witness for a robber who has been causing mayhem for some months.
Luckily they have a witness statement from jacqueline forslin. You know what to do kid.

Please create a function that takes a suspect object as parameter from the data structure below.
Your function should return a number value indicating how many of their properties match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.

The function is already being called in draw() but it is your job to implement it.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function checkSuspectTraits(suspectObj){}
 - if()

Witness statement:

I remember walking down the street and then I saw them. They were carrying a orange tote bag. Their expression seemed menacing. They were wearing a yellow poncho. I'm not quite sure. They were fairly tall, I think between a height of 166 and 181 cm. It's so hard to remember right now. They brobably weigh between 65 and 81 kg. They had long white hair. I'll never forget their grey eyes. They seemed to be between the age of 38 and 58 years old. Can I go home now Sir? 

*/

var usualSuspects = [
  {
    name: "TAMICA GOODBURY",
    eyes: "green",
    coat: "blue overcoat",
    expression: "sad",
    accessory: "laptop bag",
    height: 152,
    weight: 74,
    age: 62,
  },
  {
    name: "DEEDEE MAUBERT",
    eyes: "blue",
    coat: "black hoodie",
    expression: "menacing",
    accessory: "red backpack",
    height: 151,
    weight: 82,
    age: 39,
  },
  {
    name: "SUMMER TINTLE",
    eyes: "grey",
    coat: "green army coat",
    expression: "nerveous",
    accessory: "orange plasic bag",
    height: 183,
    weight: 91,
    age: 36,
  },
  {
    name: "LAVERNE FORSLIN",
    eyes: "grey",
    coat: "yellow poncho",
    expression: "menacing",
    accessory: "orange tote bag",
    height: 171,
    weight: 78,
    age: 51,
  },
  {
    name: "JENIFFER WILLMAR",
    eyes: "blue",
    coat: "white fur coat",
    expression: "confused",
    accessory: "brown paper bag",
    height: 167,
    weight: 65,
    age: 38,
  },
  {
    name: "BRIDGET JACQUELIN",
    eyes: "brown",
    coat: "green jacket",
    expression: "blank",
    accessory: "glass bottle",
    height: 174,
    weight: 67,
    age: 37,
  },
  {
    name: "TU PHINNEY",
    eyes: "brown",
    coat: "red parka",
    expression: "empty",
    accessory: "black duffle bag",
    height: 172,
    weight: 67,
    age: 51,
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
  // suspectObj.accessory == "orange tote bag" &&
  // suspectObj.expression == "menacing" &&
  // suspectObj.coat == "yellow poncho" &&
  // suspectObj.height > 166 &&
  // suspectObj.height < 181 &&
  // suspectObj.weight > 65 &&
  // suspectObj.weight < 81 &&
  // suspectObj.eyes == "grey" &&
  // suspectObj.age > 38 &&
  // suspectObj.age < 58

  return (
    (suspectObj.accessory == "orange tote bag") +
    (suspectObj.expression == "menacing") +
    (suspectObj.coat == "yellow poncho") +
    (suspectObj.height > 166 && suspectObj.height < 181) +
    (suspectObj.weight > 65 && suspectObj.weight < 81) +
    (suspectObj.eyes == "grey") +
    (suspectObj.age > 38 && suspectObj.age < 58)
  );
}

function draw() {
  //You don't need to alter this code
  image(backgroundImg, 0, 0);

  for (let i = 0; i < usualSuspects.length; i++) {
    let matchingProperties = checkSuspectTraits(usualSuspects[i]);
    fill(50 * matchingProperties, 250 - 50 * matchingProperties, 0);
    text(
      "found " +
        matchingProperties +
        " matching properties for " +
        usualSuspects[i].name,
      60,
      60 + i * 20
    );
  }
}
