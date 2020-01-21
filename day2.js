
const fs = require('fs')
var res = fs.readFileSync("day2.txt", 'utf8').trim().split('\n');
const arrSum = arr => arr.reduce((a,b) => a + b, 0);
const arrMultiply = arr => arr.reduce((a,b) => a * b, 1);

let total = total_2 = 0;

res.forEach((item, i) => {
  dim = item.trim().split('x').map(x=>parseInt(x));
  let dim_2 = Object.assign([], dim);
  dim_2.sort((a, b) => a - b);
  calculation=[dim[0]*dim[1], dim[1]*dim[2], dim[0]*dim[2]]
  total += Math.min(...calculation) + arrSum(calculation)*2
  total_2 += 2*dim_2[0] + 2*dim_2[1] + arrMultiply(dim_2)
});
console.log(total) // 1598415
console.log(total_2) // 3812909
