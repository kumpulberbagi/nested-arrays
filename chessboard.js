var chessboard = [['Benteng Hitam','Kuda Hitam','Menteri Hitam','Raja Hitam','Ratu Hitam','Menteri Hitam','Kuda Hitam','Benteng Hitam'],
                  ['Pion Hitam','Pion Hitam','Pion Hitam','Pion Hitam','Pion Hitam','Pion Hitam','Pion Hitam','Pion Hitam'],
                  ['','','','','','','',''],
                  ['','','','','','','',''],
                  ['','','','','','','',''],
                  ['','','','','','','',''],
                  ['Pion Putih','Pion Putih','Pion Putih','Pion Putih','Pion Putih','Pion Putih','Pion Putih'],
                  ['Benteng Putih','Kuda Putih','Menteri Putih','Raja Putih','Ratu Putih','Menteri Putih','Kuda Putih','Benteng Putih']]

var tampungChess = []
for (var i=0;i<8;i++)
{
  if(i==0){
  tampungChess.push(['Benteng Hitam','Kuda Hitam','Menteri Hitam','Raja Hitam','Ratu Hitam','Menteri Hitam','Kuda Hitam','Benteng Hitam'])
}else if(i==1)
tampungChess.push(['Pion Hitam','Pion Hitam','Pion Hitam','Pion Hitam','Pion Hitam','Pion Hitam','Pion Hitam','Pion Hitam'])
else if(i==2 || i==3 || i==4 || i==5){
  tampungChess.push(['','','','','','','',''])
}else if(i==6)
{
  tampungChess.push(['Pion Putih','Pion Putih','Pion Putih','Pion Putih','Pion Putih','Pion Putih','Pion Putih'])
}else {
    tampungChess.push(['Benteng Putih','Kuda Putih','Menteri Putih','Raja Putih','Ratu Putih','Menteri Putih','Kuda Putih','Benteng Putih'])
}
}
console.log(tampungChess);
console.log(chessboard[7][0]);
