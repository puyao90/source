/*

Officer: 7817938
CaseNum: 401-0-76111826-7817938

Case 401 - The Case of Norbert's Weiner Stand
Stage 1 - Noxious Weiner

Console city has been plunged into chaos. The notorious poisoner Norbert has struck the
population down with a potent poison. Word has it that he is smuggling his venomous filth
via a streetside weiner stand. Hundreds of people have been affected, and the municipal
water company tells me that their sewers are at full capacity. This is no laughing matter.
I need you to head down to our lab and work on an antidote.

You must develop the antidote by using conditional statements in the draw loop to
do the following:


You must develop the antidote by using conditional statements in the draw loop to
do the following.

	- If alcohol dips below 0.41, decrease sulphates by 0.04
	- When botulinium goes above 0.42, increment sulphates by 0.05
	- When hemlock dips below 0.28, decrease methylene by 0.01
	- If botulinium dips below 0.51, increase methylene by 0.05
	- When botulinium goes above 0.33, try decreasing paracetamol by 0.05
	- When hemlock dips below 0.61, increase paracetamol by 0.04


Your conditional statements should:

consider the following poisons:

	- botulinium
	- alcohol
	- hemlock


and modify the following antidotes:

	- sulphates
	- methylene
	- paracetamol


- There are many ways to complete this task but you should only use the
following commands:

	if(){}
	+=
	-=

*/

//Declare the poison variables
var botulinium;
var alcohol;
var hemlock;

//Declare the antidote variables
var sulphates;
var methylene;
var paracetamol;

//This variable is used for drawing the graph
var graphs;

function setup() {
  createCanvas(800, 600);
  strokeWeight(2);

  //initialise the poisons and antidotes
  botulinium = 0.5;
  alcohol = 0.5;
  hemlock = 0.5;
  sulphates = 0.5;
  methylene = 0.5;
  paracetamol = 0.5;

  //fills the graph with empty values
  graphs = [];

  for (var i = 0; i < 3; i++) {
    graphs.push([]);
    for (var j = 0; j < 512; j++) {
      graphs[i].push(0.5);
    }
  }
}

function draw() {
  //Develop the antidote below
  //Write conditional statements to change the amount of each substance ...

  if (alcohol < 0.41) {
    sulphates -= 0.04;
  }
  if (botulinium > 0.42) {
    sulphates += 0.05;
  }
  if (hemlock < 0.28) {
    methylene -= 0.01;
  }
  if (botulinium < 0.51) {
    methylene += 0.05;
  }
  if (botulinium > 0.33) {
    paracetamol -= 0.05;
  }
  if (hemlock < 0.61) {
    paracetamol += 0.04;
  }

  //////////////////////////////////////////////////////

  //the code below generates new values using random numbers

  /*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

  botulinium = nextValue(graphs[0], botulinium);
  alcohol = nextValue(graphs[1], alcohol);
  hemlock = nextValue(graphs[2], hemlock);

  sulphates = constrain(sulphates, 0, 1);
  methylene = constrain(methylene, 0, 1);
  paracetamol = constrain(paracetamol, 0, 1);

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
  text("botulinium: " + nf(botulinium, 1, 2), 20, 20);
  fill(colors[1]);
  text("alcohol: " + nf(alcohol, 1, 2), 20, 40);
  fill(colors[2]);
  text("hemlock: " + nf(hemlock, 1, 2), 20, 60);

  //draw the antidotes bar chart
  drawBar(sulphates, 50, "sulphates");
  drawBar(methylene, 200, "methylene");
  drawBar(paracetamol, 350, "paracetamol");
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
