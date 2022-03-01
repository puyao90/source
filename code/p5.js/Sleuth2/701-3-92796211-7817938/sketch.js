/*

Officer: 7817938
CaseNum: 701-3-92796211-7817938

Case 701 - Believable burglar - stage 4

Those guys down at the precinct need to take your brain for one final spin.
This burglar has been a particularly slippery character and now they believe that they have them.
Luckily they have a have a witness statement from summer niemela.
All they need is for you to do the detective work.

This time you must implement two functions:

- A checkSuspect function that takes a suspect object as parameter from the data structure below.
Your function should return a number value indicating how many of their properties match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.

- A getSuspectMatch function which traverses the array of suspects and returns the object representing the guilty suspect,
otherwise - return an empty object.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function checkSuspect(suspectObj){}
 - function getSuspectMatch(){}
 - if()

Witness statement:

I remember walking down the street and then I saw them. I distinctly remember that they were wearing a net weave shirt, I remember thinking that was quite unusual. Their expression seemed angry. I remember they had a bull tattoo. They had white hair. They brobably weigh between 69 and 100 kg. It's hard to say. The person I saw was male. They were fairly tall, I think between a height of 162 and 181 cm. It's so hard to remember right now. They were carrying a black duffle bag. They seemed to be between the age of 19 and 50 years old. It was very dark and I could barely see, I hope I never have to go through that again. 

*/

var suspectsArray = [
  {
    name: "DARBY JENI",
    item: "dotted necktie",
    gender: "female",
    accessory: "orange tote bag",
    tattoo: "jellyfish",
    age: 33,
    height: 199,
    weight: 67,
  },
  {
    name: "LOUISE DAVISWOOD",
    item: "pink scarf",
    gender: "female",
    accessory: "metal briefcase",
    tattoo: "facial",
    age: 35,
    height: 184,
    weight: 72,
  },
  {
    name: "DEEDEE MONKSFORD",
    item: "purple hat",
    gender: "female",
    accessory: "laptop bag",
    tattoo: "big arrow",
    age: 47,
    height: 168,
    weight: 75,
  },
  {
    name: "BRAD JACQUELIN",
    item: "pair of leather trousers",
    gender: "male",
    accessory: "red backpack",
    tattoo: "neck",
    age: 64,
    height: 167,
    weight: 73,
  },
  {
    name: "LAVERNE PHINNEY",
    item: "fur vest",
    gender: "female",
    accessory: "orange plasic bag",
    tattoo: "sword",
    age: 48,
    height: 159,
    weight: 87,
  },
  {
    name: "NICOLE COURTWOOD",
    item: "red necktie",
    gender: "male",
    accessory: "plastic box",
    tattoo: "dark black",
    age: 46,
    height: 163,
    weight: 65,
  },
  {
    name: "MAJORIE SILVEIRA",
    item: "net weave shirt",
    gender: "male",
    accessory: "black duffle bag",
    tattoo: "bull",
    age: 20,
    height: 171,
    weight: 77,
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

// Declare both your functions here
function checkSuspect(suspectObj) {
  return (
    (suspectObj.item == "net weave shirt") +
    (suspectObj.tattoo == "bull") +
    (suspectObj.weight > 69 && suspectObj.weight < 100) +
    (suspectObj.gender == "male") +
    (suspectObj.height > 162 && suspectObj.height < 181) +
    (suspectObj.accessory == "black duffle bag") +
    (suspectObj.age > 19 && suspectObj.age < 50)
  );
}
function getSuspectMatch() {
  var obj = {};
  for (var i = 0; i < suspectsArray.length; i++) {
    if (checkSuspect(suspectsArray[i]) == 7) {
      obj = suspectsArray[i];
    }
  }
  return obj;
}

function draw() {
  //You don't need to alter this code
  image(backgroundImg, 0, 0);

  fill(255, 0, 0);
  text(getSuspectMatch().name + " is guilty!", 60, 80);
}
