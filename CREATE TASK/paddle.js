// Olivia Cordero
//9/11 PaddleBall
// CollisionDetection
// The setup function is called once when your program begins

class Paddle {
  constructor(x, y, w, h){  //factors of paddle
   this.loc = createVector(x, y);
   this.w = 300;
   this.h = 50;
   this.clr = color(random(255), random(255), random(255));
  }

  run(){
    this.render();
    this.update();
  }
  render() {
    fill(this.clr);
    rect(this.loc.x, 650, this.w, this.h); //place paddle near bottom of screen
  }
  update() {
    var MouseLoc = createVector(mouseX, 650); //make paddle follow mouse
    this.loc = p5.Vector.lerp(this.loc, MouseLoc, 0.09);
}

  }
