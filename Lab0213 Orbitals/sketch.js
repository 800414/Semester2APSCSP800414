//  Olivia Cordero
// 	Feb 13 2020
//  Orbitals
//  The setup function function is called once when your program begins
var particles = [];
var toggle;
var count;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  toggle = 1;
  count = 0;
}

//  The draw function is called @ 30 fps
function draw() {
count++;
if(count > 50000) count = 0;

if(particles.length < 20 && count%3 === 0){
  loadParticle();
}
for(var i = 0; i < particles.length; i++){
  
}
}
