/*

Officer: 7817938
CaseNum: 401-2-59064181-7817938

Case 401 - The Case of Norbert's Weiner Stand
Stage 3 - Bilious bagel

As I suspected Norbert has struck again. Ever inventive he’s set up a bagel stand and
has laced the cream cheese with an ingenious but vicious toxin. This one is quite
deadly so get yourself down to the lab right away.

You must develop the antidote by using conditional statements in the draw loop to
do the following.

	- If mercury goes above 0.59 and methanol goes above 0.74, or on the other hand, nerveGas goes above 0.55, decrement paracetamol by 0.04
	- When formaldehyde dips below 0.66 and strychnine dips below 0.67, try increasing paracetamol by 0.02
	- If strychnine dips below 0.35 and mercury goes above 0.53, reduce opioids by 0.02
	- When either nerveGas dips below 0.28, methanol goes above 0.47, or perhaps formaldehyde goes above 0.27, increment opioids by 0.02
	- If mercury goes above 0.38 and strychnine goes above 0.27, reduce protamine by 0.03
	- If ricin dips below 0.66 or methanol dips below 0.33, whilst at the same time, formaldehyde goes above 0.69, increment protamine by 0.01
	- If formaldehyde dips below 0.5 or mercury dips below 0.27, decrease charcoal by 0.03
	- If ricin dips below 0.37 or methanol dips below 0.56, try increasing charcoal by 0.03


Your conditional statements should:

consider the following poisons:

	- nerveGas
	- formaldehyde
	- strychnine
	- ricin
	- methanol
	- mercury


and modify the following antidotes:

	- paracetamol
	- opioids
	- protamine
	- charcoal


- There are many ways to complete this task but you should only use the
following commands:

	if(){}
	+=
	-=

*/

//Declare the poison variables
var nerveGas;
var formaldehyde;
var strychnine;
var ricin;
var methanol;
var mercury;

//Declare the antidote variables
var paracetamol;
var opioids;
var protamine;
var charcoal;

//This variable is used for drawing the graph
var graphs;

function setup() {
  createCanvas(800, 600);
  strokeWeight(2);

  //initialise the poisons and antidotes
  nerveGas = 0.5;
  formaldehyde = 0.5;
  strychnine = 0.5;
  ricin = 0.5;
  methanol = 0.5;
  mercury = 0.5;
  paracetamol = 0.5;
  opioids = 0.5;
  protamine = 0.5;
  charcoal = 0.5;

  //fills the graph with empty values
  graphs = [];

  for (var i = 0; i < 6; i++) {
    graphs.push([]);
    for (var j = 0; j < 512; j++) {
      graphs[i].push(0.5);
    }
  }
}

function draw() {
  //Develop the antidote below
  //Write conditional statements to change the amount of each substance ...
  // - If mercury goes above 0.59 and methanol goes above 0.74, or on the other hand, nerveGas goes above 0.55, decrement paracetamol by 0.04
  // - When formaldehyde dips below 0.66 and strychnine dips below 0.67, try increasing paracetamol by 0.02
  if ((mercury > 0.59 && methanol > 0.74) || nerveGas > 0.55) {
    paracetamol -= 0.04;
  }
  if (formaldehyde < 0.66 && strychnine < 0.67) {
    paracetamol += 0.02;
  }
  //   - If strychnine dips below 0.35 and mercury goes above 0.53, reduce opioids by 0.02
  // 	- When either nerveGas dips below 0.28, methanol goes above 0.47, or perhaps formaldehyde goes above 0.27, increment opioids by 0.02
  if (strychnine < 0.35 && mercury > 0.53) {
    opioids -= 0.02;
  }
  if (nerveGas < 0.28 || methanol > 0.47 || formaldehyde > 0.27) {
    opioids += 0.02;
  }
  if (mercury > 0.38 && strychnine > 0.27) {
    protamine -= 0.03;
  }
  if ((ricin < 0.66 || methanol < 0.33) && formaldehyde > 0.69) {
    protamine += 0.01;
  }
  if (formaldehyde < 0.5 || mercury < 0.27) {
    charcoal -= 0.03;
  }
  if (ricin < 0.37 || methanol < 0.56) {
    charcoal += 0.03;
  }

  // 	- If ricin dips below 0.66 or methanol dips below 0.33, whilst at the same time, formaldehyde goes above 0.69, increment protamine by 0.01
  // 	- If formaldehyde dips below 0.5 or mercury dips below 0.27, decrease charcoal by 0.03
  // 	- If ricin dips below 0.37 or methanol dips below 0.56, try increasing charcoal by 0.03

  //////////////////////////////////////////////////////

  //the code below generates new values using random numbers

  /*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

  nerveGas = nextValue(graphs[0], nerveGas);
  formaldehyde = nextValue(graphs[1], formaldehyde);
  strychnine = nextValue(graphs[2], strychnine);
  ricin = nextValue(graphs[3], ricin);
  methanol = nextValue(graphs[4], methanol);
  mercury = nextValue(graphs[5], mercury);

  paracetamol = constrain(paracetamol, 0, 1);
  opioids = constrain(opioids, 0, 1);
  protamine = constrain(protamine, 0, 1);
  charcoal = constrain(charcoal, 0, 1);

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
  text("nerveGas: " + nf(nerveGas, 1, 2), 20, 20);
  fill(colors[1]);
  text("formaldehyde: " + nf(formaldehyde, 1, 2), 20, 40);
  fill(colors[2]);
  text("strychnine: " + nf(strychnine, 1, 2), 20, 60);
  fill(colors[3]);
  text("ricin: " + nf(ricin, 1, 2), 20, 80);
  fill(colors[4]);
  text("methanol: " + nf(methanol, 1, 2), 20, 100);
  fill(colors[5]);
  text("mercury: " + nf(mercury, 1, 2), 20, 120);

  //draw the antidotes bar chart
  drawBar(paracetamol, 50, "paracetamol");
  drawBar(opioids, 200, "opioids");
  drawBar(protamine, 350, "protamine");
  drawBar(charcoal, 500, "charcoal");
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
