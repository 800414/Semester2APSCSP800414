//  Olivia Cordero
// 	1/30/20
//  ArtTwo
//  The setup function function is called once when your program begins
class Boid {
  constructor(x,y,dx,dy){  //factors of boid, location, velocity, acceleration, color
    this.loc = createVector(x, y);
    this.vel = createVector(dx, dy);
    this.acc = createVector(3,3);
    this.clr = color(random(255), random(255), random(255));
  } // end constructor+++++++++++++++++++++++++++++++++++++++++++++++++++++++
  run(){
    this.update();
    this.render();
    this.checkEdges();
  } // end run+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  update(){
    if(toggle > 0){  //update stops running when mouse is clicked
      this.vel.limit(10);  //setting velocity of boid to ten
      this.vel.add(this.acc);  //add acceleration to velocity
      this.loc.add(this.vel);  //add velocity to acceleration
      if(this.loc.y < 200){
        this.vel.y = -this.vel.y;
      }
      if(this.loc.y < 600){
        this.vel.y = -this.vel.y;
      }
    }
  } //end update +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  render(){
    for (var i = boids.length-1; i>0; i--){  //determine if boids are less than 200 pixels apart
      var d = this.loc.dist(boids[i].loc)
      if(d<200){
        stroke(192, 192, 192, 10);  //draw line
        line(this.loc.x, this.loc.y, boids[i].loc.x, boids[i].loc.y);
      }
    }
  } //end of render+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  checkEdges(){  //boids bounce off edges of screen
    if(this.loc.x < 0){
      this.vel.x = -this.vel.x;
      this.acc.x = -this.acc.x;
    }
    if(this.loc.x > width){
      this.vel.x = -this.vel.x;
      this.acc.x = -this.acc.x;
    }
    if(this.loc.y < 0){
      this.vel.y = -this.vel.y;
      this.acc.y = -this.acc.y;
    }
    if(this.loc.y > height){
      this.vel.y = -this.vel.y;
      this.acc.y = -this.acc.y;
    }
  } //end checkEdges+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
}  //end boid class+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
