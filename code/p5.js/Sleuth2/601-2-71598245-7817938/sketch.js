/*
Officer: 7817938
CaseNum: 601-2-71598245-7817938

Case 601 - Murdering Again - stage 3

Now murders are beginning to occur - we're pretty sure that this is the work of Fry.
If we can place her near any of the recent crime scenes in the area we should be able narrow down her location.

In the setup function, use a for loop to traverse the sightings, marking all of the locations on the map
where she was last seen. Do this by drawing Orange stroke vertexes at each location.

In addition, we've assembled a list of recent thefts in the area. Using another for loop to traverse the
recent crime records, you should mark those locations on the map. Do this by drawing small, SlateBlue fill ellipses at each location.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

Let's try to catch Fry by looking patterns between sightings and crimes. If she was within less than 45 pixels of any of the crimes then the details
should be pushed to possible matches with the following format.

{ suspect_x: 0, suspect_y: 0 ,crime_x: 0, crime_y: 0, victimName: "John_Doe" }

Note that the possible matches are already being drawn.
Your job is simply to fill the array with the correct data.

For this mission you will need ONLY the following:

- for loop
- dist()
- if()
- stroke()
- beginShape(), endShape(), vertex()

- fill
- ellipse()


*/

var countyMap;

var possibleMatches = [];

//Sightings of Casey Fry.

var Casey_Logbook = [
  {point_x: 639, point_y: 288},
  {point_x: 681, point_y: 286},
  {point_x: 712, point_y: 293},
  {point_x: 756, point_y: 310},
  {point_x: 715, point_y: 368},
  {point_x: 701, point_y: 425},
  {point_x: 753, point_y: 436},
  {point_x: 815, point_y: 468},
  {point_x: 795, point_y: 506},
  {point_x: 788, point_y: 497},
  {point_x: 781, point_y: 486},
  {point_x: 768, point_y: 489},
  {point_x: 750, point_y: 500},
  {point_x: 732, point_y: 506},
  {point_x: 714, point_y: 514},
  {point_x: 695, point_y: 531},
  {point_x: 693, point_y: 552},
  {point_x: 654, point_y: 523},
  {point_x: 624, point_y: 500},
  {point_x: 594, point_y: 484},
  {point_x: 555, point_y: 474},
];

//Recent crime records.

var Crimescene_Log = [
  {Pt_X: 409, Pt_Y: 446, Killed_Details: "JESUS FORSLIN"},
  {Pt_X: 443, Pt_Y: 419, Killed_Details: "JULIANA ADVERSANE"},
  {Pt_X: 465, Pt_Y: 548, Killed_Details: "TU DAVISWOOD"},
  {Pt_X: 709, Pt_Y: 552, Killed_Details: "MALINDA GOODBURY"},
  {Pt_X: 695, Pt_Y: 421, Killed_Details: "GAYLA WILLMAR"},
  {Pt_X: 652, Pt_Y: 268, Killed_Details: "JAUNITA JOYER"},
  {Pt_X: 641, Pt_Y: 306, Killed_Details: "PIERRE DORCEY"},
  {Pt_X: 119, Pt_Y: 344, Killed_Details: "LAVERNE JACQUELIN"},
  {Pt_X: 114, Pt_Y: 359, Killed_Details: "JACQUELINE DURANTS"},
  {Pt_X: 90, Pt_Y: 490, Killed_Details: "SUMMER CASIMERE"},
  {Pt_X: 76, Pt_Y: 516, Killed_Details: "LAKESHA SYMMES"},
  {Pt_X: 615, Pt_Y: 741, Killed_Details: "MAJORIE JENI"},
  {Pt_X: 349, Pt_Y: 796, Killed_Details: "DRUSILLA WARMAN"},
  {Pt_X: 456, Pt_Y: 770, Killed_Details: "LIANNE COURTWOOD"},
];

function preload() {
  countyMap = loadImage("map.png");
}

function setup() {
  createCanvas(countyMap.width, countyMap.height);

  image(countyMap, 0, 0);

  //add your code below here
  stroke(255, 165, 0);
  noFill();
  beginShape();
  for (var i = 0; i < Casey_Logbook.length; i++) {
    vertex(Casey_Logbook[i].point_x, Casey_Logbook[i].point_y);
  }
  endShape();
  for (var i = 0; i < Crimescene_Log.length; i++) {
    fill(106, 90, 205);
    noStroke();
    ellipse(Crimescene_Log[i].Pt_X, Crimescene_Log[i].Pt_Y, 5);
  }
  for (var i = 0; i < Casey_Logbook.length; i++) {
    for (var j = 0; j < Crimescene_Log.length; j++) {
      if (
        dist(
          Casey_Logbook[i].point_x,
          Casey_Logbook[i].point_y,
          Crimescene_Log[j].Pt_X,
          Crimescene_Log[j].Pt_Y
        ) < 45
      ) {
        possibleMatches.push({
          suspect_x: Casey_Logbook[i].point_x,
          suspect_y: Casey_Logbook[i].point_y,
          crime_x: Crimescene_Log[j].Pt_X,
          crime_y: Crimescene_Log[j].Pt_Y,
          victimName: Crimescene_Log[j].Killed_Details,
        });
      }
    }
  }

  // code to draw the matches ( if any)
  for (let i = 0; i < possibleMatches.length; i++) {
    stroke(127);
    strokeWeight(3);
    line(
      possibleMatches[i].crime_x,
      possibleMatches[i].crime_y,
      possibleMatches[i].suspect_x,
      possibleMatches[i].suspect_y
    );

    noStroke();
    fill(127);
    text(
      possibleMatches[i].victimName,
      possibleMatches[i].crime_x + 15,
      possibleMatches[i].crime_y + 15
    );
  }
}

//We are not using the draw function this time
