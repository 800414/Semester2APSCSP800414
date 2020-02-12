//Olivia Cordero
//02/05/20
//MyArtProject
//The setup  function is called once when your program begins
var colors;  //defining global variables
var type;
var boids = [];
var toggle = 1;  //toggle variable controls when boids start and stop moving

function setup() {
  createCanvas(windowWidth, windowHeight);
  loadBoids(40);  //how many boids appear in background
  colors = [
    color(204, 102, 255),
    color(204, 153, 255),
    color(204, 204, 255)
  ];

  type = 0;
}//end setup function+++++++++++++++++++++++++++++++++++++++++++++++++

function draw() {
  blendMode(BLEND);
  if(type == 0) {  //different versions of background
    background(0); //black
    blendMode(SCREEN);
  } else {
    background(255, 0, 102);  //pink
    blendMode(EXCLUSION);
  }
  noFill();
  strokeWeight(20);  //width of curve shape
  for(var i = 0; i < 3; i++) {  //start drawing shape
    stroke(colors[i]);
    beginShape();
    for(var w = -20; w < width + 20; w += 5) {  //shape waves in and out
      var h = height / 2;
      h += 200 * sin(w * 0.03 + frameCount * 0.07 + i * TWO_PI / 3) * pow(abs(sin(w * 0.001 + frameCount * 0.02)), 5);
      curveVertex(w, h);
    }
    endShape();
  }
  runBoids();  //boids run in background
}//end draw++++++++++++++++++++++++++++++++++++++++++++++++++++++

function mousePressed() {
  toggle = -toggle;  //negative toggle = boids stop moving
  if(type == 0) {  //mouse pressed code to change background
    type = 1;
  } else {
    type = 0;
  }
}//end mousepressed++++++++++++++++++++++++++++++++++++++++++++++++

function loadBoids(n){  // how boids appear on random areas of screen
  for(var i = 0; i < n; i++){
    boids[i] = new Boid(random(100,700),random(100,700), random(-2,2), random(-2,2));
}
}//end loadBoids+++++++++++++++++++++++++++++++++++++++++++++++++++++
function runBoids(){
  for(var i = 0; i < boids.length; i++){
    boids[i].run();  //run boid array
  }
}//end runBoids++++++++++++++++++++++++++++++++++++++++++++++++++++++++
