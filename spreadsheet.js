//write your code here
var spreadsheet = [['Number','Name','Position','Points per Game'],
                  [12,'Joe Schmo','Center',[14,32,7,0,23]],
                  [9,'Ken Buckets','Point Guard',[19,0,11,22,0]],
                  [31,'Harvey Kay','Shooting Guard',[0,30,16,0,25]],
                  [18,'Sally Talls','Power Forward',[18,29,26,31,19]],
                  [22,'Mo DiBoux','Small Forward',[11,0,23,17,0]]]


var tampungSpreadSheet = []
for (var i=0;i<6;i++)
{
  if(i==0){
  tampungSpreadSheet.push(['Number','Name','Position','Points per Game'])
}else if(i==1)
tampungSpreadSheet.push([12,'Joe Schmo','Center',[14,32,7,0,23]])
else if(i==2){
  tampungSpreadSheet.push([9,'Ken Buckets','Point Guard',[19,0,11,22,0]])
}else if(i==3)
{
  tampungSpreadSheet.push([31,'Harvey Kay','Shooting Guard',[0,30,16,0,25]])
}else if(i==4){
    tampungSpreadSheet.push([18,'Sally Talls','Power Forward',[18,29,26,31,19]])
}else {
    tampungSpreadSheet.push([22,'Mo DiBoux','Small Forward',[11,0,23,17,0]])
}
}
console.log(tampungSpreadSheet);
console.log(spreadsheet[3][2] === "Shooting Guard");//true
console.log(JSON.stringify(spreadsheet[1][3]) === JSON.stringify([14,32,7,0,23]));//true
