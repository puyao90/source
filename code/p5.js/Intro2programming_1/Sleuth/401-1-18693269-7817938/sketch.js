/*

Officer: 7817938
CaseNum: 401-1-18693269-7817938

Case 401 - The Case of Norbert's Weiner Stand
Stage 2 - Toxic Burrito

Norbert is at it again. This time he’s set up a burrito stall and is lacing burritos
with his foul toxin. The chaos is spreading. People are dropping like flies and burrito
sales have fallen through the floor. To make matters worse it seems Norbert has cottoned
on to our methods and has upped the complexity of his poison. You’ll find the antidote
harder to develop this time. So kid, head down to the lab and get working.

You must develop the antidote by using conditional statements in the draw loop to
do the following.

	- If ricin goes above 0.37, decrement opioids by 0.04
	- If hemlock dips below 0.36, try increasing opioids by 0.01
	- When chlorine goes above 0.4, try decreasing insulin by 0.03
	- When ricin goes above 0.67, increase insulin by 0.03
	- When ricin goes above 0.43, try decreasing ethanol by 0.05
	- If novichok goes above 0.34 or hemlock dips below 0.37, try increasing ethanol by 0.05
	- If novichok goes above 0.63, decrement plasma by 0.02
	- If hemlock goes above 0.74 or chlorine goes above 0.61, increment plasma by 0.01


Your conditional statements should:

consider the following poisons:

	- chlorine
	- hemlock
	- ricin
	- novichok


and modify the following antidotes:

	- opioids
	- insulin
	- ethanol
	- plasma


- There are many ways to complete this task but you should only use the
following commands:

	if(){}
	+=
	-=

*/

//Declare the poison variables
var chlorine;
var hemlock;
var ricin;
var novichok;

//Declare the antidote variables
var opioids;
var insulin;
var ethanol;
var plasma;

//This variable is used for drawing the graph
var graphs;

function setup() {
  createCanvas(800, 600);
  strokeWeight(2);

  //initialise the poisons and antidotes
  chlorine = 0.5;
  hemlock = 0.5;
  ricin = 0.5;
  novichok = 0.5;
  opioids = 0.5;
  insulin = 0.5;
  ethanol = 0.5;
  plasma = 0.5;

  //fills the graph with empty values
  graphs = [];

  for (var i = 0; i < 4; i++) {
    graphs.push([]);
    for (var j = 0; j < 512; j++) {
      graphs[i].push(0.5);
    }
  }
}

function draw() {
  //Develop the antidote below
  //Write conditional statements to change the amount of each substance ...
  if (ricin > 0.37) {
    opioids -= 0.04;
  }
  if (hemlock < 0.36) {
    opioids += 0.01;
  }
  if (chlorine > 0.4) {
    insulin -= 0.03;
  }
  if (ricin > 0.67) {
    insulin += 0.03;
  }
  if (ricin > 0.43) {
    ethanol -= 0.05;
  }
  if (novichok > 0.34 || hemlock < 0.37) {
    ethanol += 0.05;
  }
  if (novichok > 0.63) {
    plasma -= 0.02;
  }
  if (hemlock > 0.74 || chlorine > 0.61) {
    plasma += 0.01;
  }

  //////////////////////////////////////////////////////

  //the code below generates new values using random numbers

  /*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

  chlorine = nextValue(graphs[0], chlorine);
  hemlock = nextValue(graphs[1], hemlock);
  ricin = nextValue(graphs[2], ricin);
  novichok = nextValue(graphs[3], novichok);

  opioids = constrain(opioids, 0, 1);
  insulin = constrain(insulin, 0, 1);
  ethanol = constrain(ethanol, 0, 1);
  plasma = constrain(plasma, 0, 1);

  ///////// DO NOT CHANGE THE CODE BELOW ///////////

  //drawing code

  // set background
  background(0);
  noFill();

  //draw the graphs for the vitals
  var colors = [
    color(255, 0, 0),
    color(0, 255, 0),
    color(0, 0, 255),
    color(255, 0, 255),
    color(255, 255, 0),
    color(0, 255, 255),
  ];

  for (var i = 0; i < graphs.length; i++) {
    stroke(colors[i]);
    drawGraph(graphs[i]);
  }

  //draw the poisons as text
  noStroke();
  fill(colors[0]);
  text("chlorine: " + nf(chlorine, 1, 2), 20, 20);
  fill(colors[1]);
  text("hemlock: " + nf(hemlock, 1, 2), 20, 40);
  fill(colors[2]);
  text("ricin: " + nf(ricin, 1, 2), 20, 60);
  fill(colors[3]);
  text("novichok: " + nf(novichok, 1, 2), 20, 80);

  //draw the antidotes bar chart
  drawBar(opioids, 50, "opioids");
  drawBar(insulin, 200, "insulin");
  drawBar(ethanol, 350, "ethanol");
  drawBar(plasma, 500, "plasma");
}

function nextValue(graph, val) {
  //gets the next value for a vital and puts it in an array for drawing
  var delta = random(-0.03, 0.03);

  val += delta;
  if (val > 1 || val < 0) {
    delta *= -1;
    val += delta * 2;
  }

  graph.push(val);
  graph.shift();
  return val;
}

function drawGraph(graph) {
  //draws an array as a graph
  beginShape();
  for (var i = 0; i < graph.length; i++) {
    vertex((width * i) / 512, height * 0.5 - (graph[i] * height) / 3);
  }
  endShape();
}

function drawBar(val, x, name) {
  //draws the bars for bar chart
  noStroke();
  fill(0, 100, 100);
  var mh = height * 0.4 - 50;
  rect(x, height - 50 - val * mh, 100, val * mh);
  fill(255);
  text(name + ": " + val, x, height - 20);
}
