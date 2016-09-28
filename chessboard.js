//write your code here
/*var chessboard = [['benteng hitam', 'kuda hitam', 'gajah hitam', 'raja hitam',
				   'ratu hitam', 'gajah hitam', 'kuda hitam', 'benteng hitam'],
				  ['pion hitam', 'pion hitam', 'pion hitam', 'pion hitam', 'pion hitam', 'pion hitam', 'pion hitam', 'pion hitam'],
				  [0,0,0,0,0,0,0,0],
				  [0,0,0,0,0,0,0,0],
				  [0,0,0,0,0,0,0,0],
				  [0,0,0,0,0,0,0,0],
				  ['pion putih', 'pion putih', 'pion putih', 'pion putih', 'pion putih', 'pion putih', 'pion putih', 'pion putih'],
				  ['benteng putih', 'kuda putih', 'gajah putih', 'raja putih',
				   'ratu putih', 'gajah putih', 'kuda putih', 'benteng putih']];
*/

var chessboard2 = [];

for(var i = 0; i < 8 ; i++){
	chessboard2[i] = [];
	for(var j = 0 ; j < 8 ; j++){
		if(i == 1){
			chessboard2[i].push("Pion Hitam");
		}else if(i == 6){
			chessboard2[i].push("Pion Putih");
		}else if(i == 0){
			chessboard2[i][j] = [];
			if(j == 0 || j == 7){
				chessboard2[i][j].push("Benteng Hitam");
			}else if(j == 1 || j == 6){
				chessboard2[i][j].push("Kuda Hitam");	
			}else if(j == 2 || j == 5){
				chessboard2[i][j].push("Gajah Hitam");	
			}else if(j == 3){
				chessboard2[i][j].push("Raja Hitam");
			}else{
				chessboard2[i][j].push("Ratu Hitam");	
			}
		}else if(i == 7){
			chessboard2[i][j] = [];
			if(j == 0 || j == 7){
				chessboard2[i][j].push("Benteng Putih");
			}else if(j == 1 || j == 6){
				chessboard2[i][j].push("Kuda Putih");	
			}else if(j == 2 || j == 5){
				chessboard2[i][j].push("Gajah Putih");	
			}else if(j == 3){
				chessboard2[i][j].push("Raja Putih");
			}else{
				chessboard2[i][j].push("Ratu Putih");	
			}
		}else{
			chessboard2[i].push(0);
		}
	}
}

console.log(chessboard2);


console.log(chessboard[2][0]);