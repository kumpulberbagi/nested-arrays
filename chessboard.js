// var chess = [
//   ["Benteng Hitam", "Kuda Hitam", "Menteri Hitam", "Raja Hitam", "Ratu Hitam", "Menteri Hitam", "Kuda Hitam", "Benteng Hitam"],
//   ["Pion Hitam", "Pion Hitam", "Pion Hitam", "Pion Hitam", "Pion Hitam", "Pion Hitam", "Pion Hitam", "Pion Hitam"],
//   ["", "", "", "", "", "", "", ""],
//   ["", "", "", "", "", "", "", ""],
//   ["", "", "", "", "", "", "", ""],
//   ["", "", "", "", "", "", "", ""],
//   ["Pion Putih", "Pion Putih", "Pion Putih", "Pion Putih", "Pion Putih", "Pion Putih", "Pion Putih", "Pion Putih"],
//   ["Benteng Putih", "Kuda Putih", "Menteri Putih", "Raja Putih", "Ratu Putih", "Menteri Putih", "Kuda Putih", "Benteng Putih"]
// ]

function pionPutih() {
  let tampung = [];
  for (var i = 0; i < 9; i++) {
    tampung.push("Pion Hitam");
  }
  return tampung;
}

function pionPutih() {
  let tampung = [];
  for (var i = 0; i < 9; i++) {
    tampung.push("Pion Hitam");
  }
  return tampung;
}

function medanPertempuran() {
  let tampung = [];
  for (var i = 0; i < 9; i++) {
    tampung.push("");
  }
  return tampung
}

var cassBord = [];
var hitamBelakang = ["Benteng Hitam", "Kuda Hitam", "Menteri Hitam", "Raja Hitam", "Ratu Hitam", "Menteri Hitam", "Kuda Hitam", "Benteng Hitam"];
var puithBelakang = ["Benteng Putih", "Kuda Putih", "Menteri Putih", "Raja Putih", "Ratu Putih", "Menteri Putih", "Kuda Putih", "Benteng Putih"];
var hitamDepan = pionPutih();
var putihDepan = pionPutih();
var kosong = medanPertempuran();

console.log("Medan");
console.log(kosong);
console.log("=====================");
console.log("Pion Putih");
console.log(hitamDepan);
console.log("=====================");
console.log("Pion Hitam");
console.log(putihDepan);
console.log("=====================");

for (var j = 0; j < 9; j++) {
  if (j == 0) {
    cassBord[j] = hitamBelakang;
  } else if (j == 1) {
    cassBord[j] = hitamDepan;
  } else if (j == 6) {
    cassBord[j] = putihDepan;
  } else if (j == 7) {
    cassBord[j] = puithBelakang;
  } else {
    cassBord[j] == kosong;
  }
}

console.log(cassBord);
console.log(cassBord[7][0]);
console.log(cassBord[7][0] == "Benteng Putih"); // true
