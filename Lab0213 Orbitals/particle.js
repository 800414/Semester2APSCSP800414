class Particle{
  constructor(loc){
    this.loc = loc;
    this.vel = createVector(random(-.3, .3), random(-.3, .3));
    this.acc = createVector(random(-.1, .1), random(-.1, .1));
    this.rad = random(11, 22);
    this.lifeSpan = random(500);
    var r = random(255);
    var g = this.lifeSpan%255;
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
  }
  update(){
    if(toggle === 1){
      this.acc.x = random(-.5, .5);
      this.acc.y = random(-.5, .5);
      this.vel.add(this.acc);
      this.vel.limit(55);
      this.loc.add(this.vel);
      this.lifeSpan -= 1;
      this.rad += 0.02;
      this.angle += .41;
    }
  }
  render(){
    strokeWeight(0.25);
    stroke(this.clr);
  }
}
