function setup() {
    //create a canvas for the robot
    createCanvas(1000, 700);
}

function draw() {
    strokeWeight(2);

    //robot body 1 - delete this code and make your own robot body
    fill(200);
    rect(120, 330, 30, 110);
    rect(150, 330, 30, 110);
    fill(255, 204, 204)
    triangle(150, 200, 70, 378, 230, 378)
    rect(90, 200, 120, 110);
    fill(255, 0, 0, 100)
    noStroke()
    ellipse(130, 260, 20, 20)
    ellipse(160, 220, 20, 20)
    ellipse(185, 250, 20, 20)
    ellipse(175, 290, 20, 20)
    ellipse(105, 290, 20, 20)
    ellipse(115, 200, 20, 20)
    ellipse(115, 360, 20, 20)
    ellipse(155, 330, 20, 20)
    ellipse(195, 350, 20, 20)
    ellipse(115, 320, 20, 20)
    stroke(0)
    fill(200);
    rect(70, 200, 30, 100);
    rect(200, 200, 30, 100);


    //robot body 2 - delete this code and make your own robot body

    // rect(390, 200, 120, 130);
    fill(255, 178, 102)
    rect(441, 200, 15, 30);
    ellipse(450, 340, 145, 255)
    fill(255)
    noStroke()
    rect(366, 330, 158, 140);
    fill(200);
    stroke(1)
    line(377, 330, 523, 330)
    rect(420, 330, 30, 110);
    rect(450, 330, 30, 110);
    rect(370, 260, 30, 100);
    rect(500, 260, 30, 100);




    //robot body 3 - delete this code and make your own robot body
    fill(255, 225, 23)
    rect(690, 200, 120, 130);
    fill(153, 204, 255)
    rect(710, 230, 80, 40);
    fill(102, 0, 204)
    ellipse(726, 250, 14, 14)
    ellipse(750, 250, 14, 14)
    ellipse(774, 250, 14, 14)
    fill(200);
    rect(670, 200, 30, 100);
    rect(800, 200, 30, 100);
    rect(720, 330, 30, 110);
    rect(750, 330, 30, 110);


    // !!! Draw the robot heads - You shouldn't need to change this code !!!

    //robot head 1
    fill(200);
    rect(100, 100, 100, 100, 10);
    //robot head 2
    rect(400, 100, 100, 100, 10);
    //robot head 3
    rect(700, 100, 100, 100, 10);

    //ears
    fill(255, 0, 0);

    //robot ears 1
    noFill()
    ellipse(95, 165, 25, 25)
    fill(255, 0, 0);
    rect(93, 130, 10, 33);
    noFill()
    ellipse(205, 165, 25, 25)
    fill(255, 0, 0);
    rect(197, 130, 10, 33);

    //robot ears 2
    rect(393, 130, 10, 33);
    rect(497, 130, 10, 33);

    //robot ears 3
    rect(693, 130, 10, 33);
    rect(797, 130, 10, 33);



    //robots' antennas
    fill(250, 250, 0);
    // robot antenna 1
    ellipse(150, 93, 10, 10);
    // robot antenna 1
    ellipse(450, 93, 10, 10);
    // robot antenna 1
    ellipse(750, 93, 10, 10);

    //robots' antennas
    fill(200, 0, 200);
    // robot antenna 1
    rect(140, 97, 20, 10);
    // robot antenna 2
    rect(440, 97, 20, 10);
    // robot antenna 3
    rect(740, 97, 20, 10);


    //robot 1's eyes
    fill(255);
    ellipse(125, 130, 26, 26);
    point(125, 130);
    ellipse(175, 130, 26, 26);
    point(175, 130);

    //robot 2's eyes
    fill(0)
    ellipse(425, 130, 26, 26);
    point(425, 130);
    ellipse(475, 130, 26, 26);
    point(475, 130);
    line(400, 130, 500, 130)

    //robot 3's eyes
    fill(255);
    ellipse(725, 130, 26, 26);
    point(725, 130);
    ellipse(775, 130, 26, 26);
    point(775, 130);


    //robots' noses
    fill(255, 0, 0);
    //robot 1 nose
    triangle(150, 135, 135, 160, 165, 160);
    //robot 2 nose
    triangle(450, 135, 435, 160, 465, 160);
    //robot 3 nose
    triangle(750, 135, 735, 160, 765, 160);

    //robot 1 mouth
    noFill();
    beginShape();
    vertex(128, 175);
    vertex(136, 185);
    vertex(142, 175);
    vertex(150, 185);
    vertex(158, 175);
    vertex(166, 185);
    vertex(174, 175);
    endShape();

    //robot 2 mouth
    beginShape();
    vertex(428, 175);
    vertex(436, 185);
    vertex(442, 175);
    vertex(450, 185);
    vertex(458, 175);
    vertex(466, 185);
    vertex(474, 175);
    endShape();

    //robot 3 mouth
    rect(720, 175, 60, 15)
    line(727, 175, 727, 190)
    line(733, 175, 733, 190)
    line(739, 175, 739, 190)
    line(745, 175, 745, 190)
    line(751, 175, 751, 190)
    line(757, 175, 757, 190)
    line(763, 175, 763, 190)
    line(769, 175, 769, 190)
    line(775, 175, 775, 190)
        // beginShape();
        // vertex(728, 175);
        // vertex(736, 185);
        // vertex(742, 175);
        // vertex(750, 185);
        // vertex(758, 175);
        // vertex(766, 185);
        // vertex(774, 175);
        // endShape();
}