//game variables for players,game state
var player1 = "X";
var player2 = "O";
var player1name, player2name;
var gamestate ="register";
var currplayer;
var counter=0;
//image and sprites
var board = [
  [" "," ", " "], 
  [" "," ", " "], 
  [" "," ", " "], 
];
// value and win
var available = [
  [" "," ", " "], 
  [" "," ", " "], 
  [" "," ", " "], 
];
var alltabs = [];
var x1,y1,x2,y2;
var message;
//preload the X and Y images
function preload(){
  XImage = loadImage("x.png");
  YImage = loadImage("y.png");

}
function setup() {
  createCanvas(400,400);
  // form page
 
    display();
    
 // invisible game objects to click on
  clickables();
 //initialize tic tac toe
 
  board = [[box11,box21,box31],[box12,box22,box32],[box13,box23,box33]];
    
}

function draw() {
  background("grey"); 

  // starting display
  if(gamestate === "start"){
    textSize(20);
    fill("black");
    text(player1name+ " is 'X' and " + player2name +" is 'O'", 70,100);
    text("First turn by " + currtext, 100,200);
     //wait for gamestart
   if(counter<120){
    counter++
    }else {
   gamestate = "play"
   }
  }
 
  //play game
  if(gamestate === "play"){
  strokeWeight(5);
  //line(50,50,350,50);
  line(50,150,350,150);
  line(50,250,350,250);
  //line(50,350,350,350);
 // line(50,50,50,350);
  line(150,50,150,350);
  line(250,50,250,350);
 

 
  imageMode(CENTER);
  if (currplayer === player1){
    text(player1name + " its your turn",100,20);
    for(var i=0; i<3;i++){
      for(var j=0; j<3; j++){
          if(mousePressedOver(board[i][j]) && available[i][j] === " "){

            available[i][j] = "X";
            board[i][j].visible = true;
            board[i][j].addImage("x",XImage);
            currplayer = player2;
          }
            
      }
    }
    checkwinplayer1();
       
  }
  if (currplayer === player2){
    text(player2name +" its your turn",100,20);
    for(var i=0; i<3;i++){
      for(var j=0; j<3; j++){
          if(mousePressedOver(board[i][j]) && available[i][j] === " "){

            available[i][j] = "O";
            board[i][j].visible = true;
            board[i][j].addImage("y",YImage);
            currplayer = player1;
          }
            
      }
    }
    checkwinplayer2();
    
  }
  drawSprites();

  }
  if(gamestate === "end"){
    strokeWeight(5);
    //line(50,50,350,50);
    line(50,150,350,150);
    line(50,250,350,250);
    //line(50,350,350,350);
   // line(50,50,50,350);
    line(150,50,150,350);
    line(250,50,250,350);
   
  
   
    imageMode(CENTER);
    drawSprites();
   
    textSize(25);
    fill("blue");
    text(message,140,40)
    stroke("red");
    strokeWeight(6);
    line(x1,y1,x2,y2);
  }
}
