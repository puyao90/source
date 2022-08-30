/*

Officer: 7817938
CaseNum: 702-2-63985380-7817938

Case 702 - The case of Vanishing Vannevar
Stage 3 - Where's Vannevar

“All units: Vannevar’s car has been sighted. It is a red car with a number_plate of PRKSI5. Approach with
caution.” This is your big chance kid. Don’t blow it. Complete the helper functions below to
drive through the traffic and locate Vannevar.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- Incrementing and assiging variables
	- Maths function such as random, min, abs, and constrain
	- Conditional statements
	- Traversing arrays with for loops
	- calling functions and returning values

HINT: make sure you take a look at the initialisation of sleuth_carObject and the cars in
VehicleObjectArray to understand their properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function moveCar() {
  sleuth_carObject.kms_amt += sleuth_carObject.accel_val;
  sleuth_carObject.engineVibrate_val += random(-0.03, 0.03);
  sleuth_carObject.engineVibrate_val = constrain(
    sleuth_carObject.engineVibrate_val,
    0.02,
    1.18
  );
  turnMotor(sleuth_carObject);
  /*
	This function should do the following: 
	 - increment sleuth_carObject's kms_amt property by its accel_val property 
	 - add a random amount between -0.03 and 0.03 to sleuth_carObject's engineVibrate_val property
	 - use the constrain function to constrain sleuth_carObject's engineVibrate_val property to values between 0.02 and 1.18
	 - call the turnMotor function passing sleuth_carObject as an argument
	*/
}

function crossLanes(vehicle) {
  /*
	This function should do the following: 
	 - move vehicle from one lane to the other.
	 - do the move in a single step without any extra animation.
	 - use LaneCoordA and LaneCoordB to effect the change.
	 hint: You will need to modify the x_pos property of vehicle.
	*/
  if (vehicle.x_pos == LaneCoordA) {
    vehicle.x_pos = LaneCoordB;
  } else {
    vehicle.x_pos = LaneCoordA;
  }
}

function checkVehicleIsAhead(car_obj) {
  /*
	This function should do the following: 
	 - determine if car_obj is in the same lane and less than 200px behind any of the cars in VehicleObjectArray.
	 - do this by traversing VehicleObjectArray and comparing each car's kms_amt property to that of car_obj.
	 - use the number_plate property of each car to ignore cars that match car_obj.
	 - if you find a car that matches these requirements then return the index representing the car's position in VehicleObjectArray. Otherwise return false.
	*/
  for (var i = 0; i < VehicleObjectArray.length; i++) {
    // console.log(i, VehicleObjectArray[i].kms_amt - car_obj.kms_amt);
    if (
      car_obj.x_pos == VehicleObjectArray[i].x_pos &&
      VehicleObjectArray[i].kms_amt - car_obj.kms_amt < 200 &&
      VehicleObjectArray[i].kms_amt - car_obj.kms_amt > 0
    ) {
      return i;
    }
  }
  return false;
}

function vehicleParallel(targetCar) {
  /*
	This function should do the following: 
	 - determine if targetCaris parallel with sleuth_carObject.
	 - if targetCar is found to be parallel to sleuth_carObject then return true.
	 - cars are considered parallel if the absolute difference between their kms_amt properties is less than 25 px and they have non-matching x_pos properties	*/
  return (
    targetCar.x_pos != sleuth_carObject.x_pos &&
    abs(sleuth_carObject.kms_amt - targetCar.kms_amt) < 25
  );
}

function findAssailant() {
  /*
	This function should do the following: 
	 - Check cars passing parallel to sleuth_carObject to see if they match the number_plate property in the assailant description.
	 - it does this by traversing VehicleObjectArray and calling vehicleParallel for each car
.	 - if a positive result is returned then the number_plate property of the found car is then checked against the assailant description.
	 - if a match is found then the object of the car in question is returned.
	 - otherwise return false.
	*/
  for (var i = 0; i < VehicleObjectArray.length; i++) {
    if (vehicleParallel(VehicleObjectArray[i])) {
      //   console.log(VehicleObjectArray[i]);
      if (VehicleObjectArray[i].number_plate == "PRKSI5") {
        return VehicleObjectArray[i];
      }
    }
  }
  return false;
}

//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var sleuth_carObject;

var roadWidth;
var roadLeftEdge;
var LaneCoordA;
var LaneCoordB;
var carImages = {};
var assailant;

var VehicleObjectArray = [
  {
    x_pos: 300,
    y_pos: 0,
    kms_amt: -200,
    car_classification: "whiteCar",
    number_plate: "1AIMI2",
    accel_val: 2,
    exhaust: [],
  },
  {
    x_pos: 300,
    y_pos: 0,
    kms_amt: 200,
    car_classification: "redCar",
    number_plate: "ED3C67",
    accel_val: 2,
    exhaust: [],
  },
  {
    x_pos: 300,
    y_pos: 0,
    kms_amt: 600,
    car_classification: "greenCar",
    number_plate: "EZ4IH1",
    accel_val: 2,
    exhaust: [],
  },
  {
    x_pos: 300,
    y_pos: 0,
    kms_amt: 1000,
    car_classification: "redCar",
    number_plate: "IBGQ7Y",
    accel_val: 2,
    exhaust: [],
  },
  {
    x_pos: 300,
    y_pos: 0,
    kms_amt: 1400,
    car_classification: "whiteCar",
    number_plate: "RTQY72",
    accel_val: 2,
    exhaust: [],
  },
  {
    x_pos: 300,
    y_pos: 0,
    kms_amt: 1800,
    car_classification: "whiteCar",
    number_plate: "JXO027",
    accel_val: 2,
    exhaust: [],
  },
  {
    x_pos: 500,
    y_pos: 0,
    kms_amt: 2200,
    car_classification: "blueCar",
    number_plate: "QJX346",
    accel_val: 2,
    exhaust: [],
  },
  {
    x_pos: 300,
    y_pos: 0,
    kms_amt: 2600,
    car_classification: "whiteCar",
    number_plate: "FJJPAP",
    accel_val: 2,
    exhaust: [],
  },
  {
    x_pos: 300,
    y_pos: 0,
    kms_amt: 3000,
    car_classification: "whiteCar",
    number_plate: "F3Q8H2",
    accel_val: 2,
    exhaust: [],
  },
  {
    x_pos: 300,
    y_pos: 0,
    kms_amt: 3400,
    car_classification: "redCar",
    number_plate: "PRKSI5",
    accel_val: 2,
    exhaust: [],
  },
  {
    x_pos: 300,
    y_pos: 0,
    kms_amt: 3800,
    car_classification: "redCar",
    number_plate: "I6S4DE",
    accel_val: 2,
    exhaust: [],
  },
  {
    x_pos: 300,
    y_pos: 0,
    kms_amt: 4200,
    car_classification: "blueCar",
    number_plate: "8UHPJG",
    accel_val: 2,
    exhaust: [],
  },
  {
    x_pos: 500,
    y_pos: 0,
    kms_amt: 4600,
    car_classification: "whiteCar",
    number_plate: "9OEX80",
    accel_val: 2,
    exhaust: [],
  },
  {
    x_pos: 500,
    y_pos: 0,
    kms_amt: 5000,
    car_classification: "greenCar",
    number_plate: "ZFGJ8B",
    accel_val: 2,
    exhaust: [],
  },
  {
    x_pos: 500,
    y_pos: 0,
    kms_amt: 5400,
    car_classification: "whiteCar",
    number_plate: "1OYPO3",
    accel_val: 2,
    exhaust: [],
  },
  {
    x_pos: 500,
    y_pos: 0,
    kms_amt: 5800,
    car_classification: "greenCar",
    number_plate: "EZ1CHT",
    accel_val: 2,
    exhaust: [],
  },
  {
    x_pos: 500,
    y_pos: 0,
    kms_amt: 6200,
    car_classification: "redCar",
    number_plate: "409ZHY",
    accel_val: 2,
    exhaust: [],
  },
  {
    x_pos: 300,
    y_pos: 0,
    kms_amt: 6600,
    car_classification: "greenCar",
    number_plate: "C13FX3",
    accel_val: 2,
    exhaust: [],
  },
  {
    x_pos: 300,
    y_pos: 0,
    kms_amt: 7000,
    car_classification: "whiteCar",
    number_plate: "352YIW",
    accel_val: 2,
    exhaust: [],
  },
  {
    x_pos: 300,
    y_pos: 0,
    kms_amt: 7400,
    car_classification: "blueCar",
    number_plate: "41K7LV",
    accel_val: 2,
    exhaust: [],
  },
];

function preload() {
  var carTypes = ["detective", "redCar", "greenCar", "blueCar", "whiteCar"];

  for (var i = 0; i < carTypes.length; i++) {
    carImages[carTypes[i]] = loadImage("cars/" + carTypes[i] + ".png");
  }
}

function setup() {
  createCanvas(800, 800);
  textSize(30);
  textAlign(CENTER);
  //   frameRate(10);

  roadWidth = 400;
  roadLeftEdge = 200;
  LaneCoordA = 300;
  LaneCoordB = 500;

  sleuth_carObject = {
    x_pos: roadLeftEdge + roadWidth / 4,
    y_pos: 550,
    kms_amt: 0,
    accel_val: 3,
    engineVibrate_val: 0,
    car_classification: "detective",
    number_plate: "5L3UTH",
    exhaust: [],
  };
}

function draw() {
  background(0);

  drawRoad();
  drawCars();

  if (assailant) {
    fill(255);

    text("assailant found !", width / 2, height / 2);
    return;
  }

  ////////////////////// HANDLE DETECTIVE /////////////////////////

  moveCar();
  var b2b = checkVehicleIsAhead(sleuth_carObject);
  if (b2b) crossLanes(sleuth_carObject);
  var a = findAssailant();
  if (a != false) assailant = a;
  //   console.log(a);

  //////////////////////HANDLE THE OTHER CARS//////////////////////

  for (var i = 0; i < VehicleObjectArray.length; i++) {
    VehicleObjectArray[i].kms_amt += VehicleObjectArray[i].accel_val;
    VehicleObjectArray[i].y_pos =
      sleuth_carObject.y_pos -
      VehicleObjectArray[i].kms_amt +
      sleuth_carObject.kms_amt;
  }
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
      i * 100 + (sleuth_carObject.kms_amt % 100),
      roadLeftEdge + roadWidth / 2,
      i * 100 + 70 + (sleuth_carObject.kms_amt % 100)
    );
  }
}

function drawCars() {
  //draw the detective car

  image;
  drawExhaust(sleuth_carObject);
  image(
    carImages["detective"],
    sleuth_carObject.x_pos -
      carImages["detective"].width / 2 +
      random(
        -sleuth_carObject.engineVibrate_val,
        sleuth_carObject.engineVibrate_val
      ),
    sleuth_carObject.y_pos +
      random(
        -sleuth_carObject.engineVibrate_val,
        sleuth_carObject.engineVibrate_val
      )
  );

  //draw all other cars

  for (var i = 0; i < VehicleObjectArray.length; i++) {
    if (
      VehicleObjectArray[i].y_pos < height &&
      VehicleObjectArray[i].y_pos > -height / 2
    ) {
      image(
        carImages[VehicleObjectArray[i].car_classification],
        VehicleObjectArray[i].x_pos -
          carImages[VehicleObjectArray[i].car_classification].width / 2,
        VehicleObjectArray[i].y_pos
      );
      turnMotor(VehicleObjectArray[i]);

      drawExhaust(VehicleObjectArray[i]);
    }
  }
}

function turnMotor(car) {
  car.exhaust.push({
    size: 2,
    x: car.x_pos,
    y: car.y_pos + carImages[car.car_classification].height,
  });

  for (var i = car.exhaust.length - 1; i >= 0; i--) {
    car.exhaust[i].y += max(0.75, car.accel_val / 3);
    if (car.car_classification != "detective")
      car.exhaust[i].y += sleuth_carObject.accel_val - car.accel_val;
    car.exhaust[i].x += random(-1, 1);
    car.exhaust[i].size += 0.5;

    if (car.exhaust[i].y > height || car.exhaust[i].y < 0) {
      car.exhaust.splice(i, 1);
    }
  }
}

function drawExhaust(car) {
  noStroke();
  for (var i = 0; i < car.exhaust.length; i++) {
    var alpha = map(car.exhaust[i].size, 0, 40, 50, 0);
    fill(125, alpha);
    ellipse(car.exhaust[i].x + 20, car.exhaust[i].y, car.exhaust[i].size);
  }
}
