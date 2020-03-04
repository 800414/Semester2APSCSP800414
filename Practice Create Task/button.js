//  olivia cordero
// 	2/26
//  snake game
//  The setup function is called once when your program begins
class Button {
  constructor(x, y, msg) {
    this.loc = createVector(x, y);
    this.msg = msg;  //text determining function of button
    this.clr = color(20, 100, 130);
  }//determining parts of buttons


run(){
  this.render();
}
render() {  //create button with all its info
  fill(this.clr);
  rect(this.loc.x, this.loc.y, 80, 80); // square shaped button
  fill(5, 5, 5);
  textSize(25);
  text(this.msg, this.loc.x - 30, this.loc.y - 20); //button text appear directly above button
}
}
