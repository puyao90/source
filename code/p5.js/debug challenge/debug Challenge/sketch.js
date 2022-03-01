var redButton;
var alertFlash = true;

function setup()
{
	createCanvas(600, 700);
	console.log(width);
	console.log(height);
	redButton = {
		x: width / 2,
		y: height / 2,
		dia: 200,
		activated: false
	}
	console.log(redButton)

}

function draw()
{
	background(255);

	if (frameCount / 30 == parseInt(frameCount / 30))
	{
	alertFlash=!alertFlash
	}
	
	if (redButton.activated) {	
		background(250, 250, 0)
		if (alertFlash == true)
	{
			textSize(35);
			text("Meltdown Sequence Initiated!!!", width / 2, height / 2 - redButton.dia);
	}
		
	} else { background(255) }
	


	fill(255, 0, 0);
	stroke(200, 30, 30);
	strokeWeight(20);
	ellipse(redButton.x, redButton.y, redButton.dia);
	noFill();
	stroke(255, 100, 100);
	arc(redButton.x, redButton.y, redButton.dia, redButton.dia, PI, PI * 2);


	textAlign(CENTER);
	textSize(40);
	strokeWeight(1);
	stroke(0);
	fill(0);
	text("DO NOT PRESS", width / 2, height / 2 + redButton.dia);

}

function mousePressed()
{
	
console.log(redButton)
	if (dist(mouseX, mouseY, redButton.x, redButton.y) < redButton.dia)
	{
		if (redButton.activated)
		{
			redButton.activated = false;
			console.log(redButton.activated)
		}
		else
		{
			redButton.activated = true;
			console.log(redButton.activated)
		}
	}
}