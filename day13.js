const fs = require('fs');
var res = fs.readFileSync("day13.txt", 'utf8').trim().split("\n");
const dict = {};
res.forEach((item, i) => {
  parsed = item.split(" ");
  console.log(parsed);
});

// try all combinations, map => each person to everyone else then compute combination
// 8 specific permutations
