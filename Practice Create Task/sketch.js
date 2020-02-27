//  olivia cordero
// 	11/20
//  snake game
//  The setup function is called once when your program begins
var snake;  //defining global variables
var food;
var gameState = 1;
var startButton;
var playAgainButton;
var score = 0;
var poison;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(140, 40, 200);
  frameRate(10);
  loadObjects(1);
  createButtons();
}

//  The draw function is called @ 30 fps
function draw() {
  background(100,80,200);
    snake.run();  //snake appears
    food.run();  //food object appears
    if(gameState === 1){ //beginning splash screen
      startGame();
    }else if(gameState === 2){  //playing game
      playGame();
    }else if(gameState === 3){  //lose game end screen
      endGame();
    }

}

function createButtons(){  //making buttons with different functions
  startButton = new Button(370, 600, 'START GAME!');
  playAgainButton = new Button(370, 460, 'PLAY AGAIN!');
}

function loadObjects(n){  //appearance of snake and food
    snake = new Snake (400,400,20,20);
    food = new Food(random(70,700), random(50,400), this.w, this.h);
    poison = new Poison(random(70,700), random(50,400), this.w, this.h);
}

function startGame(){ //starting splash screen
  background(100,80,200);
  fill(5,5,5);
  textSize(50);
  text('SNAKE GAME', 240, 300);  //game title
  fill(5,5,5);
  textSize(20);
  text('Instructions: Use the arrow keys to move the snake around the screen.', 120, 350);  //instructions to game appear on screen
  text('Your snake will begin as one box, but upon moving another box will appear.', 120, 370);
  text('This second box is the body of your snake.', 120, 390)
  text('Try to eat the food, and your snake will grow!', 120, 410);
  text('Be careful to avoid the edges of the screen!', 120, 430);
  text('Also make sure your snake does not get tangled in itself!', 120, 450);
  text('If either of these things happen, game over!', 120, 470);
  text('Have fun!', 120, 490);
  startButton.run();
  if(mouseIsPressed &&  //button pressed, load game mode
      mouseX > 370 &&
      mouseX < 430 &&
      mouseY > 600 &&
      mouseY < 660){
        loadObjects();
        gameState = 2;
}
}

function playGame(){  //begin playing game
  textSize(30);
  text("Score: " + score, 10, 25); //score in top left corner
  snake.run();
  food.run();
  poison.run();
  }

function endGame(){
  clear(); //lose screen
  background(255,50,100,10);
  textSize(50);
  text('OOPS! GAME OVER!', 160, 300);
  text('YOUR FINAL SCORE WAS ' + score, 80, 350);  //final score appear on screen
  playAgainButton.run();
  if(mouseIsPressed &&  //button pressed, restart game mode
      mouseX > 370 &&
      mouseX < 430 &&
      mouseY > 460 &&
      mouseY < 520){
  snake.body = []; //each variable back to original value
  snake.head.x = 400;  //snake head starts at middle of screen
  snake.head.y = 400;
  snake.vel = createVector(0,0); //starts not moving
  keyCode = CONTROL;
  gameState = 1;  //go to start screen
  startGame();
    }
}
