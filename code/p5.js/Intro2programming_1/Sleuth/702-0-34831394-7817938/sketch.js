/*

Officer: 7817938
CaseNum: 702-0-34831394-7817938

Case 702 - The case of Vanishing Vannevar
Stage 1 - Mobilise

“Calling all units: the notorious criminal and speedster known as Vanishing Vannevar is on the run.
All cars to mobilise.” Word has it that you’re pretty nifty behind the wheel. I want you in on
this action kid. Get your car on the road by completing the </DRIVE_NAME/> function below.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- increment variables
	- random
	- constrain
	- calling functions

HINT: make sure you take a look at the initialisation of investigator_carObject to understand it's properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function Move_Vehicle() {
  /*
	This function should do the following: 
	 - increment investigator_carObject's distance_amnt property by its gas_amount property 
	 - add a random amount between -0.09 and 0.09 to investigator_carObject's engineVibrate_amount property
	 - use the constrain function to constrain investigator_carObject's engineVibrate_amount property to values between 0.08 and 0.86
	 - call the Turnover_Car_engine function passing investigator_carObject as an argument
	*/
  investigator_carObject.distance_amnt += investigator_carObject.gas_amount;
  investigator_carObject.engineVibrate_amount += random(-0.09, 0.09);
  investigator_carObject.engineVibrate_amount = constrain(
    investigator_carObject.engineVibrate_amount,
    0.08,
    0.86
  );
  Turnover_Car_engine(investigator_carObject);
}

//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var investigator_carObject;

var roadWidth = 400;
var roadLeftEdge = 200;
var carImages = {};

function preload() {
  carImages.detective = loadImage("cars/detective.png");
}

function setup() {
  createCanvas(800, 800);

  investigator_carObject = {
    x: roadLeftEdge + roadWidth / 4,
    y: 300,
    distance_amnt: 0,
    gas_amount: 3,
    engineVibrate_amount: 0,
    vehicle_variety: "detective",
    number_plate: "5L3UTH",
    exhaust: [],
  };
}

function draw() {
  background(0);

  Move_Vehicle();

  drawRoad();
  drawCars();
}

/////////////////////////DRAWING FUNCTIONS////////////////////////

function drawRoad() {
  stroke(100);
  fill(50);
  rect(roadLeftEdge, 0, roadWidth, 800);
  stroke(255);

  for (var i = -1; i < 20; i++) {
    line(
      roadLeftEdge + roadWidth / 2,
      i * 100 + (investigator_carObject.distance_amnt % 100),
      roadLeftEdge + roadWidth / 2,
      i * 100 + 70 + (investigator_carObject.distance_amnt % 100)
    );
  }
}

function drawCars() {
  //draw the detective car

  image;
  drawExhaust(investigator_carObject);
  image(
    carImages["detective"],
    investigator_carObject.x -
      carImages["detective"].width / 2 +
      random(
        -investigator_carObject.engineVibrate_amount,
        investigator_carObject.engineVibrate_amount
      ),
    investigator_carObject.y +
      random(
        -investigator_carObject.engineVibrate_amount,
        investigator_carObject.engineVibrate_amount
      )
  );
}

function Turnover_Car_engine(car) {
  car.exhaust.push({
    size: 2,
    x: car.x,
    y: car.y + carImages[car.vehicle_variety].height,
  });

  for (var i = car.exhaust.length - 1; i >= 0; i--) {
    car.exhaust[i].y += max(0.75, car.gas_amount / 3);
    car.exhaust[i].x += random(-1, 1);
    car.exhaust[i].size += 0.5;

    if (car.exhaust[i].y > height) {
      car.exhaust.splice(i, 1);
    }
    // console.log(car.exhaust[i].y);
  }
}

function drawExhaust(car) {
  noStroke();
  for (var i = 0; i < car.exhaust.length; i++) {
    var alpha = map(car.exhaust[i].size, 0, 40, 50, 0);
    // var alpha = car.exhaust[i].size;

    fill(125, alpha);
    ellipse(car.exhaust[i].x + 20, car.exhaust[i].y, car.exhaust[i].size);
  }
}
