//write your code here
// var chess =
// [["Benteng Hitam", "Kuda Hitam", "Menteri Hitam", "Raja Hitam", "Ratu Hitam", "Menteri Hitam", "Kuda Hitam", "Benteng Hitam"],
// ["Pion Hitam","Pion Hitam","Pion Hitam","Pion Hitam","Pion Hitam","Pion Hitam","Pion Hitam", "Pion Hitam"],
// ["","","","","","","",""],
// ["","","","","","","",""],
// ["","","","","","","",""],
// ["","","","","","","",""],
// ["Pion Putih","Pion Putih","Pion Putih","Pion Putih","Pion Putih","Pion Putih","Pion Putih","Pion Putih"],
// ["Benteng Putih", "Kuda Putih", "Menteri Putih", "Raja Putih", "Ratu Putih", "Menteri Putih", "Kuda Putih", "Benteng Putih"]]
// console.log(chess[7][0]); // Benteng Putih

var chess =[]

var kerajaan = ["Benteng", "Kuda", "Menteri", "Raja", "Ratu", "Menteri", "Kuda", "Benteng"]
var kerajaanHitam = []
var pionHitam = []
var kerajaanPutih = []
var pionPutih = []
var kosong = []

for (var i = 0; i < kerajaan.length; i++) {
  kerajaanHitam.push(kerajaan[i]+ " Hitam")
}

chess.push(kerajaanHitam);

for (var i=0; i<8;i++){
  pionHitam.push("Pion Hitam")
}

chess.push(pionHitam);

for (var i = 0; i < 4; i++) {
  chess.push(kosong)
}

for (var i=0; i<8;i++){
  kosong.push("O")
}

for (var i=0; i<8;i++){
  pionPutih.push("Pion Putih")
}

chess.push(pionPutih);

for (var i = 0; i < kerajaan.length; i++) {
  kerajaanPutih.push(kerajaan[i]+ " Putih")
}

chess.push(kerajaanPutih);

// console.log(chess);

console.log(chess[7][0]); // Benteng Putih
