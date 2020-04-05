//  Olivia Cordero (dont include this in submission cuz name)
// March 20
//  CREATE TASK
//  The setup function function is called once when your program begins


var paddle;
var balls = []
var score = 0;
var lives = 5;
var gameState = 1;
var button = []
var particles = [];
var EasyButton;
var MediumButton;
var HardButton;
var PlayAgainButton;
var QuitButton;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5, 10);
  loadObjects(random(0,10)); //array of balls


}

function draw() {
background(255,255,255,10);
  //runObjects();
//  fill(0, 255, 255);
//textSize(30);
//text("Score: " + score, 10, 25);
fill(2, 2, 2); //splash screen code
if(gameState === 1){  //different screens/modes of games
  startGame();
}else if(gameState === 2){
  playGame();
}else if(gameState === 3){
  endGame();
}else if(gameState === 4){
  winGame();
}else if(gameState === 5){
  quitGame();
}
}


function loadObjects(n) { //make balls and paddle appear
  for(var i = 0; i < n; i++){
    balls[i] = new Ball(random(800),random(300), random(4, 7), random(4, 7));
  }
  for(var i = 0; i < n; i++){
      particles[i] = new Particle(random(10, 700), random(10, 100));
  }
    paddle = new Paddle(250, 700, 300, 50);

}

//function loadButtons(n) {
//  button = new Button(this.loc.x, 575, 80, 80);
//}
function startGame(){ //starting splash screen
  clear();
  lives = 5;
  background(100,50,100);
  fill(46,79,200);
  textSize(30);
  text('PADDLEBALL GAME', 260, 230);
  textSize(50);
  text('HIT IT OR QUIT IT!', 176, 300);  //game title
  fill(46,79,148);
  textSize(20);
  text('Instructions: Click on one of the boxes below to choose game mode.', 120, 350);
  text('As the difficulty level increases, so does the number of balls.', 120, 370);
  text('Try to keep the balls from touching the bottom of the paddle.', 120, 390);
  text('When the ball reaches the bottom, the amount of lives will decrease by one', 120, 410);
  text('And a new array of balls will appear.', 120, 430)
  text('If the number of lives equals zero, game over!', 120, 450);
  text("Also, avoid the balls with orbitals!", 120, 470);
  text("If your paddle touches those, game over!",120,490);
  createButtons();
  if(mouseIsPressed &&
      mouseX > 170 &&
      mouseX < 230 &&
      mouseY > 600 &&
      mouseY < 660){
        loadObjects(random(1,5));
        gameState = 2;
        console.log('easy');
}
    if(mouseIsPressed &&  //button pressed, load medium mode
        mouseX > 370 &&
        mouseX < 430 &&
        mouseY > 600 &&
        mouseY < 660){
          loadObjects(random(6,10));
          gameState = 2
          console.log('medium');
        }
      if(mouseIsPressed &&  //button pressed, load hard mode
        mouseX > 570 &&
        mouseX < 630 &&
        mouseY > 600 &&
        mouseY < 660){
          gameState = 2;
          loadObjects(random(11,15));
          console.log('hard');
        }
      }
function createButtons(){  //making buttons with different functions
  EasyButton = new Button(170, 600,'easy');  //appears in start screen
  MediumButton = new Button(370, 600, 'medium'); //appears in start scrren
  HardButton = new Button(570, 600, 'hard'); //appears in start screen
  PlayAgainButton = new Button(176, 450, 'new game'); //appears in end and win game
  QuitButton = new Button(550, 450, 'quit game'); //appears in end and win game
  EasyButton.run();  //to make buttons appear
  MediumButton.run();
  HardButton.run();
}

function playGame(){
  fill(0, 255, 255);
textSize(30);
text("Score: " + score, 10, 25); //score in top left corner
text("Lives: " + lives, 10, 60); //number of lives in top left corner below score
runObjects();
for(var i = 0; i < particles.length; i++){
  particles[i].run();
  if(score===balls.length + score){  //win once all balls are cleared
    gameState=4;
  }
  if(lives <= 0){  //lose if lives are less than or equal to zero
    gameState = 3;  //losing screen
  }
  }

function runObjects(){
  paddle.run();
  for(var i = 0; i < balls.length; i++){
    balls[i].run();
  }
}

function endGame(){ //lose screen
  background(255,50,100,10);
  textSize(50);
  text('OOPS! GAME OVER!', 160, 300);
  PlayAgainButton.run();
  QuitButton.run();
if(mouseIsPressed && //restart game
  mouseX >= 176 &&
  mouseX <= 256 &&
  mouseY >= 450 &&
  mouseY <= 530){
     paddle;  //redefining original variables
     balls = [];
     score = 0;
     lives = 5;
     gameState = 1;
     particles = [];
    }
if(mouseIsPressed && //quit game
    mouseX >= 550 &&
    mouseX <= 630 &&
    mouseY >= 450 &&
    mouseY <= 530){
    gameState = 5; //quitting game screen
    }
  }
  function winGame(){ //win screen
    background(200,30,89,10);
    textSize(50);
    text('CONGRATULATIONS!', 160, 300);
    text('YOU WIN!', 300,350);
    PlayAgainButton.run();
    QuitButton.run();
    if(mouseIsPressed && //restart game
      mouseX >= 176 &&
      mouseX <= 256 &&
      mouseY >= 450 &&
      mouseY <= 530){
         paddle;  //redefining original variables
         balls = [];
         score = 0;
         lives = 5;
         particles = [];
         gameState = 1;
        }
      if(mouseIsPressed && //quit game
          mouseX >= 550 &&
          mouseX <= 630 &&
          mouseY >= 450 &&
          mouseY <= 530){
            gameState = 5;
  }
}
function quitGame(){  //quit game scrren
  background(200,40,98,0);
  textSize(50);
  text('BYE!', 300, 300);
  text('HOPE YOU ENJOYED!:)', 150, 360);
}
}
