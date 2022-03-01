
var bcenterX;
var bcenterY;
var bdiam;
var fuseEndX;
var fuseEndY;
var bstate;
var nstate;
var secretk;
var secretk1;
var previousk;
var countDown
var hotKey

function setup() 
{
    createCanvas(512,512);
    textSize(32);
    strokeWeight(5);
    
    //initialise variables
    bdiam = 250;
    bcenterX = width/2;
    bcenterY = height/2;
    fuseEndX = bcenterX + 20;
    fuseEndY = bcenterY - bdiam / 2 - 30;
    bstate=0
    nstate = 0
    secretk = "A"
    secretk1='S'
    hotKey='H'
    previousk=''
    
}


function draw()
{
    ////////////// UPDATE CODE///////////////
    
    //reset variables after random amounts were added
    bcenterX = width/2;
    bcenterY = height/2;
    
    //wobble the bomb
    if (bstate==1) { 
        bcenterX += random(-10,10);
        bcenterY += random(-10, 10);
        countDown -= 1}
    
    fuseEndX = bcenterX + 20;
    fuseEndY = bcenterY - bdiam/2 - 30;
    
    ////////////// DRAWING CODE///////////////
    
    background(100);    

    //draw the fuse
    noFill();
    stroke(200,100,0);

    line(
        bcenterX,
        bcenterY - bdiam/2, 
        fuseEndX,
        fuseEndY
        );
    
    //draw the bomb
    noStroke();
    fill(0);
    ellipse(bcenterX,bcenterY, bdiam, bdiam);
    fill(255);
    quad(
        bcenterX + 40, bcenterY - 60,
        bcenterX + 80, bcenterY - 60,
        bcenterX + 70, bcenterY - 30,
        bcenterX + 50, bcenterY - 30
    );
    
    //draw the flame 
    if (bstate==1) { 
    fill(255,255,0);
    noStroke();
    beginShape();
        vertex(fuseEndX, fuseEndY);
        vertex(fuseEndX + 20, fuseEndY - 20);
        vertex(fuseEndX + 20, fuseEndY - 50);
        vertex(fuseEndX - 10, fuseEndY - 30);
        endShape(CLOSE);
        }
    
    fill(255);
    
    //Draw game text
    if (bstate == 0) {
        text("Press any key to start", 20, 50);
        
    }
    if (bstate == 3) {
    text("Game over", 20, height / 2); }
    if (bstate==2) { 
        text("You won !", width / 2, height / 2);
    }
    if (bstate == 1) {
        
        if (countDown==0) {bstate=3 }
        text('countDown'+countDown,20,20)
        text("Press a key to diffuse the bomb", 20, height - 50);
    }
    
}

function keyPressed()
{
    console.log(key)
    if (bstate == 0) {
        nstate = 1;
        countDown = 700;
        previousk=''
        
       
    }
    if (bstate == 1) {
        console.log('previousk', previousk)
        if (previousk==''||key==secretk) { }//捕捉这种情况使这时不显示失败
        else if (previousk==secretk&&key==secretk1) { nstate = 2 }
        else if (key==hotKey) {countDown+=100 }
        //else if (random()>0.5) { } //random([min], [max]) 不给参数返回0到1之间
        else{
            nstate = 3
         }
        previousk=key
    }
    if (bstate == 2) { nstate = 0 }
    if (bstate == 3) { nstate = 0}
   
    bstate = nstate
}







