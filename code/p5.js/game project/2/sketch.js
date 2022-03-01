/*

The Game Project

2 - Game character

Use p5 drawing functions such as rect, ellipse, line, triangle and
point to draw the different states of your game character.

Write the code so that your character appears inside the box for each
state.

IMPORTANT: For each box the variables gameChar_x & gameChar_y are set to the bottom
center of the box. You must combine these variables with arithmetic to
determine the position of each shape that you draw. This will later allow
you to adjust the position of your game character.

Each state is worth two marks:

//standing front facing = 2
//jumping facing forwards = 2
//walking left = 2
//walking right = 2
//jumping left and jumping right = 2

0 marks = not a reasonable attempt
1 mark = attempted but it lacks detail and you didn't use gameChar_x and gameChar_y correctly
2 marks = you've used a selction of shape functions and made consistent use of gameChar_x and gameChar_y

WARNING: Do not get too carried away. If you're character takes more than 5 lines
of code to draw then you've probably over done it.

** Only submit your sketch.js **

*/

var gameChar_x = 0;
var gameChar_y = 0;

function setup()
{
	createCanvas(400, 600);
}

function draw()
{
	background(255);

	//Standing, facing frontwards

	stroke(100);
	noFill();
	rect(20, 60, 50, 80);
	noStroke();
	fill(0);
	text("1. standing front facing", 20, 160);

	gameChar_x = 45;
	gameChar_y = 137;
	//Add your code here ...
	fill(color('#EACC86'))
	rect(gameChar_x - 16, gameChar_y - 58, 32, 30)//head
	fill(color('#DE2A38'))
	rect(gameChar_x - 14, gameChar_y - 28, 28, 16)//body
	fill(color('#3E7CB9'))
	rect(gameChar_x-6-13, gameChar_y-30,12,12)//left arm
	rect(gameChar_x - 6 + 13, gameChar_y - 30, 12, 12)//right arm
	fill(color('#893240'))
	rect(gameChar_x-6-8, gameChar_y-12,12,8)//left leg
	rect(gameChar_x-6+8, gameChar_y-12,12,8)//right leg

	//Jumping facing forwards
	stroke(100);
	noFill();
	rect(220, 60, 50, 80);
	noStroke();
	fill(0);
	text("2. jumping facing forwards", 220, 160);

	gameChar_x = 245;
	gameChar_y = 137;
	//Add your code here ...
	fill(color('#EACC86'))
	rect(gameChar_x - 16, gameChar_y - 58-6, 32, 30)//head
	fill(color('#DE2A38'))
	rect(gameChar_x - 14, gameChar_y - 28-6, 28, 16)//body
	fill(color('#3E7CB9'))
	rect(gameChar_x-6-18, gameChar_y-36-8,12,12)//left arm
	rect(gameChar_x - 6 + 18, gameChar_y - 36-8, 12, 12)//right arm
	fill(color('#893240'))
	rect(gameChar_x-6-8, gameChar_y-16,12,8)//left leg
	rect(gameChar_x-6+8, gameChar_y-16,12,8)//right leg


	//Walking, turned left
	stroke(100);
	noFill();
	rect(20, 260, 50, 80);
	noStroke();
	fill(0);
	text("3. Walking left", 20, 360);

	gameChar_x = 45;
	gameChar_y = 337;
	//Add your code here ...
	fill(color('#3E7CB9'))
	rect(gameChar_x - 6 - 13, gameChar_y - 30, 12, 12)//left arm	
	fill(color('#EACC86'))
	rect(gameChar_x - 16, gameChar_y - 58, 32, 30)//head
	fill(color('#DE2A38'))
	rect(gameChar_x - 14, gameChar_y - 28, 28, 16)//body
	fill(color('#3E7CB9'))
	rect(gameChar_x - 6 + 13, gameChar_y - 30, 12, 12)//right arm
	fill(color('#AA336B'))
	rect(gameChar_x-6+14, gameChar_y-18,6,6)//arm shadow
	fill(color('#893240'))
	rect(gameChar_x-6-8, gameChar_y-12,12,8)//left leg
	rect(gameChar_x-6+8, gameChar_y-12,12,8)//right leg

	//Walking, turned right
	stroke(100);
	noFill();
	rect(220, 260, 50, 80);
	noStroke();
	fill(0);
	text("4. Walking right", 220, 360);

	gameChar_x = 245;
	gameChar_y = 337;
	//Add your code here ...
	fill(color('#3E7CB9'))
	rect(gameChar_x - 6 + 13, gameChar_y - 30, 12, 12)//right arm
	fill(color('#EACC86'))
	rect(gameChar_x - 16, gameChar_y - 58, 32, 30)//head
	fill(color('#DE2A38'))
	rect(gameChar_x - 14, gameChar_y - 28, 28, 16)//body
	fill(color('#3E7CB9'))
	rect(gameChar_x-6-13, gameChar_y-30,12,12)//left arm	
	fill(color('#AA336B'))
	rect(gameChar_x-6-8, gameChar_y-18,6,6)//arm shadow
	fill(color('#893240'))
	rect(gameChar_x-6-8, gameChar_y-12,12,8)//left leg
	rect(gameChar_x-6+8, gameChar_y-12,12,8)//right leg

	//Jumping right
	stroke(100);
	noFill();
	rect(20, 460, 50, 80);
	noStroke();
	fill(0);
	text("5. Jumping to the right", 20, 560);

	gameChar_x = 45;
	gameChar_y = 537;
	//Add your code here ...
	fill(color('#3E7CB9'))
	rect(gameChar_x - 6 +18, gameChar_y - 36 - 8, 12, 12)//right arm
	fill(color('#893240'))
	rect(gameChar_x - 6 +17, gameChar_y - 16 - 10, 12, 8)//right leg
	fill(color('#EACC86'))
	rect(gameChar_x - 16, gameChar_y - 58-6, 32, 30)//head
	fill(color('#DE2A38'))
	rect(gameChar_x - 14, gameChar_y - 28 - 6, 28, 16)//body
	fill(color('#AA336B'))
	rect(gameChar_x-6-8, gameChar_y-18-6,2,6)//arm shadow
	fill(color('#3E7CB9'))
	rect(gameChar_x - 6 - 18, gameChar_y - 36, 12, 12)//left arm
	fill(color('#893240'))
	rect(gameChar_x-6-17, gameChar_y-20,12,8)//left leg


	//Jumping to the left
	stroke(100);
	noFill();
	rect(220, 460, 50, 80);
	noStroke();
	fill(0);
	text("6. Jumping to the left", 220, 560);

	gameChar_x = 245;
	gameChar_y = 537;
	//Add your code here ...
	fill(color('#3E7CB9'))
	rect(gameChar_x - 6 - 18, gameChar_y - 36 - 8, 12, 12)//left arm
	fill(color('#893240'))
	rect(gameChar_x - 6 - 8 - 8, gameChar_y - 16 - 10, 12, 8)//left leg
	fill(color('#EACC86'))
	rect(gameChar_x - 16, gameChar_y - 58-6, 32, 30)//head
	fill(color('#DE2A38'))
	rect(gameChar_x - 14, gameChar_y - 28 - 6, 28, 16)//body
	fill(color('#AA336B'))
	rect(gameChar_x-6+18, gameChar_y-18-6,2,6)//arm shadow
	fill(color('#3E7CB9'))
	rect(gameChar_x - 6 + 18, gameChar_y - 36, 12, 12)//right arm
	fill(color('#893240'))
	rect(gameChar_x-6+17, gameChar_y-20,12,8)//right leg

}
