const fs = require('fs')
var res = fs.readFileSync("day1.txt", 'utf8').trim().split('');
let floor = 0;
res.forEach((item, i) => {
  (item == "(") ? floor += 1 : floor -= 1
  if (floor == -1){
    console.log(`basement index at ${i+1}`)
  }
});
console.log(floor)
