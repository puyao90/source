/*

Officer: 7817938
CaseNum: 702-3-34831551-7817938

Case 702 - The case of Vanishing Vannevar
Stage 4 - High speed chase

“All units: Vannevar is on the run. They are driving a red car with a LicencePlate of HRB4M3.  Pursue at speed.
I repeat pursue at speed.” Okay Vannevar’s game is nearly up. Go get him kid.
Complete the helper functions below to locate, chase and arrest Vannevar.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- Incrementing and assiging variables
	- Maths function such as random, min, abs, and constrain
	- Conditional statements
	- Traversing arrays with for loops
	- calling functions and returning values

HINT: make sure you take a look at the initialisation of ChaseCar and the cars in
VehiclesList to understand their properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function moveVehicle() {
  /*
	This function should do the following: 
	 - increment ChaseCar's DistDriven property by its SpeedValue property 
	 - add a random amount between -0.01 and 0.01 to ChaseCar's ShudderAmt property
	 - use the constrain function to constrain ChaseCar's ShudderAmt property to values between 0.04 and 0.82
	 - call the driveCarMotor function passing ChaseCar as an argument
	*/
  ChaseCar.DistDriven += ChaseCar.SpeedValue;
  ChaseCar.ShudderAmt += random(-0.01, 0.01);
  ChaseCar.ShudderAmt = constrain(ChaseCar.ShudderAmt, 0.04, 0.82);
  driveCarMotor(ChaseCar);
}

function swapLanes(targetCar) {
  /*
	This function should do the following: 
	 - move targetCar from one lane to the other.
	 - do the move in a single step without any extra animation.
	 - use LaneCoordA and LaneCoordB to effect the change.
	 hint: You will need to modify the x property of targetCar.
	*/
  if (targetCar.x == LaneCoordA) {
    targetCar.x = LaneCoordB;
  } else {
    targetCar.x = LaneCoordA;
  }
  //   return targetCar;
}

function vehicleInfront(Target_carA, Target_carB) {
  /*
	This function should do the following: 
	 - determine if Target_carA is in the same lane and less than 200px behind Target_carB.
	 - do this by comparing the two cars' DistDriven properties
	 - if these requirements are met then return Target_carB. Otherwise return false.
	*/
  if (
    Target_carA.x == Target_carB.x &&
    Target_carB.DistDriven - Target_carA.DistDriven < 200 &&
    Target_carB.DistDriven - Target_carA.DistDriven > 0
  ) {
    return Target_carB;
  }
  return false;
}

function checkCarParallel(car) {
  /*
	This function should do the following: 
	 - traverse VehiclesList and determine if any of the cars are parallel with car.
	 - if a car is found to be parallel to car then return the index of that car object.
	 - cars are considered parallel if the absolute difference between their DistDriven properties is less than 25 px and they have non-matching x properties	*/
  for (var i = 0; i < VehiclesList.length; i++) {
    if (
      car.x != VehiclesList[i].x &&
      abs(car.DistDriven - VehiclesList[i].DistDriven) < 25
    ) {
      return i;
    }
  }
}

function identifySuspect() {
  /*
	This function should do the following: 
	 - Check cars passing parallel to ChaseCar to see if they match the LicencePlate property in the suspect description.
	 - it does this by calling checkCarParallel.
	 - if a positive result is returned then the LicencePlate property of the found car is then checked against the suspect description.
	 - if a match is found then the car in question is assigned to the global variable suspect.
	*/
  var parallelCarIdx = checkCarParallel(ChaseCar);
  if (parallelCarIdx && VehiclesList[parallelCarIdx].LicencePlate == "HRB4M3") {
    suspect = VehiclesList[parallelCarIdx];
    console.log("Found", suspect);
  }
  //   return false;
}

function tailSuspect() {
  /*
	This function should do the following: 
	 - scale the SpeedValue property of ChaseCar by a factor of 1.001.
	 - use the min function to make sure that ChaseCar's SpeedValue property does not exceed 6.
	 - it should traverse VehiclesList calling vehicleInfront for each car to detect any cars in front of ChaseCar.
	 - if a positive result is returned it should check to see if the LicencePlate property of that car matches that of suspect.
	 - for a match, arrestSuspect should be called, otherwise call swapLanes.
	*/
  ChaseCar.SpeedValue *= 1.001;
  ChaseCar.SpeedValue = min(6, ChaseCar.SpeedValue);
  for (var i = 0; i < VehiclesList.length; i++) {
    var carFront = vehicleInfront(ChaseCar, VehiclesList[i]);
    if (carFront) {
      if (VehiclesList[i].LicencePlate == "HRB4M3") {
        suspect = VehiclesList[i];
        arrestSuspect();
      } else {
        swapLanes(ChaseCar);
      }
    }
  }
}

function arrestSuspect() {
  /*
	This function should do the following: 
	 - set the isArrested property of suspect to true.
	 - set the ApprehendingSuspect property of ChaseCar to true.
	 - set the SpeedValue properties of both vehicles to zero.
	*/
  suspect.isArrested = true;
  ChaseCar.ApprehendingSuspect = true;
  ChaseCar.SpeedValue = 0;
  suspect.SpeedValue = 0;
}

//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var ChaseCar;

var roadWidth;
var roadLeftEdge;
var LaneCoordA;
var LaneCoordB;
var carImages = {};
var suspect;

var VehiclesList = [
  {
    x: 300,
    y: 0,
    DistDriven: -200,
    CarType: "redCar",
    LicencePlate: "CBZAQP",
    SpeedValue: 2,
    exhaust: [],
  },
  {
    x: 500,
    y: 0,
    DistDriven: 200,
    CarType: "redCar",
    LicencePlate: "U89UKS",
    SpeedValue: 2,
    exhaust: [],
  },
  {
    x: 500,
    y: 0,
    DistDriven: 600,
    CarType: "blueCar",
    LicencePlate: "574U20",
    SpeedValue: 2,
    exhaust: [],
  },
  {
    x: 300,
    y: 0,
    DistDriven: 1000,
    CarType: "blueCar",
    LicencePlate: "T6FZBN",
    SpeedValue: 2,
    exhaust: [],
  },
  {
    x: 500,
    y: 0,
    DistDriven: 1400,
    CarType: "redCar",
    LicencePlate: "DMXR7Q",
    SpeedValue: 2,
    exhaust: [],
  },
  {
    x: 500,
    y: 0,
    DistDriven: 1800,
    CarType: "whiteCar",
    LicencePlate: "9IV9ME",
    SpeedValue: 2,
    exhaust: [],
  },
  {
    x: 300,
    y: 0,
    DistDriven: 2200,
    CarType: "whiteCar",
    LicencePlate: "BGJLS8",
    SpeedValue: 2,
    exhaust: [],
  },
  {
    x: 300,
    y: 0,
    DistDriven: 2600,
    CarType: "redCar",
    LicencePlate: "8JHCI8",
    SpeedValue: 2,
    exhaust: [],
  },
  {
    x: 500,
    y: 0,
    DistDriven: 3000,
    CarType: "greenCar",
    LicencePlate: "OOK9G2",
    SpeedValue: 2,
    exhaust: [],
  },
  {
    x: 500,
    y: 0,
    DistDriven: 3400,
    CarType: "greenCar",
    LicencePlate: "F9YQRO",
    SpeedValue: 2,
    exhaust: [],
  },
  {
    x: 500,
    y: 0,
    DistDriven: 3800,
    CarType: "redCar",
    LicencePlate: "HRB4M3",
    SpeedValue: 2,
    exhaust: [],
  },
  {
    x: 300,
    y: 0,
    DistDriven: 4200,
    CarType: "whiteCar",
    LicencePlate: "U1ECEZ",
    SpeedValue: 2,
    exhaust: [],
  },
  {
    x: 300,
    y: 0,
    DistDriven: 4600,
    CarType: "greenCar",
    LicencePlate: "8FPMO3",
    SpeedValue: 2,
    exhaust: [],
  },
  {
    x: 300,
    y: 0,
    DistDriven: 5000,
    CarType: "whiteCar",
    LicencePlate: "SN0R9D",
    SpeedValue: 2,
    exhaust: [],
  },
  {
    x: 500,
    y: 0,
    DistDriven: 5400,
    CarType: "greenCar",
    LicencePlate: "PPTN1A",
    SpeedValue: 2,
    exhaust: [],
  },
  {
    x: 500,
    y: 0,
    DistDriven: 5800,
    CarType: "blueCar",
    LicencePlate: "8CL1ZT",
    SpeedValue: 2,
    exhaust: [],
  },
  {
    x: 500,
    y: 0,
    DistDriven: 6200,
    CarType: "greenCar",
    LicencePlate: "LE0I7Q",
    SpeedValue: 2,
    exhaust: [],
  },
  {
    x: 300,
    y: 0,
    DistDriven: 6600,
    CarType: "whiteCar",
    LicencePlate: "4OCKWW",
    SpeedValue: 2,
    exhaust: [],
  },
  {
    x: 300,
    y: 0,
    DistDriven: 7000,
    CarType: "redCar",
    LicencePlate: "SM1PGC",
    SpeedValue: 2,
    exhaust: [],
  },
  {
    x: 300,
    y: 0,
    DistDriven: 7400,
    CarType: "greenCar",
    LicencePlate: "ZT4MCQ",
    SpeedValue: 2,
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

  roadWidth = 400;
  roadLeftEdge = 200;
  LaneCoordA = 300;
  LaneCoordB = 500;

  ChaseCar = {
    x: roadLeftEdge + roadWidth / 4,
    y: 550,
    DistDriven: 0,
    SpeedValue: 3,
    ShudderAmt: 0,
    CarType: "detective",
    LicencePlate: "5L3UTH",
    ApprehendingSuspect: false,
    FollowingSuspect: false,
    exhaust: [],
  };
}

function draw() {
  background(0);

  drawRoad();
  drawCars();

  if (suspect) {
    if (suspect.isArrested) {
      fill(255);

      text("suspect isArrested!", width / 2, height / 2);
    }
  }

  ////////////////////// HANDLE DETECTIVE /////////////////////////

  if (!ChaseCar.FollowingSuspect && !ChaseCar.ApprehendingSuspect) {
    moveVehicle();
    for (var i = 0; i < VehiclesList.length; i++) {
      var b2b = vehicleInfront(ChaseCar, VehiclesList[i]);
      if (b2b) swapLanes(ChaseCar);
    }
    identifySuspect();
    if (suspect) ChaseCar.FollowingSuspect = true;
  } else if (!ChaseCar.ApprehendingSuspect) {
    tailSuspect();
    moveVehicle();
  }

  ////////////////////// HANDLE ASSAILANT /////////////////////////

  if (suspect) {
    if (!suspect.isArrested) {
      suspect.SpeedValue = 5;
      for (var i = 0; i < VehiclesList.length; i++) {
        var b2b = vehicleInfront(suspect, VehiclesList[i]);
        if (b2b) {
          if (b2b.LicencePlate != suspect.LicencePlate) {
            swapLanes(suspect);
          }
        }
      }
    }
  }

  //////////////////////HANDLE THE OTHER CARS//////////////////////

  for (var i = 0; i < VehiclesList.length; i++) {
    VehiclesList[i].DistDriven += VehiclesList[i].SpeedValue;
    VehiclesList[i].y =
      ChaseCar.y - VehiclesList[i].DistDriven + ChaseCar.DistDriven;

    if (suspect) {
      if (suspect.isArrested) {
        if (VehiclesList[i].x == ChaseCar.x) {
          if (VehiclesList[i].DistDriven < ChaseCar.DistDriven) {
            if (VehiclesList[i].DistDriven - ChaseCar.DistDriven < 200) {
              swapLanes(VehiclesList[i]);
            }
          }
        }
      }
    }
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
      i * 100 + (ChaseCar.DistDriven % 100),
      roadLeftEdge + roadWidth / 2,
      i * 100 + 70 + (ChaseCar.DistDriven % 100)
    );
  }
}

function drawCars() {
  //draw the detective car

  drawExhaust(ChaseCar);
  image(
    carImages["detective"],
    ChaseCar.x -
      carImages["detective"].width / 2 +
      random(-ChaseCar.ShudderAmt, ChaseCar.ShudderAmt),
    ChaseCar.y + random(-ChaseCar.ShudderAmt, ChaseCar.ShudderAmt)
  );

  //draw all other cars

  for (var i = 0; i < VehiclesList.length; i++) {
    if (VehiclesList[i].y < height && VehiclesList[i].y > -height / 2) {
      image(
        carImages[VehiclesList[i].CarType],
        VehiclesList[i].x - carImages[VehiclesList[i].CarType].width / 2,
        VehiclesList[i].y
      );
      driveCarMotor(VehiclesList[i]);

      drawExhaust(VehiclesList[i]);
    }
  }
}

function driveCarMotor(car) {
  car.exhaust.push({
    size: 2,
    x: car.x,
    y: car.y + carImages[car.CarType].height,
  });

  for (var i = car.exhaust.length - 1; i >= 0; i--) {
    car.exhaust[i].y += max(0.75, car.SpeedValue / 3);
    if (car.CarType != "detective")
      car.exhaust[i].y += ChaseCar.SpeedValue - car.SpeedValue;
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
