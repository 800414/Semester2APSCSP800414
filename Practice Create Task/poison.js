class Poison {
  constructor(x, y, w, h, dx, dy){  //properties of food
    this.poison = createVector(x, y);
    this.w = 20;
    this.h = 20;
    this.vel = createVector(dx, dy);
    this.acc = createVector(4,4);
  }
  run(){  //calling upon food functions
    this.update();
    this.render();
    this.checkEdges();
  }
  update(){
    this.vel.limit(20); //how fast balls can go
    this.vel.add(this.acc);
    this.poison.add(this.vel);
    var i = 0;
     if(snake.head.x + 15 >= this.poison.x &&  //if snake head collides with food
         snake.head.x - 15 <= this.poison.x + this.w &&
         snake.head.y + 15 > this.poison.y &&
         snake.head.y - 15 < this.poison.y + this.h){
           gameState = 3;
         }
       }
  render(){
    fill(255, 0, 0); //poison object
    rect (this.poison.x, this.poison.y, poison.w, poison.h);
  }
  checkEdges(){  //boids bounce off edges of screen
    if(this.poison.x < 0){
      this.vel.x = -this.vel.x;
      this.acc.x = -this.acc.x;
    }
    if(this.poison.x > width){
      this.vel.x = -this.vel.x;
      this.acc.x = -this.acc.x;
    }
    if(this.poison.y < 0){
      this.vel.y = -this.vel.y;
      this.acc.y = -this.acc.y;
    }
    if(this.poison.y > height){
      this.vel.y = -this.vel.y;
      this.acc.y = -this.acc.y;
    }
  }
}
