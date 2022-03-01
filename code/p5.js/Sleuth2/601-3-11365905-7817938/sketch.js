/*
Officer: 7817938
CaseNum: 601-3-11365905-7817938

Case 601 - Narrowing in - stage 4

Casey Fry is on a killing spree and we still haven’t caught her.
We need a more sophisticated approach.

In the setup function, use a for loop to traverse the sightings, marking all of the locations on the map
where she was last seen. Do this by drawing small, ForestGreen fill rectangles centered over each location.

In addition, we've assembled a list of recent thefts in the area. Using another for loop to traverse the
recent crime records, you should mark those locations on the map. Do this by drawing small, Green fill ellipses at each location.

This time we will catch Fry by comparing both distance from the crimes and dates of sightings.
If she was within less than 69 pixels of any of the crimes within no more than 2 days of their occurrence then the details
should be pushed to the list of possible matches with the following format.

{ crime:{x: 0, y:0, victimName: "John Doe"}, suspect:{x: 0, y:0} }

Note that the possible matches are already being drawn.
Your job is to fill the array with the correct data.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

For this mission you will need ONLY the following:

- for loop
- if()
- dist()
- abs()
- fill
- rect() NB. Draw each rectangle with the point at its center.

- fill
- ellipse()


*/

var countyMap;

var possibleMatches = [];

//Sightings of Casey Fry.

var Killer_Log = [
  {locationX: 518, locationY: 471, day: 12},
  {locationX: 486, locationY: 508, day: 12},
  {locationX: 475, locationY: 566, day: 13},
  {locationX: 376, locationY: 554, day: 13},
  {locationX: 316, locationY: 559, day: 13},
  {locationX: 265, locationY: 614, day: 14},
  {locationX: 253, locationY: 609, day: 14},
  {locationX: 240, locationY: 604, day: 14},
  {locationX: 220, locationY: 597, day: 15},
  {locationX: 178, locationY: 600, day: 15},
  {locationX: 199, locationY: 604, day: 17},
  {locationX: 146, locationY: 582, day: 18},
  {locationX: 115, locationY: 551, day: 20},
  {locationX: 67, locationY: 495, day: 21},
  {locationX: 39, locationY: 493, day: 22},
  {locationX: 68, locationY: 461, day: 24},
];

//Recent crime records.

var Murder_Recorded = [
  {PointX: 438, PointY: 420, recordDate: 11, VictimDetails: "ERMELINDA OORIN"},
  {PointX: 408, PointY: 451, recordDate: 11, VictimDetails: "TU DAVISWOOD"},
  {PointX: 408, PointY: 377, recordDate: 13, VictimDetails: "GAYLA WILLMAR"},
  {PointX: 642, PointY: 289, recordDate: 16, VictimDetails: "MALINDA GOODBURY"},
  {
    PointX: 623,
    PointY: 279,
    recordDate: 16,
    VictimDetails: "LAVERNE JACQUELIN",
  },
  {PointX: 95, PointY: 488, recordDate: 17, VictimDetails: "LESLEY MONKSFORD"},
  {PointX: 75, PointY: 522, recordDate: 18, VictimDetails: "LOUISE ZETLAND"},
  {PointX: 269, PointY: 597, recordDate: 26, VictimDetails: "DEEDEE PHINNEY"},
  {PointX: 389, PointY: 554, recordDate: 28, VictimDetails: "LINETTE MOHWAWK"},
  {PointX: 484, PointY: 549, recordDate: 2, VictimDetails: "MAJORIE JENI"},
  {PointX: 496, PointY: 484, recordDate: 9, VictimDetails: "BRAD SILVEIRA"},
  {PointX: 546, PointY: 463, recordDate: 14, VictimDetails: "DRUSILLA WARMAN"},
  {PointX: 538, PointY: 359, recordDate: 12, VictimDetails: "DARBY MYRLE"},
  {
    PointX: 702,
    PointY: 412,
    recordDate: 17,
    VictimDetails: "JACQUELINE DURANTS",
  },
  {PointX: 817, PointY: 474, recordDate: 18, VictimDetails: "NICOLE ASHELY"},
];

function preload() {
  countyMap = loadImage("map.png");
}

function setup() {
  createCanvas(countyMap.width, countyMap.height);

  image(countyMap, 0, 0);
  //add your code below here
  for (var i = 0; i < Killer_Log.length; i++) {
    fill(34, 139, 34);
    noStroke();
    rect(Killer_Log[i].locationX - 3, Killer_Log[i].locationY - 3, 6, 6);
  }
  for (var i = 0; i < Murder_Recorded.length; i++) {
    fill(0, 128, 0);
    noStroke();
    ellipse(Murder_Recorded[i].PointX, Murder_Recorded[i].PointY, 6);
  }
  for (var i = 0; i < Killer_Log.length; i++) {
    for (var j = 0; j < Murder_Recorded.length; j++) {
      if (
        dist(
          Killer_Log[i].locationX,
          Killer_Log[i].locationY,
          Murder_Recorded[j].PointX,
          Murder_Recorded[j].PointY
        ) < 69 &&
        abs(Murder_Recorded[j].recordDate - Killer_Log[i].day) <= 2
      ) {
        possibleMatches.push({
          crime: {
            x: Murder_Recorded[j].PointX,
            y: Murder_Recorded[j].PointY,
            victimName: Murder_Recorded[j].VictimDetails,
          },
          suspect: {x: Killer_Log[i].locationX, y: Killer_Log[i].locationY},
        });
      }
    }
  }
  // code to draw the matches ( if any)
  for (let i = 0; i < possibleMatches.length; i++) {
    stroke(127);
    strokeWeight(3);
    line(
      possibleMatches[i].crime.x,
      possibleMatches[i].crime.y,
      possibleMatches[i].suspect.x,
      possibleMatches[i].suspect.y
    );

    noStroke();
    fill(127);
    text(
      possibleMatches[i].crime.victimName,
      possibleMatches[i].crime.x + 15,
      possibleMatches[i].crime.y + 15
    );
  }
}

//We are not using the draw function this time
