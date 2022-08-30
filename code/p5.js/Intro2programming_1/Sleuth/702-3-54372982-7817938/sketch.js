/*

Officer: 7817938
CaseNum: 702-3-54372982-7817938

Case 702 - The case of Vanishing Vannevar
Stage 4 - High speed chase

“All units: Vannevar is on the run. They are driving a white car with a numberPlate of H9L8HG.  Pursue at speed.
I repeat pursue at speed.” Okay Vannevar’s game is nearly up. Go get him kid.
Complete the helper functions below to locate, chase and arrest Vannevar.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- Incrementing and assiging variables
	- Maths function such as random, min, abs, and constrain
	- Conditional statements
	- Traversing arrays with for loops
	- calling functions and returning values

HINT: make sure you take a look at the initialisation of sleuthVehicle and the cars in
vehiclesData to understand their properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function Drive_Car() {
  /*
	This function should do the following: 
	 - increment sleuthVehicle's distAmt property by its gasVal property 
	 - add a random amount between -0.03 and 0.03 to sleuthVehicle's engineRumbleAmount property
	 - use the constrain function to constrain sleuthVehicle's engineRumbleAmount property to values between 0.06 and 1.25
	 - call the Turn_Engine function passing sleuthVehicle as an argument
	*/
  sleuthVehicle.distAmt += sleuthVehicle.gasVal;
  sleuthVehicle.engineRumbleAmount += random(-0.03, 0.03);
  sleuthVehicle.engineRumbleAmount = constrain(
    sleuthVehicle.engineRumbleAmount,
    0.06,
    1.25
  );
  Turn_Engine(sleuthVehicle);
}

function Change_Lanes(car) {
  /*
	This function should do the following: 
	 - move car from one lane to the other.
	 - do the move in a single step without any extra animation.
	 - use laneCoordinateA and laneCoordinateB to effect the change.
	 - finally you should return car at the end of the function.
	 hint: You will need to modify the xCoordinate property of car.
	*/
  if (car.xCoordinate == laneCoordinateA) {
    car.xCoordinate = laneCoordinateB;
  } else {
    car.xCoordinate = laneCoordinateA;
  }
  return car;
}

function Car_IsInfront(targetVehicleA, targetVehicleB) {
  /*
	This function should do the following: 
	 - determine if targetVehicleA is in the same lane and less than 200px behind targetVehicleB.
	 - do this by comparing the two cars' distAmt properties
	 - if these requirements are met then return true. Otherwise return false.
	*/
  if (
    targetVehicleA.xCoordinate == targetVehicleB.xCoordinate &&
    targetVehicleB.distAmt - targetVehicleA.distAmt < 200 &&
    targetVehicleB.distAmt - targetVehicleA.distAmt > 0
  ) {
    return true;
  }
  return false;
}

function CheckCar_AtSide() {
  /*
	This function should do the following: 
	 - traverse vehiclesData and determine if any of the cars are parallel with sleuthVehicle.
	 - if a car is found to be parallel to sleuthVehicle then return that car object.
	 - cars are considered parallel if the absolute difference between their distAmt properties is less than 25 px and they have non-matching xCoordinate properties	*/
  for (var i = 0; i < vehiclesData.length; i++) {
    if (
      sleuthVehicle.xCoordinate != vehiclesData[i].xCoordinate &&
      abs(sleuthVehicle.distAmt - vehiclesData[i].distAmt) < 25
    ) {
      return vehiclesData[i];
    }
  }
}

function Detect_Criminal() {
  /*
	This function should do the following: 
	 - Check cars passing parallel to sleuthVehicle to see if they match the numberPlate property in the criminal description.
	 - it does this by calling CheckCar_AtSide.
	 - if a positive result is returned then the numberPlate property of the found car is then checked against the criminal description.
	 - if a match is found then the object of the car in question is returned.
	 - otherwise return false.
	*/
  var parallelCar = CheckCar_AtSide();
  //   console.log(parallelCar);
  if (parallelCar && parallelCar.numberPlate == "H9L8HG") {
    return parallelCar;
  }
  return false;
}

function Tailing_Criminal() {
  /*
	This function should do the following: 
	 - scale the gasVal property of sleuthVehicle by a factor of 1.001.
	 - use the min function to make sure that sleuthVehicle's gasVal property does not exceed 6.
	 - it should traverse vehiclesData calling Car_IsInfront for each car to detect any cars in front of sleuthVehicle.
	 - if a positive result is returned it should check to see if the numberPlate property of that car matches that of criminal.
	 - for a match, Book_Criminal should be called, otherwise call Change_Lanes.
	*/
  sleuthVehicle.gasVal *= 1.001;
  sleuthVehicle.gasVal = min(6, sleuthVehicle.gasVal);
  for (var i = 0; i < vehiclesData.length; i++) {
    var carFront = Car_IsInfront(sleuthVehicle, vehiclesData[i]);
    if (carFront) {
      //   console.log(criminal);
      if (vehiclesData[i].numberPlate == "H9L8HG") {
        criminal = vehiclesData[i];
        // console.log("Get criminal", criminal);
        Book_Criminal(criminal);
      } else {
        Change_Lanes(sleuthVehicle);
      }
    }
  }
}

function Book_Criminal(targetCar) {
  /*
	This function should do the following: 
	 - set the isDetained property of the car at the index of targetCar to true.
	 - set the isArrestingCriminal property of sleuthVehicle to true.
	 - set the gasVal properties of both vehicles to zero.
	*/
  targetCar.isDetained = true;
  sleuthVehicle.isArrestingCriminal = true;
  sleuthVehicle.gasVal = 0;
  targetCar.gasVal = 0;
}

//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var sleuthVehicle;

var roadWidth;
var roadLeftEdge;
var laneCoordinateA;
var laneCoordinateB;
var carImages = {};
var criminal;

var vehiclesData = [
  {
    xCoordinate: 300,
    yCoordinate: 0,
    distAmt: -200,
    vehicleCategory: "whiteCar",
    numberPlate: "4MIKWH",
    gasVal: 2,
    exhaust: [],
  },
  {
    xCoordinate: 500,
    yCoordinate: 0,
    distAmt: 200,
    vehicleCategory: "whiteCar",
    numberPlate: "JJQP1X",
    gasVal: 2,
    exhaust: [],
  },
  {
    xCoordinate: 500,
    yCoordinate: 0,
    distAmt: 600,
    vehicleCategory: "greenCar",
    numberPlate: "APANU9",
    gasVal: 2,
    exhaust: [],
  },
  {
    xCoordinate: 300,
    yCoordinate: 0,
    distAmt: 1000,
    vehicleCategory: "whiteCar",
    numberPlate: "TIUNU2",
    gasVal: 2,
    exhaust: [],
  },
  {
    xCoordinate: 500,
    yCoordinate: 0,
    distAmt: 1400,
    vehicleCategory: "redCar",
    numberPlate: "GNO904",
    gasVal: 2,
    exhaust: [],
  },
  {
    xCoordinate: 300,
    yCoordinate: 0,
    distAmt: 1800,
    vehicleCategory: "redCar",
    numberPlate: "VO3G1F",
    gasVal: 2,
    exhaust: [],
  },
  {
    xCoordinate: 300,
    yCoordinate: 0,
    distAmt: 2200,
    vehicleCategory: "whiteCar",
    numberPlate: "H9L8HG",
    gasVal: 2,
    exhaust: [],
  },
  {
    xCoordinate: 500,
    yCoordinate: 0,
    distAmt: 2600,
    vehicleCategory: "greenCar",
    numberPlate: "07L0QA",
    gasVal: 2,
    exhaust: [],
  },
  {
    xCoordinate: 300,
    yCoordinate: 0,
    distAmt: 3000,
    vehicleCategory: "blueCar",
    numberPlate: "DAAOIJ",
    gasVal: 2,
    exhaust: [],
  },
  {
    xCoordinate: 500,
    yCoordinate: 0,
    distAmt: 3400,
    vehicleCategory: "redCar",
    numberPlate: "MB4JQD",
    gasVal: 2,
    exhaust: [],
  },
  {
    xCoordinate: 300,
    yCoordinate: 0,
    distAmt: 3800,
    vehicleCategory: "whiteCar",
    numberPlate: "8TR7LH",
    gasVal: 2,
    exhaust: [],
  },
  {
    xCoordinate: 300,
    yCoordinate: 0,
    distAmt: 4200,
    vehicleCategory: "blueCar",
    numberPlate: "PQ6XLM",
    gasVal: 2,
    exhaust: [],
  },
  {
    xCoordinate: 500,
    yCoordinate: 0,
    distAmt: 4600,
    vehicleCategory: "greenCar",
    numberPlate: "0AXFNA",
    gasVal: 2,
    exhaust: [],
  },
  {
    xCoordinate: 300,
    yCoordinate: 0,
    distAmt: 5000,
    vehicleCategory: "whiteCar",
    numberPlate: "QJTF0Z",
    gasVal: 2,
    exhaust: [],
  },
  {
    xCoordinate: 500,
    yCoordinate: 0,
    distAmt: 5400,
    vehicleCategory: "whiteCar",
    numberPlate: "17A0IY",
    gasVal: 2,
    exhaust: [],
  },
  {
    xCoordinate: 500,
    yCoordinate: 0,
    distAmt: 5800,
    vehicleCategory: "greenCar",
    numberPlate: "TVIDCE",
    gasVal: 2,
    exhaust: [],
  },
  {
    xCoordinate: 300,
    yCoordinate: 0,
    distAmt: 6200,
    vehicleCategory: "redCar",
    numberPlate: "9MB91W",
    gasVal: 2,
    exhaust: [],
  },
  {
    xCoordinate: 500,
    yCoordinate: 0,
    distAmt: 6600,
    vehicleCategory: "greenCar",
    numberPlate: "W4S4JO",
    gasVal: 2,
    exhaust: [],
  },
  {
    xCoordinate: 500,
    yCoordinate: 0,
    distAmt: 7000,
    vehicleCategory: "blueCar",
    numberPlate: "UQA7HP",
    gasVal: 2,
    exhaust: [],
  },
  {
    xCoordinate: 300,
    yCoordinate: 0,
    distAmt: 7400,
    vehicleCategory: "blueCar",
    numberPlate: "1Q3PXU",
    gasVal: 2,
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
  laneCoordinateA = 300;
  laneCoordinateB = 500;

  sleuthVehicle = {
    xCoordinate: roadLeftEdge + roadWidth / 4,
    yCoordinate: 550,
    distAmt: 0,
    gasVal: 3,
    engineRumbleAmount: 0,
    vehicleCategory: "detective",
    numberPlate: "5L3UTH",
    isArrestingCriminal: false,
    pursuingCriminal: false,
    exhaust: [],
  };
}

function draw() {
  background(0);

  drawRoad();
  drawCars();

  if (criminal) {
    if (criminal.isDetained) {
      fill(255);
      text("criminal isDetained!", width / 2, height / 2);
    }
  }

  ////////////////////// HANDLE DETECTIVE /////////////////////////

  if (!sleuthVehicle.pursuingCriminal && !sleuthVehicle.isArrestingCriminal) {
    Drive_Car();
    for (var i = 0; i < vehiclesData.length; i++) {
      var b2b = Car_IsInfront(sleuthVehicle, vehiclesData[i]);
      if (b2b) Change_Lanes(sleuthVehicle);
    }
    var a = Detect_Criminal();
    if (a != false) criminal = a;
    // console.log(criminal);
    if (criminal) sleuthVehicle.pursuingCriminal = true;
  } else if (!sleuthVehicle.isArrestingCriminal) {
    Tailing_Criminal();
    Drive_Car();
  }

  ////////////////////// HANDLE ASSAILANT /////////////////////////

  if (criminal) {
    if (!criminal.isDetained) {
      criminal.gasVal = 5;
      for (var i = 0; i < vehiclesData.length; i++) {
        var b2b = Car_IsInfront(criminal, vehiclesData[i]);
        if (b2b) {
          if (b2b.numberPlate != criminal.numberPlate) {
            Change_Lanes(criminal);
          }
        }
      }
    }
  }

  //////////////////////HANDLE THE OTHER CARS//////////////////////

  for (var i = 0; i < vehiclesData.length; i++) {
    vehiclesData[i].distAmt += vehiclesData[i].gasVal;
    vehiclesData[i].yCoordinate =
      sleuthVehicle.yCoordinate -
      vehiclesData[i].distAmt +
      sleuthVehicle.distAmt;

    if (criminal) {
      if (criminal.isDetained) {
        if (vehiclesData[i].xCoordinate == sleuthVehicle.xCoordinate) {
          if (vehiclesData[i].distAmt < sleuthVehicle.distAmt) {
            if (vehiclesData[i].distAmt - sleuthVehicle.distAmt < 200) {
              Change_Lanes(vehiclesData[i]);
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
      i * 100 + (sleuthVehicle.distAmt % 100),
      roadLeftEdge + roadWidth / 2,
      i * 100 + 70 + (sleuthVehicle.distAmt % 100)
    );
  }
}

function drawCars() {
  //draw the detective car
  drawExhaust(sleuthVehicle);
  image(
    carImages["detective"],
    sleuthVehicle.xCoordinate -
      carImages["detective"].width / 2 +
      random(
        -sleuthVehicle.engineRumbleAmount,
        sleuthVehicle.engineRumbleAmount
      ),
    sleuthVehicle.yCoordinate +
      random(
        -sleuthVehicle.engineRumbleAmount,
        sleuthVehicle.engineRumbleAmount
      )
  );

  //draw all other cars

  for (var i = 0; i < vehiclesData.length; i++) {
    if (
      vehiclesData[i].yCoordinate < height &&
      vehiclesData[i].yCoordinate > -height / 2
    ) {
      image(
        carImages[vehiclesData[i].vehicleCategory],
        vehiclesData[i].xCoordinate -
          carImages[vehiclesData[i].vehicleCategory].width / 2,
        vehiclesData[i].yCoordinate
      );
      Turn_Engine(vehiclesData[i]);

      drawExhaust(vehiclesData[i]);
    }
  }
}

function Turn_Engine(car) {
  car.exhaust.push({
    size: 2,
    x: car.xCoordinate,
    y: car.yCoordinate + carImages[car.vehicleCategory].height,
  });
  //   console.log(car.exhaust);

  for (var i = car.exhaust.length - 1; i >= 0; i--) {
    car.exhaust[i].y += max(0.75, car.gasVal / 3);
    if (car.vehicleCategory != "detective")
      car.exhaust[i].y += sleuthVehicle.gasVal - car.gasVal;
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
