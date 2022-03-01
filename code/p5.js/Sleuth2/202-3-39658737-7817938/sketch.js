/*

Officer: 7817938
CaseNum: 202-3-39658737-7817938

Case 202 - The case of Bob and Daisy - stage 4

Here’s the final letter from Daisy (aka. Woz). Decode it to uncover the
final details about Woz and Job’s dastardly plan.

Discover the hidden code by commenting out all text commands except
those which produce Purple filled text with a Magenta outline in RonsFont font.
Only comment out text commands - leave fill & stroke, push and pop commands uncommented.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload() {
  Ballpointprint = loadFont("Ballpointprint.ttf");
  Melissa = loadFont("Melissa.otf");
  Diggity = loadFont("Diggity.ttf");
  RonsFont = loadFont("RonsFont.ttf");
}

function setup() {
  createCanvas(525, 544);
  textSize(31);
}

function draw() {
  background(255);

  fill(255, 140, 0);
  stroke(0, 255, 0);
  textFont(Diggity);
  // text("Forev", 17,392);
  fill(173, 216, 230);
  stroke(255, 69, 0);
  textFont(RonsFont);
  // text("?", 480,298);
  fill(218, 165, 32);
  stroke(32, 178, 170);
  textFont(Melissa);
  // text("so,", 36,330);
  push();
  fill(135, 206, 235);
  stroke(75, 0, 130);
  textFont(Ballpointprint);
  // text("?", 178,298);
  pop();
  stroke(128, 128, 0);
  // text("?", 268,93);
  fill(0, 255, 127);
  stroke(0, 100, 0);
  // text("how", 466,93);
  fill(139, 69, 19);
  stroke(0, 206, 209);
  textFont(Diggity);
  // text("silence.", 60,162);
  fill(25, 25, 112);
  stroke(25, 25, 112);
  textFont(Ballpointprint);
  // text("x", 75,454);
  fill(0, 0, 205);
  stroke(34, 139, 34);
  textFont(Diggity);
  // text("short", 293,298);
  fill(152, 251, 152);
  stroke(0, 191, 255);
  textFont(RonsFont);
  // text("Bob,", 124,31);
  fill(255, 0, 255);
  stroke(0, 255, 255);
  textFont(Diggity);
  // text("The", 326,131);
  fill(238, 232, 170);
  stroke(160, 82, 45);
  // text("er", 71,392);
  fill(123, 104, 238);
  stroke(184, 134, 11);
  textFont(Melissa);
  // text("safe", 132,298);
  push();
  fill(219, 112, 147);
  stroke(0, 255, 255);
  textFont(Diggity);
  // text("ignore", 180,196);
  pop();
  fill(250, 128, 114);
  textFont(Diggity);
  // text("Daisy", 13,454);
  fill(255, 0, 255);
  stroke(153, 50, 204);
  // text("yours,", 106,392);
  fill(220, 20, 60);
  stroke(128, 0, 0);
  textFont(Melissa);
  // text("If", 11,330);
  fill(0, 0, 128);
  stroke(218, 165, 32);
  textFont(Diggity);
  // text("our", 385,266);
  fill(106, 90, 205);
  stroke(139, 69, 19);
  textFont(RonsFont);
  // text("I", 12,196);
  push();
  fill(34, 139, 34);
  stroke(0, 255, 127);
  // text("sort", 168,266);
  pop();
  stroke(0, 255, 255);
  textFont(Melissa);
  // text("not", 357,93);
  fill(210, 105, 30);
  stroke(154, 205, 50);
  textFont(RonsFont);
  // text("I", 169,131);
  fill(0, 0, 255);
  stroke(0, 128, 0);
  textFont(Diggity);
  // text("Are", 11,93);
  fill(154, 205, 50);
  stroke(0, 139, 139);
  textFont(RonsFont);
  // text("and", 106,266);
  push();
  fill(153, 50, 204);
  stroke(255, 0, 255);
  textFont(Ballpointprint);
  // text("are", 181,162);
  pop();
  fill(0, 255, 255);
  stroke(199, 21, 133);
  // text("more", 91,131);
  fill(139, 69, 19);
  stroke(34, 139, 34);
  textFont(Diggity);
  // text("can", 108,330);
  fill(139, 0, 0);
  stroke(46, 139, 87);
  textFont(RonsFont);
  // text("Perhaps", 113,235);
  fill(184, 134, 11);
  stroke(50, 205, 50);
  textFont(Ballpointprint);
  // text("can", 196,131);
  fill(255, 215, 0);
  stroke(220, 20, 60);
  // text("out.", 311,266);
  fill(160, 82, 45);
  stroke(160, 82, 45);
  textFont(Melissa);
  // text("longer", 124,196);
  fill(0, 0, 205);
  stroke(0, 206, 209);
  textFont(RonsFont);
  // text("of", 359,298);
  fill(160, 82, 45);
  stroke(255, 0, 0);
  textFont(Diggity);
  // text("can", 39,196);
  fill(238, 130, 238);
  stroke(218, 165, 32);
  // text("you", 249,298);
  push();
  fill(0, 128, 128);
  stroke(139, 0, 139);
  textFont(Melissa);
  // text("all", 288,266);
  pop();
  fill(244, 164, 96);
  stroke(128, 0, 0);
  // text("sometimes.", 392,162);
  fill(255, 127, 80);
  stroke(199, 21, 133);
  textFont(Melissa);
  // text("we", 213,235);
  fill(75, 0, 130);
  stroke(107, 142, 35);
  // text("Are", 212,298);
  fill(0, 191, 255);
  stroke(153, 50, 204);
  textFont(RonsFont);
  // text("continual", 314,196);
  fill(250, 128, 114);
  stroke(128, 128, 0);
  // text("so", 233,162);
  fill(0, 0, 139);
  stroke(0, 100, 0);
  textFont(Ballpointprint);
  // text("ca", 210,330);
  fill(186, 85, 211);
  textFont(Diggity);
  // text("relationship", 14,298);
  fill(178, 34, 34);
  stroke(178, 34, 34);
  textFont(Melissa);
  // text("break", 53,266);
  fill(255, 99, 71);
  stroke(0, 206, 209);
  textFont(RonsFont);
  // text("this", 233,266);
  push();
  fill(240, 230, 140);
  stroke(0, 250, 154);
  textFont(Diggity);
  // text("the", 247,196);
  pop();
  textFont(Diggity);
  // text("se", 280,196);
  fill(72, 209, 204);
  textFont(RonsFont);
  // text("secrets,", 375,131);
  fill(107, 142, 35);
  stroke(255, 0, 0);
  textFont(Ballpointprint);
  // text("delay", 21,235);
  fill(244, 164, 96);
  stroke(0, 191, 255);
  textFont(Diggity);
  // text("Is", 360,266);
  fill(128, 0, 128);
  stroke(255, 0, 255);
  textFont(RonsFont);
  text("the", 11, 162);
  text("guard", 270, 162);
  text("go", 337, 235);
  fill(244, 164, 96);
  stroke(0, 128, 0);
  // text("should", 246,235);
  fill(218, 112, 214);
  stroke(0, 255, 255);
  textFont(Diggity);
  // text("me", 228,93);
  fill(25, 25, 112);
  stroke(153, 50, 204);
  textFont(RonsFont);
  // text("no", 85,196);
  fill(233, 150, 122);
  stroke(0, 191, 255);
  textFont(Ballpointprint);
  // text("a", 25,266);
  fill(107, 142, 35);
  stroke(0, 128, 128);
  textFont(RonsFont);
  // text("My", 17,31);
  fill(0, 0, 205);
  stroke(34, 139, 34);
  // text("ed", 350,162);
  fill(0, 100, 0);
  stroke(0, 0, 255);
  textFont(Ballpointprint);
  // text("I'm", 285,93);
  fill(64, 224, 208);
  // text("s.", 82,235);
  fill(240, 128, 128);
  stroke(25, 25, 112);
  textFont(Melissa);
  // text("away", 373,235);
  push();
  fill(255, 127, 80);
  stroke(124, 252, 0);
  textFont(Diggity);
  // text("You", 134,162);
  pop();
  fill(0, 0, 255);
  stroke(0, 255, 255);
  textFont(Ballpointprint);
  // text("sh.", 231,330);
  fill(0, 100, 0);
  stroke(124, 252, 0);
  // text("I", 70,330);
  fill(0, 139, 139);
  stroke(148, 0, 211);
  // text("much", 25,131);
  fill(205, 133, 63);
  stroke(154, 205, 50);
  textFont(RonsFont);
  // text("ing", 184,93);
  fill(0, 0, 139);
  stroke(255, 140, 0);
  // text("?", 304,131);
  fill(128, 0, 128);
  stroke(255, 0, 255);
  text("for", 427, 235);
  text("money", 396, 298);
  text("you", 62, 93);
  fill(148, 0, 211);
  stroke(128, 0, 0);
  textFont(Melissa);
  // text("darling", 63,31);
  push();
  fill(128, 0, 128);
  stroke(255, 0, 255);
  textFont(RonsFont);
  text("avoid", 116, 93);
  pop();
  stroke(0, 0, 205);
  textFont(Diggity);
  // text("send", 154,330);
  fill(152, 251, 152);
  stroke(153, 50, 204);
  // text("take", 245,131);
  fill(139, 0, 0);
  stroke(0, 255, 255);
  textFont(RonsFont);
  // text("sure", 392,93);
}
