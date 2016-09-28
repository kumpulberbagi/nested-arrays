//write your code here




// var chessBoard = [
//     ["Benteng Hitam", "Kuda Hitam", "Kuncum Hitam", "Ratu Hitam", "Raja Hitam", "Kuncum Hitam", "Kuda Hitam", "Benteng Hitam"],
//     ["Pion Hitam", "Pion Hitam", "Pion Hitam", "Pion Hitam", "Pion Hitam", "Pion Hitam", "Pion Hitam", "Pion Hitam"],
//     [],
//     [],
//     [],
//     [],
//     ["Pion Putih", "Pion Putih", "Pion Putih", "Pion Putih", "Pion Putih", "Pion Putih", "Pion Putih", "Pion Putih"],
//     ["Benteng Putih", "Kuda Putih", "Kuncum Putih", "Ratu Putih", "Raja Putih", "Kuncum Putih", "Kuda Putih", "Benteng Putih"]
// ];

var x = new Array(8);

for(var i=0;i<8;i++) {
    x[i] = [];
    for(var j=0; j<8;j++) {

        x[i][j] = [];

        if(i == 1) {
            x[i][j].push("Pion Hitam");
        }

        if(i == 6) {
            x[i][j].push("Pion Putih");
        }

        if((i == 0 && j == 0) || i ==0 && j ==7) {
            x[i][j].push("Benteng Hitam");
        }

        if((i == 0 && j == 1) || i ==0 && j ==6) {
            x[i][j].push("Kuda Hitam");
        }

        if((i == 0 && j == 2) || i ==0 && j ==5) {
            x[i][j].push("Kuncum Hitam");
        }

        if((i == 0 && j == 3)) {
            x[i][j].push("Ratu Hitam");
        }
        if((i == 0 && j == 4)) {
            x[i][j].push("Raja Hitam");
        }





        if((i == 7 && j == 0) || i ==7 && j ==7) {
            x[i][j].push("Benteng Putih");
        }

        if((i == 7 && j == 1) || i ==7 && j ==6) {
            x[i][j].push("Kuda Putih");
        }

        if((i == 7 && j == 2) || i ==7 && j ==5) {
            x[i][j].push("Kuncum Putih");
        }

        if((i == 7 && j == 3)) {
            x[i][j].push("Ratu Putih");
        }
        if((i == 7 && j == 4)) {
            x[i][j].push("Raja Putih");
        }

        // if(i == 1) {
        //     x[i].push("Pion Putih");
        // }
    }


}

// console.log(x);
// console.log(chessBoard[7][0] == "Benteng Putih");
console.log(x[7][0] == "Benteng Putih");
