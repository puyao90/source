/*

Officer: 7817938
CaseNum: 702-1-34920625-7817938

Case 702 - The case of Vanishing Vannevar
Stage 2 - Downtown traffic

“All units: Vannevar is heading into the downtown area. Heavy traffic ahead. Drive safely.”
Complete the helper functions below to drive the car and avoid other vehicles. Keep on it kid.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- Incrementing and assiging variables
	- Maths function such as random and constrain
	- Conditional statements
	- Traversing arrays with for loops
	- calling functions and returning values

HINT: make sure you take a look at the initialisation of ChaseCar and the cars in
CarObject_Data to understand their properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function move_vehicle() {
  /*
	This function should do the following: 
	 - increment ChaseCar's KmsDriven property by its GasValue property 
	 - add a random amount between -0.07 and 0.07 to ChaseCar's VibrateAmount property
	 - use the constrain function to constrain ChaseCar's VibrateAmount property to values between 0.01 and 0.76
	 - call the drive_carEngine function passing ChaseCar as an argument
	*/
  ChaseCar.KmsDriven += ChaseCar.GasValue;
  ChaseCar.VibrateAmount += random(-0.07, 0.07);
  ChaseCar.VibrateAmount = constrain(ChaseCar.VibrateAmount, 0.01, 0.76);
  drive_carEngine(ChaseCar);
}

function swap_lanes(target_vehicle) {
  /*
	This function should do the following: 
	 - move target_vehicle from one lane to the other.
	 - do the move in a single step without any extra animation.
	 - use LanePosition_A and LanePosition_B to effect the change.
	 - finally you should return target_vehicle at the end of the function.
	 hint: You will need to modify the PosX property of target_vehicle.
	*/
  console.log("swap ...");
  if (target_vehicle.PosX == LanePosition_A) {
    target_vehicle.PosX = LanePosition_B;
  } else {
    target_vehicle.PosX = LanePosition_A;
  }
  return target_vehicle;
}

function searchCar_infront(car) {
  /*
	This function should do the following: 
	 - determine if car is in the same lane and less than 200px behind any of the cars in CarObject_Data.
	 - do this by traversing CarObject_Data and comparing each car's KmsDriven property to that of car.
	 - if you find a car that matches these requirements then return the car object. Otherwise return false.
	*/
  for (var i = 0; i < CarObject_Data.length; i++) {
    // console.log(CarObject_Data[i].KmsDriven - car.KmsDriven, CarObject_Data[i]);
    if (
      car.PosX == CarObject_Data[i].PosX &&
      CarObject_Data[i].KmsDriven - car.KmsDriven < 200 &&
      CarObject_Data[i].KmsDriven - car.KmsDriven > 0
    ) {
      return CarObject_Data[i];
    }
  }
  return false;
}

//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var ChaseCar;

var roadWidth;
var roadLeftEdge;
var LanePosition_A;
var LanePosition_B;
var carImages = {};

var CarObject_Data = [
  {
    PosX: 500,
    PosY: 0,
    KmsDriven: -200,
    CarModel: "blueCar",
    NumberPlate: "ZRWHF2",
    GasValue: 2,
    exhaust: [],
  },
  {
    PosX: 500,
    PosY: 0,
    KmsDriven: 200,
    CarModel: "redCar",
    NumberPlate: "ZMNJL9",
    GasValue: 2,
    exhaust: [],
  },
  {
    PosX: 500,
    PosY: 0,
    KmsDriven: 600,
    CarModel: "redCar",
    NumberPlate: "S37UTE",
    GasValue: 2,
    exhaust: [],
  },
  {
    PosX: 500,
    PosY: 0,
    KmsDriven: 1000,
    CarModel: "redCar",
    NumberPlate: "4G5BU1",
    GasValue: 2,
    exhaust: [],
  },
  {
    PosX: 300,
    PosY: 0,
    KmsDriven: 1400,
    CarModel: "blueCar",
    NumberPlate: "OHJZO8",
    GasValue: 2,
    exhaust: [],
  },
  {
    PosX: 300,
    PosY: 0,
    KmsDriven: 1800,
    CarModel: "whiteCar",
    NumberPlate: "COS1L4",
    GasValue: 2,
    exhaust: [],
  },
  {
    PosX: 500,
    PosY: 0,
    KmsDriven: 2200,
    CarModel: "greenCar",
    NumberPlate: "CS7RCL",
    GasValue: 2,
    exhaust: [],
  },
  {
    PosX: 500,
    PosY: 0,
    KmsDriven: 2600,
    CarModel: "whiteCar",
    NumberPlate: "GO1JC5",
    GasValue: 2,
    exhaust: [],
  },
  {
    PosX: 500,
    PosY: 0,
    KmsDriven: 3000,
    CarModel: "whiteCar",
    NumberPlate: "UWXIZ5",
    GasValue: 2,
    exhaust: [],
  },
  {
    PosX: 500,
    PosY: 0,
    KmsDriven: 3400,
    CarModel: "whiteCar",
    NumberPlate: "54GKP8",
    GasValue: 2,
    exhaust: [],
  },
  {
    PosX: 500,
    PosY: 0,
    KmsDriven: 3800,
    CarModel: "redCar",
    NumberPlate: "KO1BJK",
    GasValue: 2,
    exhaust: [],
  },
  {
    PosX: 300,
    PosY: 0,
    KmsDriven: 4200,
    CarModel: "whiteCar",
    NumberPlate: "G1MYEM",
    GasValue: 2,
    exhaust: [],
  },
  {
    PosX: 500,
    PosY: 0,
    KmsDriven: 4600,
    CarModel: "blueCar",
    NumberPlate: "1EG7P2",
    GasValue: 2,
    exhaust: [],
  },
  {
    PosX: 300,
    PosY: 0,
    KmsDriven: 5000,
    CarModel: "greenCar",
    NumberPlate: "TDBB4B",
    GasValue: 2,
    exhaust: [],
  },
  {
    PosX: 500,
    PosY: 0,
    KmsDriven: 5400,
    CarModel: "greenCar",
    NumberPlate: "PRLEB4",
    GasValue: 2,
    exhaust: [],
  },
  {
    PosX: 500,
    PosY: 0,
    KmsDriven: 5800,
    CarModel: "blueCar",
    NumberPlate: "CK6X8G",
    GasValue: 2,
    exhaust: [],
  },
  {
    PosX: 300,
    PosY: 0,
    KmsDriven: 6200,
    CarModel: "blueCar",
    NumberPlate: "BH6IIY",
    GasValue: 2,
    exhaust: [],
  },
  {
    PosX: 500,
    PosY: 0,
    KmsDriven: 6600,
    CarModel: "redCar",
    NumberPlate: "0SXCXL",
    GasValue: 2,
    exhaust: [],
  },
  {
    PosX: 500,
    PosY: 0,
    KmsDriven: 7000,
    CarModel: "redCar",
    NumberPlate: "1V91AF",
    GasValue: 2,
    exhaust: [],
  },
  {
    PosX: 500,
    PosY: 0,
    KmsDriven: 7400,
    CarModel: "whiteCar",
    NumberPlate: "YOVO3Q",
    GasValue: 2,
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

  roadWidth = 400;
  roadLeftEdge = 200;
  LanePosition_A = 300;
  LanePosition_B = 500;

  ChaseCar = {
    PosX: roadLeftEdge + roadWidth / 4,
    PosY: 550,
    KmsDriven: 0,
    GasValue: 3,
    VibrateAmount: 0,
    CarModel: "detective",
    NumberPlate: "5L3UTH",
    exhaust: [],
  };
}

function draw() {
  background(0);

  drawRoad();
  drawCars();

  ////////////////////// HANDLE DETECTIVE /////////////////////////

  move_vehicle();
  var b2b = searchCar_infront(ChaseCar);
  if (b2b) swap_lanes(ChaseCar);

  //////////////////////HANDLE THE OTHER CARS//////////////////////

  for (var i = 0; i < CarObject_Data.length; i++) {
    CarObject_Data[i].KmsDriven += CarObject_Data[i].GasValue;
    CarObject_Data[i].PosY =
      ChaseCar.PosY - CarObject_Data[i].KmsDriven + ChaseCar.KmsDriven;
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
      i * 100 + (ChaseCar.KmsDriven % 100),
      roadLeftEdge + roadWidth / 2,
      i * 100 + 70 + (ChaseCar.KmsDriven % 100)
    );
  }
}

function drawCars() {
  //draw the detective car

  image;
  drawExhaust(ChaseCar);
  image(
    carImages["detective"],
    ChaseCar.PosX -
      carImages["detective"].width / 2 +
      random(-ChaseCar.VibrateAmount, ChaseCar.VibrateAmount),
    ChaseCar.PosY + random(-ChaseCar.VibrateAmount, ChaseCar.VibrateAmount)
  );

  //draw all other cars

  for (var i = 0; i < CarObject_Data.length; i++) {
    if (
      CarObject_Data[i].PosY < height &&
      CarObject_Data[i].PosY > -height / 2
    ) {
      image(
        carImages[CarObject_Data[i].CarModel],
        CarObject_Data[i].PosX -
          carImages[CarObject_Data[i].CarModel].width / 2,
        CarObject_Data[i].PosY
      );
      drive_carEngine(CarObject_Data[i]);

      drawExhaust(CarObject_Data[i]);
    }
  }
}

function drive_carEngine(car) {
  car.exhaust.push({
    size: 2,
    x: car.PosX,
    y: car.PosY + carImages[car.CarModel].height,
  });

  for (var i = car.exhaust.length - 1; i >= 0; i--) {
    car.exhaust[i].y += max(0.75, car.GasValue / 3);
    if (car.CarModel != "detective")
      car.exhaust[i].y += ChaseCar.GasValue - car.GasValue;
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
