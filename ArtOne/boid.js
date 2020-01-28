class Boid {
 constructor(x,y,dx,dy){
   this.loc = createVector(x, y);
   this.vel = createVector(dx, dy);
   this.acc = createVector(0,0);
   this.clr = color(random(255), random(255), random(255));
 }
 run(){
   this.update();
   this.render();
   this.checkEdges();
 }
 update(){

 }

 render(){

 }
}
