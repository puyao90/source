/*

The Game Project

1 - Background Scenery

Use p5 drawing functions such as rect, ellipse, line, triangle and
point to draw the scenery as set out in the code comments. The items
should appear next to the text titles.

Each bit of scenery is worth two marks:

0 marks = not a reasonable attempt
1 mark = attempted but it's messy or lacks detail
2 marks = you've used several shape functions to create the scenery

I've given titles and chosen some base colours, but feel free to
imaginatively modify these and interpret the scenery titles loosely to
match your game theme.


WARNING: Do not get too carried away. If you're shape takes more than 5 lines
of code to draw then you've probably over done it.


*/

function setup() {
    createCanvas(1024, 576);
}

function draw() {
    background(color('#A0ADFF')); //fill the sky blue



    //1. a cloud in the sky
    //... add your code here
    fill(255)
    ellipse(210, 140, 60, 60);
    ellipse(185, 140, 50, 50);
    ellipse(225, 120, 40, 40);
    ellipse(245, 140, 60, 60);
    ellipse(265, 140, 40, 40);

    noStroke();
    fill(255);

    text("cloud", 200, 100);

    //2. a mountain in the distance
    //... add your code here
    noStroke();
    fill(255);
    text("mountain", 500, 256);
    fill(color('#C5E230'))
    ellipse(520, 310, 80, 80);
    rect(480, 315, 80, 144);
    ellipse(600, 230, 80, 80);
    rect(560, 230, 80, 240);
    ellipse(680, 140, 80, 80);
    rect(640, 140, 80, 300);
    ellipse(755, 430, 80, 80);

    fill(0)
    rect(508, 305, 3, 9);
    rect(525, 305, 3, 9);
    rect(590, 225, 3, 9);
    rect(607, 225, 3, 9);
    rect(665, 135, 3, 9);
    rect(685, 135, 3, 9);
    rect(742, 420, 3, 9);
    rect(761, 420, 3, 9);

    //3. a tree
    //... add your code here
    fill(color('#A5694B'))
    rect(840, 392, 18, 40);
    rect(910, 352, 18, 80);
    noStroke();
    fill(255);
    text("tree", 800, 346);
    fill(color('#3BB900'))
    triangle(850, 300, 825, 392, 875, 392);
    triangle(920, 280, 885, 382, 955, 382);



    noStroke();
    fill(color('#DE5917'));
    rect(0, 432, 1024, 144); //draw some green ground

    //4. a canyon
    //NB. the canyon should go from ground-level to the bottom of the screen

    //... add your code here
    fill(0);
    rect(90, 432, 100, 144);
    fill(153, 0, 0)
    triangle(99, 545, 90, 576, 108, 576);
    triangle(117, 545, 108, 576, 126, 576);
    triangle(135, 545, 126, 576, 144, 576);
    triangle(153, 545, 144, 576, 162, 576);
    triangle(171, 545, 162, 576, 180, 576);
    triangle(189, 545, 180, 576, 190, 576);

    noStroke();
    fill(255);
    text("canyon", 100, 480);

    //5. a collectable token - eg. a jewel, fruit, coins
    //... add your code here
    stroke(204, 204, 0);
    strokeWeight(4);
    fill(255, 255, 0)
    rect(420, 405, 27, 27)
    noStroke();
    fill(204, 204, 0)
    textSize(25);
    text("?", 426, 427);
    textSize(12);
    noStroke();
    fill(255);

    text("collectable item", 400, 400);
}