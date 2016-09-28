//write your code here


var table2 = [
    ["Number","Name","Position","Points per Game"],
    ["12","Joe Schmo","Center",[14,32,7,0,23]],
    ["9","Ken Buckets","Point Guard", [19,0,11,22,0]],
    ["31","Harvey Kay","Shooting Guard",[0,30,16,0,25]],
    ["18","Sally Talls","Power Forward",[18,29,26,31,19]],
    ["22","Mo DiBoux","Samll Forward",[11,0,23,17,0]]
];

var table = new  Array(6);
for(var i =0;i<6;i++) {
    table[i] = [];
    for(var j = 0;j<4;j++) {
        table[i][j] = [];
        if(i == 0) {
            if(j==0) {
                table[i][j].push("Number");
            }
            if(j==1) {
                table[i][j].push("Name");
            }
            if(j==2) {
                table[i][j].push("Position");
            }
            if(j==3) {
                table[i][j].push("Points per Game");
            }
        }

        if(i == 1) {
            if(j==0) {
                table[i][j].push("12");
            }
            if(j==1) {
                table[i][j].push("Joe Schmo");
            }
            if(j==2) {
                table[i][j].push("Center");
            }
            if(j==3) {
                table[i][j].push(14,32,7,0,23);
            }
        }

        if(i == 2) {
            if(j==0) {
                table[i][j].push("9");
            }
            if(j==1) {
                table[i][j].push("Ken Buckets");
            }
            if(j==2) {
                table[i][j].push("Point Guard");
            }
            if(j==3) {
                table[i][j].push(19,0,11,22,0);
            }
        }

        if(i == 3) {
            if(j==0) {
                table[i][j].push("31");
            }
            if(j==1) {
                table[i][j].push("Harvey Kay");
            }
            if(j==2) {
                table[i][j].push("Shooting Guard");
            }
            if(j==3) {
                table[i][j].push(0,30,16,0,25);
            }
        }

        if(i == 4) {
            if(j==0) {
                table[i][j].push("18");
            }
            if(j==1) {
                table[i][j].push("Sally Talls");
            }
            if(j==2) {
                table[i][j].push("Power Forward");
            }
            if(j==3) {
                table[i][j].push(18,29,26,31,19);
            }
        }

        if(i == 5) {
            if(j==0) {
                table[i][j].push("22");
            }
            if(j==1) {
                table[i][j].push("Mo DiBoux");
            }
            if(j==2) {
                table[i][j].push("Small Forward");
            }
            if(j==3) {
                table[i][j].push(11,0,23,17,0);
            }
        }
    }
}



// console.log(table[3][2]);
// console.log(table);

console.log(table[3][2] == "Shooting Guard");
console.log(JSON.stringify(table[1][3]));
console.log(JSON.stringify(table[1][3]) == JSON.stringify([14,32,7,0,23]));
