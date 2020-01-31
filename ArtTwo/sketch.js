//  Olivia Cordero
// 	1/28/20
//  ArtOne
//  The setup function function is called once when your program begins
var boids = [];  //global variable to make boids
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(255);
  fill(200, 30, 150);
  loadBoids(80); //eighty boids appear on screen


}

//  The draw function is called @ 30 fps
function draw(){
runBoids();
}

function loadBoids(n){
  for(var i = 0; i < n; i++){
    boids[i] = new Boid(400,400, random(-2,2), random(-2,2));
}
}
function runBoids(){
  for(var i = 0; i < boids.length; i++){
    boids[i].run();
  }
}
