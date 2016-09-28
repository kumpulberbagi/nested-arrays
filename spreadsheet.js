//Set all global variable
const title = ["Number", "Name", "Postition", "Points Per Game"];
var all_user = [title];

// function that store the data from user
function data_table(array) {
  all_user.push(array);
  return formated_data();
}

// Make a function that checking all data and compile it into table
function formated_data() {
  var table = [];
  for (var i = 0; i <= title.length; i += 1) {
    table = [];
    for (var j = 1; j < all_user.length; j += 1) {
      table[0] = title;
      table[j] = all_user[j];
    }
  }
  return table;
}


// Testing should store all the data and the input is array
data_table([3, "Charlie", "Front", [5,23,7,0,23]];
data_table([1, "Alfa", "Back", [0,12,3,44,23]];
console.log(data_table([4, "Etsy", "Center", [1,32,35,0,23]]));
