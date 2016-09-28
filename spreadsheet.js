var table = [["Number", "Name", "Position", "Points per Game"],
            [12, "Joe Schmo","Center", [14,32,7,0,23]],
            [9, "Ken Buckets","Point Guard",[19,0,11,22,0]],
            [31, "Harvey Kay","Shooting Guard",[0,30,16,0,25]],
            [18, "Sally Talls","Power Forward",[18,29,26,31,19]],
            [22, "Mo DiBoux", "Small Forward", [11,0,23,17,0]]]

function addTable(number, name, position, ppg){
  var newArray = []
  newArray.push(number, name, position, ppg)
  table.push(newArray)

}

console.log(table[3][2])
console.log(table[3][2] == "Shooting Guard")
console.log(JSON.stringify(table[1][3]) == JSON.stringify([14,32,7,0,23]))
table.push([1,"Windi","Center",[1,2,3,4,5]])
addTable(2,"Alessandro","Center",[9,9,9,9,9])
console.log(table)
