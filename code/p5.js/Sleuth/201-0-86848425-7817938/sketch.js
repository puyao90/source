/*
201 - The case of Judge Hopper:
Stage 1 - Department of Justice

Officer: 7817938
CaseNum: 201-0-86848425-7817938

Judge Hopper has gone missing and we’ve been booked to investigate. This is the big time kid. Now I need you to head over to Hopper’s office at the Department of Justice and gather clues.

Draw a separate ellipse around 4 pieces of evidence:
Letter opener,
Death threat letters,
telephone,
and the AGOL leaflet

Each ellipse should cover the entire object whilst keeping as close to the edges as possible. You will need to use different values for the width and height arguments.


*/

var img;

function preload() {
    img = loadImage('scene.png');
}

function setup() {
    createCanvas(img.width, img.height);
}

function draw() {

    image(img, 0, 0);
    stroke(255, 0, 0);
    strokeWeight(3);
    noFill();

    // write the code to draw around the evidence below
    ellipse(719, 243, 55, 130)
    ellipse(564, 245, 124, 124)
    ellipse(418, 301, 187, 134)
    ellipse(254, 232, 105, 125)
}