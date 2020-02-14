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

  loadOrbiters(n){
    for(var i = 0; i < n; i++){
      this.orbiters.push(new Orbiter(5, color(120,88,40)));
    }
  }
  run(){
    this.update();
    this.render();
    this.checkEdges();
  }
  update(){
      this.acc.x = random(-.5, .5);
      this.acc.y = random(-.5, .5);
      this.vel.add(this.acc);
      this.vel.limit(10);
      this.loc.add(this.vel);
      this.rad += 0.02;
      this.angle += .41;
  }
  render(){
    fill(100,50,70);
    ellipse(this.loc.x, this.loc.y, 30, 30);
    fill(color(random(255), random(255), random(255)));
    for(var i = 0; i < this.orbiters.length; i++){
      var ox = this.loc.x + 30*cos(this.angle);
      var oy = this.loc.y + 30*sin(this.angle);
      ellipse(ox, oy, 5);
    }

    strokeWeight(0.25);
    stroke(this.clr);
  }
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
}
