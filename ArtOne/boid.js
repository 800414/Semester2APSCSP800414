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
this.vel.limit(3);
this.vel.add(this.acc);
this.loc.add(this.vel);
 }

 render(){
fill(this.clr);
ellipse(this.loc.x, this.loc.y, 30, 30);
fill(147,112,219);
//for var i = boids.length-1; i>0;
line(this.loc.x, this.loc.y,100,100)
 }
 checkEdges(){
   if(this.loc.x < 0){
     this.vel.x = -this.vel.x;
   }
   if(this.loc.x > width){
     this.vel.x = -this.vel.x;
   }
   if(this.loc.y < 0){
     this.vel.y = -this.vel.y;
   }
   if(this.loc.y > height){
     this.vel.y = -this.vel.y;
 }
}
}
