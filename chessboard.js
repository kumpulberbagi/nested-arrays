//write your code here
var chessboard = [['benteng hitam', 'kuda hitam', 'gajah hitam', 'raja hitam',
				   'ratu hitam', 'gajah hitam', 'kuda hitam', 'benteng hitam'],
				  ['pion hitam', 'pion hitam', 'pion hitam', 'pion hitam', 'pion hitam', 'pion hitam', 'pion hitam', 'pion hitam'],
				  [0,0,0,0,0,0,0,0],
				  [0,0,0,0,0,0,0,0],
				  [0,0,0,0,0,0,0,0],
				  [0,0,0,0,0,0,0,0],
				  ['pion putih', 'pion putih', 'pion putih', 'pion putih', 'pion putih', 'pion putih', 'pion putih', 'pion putih'],
				  ['benteng putih', 'kuda putih', 'gajah putih', 'raja putih',
				   'ratu putih', 'gajah putih', 'kuda putih', 'benteng putih']];

//console.log(chessboard[7][7]);

var chessboard2 = new Array(8);

for(var i = 0; i < 8 ; i++){
	chessboard2[i] = new Array(8);
	for(var j = 0 ; j < 8 ; j++){
		chessboard2[i][j] = 0;
	}
}

for(var i = 0 ; i < chessboard2.length ; i++){
	for(var j = 0 ; j < 8 ; j++){
		if(i == 1){
			chessboard2[i][j] = "Pion Hitam";
		}else if(i == 6){
			chessboard2[i][j] = "Pion Putih";
		}else if(i == 0){
			if(j == 0 || j == 7){
				chessboard2[i][j] = "Benteng Hitam";
			}else if(j == 1 || j == 6){
				chessboard2[i][j] = "Kuda Hitam";	
			}else if(j == 2 || j == 5){
				chessboard2[i][j] = "Gajah Hitam";	
			}else if(j == 3){
				chessboard2[i][j] = "Raja Hitam";
			}else{
				chessboard2[i][j] = "Ratu Hitam";	
			}
		}else if(i == 7){
			if(j == 0 || j == 7){
				chessboard2[i][j] = "Benteng Putih";
			}else if(j == 1 || j == 6){
				chessboard2[i][j] = "Kuda Putih";	
			}else if(j == 2 || j == 5){
				chessboard2[i][j] = "Gajah Putih";	
			}else if(j == 3){
				chessboard2[i][j] = "Raja Putih";
			}else{
				chessboard2[i][j] = "Ratu Putih";	
			}
		}
	}
}

for(var i = 0 ; i < 8 ; i++){
	console.log(chessboard2[i] + " ");
	console.log("\n");
}