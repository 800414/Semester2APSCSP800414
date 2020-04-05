class Particle{
  constructor(x, y){
    this.loc = createVector(x, y);
    this.vel = createVector(random(-.3, .3), random(-.3, .3));
    this.acc = createVector(random(-.1, .1), random(-.1, .1));
    this.rad = random(11, 22);
    var r = random(255);
    var g = random(255);
    var b = random(255);
    this.clr = color(r, g, b);
    this.fclr = color(r, g, b, 10);
    this.orbiters = [];
    this.loadOrbiters(1);
    this.angle = random(TWO_PI);
  }
//end constructor+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  loadOrbiters(n){
    for(var i = 0; i < n; i++){
      this.orbiters.push(new Orbiter(5, color(50,88,40)));
    }
  }
  //end loadOrbiters++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  run(){
    this.update();
    this.render();
    this.checkEdges();
  }
  //end run++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  update(){
      this.acc.x = random(-.5, .5);  //acceleration determining left and right movement
      this.acc.y = random(-.5, .5);  //acceleration determining up and down movement
      this.vel.add(this.acc);  //add acceleration to velocity
      this.vel.limit(10);
      this.loc.add(this.vel);  //add velocity to location
      this.rad += 0.02;
      this.angle += .41;
      for(var i = particles.length - 1; i>= 0; i--){
        if(particles[i].isColliding() && this.vel.y > 0) {
          gameState=3;
        }else if(particles[i].isColliding() && this.vel.y < 0){
        gameState=3;
      }
      }
  }
  //end update+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  render(){
    fill(100,50,70);
    ellipse(this.loc.x, this.loc.y, 30, 30);  //randomly colored ellipses are particles
    fill(color(random(255), random(255), random(255)));
    for(var i = 0; i < this.orbiters.length; i++){
      var ox = this.loc.x + 30*cos(this.angle);  //determine orbital x value
      var oy = this.loc.y + 30*sin(this.angle);  //determine orbital y value
      ellipse(ox, oy, 5);  //how to draw orbital
    }

    strokeWeight(0.25);
    stroke(this.clr);
  }
  //end render++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
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
  }
  //end checkEdges+++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  isColliding() {
    if(this.loc.x + 20 > paddle.loc.x &&
       this.loc.x - 20 < paddle.loc.x + paddle.w &&
       this.loc.y + 20 > paddle.loc.y &&
       this.loc.y - 20 < paddle.loc.y + paddle.h) //bounce off paddle
       {
         return true;
        }
      }
    }
//end class Particle++++++++++++++++++++++++++++++++++++++++++++++++++++++++
