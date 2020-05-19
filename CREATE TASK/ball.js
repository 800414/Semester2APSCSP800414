class Ball {
  constructor(x, y, dx, dy){  //defining aspects of ball
   this.loc = createVector(x, y);
   this.vel = createVector(dx, dy);
   this.acc = createVector(0,0);
   this.clr = color(random(255), random(255), random(255));

  }

  run(){
    this.checkedges();
    this.update();
    this.render();
    this.isColliding();
  }

  checkedges(){
//bounce off edges
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
    update(){
         this.vel.limit(20); //how fast balls can go
         this.vel.add(this.acc);
         this.loc.add(this.vel);
        for(var i = balls.length - 1; i>= 0; i--){
          if(balls[i].isColliding() && this.vel.y > 0) {
         balls.splice(i, 1);
         score++;  //when ball touches top of paddle, ball disappears, +1 point
       }else if(balls[i].isColliding() && this.vel.y < 0){
         loadObjects(10*2);
         lives--;  //when ball touches bottom of paddle, 20 new balls appear, -1 life
       }
     }
   }

    render(){
        fill(this.clr);
        ellipse(this.loc.x, this.loc.y, 40, 40);  //ball appearances
       }

    isColliding() {
      if(this.loc.x + 20 > paddle.loc.x &&
         this.loc.x - 20 < paddle.loc.x + paddle.w &&
         this.loc.y + 20 > paddle.loc.y &&
         this.loc.y - 20 < paddle.loc.y + paddle.h) //bounce off paddle
         {
           return true;
           this.clr = color(random(255), random(255), random(255));
           }


          }
        }






//  +++++++++++++++++++++++++++++++++++  End Ball Class
