const fs = require('fs')
var res = fs.readFileSync("day8.txt", 'utf8').trim().split('\n')
let total = 0;
res.forEach((item, i) => {
  total += item.length-1 - eval(item).length
});
console.log(total+1)
// 6789 total characters
// eval finds length making "\x27" -> '
// newline - 1
