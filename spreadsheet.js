//write your code here
//var tabelHead = ["Number", "  Name      ", " Position      ", "Points per Game"];
// tabel[1] = [12, 9, 31, 18, 22]
// tabel[2] = ["Joe Schmo", "Ken Buckets", "Harvey Kay", "Sally Talls", "Mo DiBoux"]
var data = [["Number", "  Name      ", " Position      ", "Points per Game"],
            [" 12    ","Joe Schmo   ", "Center        ",[14, 32, 7, 0, 23]],
            [" 9     ","Ken Buckets ", "Point Guard   ",[19, 0, 11, 22, 0]],
            [" 31    ","Harvey Kay  ", "Shooting Guard",[0, 30, 16, 0, 25]],
            [" 18    ","Sally Talls ", "Power Forward ",[18,29,26,31,19]],
            [" 22    ","Mo DiBoux   ", "Small Forward ",[11,0,23,17,0]]
          ];
var display = (panggil) => {
  var play = "";
  for (var i = 0; i <4; i++){
    play = play+" " +panggil[i]
  }
  console.log(play);
}
var displayMax = (panggil) => {
  for (var j=0; j<panggil.length; j++){
    display(panggil[j])
  }
}
displayMax(data);

console.log(data[3][2]);
console.log(JSON.stringify(data[1][3]));
