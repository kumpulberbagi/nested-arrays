//write your code here
"use strict"

var chessboard = [[,,,,,,,],[,,,,,,,],[,,,,,,,],[,,,,,,,],[,,,,,,,],[,,,,,,,],[,,,,,,,],[,,,,,,,]]
var black = ["bPawn","bRoof", "bKnight", "bSlide", "bQueen", "bKing", "bSlide", "bKnight", "bRoof"]
var white = ["wPawn", "wRoof", "wKnight", "wSlide", "wQueen", "wKing", "wSlide", "wKnight", "wRoof"]
var space = ["empty"]

function summon(){
  for(var i=0; i<8; i++){
    chessboard[1][i] = black[0]
    chessboard[6][i] = white[0]
    chessboard[0][i] = black[i+1]
    chessboard[7][i] = white[i+1]
  }
}

function printSpace(){
  for (var i=2; i<6; i++){
    for (var j=0; j<8; j++){
      chessboard[i][j] = space[0]
    }
  }
}

function startGame(){
  summon()
  printSpace()
}




startGame()
console.log(chessboard[0][4]);
console.log(chessboard[1][4]);
console.log(chessboard[2][0]);
console.log(chessboard[5][7]);
console.log(chessboard[6][5]);
console.log(chessboard[7][3]);
console.log(chessboard);
