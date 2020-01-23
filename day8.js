const fs = require('fs')
var res = fs.readFileSync("day8.txt", 'utf8').trim().split('\n');

let total_number_of_characters = 0;
res.forEach((item, i) => {
  console.log(item);
  total_number_of_characters += item.length;
  // Clean text
});
