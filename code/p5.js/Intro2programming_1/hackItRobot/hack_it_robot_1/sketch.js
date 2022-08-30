function setup() {
    //create a canvas for the robot
    createCanvas(500, 500);
}

function draw() {
    strokeWeight(6);

    //robots head
    fill(255, 192, 203);
    rect(100, 100, 300, 300, 20);


    //robots antenna
    // fill(0, 100, 0);
    ellipse(256, 50, 1, 55);
    ellipse(226, 50, 1, 55);
    ellipse(241, 50, 1, 55);
    ellipse(271, 50, 1, 55);



    fill(255, 160, 122);
    rect(190, 80, 120, 30);

    //robots eyes
    fill(255);
    ellipse(175, 200, 80, 80);
    ellipse(175, 200, 60, 60);
    ellipse(175, 200, 40, 40);
    ellipse(175, 200, 20, 20);
    point(175, 200);
    fill(0);
    ellipse(325, 200, 80, 80);
    point(325, 200);


    //robots nose
    fill(255, 20, 147);
    triangle(250, 220, 235, 300, 275, 300);

    //robots ears
    fill(138, 43, 226)
    rect(80, 180, 30, 100);
    rect(390, 180, 30, 100);

    //robots mouth
    noFill();
    beginShape();
    vertex(175, 340);
    vertex(200, 370);
    vertex(225, 340);
    vertex(250, 370);
    vertex(275, 340);
    vertex(300, 370);
    vertex(325, 340);
    endShape();
}