//  olivia cordero
// 	11/20
//  snake game
//  The setup function is called once when your program begins
class Snake {
  constructor(x, y, w, h){  //properties of snake
    this.head = createVector(x, y);
    //this.clr = random(color(255));
    this.w = w;
    this.h = h;
    this.body = [];
    this.vel = createVector(0, 0);
  }

  loadBody(){ //make body segment appear after head
    this.body.push(createVector(this.head.x, this.head.y));
  }

  run(){  //call upon render and update functions to make snake appear properly
    this.renderHead();
    this.update();
    this.checkEdges();
    this.tangled();
  }

  update(){
    this.keyReleased();
    for(var i = this.body.length - 1; i >= 0; i--){
      this.renderBody(); //make body segment
    }
    for (i = this.body.length-1; i>=0; i--){
    if (i >= 1){  //segments follow each other
      this.body[i].x = this.body[i-1].x;
      this.body[i].y = this.body[i-1].y;
   }  if (i === 0){
      this.body[i].x = this.head.x;
      this.body[i].y = this.head.y;
    }
  }
    this.head.add(this.vel);  //speed of snake
  }

  renderHead(){  //how snake head appears on screen
  fill(255,182,193);
  rect (this.head.x, this.head.y, this.w, this.h);
  }

  renderBody(){  //how and where snake body appears on screen
    for(var i = this.body.length - 1; i >= 0; i--){
      fill(255, 182, 193);
      rect(this.body[i].x, this.body[i].y,this.w, this.h);
    }
  }

keyReleased(){  //use arrow keys to control direction of snake
  if(keyCode === UP_ARROW){ //up arrow pressed, snake goes up
    this.vel.x = 0;
    this.vel.y = -14;
  }
  if(keyCode === DOWN_ARROW){  //down arrow pressed, snake moves down
    this.vel.x = 0;
    this.vel.y = 14;
  }
  if(keyCode === LEFT_ARROW){  //left arrow pressed, snake goes left
    this.vel.x = -14;
    this.vel.y = 0;
  }
  if(keyCode === RIGHT_ARROW){  //right arrow pressed, snake moves right
    this.vel.x = 14;
    this.vel.y = 0;
  }
}
checkEdges(){  //if snake hits edges of screen, game over
//bounce off edges
  if(this.head.x > 800 ||
    this.head.x < 0 ||
    this.head.y > 800 ||
    this.head.y < 0){
      gameState = 3;
    }
  }
  tangled(){  //if snake gets tangled in itself, game over
    for(var i = 0; i < this.body.length; i++){
      if(this.head.x === this.body[i].x && this.head.y === this.body[i].y){
        gameState = 3;
      }
    }
  }
}
