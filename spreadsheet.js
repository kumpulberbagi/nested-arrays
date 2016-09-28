//Set all global variable
const title = ["Number", "Name", "Postition", "Points Per Game"];
const user_1 = [1, "Alfa", "Back", [0,12,3,44,23]];
const user_2 = [2, "Beta", "Centeria", [14,32,7,0,23]];
const user_3 = [3, "Charlie", "Front", [5,23,7,0,23]];
const user_4 = [3, "Delta", "Back", [7,32,7,12,23]];
const user_5 = [4, "Etsy", "Center", [1,32,35,0,23]];
const all_user = [user_1, user_2, user_3, user_4, user_5];

// Make a function that checking all data and compile it into table
function formated_data() {
  var table = [];
  for (var i = 0; i <= title.length; i += 1) {
    table[i] = [];
    for (var j = 1; j < all_user.length; j += 1) {
      table[0] = title;
      table[j] = all_user[j];
    }
  }
  return table;
}


// testing
var member = formated_data();
console.log(member[1][2]);
