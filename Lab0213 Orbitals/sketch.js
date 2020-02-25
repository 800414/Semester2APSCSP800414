//  Olivia Cordero
// 	Feb 13 2020
//  Orbitals
//  The setup function function is called once when your program begins
var particles = [];  //global variable
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadParticle(4);  //load array of four particles
}
//end setup function++++++++++++++++++++++++++++++++++++++++++++

//  The draw function is called @ 30 fps
function draw() {
background(5, 5, 5, 10);
for(var i = 0; i < particles.length; i++){
  particles[i].run();
}
}
//end draw++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function loadParticle(n){  //when and how particle appears
  for(var i = 0; i < n; i++){
      particles[i] = new Particle(random(10, 700), random(10, 700));
  }
}
//end loadParticle+++++++++++++++++++++++++++++++++++++++++++++++++++++
