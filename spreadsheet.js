//write your code here
var basketball = [
  ["Number", "Name", "Position", "Poinst per Game"],
  ["12", "Joe Schmo", "Center", [14, 32, 7, 0, 23]],
  ["9", "Ken Buckets", "Point Guard", [19, 0, 11, 22, 0]],
  ["31", "Harvey Kay", "Shooting Guard", [0, 30, 16, 0, 25]],
  ["18", "Sally Talls", "Power Forward", [18, 29, 26, 31, 19]],
  ["22", "Mo Diboux", "Small Forward", [11,0, 23, 17,0]]
];

function displayHeader() {
  console.log("===========START===========");
  var header = "";
  for (var i = 0; i < basketball[0].length; i++) {
    header += "| " + basketball[0][i] + " |";
  }
  return header;
}

var displayPlayer = () => {
  for (var i = 1; i < (basketball.length); i++) {
    var player = "";
    for (var j = 0; j < basketball[i].length; j++) {
      player += "| " + basketball[i][j] + " |";
    }
    console.log(player);
  }
  return "===========END===========";
}

console.log(displayHeader());
console.log(displayPlayer());

console.log("===========TESTING===========");
console.log(basketball[3][2] === "Shooting Guard"); //true
console.log(JSON.stringify(basketball[1][3] )== JSON.stringify([14, 32, 7, 0, 23])); //true
