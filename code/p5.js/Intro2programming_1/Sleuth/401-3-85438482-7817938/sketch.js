/*

Officer: 7817938
CaseNum: 401-3-85438482-7817938

Case 401 - The Case of Norbert's Weiner Stand
Stage 4 - Mortal Cupcake

It seems that Norbert is getting desperate now. In what appears to be his final
stand he has set up his own cupcake shop. The laced cupcakes look delicious but
they are extremely dangerous. Just a brief whiff of one can induce a series of
deadly symptoms. This is Norbert’s most complex poison to date, so you’ll have
to work hard to produce a viable antidote.

You must develop the antidote by using conditional statements in the draw loop to
do the following.

	- When methanol dips below 0.47 or nerveGas goes above 0.52, whilst at the same time, AmanitaMushrooms dips below 0.31, decrease calcium_gluconate by 0.03
	- If novichok dips below 0.7 or formaldehyde dips below 0.65, or on the other hand, botulinium goes above 0.44 and alcohol dips below 0.72, increment calcium_gluconate by 0.05
	- If either botulinium dips below 0.36, strychnine dips below 0.27, or perhaps nerveGas goes above 0.38, decrease paracetamol by 0.02
	- If either AmanitaMushrooms goes above 0.3, methanol dips below 0.65, novichok goes above 0.64, or perhaps formaldehyde goes above 0.46, increment paracetamol by 0.04
	- If either botulinium dips below 0.45, novichok dips below 0.5, AmanitaMushrooms goes above 0.75, or perhaps alcohol dips below 0.52, decrement glucagon by 0.05
	- If strychnine goes above 0.28 or methanol dips below 0.61, whilst at the same time, formaldehyde dips below 0.65, try increasing glucagon by 0.02
	- If either nerveGas dips below 0.29, methanol goes above 0.44, or perhaps alcohol dips below 0.44, reduce plasma by 0.02
	- When novichok dips below 0.61 and botulinium goes above 0.45, whilst at the same time, formaldehyde dips below 0.67 or AmanitaMushrooms goes above 0.75, increase plasma by 0.04
	- When alcohol goes above 0.57 and nerveGas dips below 0.69, whilst at the same time, strychnine dips below 0.55 or formaldehyde goes above 0.65, decrement Hydrochloric_Acid by 0.03
	- If methanol dips below 0.45 or botulinium dips below 0.35, whilst at the same time, AmanitaMushrooms dips below 0.49 or novichok dips below 0.46, increment Hydrochloric_Acid by 0.05


Your conditional statements should:

consider the following poisons:

	- methanol
	- nerveGas
	- alcohol
	- AmanitaMushrooms
	- novichok
	- strychnine
	- formaldehyde
	- botulinium


and modify the following antidotes:

	- calcium_gluconate
	- paracetamol
	- glucagon
	- plasma
	- Hydrochloric_Acid


- There are many ways to complete this task but you should only use the
following commands:

	if(){}
	+=
	-=

*/

//Declare the poison variables
var methanol;
var nerveGas;
var alcohol;
var AmanitaMushrooms;
var novichok;
var strychnine;
var formaldehyde;
var botulinium;

//Declare the antidote variables
var calcium_gluconate;
var paracetamol;
var glucagon;
var plasma;
var Hydrochloric_Acid;

//This variable is used for drawing the graph
var graphs;

function setup() {
  createCanvas(800, 600);
  strokeWeight(2);

  //initialise the poisons and antidotes
  methanol = 0.5;
  nerveGas = 0.5;
  alcohol = 0.5;
  AmanitaMushrooms = 0.5;
  novichok = 0.5;
  strychnine = 0.5;
  formaldehyde = 0.5;
  botulinium = 0.5;
  calcium_gluconate = 0.5;
  paracetamol = 0.5;
  glucagon = 0.5;
  plasma = 0.5;
  Hydrochloric_Acid = 0.5;

  //fills the graph with empty values
  graphs = [];

  for (var i = 0; i < 8; i++) {
    graphs.push([]);
    for (var j = 0; j < 512; j++) {
      graphs[i].push(0.5);
    }
  }
}

function draw() {
  //Develop the antidote below
  //Write conditional statements to change the amount of each substance ...

  // - When methanol dips below 0.47 or nerveGas goes above 0.52, whilst at the same time, AmanitaMushrooms dips below 0.31, decrease calcium_gluconate by 0.03
  // 	- If novichok dips below 0.7 or formaldehyde dips below 0.65, or on the other hand, botulinium goes above 0.44 and alcohol dips below 0.72, increment calcium_gluconate by 0.05
  // 	- If either botulinium dips below 0.36, strychnine dips below 0.27, or perhaps nerveGas goes above 0.38, decrease paracetamol by 0.02
  if ((methanol < 0.47 || nerveGas > 0.52) && AmanitaMushrooms < 0.31) {
    calcium_gluconate -= 0.03;
  }
  if (
    novichok < 0.7 ||
    formaldehyde < 0.65 ||
    (botulinium > 0.44 && alcohol < 0.72)
  ) {
    calcium_gluconate += 0.05;
  }
  if (botulinium < 0.36 || strychnine < 0.27 || nerveGas > 0.38) {
    paracetamol -= 0.02;
  }
  // 	- If either AmanitaMushrooms goes above 0.3, methanol dips below 0.65, novichok goes above 0.64, or perhaps formaldehyde goes above 0.46, increment paracetamol by 0.04
  // 	- If either botulinium dips below 0.45, novichok dips below 0.5, AmanitaMushrooms goes above 0.75, or perhaps alcohol dips below 0.52, decrement glucagon by 0.05
  // 	- If strychnine goes above 0.28 or methanol dips below 0.61, whilst at the same time, formaldehyde dips below 0.65, try increasing glucagon by 0.02

  if (
    AmanitaMushrooms > 0.3 ||
    methanol < 0.65 ||
    novichok > 0.64 ||
    formaldehyde > 0.46
  ) {
    paracetamol += 0.04;
  }
  if (
    botulinium < 0.45 ||
    novichok < 0.5 ||
    AmanitaMushrooms > 0.75 ||
    alcohol < 0.52
  ) {
    glucagon -= 0.05;
  }
  if ((strychnine > 0.28 || methanol < 0.61) && formaldehyde < 0.65) {
    glucagon += 0.02;
  }

  // 	- If either nerveGas dips below 0.29, methanol goes above 0.44, or perhaps alcohol dips below 0.44, reduce plasma by 0.02
  // 	- When novichok dips below 0.61 and botulinium goes above 0.45, whilst at the same time, formaldehyde dips below 0.67 or AmanitaMushrooms goes above 0.75, increase plasma by 0.04
  // 	- When alcohol goes above 0.57 and nerveGas dips below 0.69, whilst at the same time, strychnine dips below 0.55 or formaldehyde goes above 0.65, decrement Hydrochloric_Acid by 0.03
  // 	- If methanol dips below 0.45 or botulinium dips below 0.35, whilst at the same time, AmanitaMushrooms dips below 0.49 or novichok dips below 0.46, increment Hydrochloric_Acid by 0.05
  if (nerveGas < 0.29 || methanol > 0.44 || alcohol < 0.44) {
    plasma -= 0.02;
  }
  if (
    novichok < 0.61 &&
    botulinium > 0.45 &&
    (formaldehyde < 0.67 || AmanitaMushrooms > 0.75)
  ) {
    plasma += 0.04;
  }
  if (
    alcohol > 0.57 &&
    nerveGas < 0.69 &&
    (strychnine < 0.55 || formaldehyde > 0.65)
  ) {
    Hydrochloric_Acid -= 0.03;
  }
  if (
    (methanol < 0.45 || botulinium < 0.35) &&
    (AmanitaMushrooms < 0.49 || novichok < 0.46)
  ) {
    Hydrochloric_Acid += 0.05;
  }
  //////////////////////////////////////////////////////

  //the code below generates new values using random numbers

  /*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

  methanol = nextValue(graphs[0], methanol);
  nerveGas = nextValue(graphs[1], nerveGas);
  alcohol = nextValue(graphs[2], alcohol);
  AmanitaMushrooms = nextValue(graphs[3], AmanitaMushrooms);
  novichok = nextValue(graphs[4], novichok);
  strychnine = nextValue(graphs[5], strychnine);
  formaldehyde = nextValue(graphs[6], formaldehyde);
  botulinium = nextValue(graphs[7], botulinium);

  calcium_gluconate = constrain(calcium_gluconate, 0, 1);
  paracetamol = constrain(paracetamol, 0, 1);
  glucagon = constrain(glucagon, 0, 1);
  plasma = constrain(plasma, 0, 1);
  Hydrochloric_Acid = constrain(Hydrochloric_Acid, 0, 1);

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
    color(255, 100, 100),
    color(255, 100, 0),
  ];

  for (var i = 0; i < graphs.length; i++) {
    stroke(colors[i]);
    drawGraph(graphs[i]);
  }

  //draw the poisons as text
  noStroke();
  fill(colors[0]);
  text("methanol: " + nf(methanol, 1, 2), 20, 20);
  fill(colors[1]);
  text("nerveGas: " + nf(nerveGas, 1, 2), 20, 40);
  fill(colors[2]);
  text("alcohol: " + nf(alcohol, 1, 2), 20, 60);
  fill(colors[3]);
  text("AmanitaMushrooms: " + nf(AmanitaMushrooms, 1, 2), 20, 80);
  fill(colors[4]);
  text("novichok: " + nf(novichok, 1, 2), 20, 100);
  fill(colors[5]);
  text("strychnine: " + nf(strychnine, 1, 2), 20, 120);
  fill(colors[6]);
  text("formaldehyde: " + nf(formaldehyde, 1, 2), 20, 140);
  fill(colors[7]);
  text("botulinium: " + nf(botulinium, 1, 2), 20, 160);

  //draw the antidotes bar chart
  drawBar(calcium_gluconate, 50, "calcium_gluconate");
  drawBar(paracetamol, 200, "paracetamol");
  drawBar(glucagon, 350, "glucagon");
  drawBar(plasma, 500, "plasma");
  drawBar(Hydrochloric_Acid, 650, "Hydrochloric_Acid");
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
