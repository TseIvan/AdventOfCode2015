const fs = require('fs')
var res = fs.readFileSync("day5.txt", 'utf8').trim().split('\n');

// It contains at least three vowels (aeiou only), like aei, xazegov, or aeiouaeiouaeiou.
// It contains at least one letter that appears twice in a row, like xx, abcdde (dd), or aabbccdd (aa, bb, cc, or dd).
// It does not contain the strings ab, cd, pq, or xy, even if they are part of one of the other requirements.

res.forEach((item, i) => {
  console.log(item);
});
