/*

Officer: 7817938
CaseNum: 202-1-15277272-7817938

Case 202 - The case of Bob and Daisy - stage 2

Here’s another letter kid. This time it’s from Daisy (aka. Woz).
Decode it to uncover more about Woz and Job’s dastardly plan.

Discover the hidden code by commenting out all text commands except
those which produce Spring Green filled text with a Dark Red outline.
Only comment out text commands - leave fill & stroke commands uncommented.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload() {
  letterFont = loadFont("Melissa.otf");
}

function setup() {
  createCanvas(591, 510);
  textFont(letterFont);
  textSize(30);
}

function draw() {
  background(255);

  fill(65, 105, 225);
  stroke(255, 0, 255);
  // text("How", 271,191);
  fill(240, 230, 140);
  stroke(0, 0, 139);
  // text("having", 512,121);
  fill(255, 0, 255);
  stroke(0, 100, 0);
  // text("in", 231,155);
  fill(138, 43, 226);
  stroke(220, 20, 60);
  // text("desolate.", 191,191);
  fill(65, 105, 225);
  stroke(218, 165, 32);
  // text("again", 203,90);
  stroke(139, 0, 139);
  // text("?", 111,227);
  fill(50, 205, 50);
  stroke(255, 165, 0);
  // text("without", 349,155);
  fill(128, 0, 128);
  stroke(124, 252, 0);
  // text("spring,", 285,155);
  fill(154, 205, 50);
  stroke(255, 215, 0);
  // text("at", 454,155);
  fill(0, 250, 154);
  stroke(124, 252, 0);
  // text("I", 48,265);
  fill(148, 0, 211);
  stroke(128, 0, 0);
  // text("Even", 186,155);
  fill(139, 0, 0);
  stroke(0, 0, 128);
  // text("months", 99,121);
  fill(148, 0, 211);
  stroke(165, 42, 42);
  // text("yours,", 77,325);
  fill(32, 178, 170);
  stroke(148, 0, 211);
  // text("it", 190,121);
  fill(255, 0, 255);
  stroke(0, 250, 154);
  // text("kissed", 331,121);
  fill(0, 250, 154);
  stroke(153, 50, 204);
  // text("up", 197,227);
  fill(0, 255, 255);
  stroke(50, 205, 50);
  // text("think", 458,227);
  fill(72, 209, 204);
  stroke(0, 139, 139);
  // text("you", 420,155);
  fill(107, 142, 35);
  stroke(128, 0, 0);
  // text("and", 372,227);
  fill(0, 255, 255);
  stroke(128, 128, 0);
  // text("?", 253,90);
  fill(65, 105, 225);
  stroke(127, 255, 0);
  // text("ls", 170,191);
  fill(220, 20, 60);
  stroke(255, 0, 255);
  // text("on", 371,90);
  fill(25, 25, 112);
  stroke(218, 165, 32);
  // text("to", 500,191);
  fill(128, 0, 128);
  stroke(0, 0, 128);
  // text("at", 221,227);
  fill(255, 255, 0);
  stroke(139, 0, 139);
  // text("arms.", 252,265);
  fill(0, 128, 128);
  stroke(255, 0, 255);
  // text("of", 545,227);
  fill(153, 50, 204);
  stroke(0, 255, 127);
  // text("My", 7,30);
  fill(123, 104, 238);
  stroke(255, 69, 0);
  // text("night", 281,227);
  fill(100, 149, 237);
  stroke(25, 25, 112);
  // text("return.", 495,90);
  fill(255, 127, 80);
  stroke(0, 250, 154);
  // text("in", 201,265);
  fill(244, 164, 96);
  stroke(255, 0, 255);
  // text("can", 423,227);
  fill(255, 255, 0);
  stroke(32, 178, 170);
  // text("you", 10,155);
  fill(218, 165, 32);
  stroke(0, 255, 255);
  // text("?", 392,121);
  // text("will", 59,90);
  fill(128, 0, 0);
  stroke(148, 0, 211);
  // text("we", 259,121);
  fill(0, 0, 139);
  stroke(128, 128, 0);
  // text("fee", 143,191);
  fill(0, 0, 128);
  stroke(0, 128, 0);
  // text("swift", 439,90);
  fill(238, 130, 238);
  stroke(0, 191, 255);
  // text("hold", 129,265);
  fill(255, 165, 0);
  stroke(124, 252, 0);
  // text("to", 103,265);
  fill(72, 209, 204);
  stroke(255, 165, 0);
  // text("How", 8,121);
  fill(0, 191, 255);
  stroke(255, 215, 0);
  // text("you", 167,265);
  fill(75, 0, 130);
  stroke(0, 0, 205);
  // text("Daisy", 7,385);
  fill(173, 216, 230);
  stroke(32, 178, 170);
  // text("Bob,", 100,30);
  fill(139, 69, 19);
  stroke(34, 139, 34);
  // text("stare", 143,227);
  fill(34, 139, 34);
  stroke(0, 255, 0);
  // text("I", 127,227);
  fill(123, 104, 238);
  stroke(128, 0, 128);
  // text("the", 247,227);
  fill(220, 20, 60);
  stroke(0, 0, 128);
  // text("my", 480,155);
  fill(0, 255, 0);
  stroke(0, 255, 0);
  // text("store", 526,191);
  fill(0, 255, 255);
  stroke(75, 0, 130);
  // text("your", 397,90);
  fill(64, 224, 208);
  stroke(255, 165, 0);
  // text("be", 124,90);
  fill(0, 255, 127);
  stroke(139, 0, 0);
  text("place", 138, 155);
  fill(255, 127, 80);
  stroke(0, 255, 255);
  // text("many", 49,121);
  fill(255, 0, 255);
  stroke(210, 105, 30);
  // text("my", 221,265);
  fill(30, 144, 255);
  stroke(75, 0, 130);
  // text("darling", 40,30);
  fill(139, 0, 0);
  stroke(255, 0, 0);
  // text("last", 291,121);
  fill(218, 165, 32);
  stroke(128, 0, 0);
  // text("x", 61,385);
  fill(107, 142, 35);
  stroke(32, 178, 170);
  // text("do", 414,191);
  fill(147, 112, 219);
  stroke(0, 128, 0);
  // text("small", 47,191);
  fill(30, 144, 255);
  stroke(255, 0, 255);
  // text("sky,", 329,227);
  fill(240, 128, 128);
  stroke(124, 252, 0);
  // text("only", 506,227);
  fill(147, 112, 219);
  stroke(0, 128, 128);
  // text("around", 44,155);
  fill(65, 105, 225);
  stroke(128, 0, 128);
  // text("much", 312,191);
  fill(173, 255, 47);
  stroke(0, 250, 154);
  // text("I", 449,121);
  fill(165, 42, 42);
  stroke(32, 178, 170);
  // text("this", 9,227);
  fill(138, 43, 226);
  stroke(148, 0, 211);
  // text("I", 440,191);
  fill(218, 165, 32);
  stroke(0, 255, 127);
  // text("you.", 11,265);
  fill(176, 224, 230);
  stroke(0, 250, 154);
  // text("miss", 465,121);
  fill(139, 69, 19);
  stroke(199, 21, 133);
  // text("Forever", 7,325);
  fill(222, 184, 135);
  stroke(154, 205, 50);
  // text("long", 64,265);
  fill(0, 0, 255);
  stroke(210, 105, 30);
  // text("since", 210,121);
  fill(184, 134, 11);
  stroke(128, 0, 0);
  // text("longing", 49,227);
  fill(0, 255, 127);
  stroke(139, 0, 0);
  text("is", 168, 121);
  text("the", 104, 155);
  text("united", 149, 90);
  fill(244, 164, 96);
  stroke(46, 139, 87);
  // text("longer", 358,191);
  fill(0, 255, 255);
  stroke(255, 69, 0);
  // text("I", 407,227);
  // text("How", 408,121);
  fill(255, 140, 0);
  stroke(0, 0, 139);
  // text("this", 7,191);
  fill(0, 255, 127);
  stroke(139, 0, 0);
  text("bank", 303, 90);
  fill(154, 205, 50);
  stroke(128, 0, 128);
  // text("the", 251,155);
  fill(165, 42, 42);
  stroke(0, 0, 128);
  // text("we", 92,90);
  fill(255, 140, 0);
  stroke(255, 69, 0);
  // text("side,", 511,155);
  fill(165, 42, 42);
  stroke(0, 0, 128);
  // text("have", 456,191);
  fill(0, 255, 255);
  stroke(255, 69, 0);
  // text("I'm", 269,90);
  fill(178, 34, 34);
  stroke(255, 255, 0);
  // text("ing", 341,90);
  fill(205, 133, 63);
  stroke(0, 0, 139);
  // text("town", 95,191);
  fill(100, 149, 237);
  stroke(0, 255, 255);
  // text("When", 7,90);
}
