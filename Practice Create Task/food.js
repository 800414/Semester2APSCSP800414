//  olivia cordero
// 	2/26
//  snake game practice create task
//  The setup function is called once when your program begins
class Food {
  constructor(x, y, w, h){  //properties of food
    this.food = createVector(x, y);
    this.w = 15;
    this.h = 15;
  }
  run(){  //calling upon food functions
    this.update();
    this.render();
  }
  update(){
    var i = 0;
     if(snake.head.x + 15 >= this.food.x &&  //if snake head collides with food
         snake.head.x - 15 <= this.food.x + this.w &&
         snake.head.y + 15 > this.food.y &&
         snake.head.y - 15 < this.food.y + this.h){
           this.food.x = random(70,700);
           this.food.y = random(70,700);
           // this.poison.x = random(70,700);
           // this.poison.y = random(70,700);
           this.render();
           snake.loadBody();  //add body segment
           score++;    //gain point

         }
       }
  render(){
    fill(66, 230, 245); //food object
    rect (this.food.x, this.food.y, food.w, food.h);
  }
}
