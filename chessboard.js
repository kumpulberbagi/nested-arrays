//write your code here
let chessboard =[["benteng putih","kuda putih","peluncur putih","queen putih","raja putih","peluncur putih","kuda putih","benteng putih"],["pion putih","pion putih","pion putih","pion putih","pion putih","pion putih","pion putih","pion putih"],["kosong","kosong","kosong","kosong","kosong","kosong","kosong","kosong"],["kosong","kosong","kosong","kosong","kosong","kosong","kosong","kosong"],["kosong","kosong","kosong","kosong","kosong","kosong","kosong","kosong"],["kosong","kosong","kosong","kosong","kosong","kosong","kosong","kosong"],["pion hitam","pion hitam","pion hitam","pion hitam","pion hitam","pion hitam","pion hitam","pion hitam"],["benteng hitam","kuda hitam","peluncur hitam","queen hitam","raja hitam","peluncur hitam","kuda hitam","benteng hitam"]]
console.log("-------------test case---------");
console.log(chessboard[0][0]=="benteng putih");
console.log(chessboard[0][1]=="kuda putih");
console.log(chessboard[0][2]=="peluncur putih");
console.log(chessboard[0][3]=="queen putih");
console.log(chessboard[0][4]=="raja putih");
console.log(chessboard[0][5]=="peluncur putih");
console.log(chessboard[0][6]=="kuda putih");
console.log(chessboard[0][7]=="benteng putih");
console.log(chessboard[1][0]=="pion putih");
console.log(chessboard[1][1]=="pion putih");
console.log(chessboard[1][2]=="pion putih");
console.log(chessboard[1][3]=="pion putih");
console.log(chessboard[1][4]=="pion putih");
console.log(chessboard[1][5]=="pion putih");
console.log(chessboard[1][6]=="pion putih");
console.log(chessboard[1][7]=="pion putih");
console.log("--------------------------------");
console.log(chessboard[7][0]=="benteng hitam");
console.log(chessboard[7][1]=="kuda hitam");
console.log(chessboard[7][2]=="peluncur hitam");
console.log(chessboard[7][3]=="queen hitam");
console.log(chessboard[7][4]=="raja hitam");
console.log(chessboard[7][5]=="peluncur hitam");
console.log(chessboard[7][6]=="kuda hitam");
console.log(chessboard[7][7]=="benteng hitam");
console.log(chessboard[6][0]=="pion hitam");
console.log(chessboard[6][1]=="pion hitam");
console.log(chessboard[6][2]=="pion hitam");
console.log(chessboard[6][3]=="pion hitam");
console.log(chessboard[6][4]=="pion hitam");
console.log(chessboard[6][5]=="pion hitam");
console.log(chessboard[6][6]=="pion hitam");
console.log(chessboard[6][7]=="pion hitam");
console.log("-------------**********---------");
console.log("------ posisi untuk catur putih------");
for (var i = 0; i < 2; i++) {
  for (var j = 0; j < chessboard.length; j++) {
  console.log(`posisi (${i},${j}) :${chessboard[i][j]} `);
  }
}
console.log("------ *************************------");
console.log("------ posisi untuk catur hitam------");
for (let i = 6; i < 8; i++) {
  for (let j = 0; j < chessboard.length; j++) {
  console.log(`posisi (${i},${j}) :${chessboard[i][j]} `);
  }
}
console.log("------ **************************-----");
