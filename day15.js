const fs = require('fs')
var res = fs.readFileSync("day15.txt", 'utf8').trim().split("\n")
res.forEach((item, i) => {
  console.log(item)
});

// Brute force?
