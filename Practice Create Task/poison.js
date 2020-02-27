class Poison {
  constructor(x, y, w, dx, dy){  //properties of food
    this.poison = createVector(x, y);
    this.w = 15;
    this.h = 15;
    this.vel = createVector(dx, dy);
  }
  run(){  //calling upon food functions
    this.update();
    this.render();
  }
  update(){
    var i = 0;
     if(snake.head.x + 15 >= this.poison.x &&  //if snake head collides with food
         snake.head.x - 15 <= this.poison.x + this.w &&
         snake.head.y + 15 > this.poison.y &&
         snake.head.y - 15 < this.poison.y + this.h){
           gameState = 3;


         }
       }
  render(){
    fill(255, 0, 0); //food object
    rect (this.poison.x, this.poison.y, poison.w, poison.h);
  }
}
