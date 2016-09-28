//write your code here
var table = [[],[],[],[],[],[]]
var index = ["Number", "Name", "Position", "Points per Game"]
var joe = [12, "Joe Schmo", "Center", [14,32,7,0,23]]
var ken = [9, "Ken Buckets", "Point Guard", [19,0,11,22,0]]
var harvey = [31, "Harvey Kay", "Shooting Guard", [0,30,16,0,25]]
var sally = [18, "Sally Talls", "Power Forward", [18,29,26,31,19]]
var mo = [22, "Mo DiBoux", "Small Forward", [11,0,23,17,0]]


function inputData(){
  for (var i=0; i<4; i++){
    table[0][i] = index[i]
    table[1][i] = joe[i]
    table[2][i] = ken[i]
    table[3][i] = harvey[i]
    table[4][i] = sally[i]
    table[5][i] = mo[i]

  }
}

inputData()
console.log(table);
