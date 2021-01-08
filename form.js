//players registration form
function  display(){
        
        title = createElement('h2');
        title.html('Please enter your names');
        title.position(50,50);
        //player1
        entry1 = createElement('h3');
        entry1.html('Player 1 :');
        entry1.position(50,100);
        input1 = createInput(' ');
        input1.position(130,100);
        input1.size(150,25);
        //player2
        entry2 = createElement('h3');
        entry2.html('Player 2 :');
        entry2.position(50,150);
        input2 = createInput(' ');
        input2.position(130,150);
        input2.size(150,25);
        //button to start game
        button = createButton('Start Game')
        button.position(150,200);
        button.size(100,35);
        button.mousePressed(gamestart);
       
    }
    //when gamestart button is pressed, change gamestate to "start", 
    //hide the form, choose the player turn
function gamestart(){
    player1name = input1.value();
    player2name = input2.value();
        gamestate = "start";
        console.log(gamestate);
        title.hide();
        entry1.hide();
        entry2.hide();
        input1.hide();
        input2.hide();
        button.hide();
        //randomly choose the first turn player
        chooseplayer();
}