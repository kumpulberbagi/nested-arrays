//write your code here
var chessboard = [
  [ ["black rock"],["black knight"],["black bishop"],["black king"],["black queen"],["black bishop"],["black knight"],["black rock"] ],
  [ ["black pawn"],["black pawn"],["black pawn"],["black pawn"],["black pawn"],["black pawn"],["black pawn"],["black pawn"] ],
  [ [],[],[],[],[],[],[],[] ],
  [ [],[],[],[],[],[],[],[] ],
  [ [],[],[],[],[],[],[],[] ],
  [ [],[],[],[],[],[],[],[] ],
  [ ["white pawn"],["white pawn"],["white pawn"],["white pawn"],["white pawn"],["white pawn"],["white pawn"],["white pawn"] ],
  [ ["white rock"],["white knight"],["white bishop"],["white queen"],["white king"],["white bishop"],["white knight"],["white rock"] ]
];

var displayChess = () => {
  console.log("===========CHESSBOARD===========");
  for (var i = 0; i < (chessboard.length); i++) {
    var chess = "";
    for (var j = 0; j < chessboard[i].length; j++) {
      chess += "| " + chessboard[i][j] + " |";
    }
    console.log(chess);
  }
  return "===========END===========";
}

console.log(displayChess());

console.log();
