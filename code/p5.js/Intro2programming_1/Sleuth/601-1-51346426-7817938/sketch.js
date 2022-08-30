/*
Officer: 7817938
CaseNum: 601-1-51346426-7817938

Case 601 - Cross Reference - stage 2

Fry is still on the loose. We think she’s resorted to stealing to get by.
Hopefully we can track her down by cross-referencing sightings and recent thefts in the area.

In the setup function, use a for loop to traverse the sightings, marking all of the locations on the map
where she was last seen. Do this by drawing small, Green fill triangles centered over each location.

In addition, we've assembled a list of recent thefts in the area. Using another for loop to traverse the
recent crime records, you should mark those locations on the map. Do this by drawing small, DarkBlue stroke ellipses at each location.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

For this mission you will need ONLY the following:

- for loop
- fill
- triangle() NB. Draw each triangle with the point roughly at its center.

- stroke
- ellipse()


*/

var countyMap;

//Sightings of Casey Fry.

var Absconder_Log = {
  location_x: [
    639, 681, 712, 756, 715, 701, 753, 815, 795, 788, 781, 768, 750, 732, 714,
    695, 693, 654, 624, 594, 555,
  ],
  location_y: [
    288, 286, 293, 310, 368, 425, 436, 468, 506, 497, 486, 489, 500, 506, 514,
    531, 552, 523, 500, 484, 474,
  ],
};

//Recent crime records.

var Theft_Data = [
  {coordX: 403, coordY: 401},
  {coordX: 402, coordY: 360},
  {coordX: 427, coordY: 403},
  {coordX: 646, coordY: 284},
  {coordX: 639, coordY: 264},
  {coordX: 830, coordY: 434},
  {coordX: 809, coordY: 443},
  {coordX: 844, coordY: 496},
  {coordX: 802, coordY: 350},
  {coordX: 683, coordY: 413},
  {coordX: 552, coordY: 464},
  {coordX: 629, coordY: 498},
  {coordX: 712, coordY: 562},
  {coordX: 783, coordY: 603},
  {coordX: 415, coordY: 225},
  {coordX: 561, coordY: 282},
  {coordX: 562, coordY: 392},
  {coordX: 751, coordY: 283},
  {coordX: 680, coordY: 359},
  {coordX: 626, coordY: 436},
  {coordX: 701, coordY: 455},
  {coordX: 838, coordY: 565},
  {coordX: 322, coordY: 508},
  {coordX: 468, coordY: 556},
  {coordX: 625, coordY: 737},
];

function preload() {
  countyMap = loadImage("map.png");
}

function setup() {
  createCanvas(countyMap.width, countyMap.height);

  image(countyMap, 0, 0);

  //add your code below here
  for (var i = 0; i < Absconder_Log.location_x.length; i++) {
    noStroke();
    fill(0, 128, 0);
    triangle(
      Absconder_Log.location_x[i],
      Absconder_Log.location_y[i] - 6,
      Absconder_Log.location_x[i] - 3,
      Absconder_Log.location_y[i] + 6,
      Absconder_Log.location_x[i] + 3,
      Absconder_Log.location_y[i] + 6
    );
  }
  for (var i = 0; i < Theft_Data.length; i++) {
    noFill();
    stroke(0, 0, 139);
    ellipse(Theft_Data[i].coordX, Theft_Data[i].coordY, 5);
  }
}

//We are not using the draw function this time
