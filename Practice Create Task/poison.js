//  olivia cordero
// 	2/26
//  snake game practice create task
//  The setup function is called once when your program begins
class Poison {
  constructor(x, y, w, h, dx, dy){  //properties of poison
    this.poison = createVector(x, y);
    this.w = 40;
    this.h = 40;
    this.vel = createVector(dx, dy);
    this.acc = createVector(4,4);
  }
  run(){  //calling upon poison functions
    this.update();
    this.render();
    this.checkEdges();
  }
  update(){
    this.vel.limit(20); //how fast poison object can go
    this.vel.add(this.acc);
    this.poison.add(this.vel);
    var i = 0;
     if(snake.head.x + 15 >= this.poison.x &&  //if snake head collides with poison, end game
         snake.head.x - 15 <= this.poison.x + this.w &&
         snake.head.y + 15 > this.poison.y &&
         snake.head.y - 15 < this.poison.y + this.h){
           gameState = 3;
         }
       }
  render(){
    fill(color(random(255), random(255), random(255))); //poison object
    rect (this.poison.x, this.poison.y, poison.w, poison.h);
  }
  checkEdges(){  //poison bounce off edges of screen
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
