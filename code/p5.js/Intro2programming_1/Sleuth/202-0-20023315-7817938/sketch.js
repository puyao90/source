/*

Officer: 7817938
CaseNum: 202-0-20023315-7817938

Case 202 - The case of Bob and Daisy - stage 1

That pair of notorious criminals Woz and Jobs are up to no good again.
I’ve intercepted letters sent between them. It seems that they are
communicating through an ingenious code in which they masquerade as
besotted lovers, Daisy and Bob. I need you crack their code and determine
the details of their next heist so that we can catch them in the act.

Discover the hidden code by commenting out all text commands except
those which produce Sienna text. Only comment out text commands.
Leave fill commands uncommented.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload() {
  letterFont = loadFont("Ballpointprint.ttf");
}

function setup() {
  createCanvas(506, 537);
  textFont(letterFont);
  textSize(27);
}

function draw() {
  background(255);

  fill(64, 224, 208);
  // text("g", 186,352);
  fill(0, 255, 255);
  // text("and", 74,406);
  // text("darling,", 105,352);
  fill(107, 142, 35);
  // text("from", 115,233);
  // text("my", 108,168);
  fill(65, 105, 225);
  // text("per", 99,291);
  fill(255, 127, 80);
  // text("think", 402,321);
  // text("last", 175,321);
  // text("that", 377,233);
  fill(233, 150, 122);
  // text("few", 237,233);
  fill(0, 128, 128);
  // text("that", 261,111);
  fill(240, 128, 128);
  // text("be", 359,260);
  // text("your", 403,111);
  fill(135, 206, 235);
  // text("are", 62,168);
  fill(160, 82, 45);
  text("chosen", 401, 291);
  text("make", 102, 81);
  text("date", 219, 321);
  fill(165, 42, 42);
  // text("that", 154,201);
  // text("Ever", 15,321);
  fill(123, 104, 238);
  // text("It", 313,81);
  fill(153, 50, 204);
  // text("son", 129,291);
  fill(32, 178, 170);
  // text("of", 18,352);
  fill(0, 128, 0);
  // text("I", 312,111);
  fill(64, 224, 208);
  // text("moment", 73,201);
  fill(127, 255, 0);
  // text("that", 228,291);
  fill(32, 178, 170);
  // text("luckiest", 18,291);
  fill(153, 50, 204);
  // text("in", 261,168);
  fill(128, 128, 0);
  // text("I", 279,291);
  fill(139, 69, 19);
  // text("a", 151,81);
  fill(72, 209, 204);
  // text("alive", 169,291);
  // text("face,", 401,201);
  fill(25, 25, 112);
  // text("your", 351,291);
  fill(244, 164, 96);
  // text("I", 445,81);
  fill(100, 149, 237);
  // text("Oh", 15,27);
  // text("I", 69,81);
  fill(238, 130, 238);
  // text("May", 15,81);
  // text("am", 312,291);
  fill(0, 206, 209);
  // text("your", 55,352);
  fill(124, 252, 0);
  // text("is", 353,81);
  fill(139, 69, 19);
  // text("you", 428,233);
  fill(0, 250, 154);
  // text("sunny", 149,168);
  fill(0, 206, 209);
  // text("lovely", 57,27);
  fill(152, 251, 152);
  // text("reen", 198,352);
  fill(173, 255, 47);
  // text("confession", 176,81);
  fill(255, 99, 71);
  // text("true", 168,260);
  fill(128, 0, 0);
  // text("saw", 238,201);
  // text("kisses,", 122,406);
  fill(138, 43, 226);
  // text("can", 312,321);
  fill(50, 205, 50);
  // text("one", 122,260);
  fill(255, 99, 71);
  // text("?", 283,81);
  fill(64, 224, 208);
  // text("knew", 53,233);
  fill(0, 255, 255);
  // text("harp.", 413,140);
  fill(25, 25, 112);
  // text("blessed", 179,140);
  // text("eyes.", 257,352);
  fill(178, 34, 34);
  // text("the", 149,111);
  fill(205, 133, 63);
  // text("your", 284,201);
  fill(127, 255, 212);
  // text("I", 279,321);
  fill(135, 206, 235);
  // text("From", 347,168);
  fill(135, 206, 250);
  // text("I", 274,260);
  fill(0, 0, 128);
  // text("of", 328,140);
  fill(199, 21, 133);
  // text("in", 119,111);
  fill(255, 255, 0);
  // text("the", 401,260);
  fill(255, 0, 0);
  // text("the", 131,140);
  fill(238, 232, 170);
  // text("hose", 180,233);
  fill(255, 255, 0);
  // text("s", 354,233);
  // text("I", 205,201);
  fill(255, 165, 0);
  // text("must", 307,260);
  // text("Daisy,", 124,27);
  fill(0, 255, 127);
  // text("since", 77,321);
  fill(0, 191, 255);
  // text("I", 20,233);
  fill(160, 82, 45);
  text("second", 293, 233);
  fill(255, 0, 0);
  // text("love.", 219,260);
  fill(255, 140, 0);
  // text("our", 137,321);
  // text("You", 16,168);
  // text("Love", 15,406);
  fill(0, 0, 128);
  // text("lovely", 334,201);
  // text("day", 210,168);
  fill(255, 0, 0);
  // text("the", 406,168);
  // text("only", 354,321);
  fill(219, 112, 147);
  // text("first", 16,201);
  // text("alone", 59,111);
  // text("am", 20,111);
  fill(144, 238, 144);
  // text("the", 365,140);
  fill(238, 232, 170);
  // text("Bob", 15,460);
  fill(219, 112, 147);
  // text("quiet", 197,111);
  // text("my", 81,260);
  fill(173, 255, 47);
  // text("voice", 20,140);
  fill(255, 140, 0);
  // text("like", 81,140);
  fill(173, 255, 47);
  // text("t", 173,233);
  fill(64, 224, 208);
  // text("music", 269,140);
  fill(147, 112, 219);
  // text("were", 18,260);
  // text("when", 382,81);
  fill(160, 82, 45);
  text("April", 291, 168);
  fill(34, 139, 34);
  // text("x", 68,460);
  fill(218, 112, 214);
  // text("hear", 345,111);
}
