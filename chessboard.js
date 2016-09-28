// Initiating with global variable called pawn and the government
const chess_piece = ["Pawn"];
const chess_behind = ["Rook", "Kinght", "Bishop", "King", "Queen", "Bishop", "Knight", "Rook"];

// function that makes a matrix of chess board
function chess_start() {
  var initiate = [];
  for (var i = 0; i <= 7; i += 1) {
    initiate[i]= [];
    for (var j = 0; j <= 7; j += 1) {
      initiate[i][j]= "empty";
    }
  }
  return initiate;
}


// anonimous function for starting a position of chess
var chess_component = function() {
  var a = chess_start();
  for (var i = 0; i <= 7; i += 1) {
    a[1][i] = chess_piece[0];
    a[0][i] = chess_behind[i];
    a[6][i] = chess_piece[0];
    a[7][i] = chess_behind[i];
  }
  return a;
}

// testing by calling its component
var catur = chess_component();
console.log(catur[1][1]); // pawn
console.log(catur[0][5]); // Bishop
