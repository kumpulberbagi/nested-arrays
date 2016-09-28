//write your code here
/*var tabel = [['Number', 'Name', 'Position', 'Points Per Game'],
			  [12, 'Joe Schmo', 'Center', [14, 32, 7, 0, 23]],
			  [9, 'Ken Buckets', 'Point Guard', [19, 0, 11, 22, 0]],
			  [31, 'Harvey Kay', 'Shooting Guard', [0, 30, 16, 0, 25]],
			  [18, 'Sally Talls', 'Power Guard', [18, 29, 26, 31, 19]],
			  [22, 'Mo DiBoux', 'Small Forward', [11, 0, 23, 17, 0]]];
*/
//console.log(tabel[3][2] == "Shooting Guard");
//console.log(tabel[1][3][0]);

var tabel2 = [];
var length = 6;
for(var i = 0 ; i < length; i++){
	tabel2[i] = [];
	if(i == 0){
		tabel2[i].push('Number', 'Name', 'Position', 'Points Per Game');	
	}else if(i == 1){
		tabel2[1].push(12, 'Joe Schmo', 'Center', [14, 32, 7, 0, 23]);
	}else if(i == 2){
		tabel2[2].push(9, 'Ken Buckets', 'Point Guard', [19, 0, 11, 22, 0]);
	}else if(i == 3){
		tabel2[3].push(31, 'Harvey Kay', 'Shooting Guard', [0, 30, 16, 0, 25]);
	}else if(i == 4){
		tabel2[4].push(18, 'Sally Talls', 'Power Guard', [18, 29, 26, 31, 19]);
	}else if(i == 5){
		tabel2[5].push(22, 'Mo DiBoux', 'Small Forward', [11, 0, 23, 17, 0]);
	}else{
		
	}
}

console.log(tabel2);