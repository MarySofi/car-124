
var database
var gameState=0
var playerCount
var form,player,game
var allPlayers
var car1,car2,car3,car4,cars
var  c1,c2,c3,c4
var ground,track
function preloads() {
    c1=loadImage("images/car1.png");
    c2=loadImage("images/car2.png");
    c3=loadImage("images/car3.png");
    c4=loadImage("images/car4.png");
    ground=loadImage("images/ground.png");
    track=loadImage("images/track.jpg");
}

function setup(){
    createCanvas(displayWidth-20,displayHeight-20);
    database=firebase.database()
    
    game=new Game()
    game.getState()
    game.start()
    
}

function draw(){
    if(playerCount===4){
        game.update(1)
    }
    if(gameState===1){
        clear()
        game.play()
    }
   
}

