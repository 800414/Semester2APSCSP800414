//Olivia Cordero
//02/05/20
//MyArtProject
//The setup  function is called once when your program begins
var colors;
var type;
var boids = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  loadBoids(50);
  colors = [
    color(204, 102, 255),
    color(204, 153, 255),
    color(204, 204, 255)
  ];

  type = 0;
}

function draw() {
  blendMode(BLEND);

  if(type == 0) {
    background(0);
    blendMode(SCREEN);
  } else {
    background(255, 0, 102);
    blendMode(EXCLUSION);
  }
  noFill();
  strokeWeight(20);
  for(var i = 0; i < 3; i++) {
    stroke(colors[i]);
    beginShape();
    for(var w = -20; w < width + 20; w += 5) {
      var h = height / 2;
      h += 200 * sin(w * 0.03 + frameCount * 0.07 + i * TWO_PI / 3) * pow(abs(sin(w * 0.001 + frameCount * 0.02)), 5);
      curveVertex(w, h);
    }
    endShape();
  }
  runBoids();
}

function mousePressed() {
  if(type == 0) {
    type = 1;
  } else {
    type = 0;
  }
}

function loadBoids(n){
  for(var i = 0; i < n; i++){
    boids[i] = new Boid(random(100,700),random(100,700), random(-2,2), random(-2,2));
}
}
function runBoids(){
  for(var i = 0; i < boids.length; i++){
    boids[i].run();
  }
}
