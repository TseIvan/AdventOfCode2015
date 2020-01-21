const fs = require('fs')
var res = fs.readFileSync("day5.txt", 'utf8').trim().split('\n');

// It contains at least three vowels (aeiou only), like aei, xazegov, or aeiouaeiouaeiou.
// It contains at least one letter that appears twice in a row, like xx, abcdde (dd), or aabbccdd (aa, bb, cc, or dd).
// It does not contain the strings ab, cd, pq, or xy, even if they are part of one of the other requirements.
let verify = (string) =>{
  let count = 0;
  let twice = 0;
  let illegal = 0;

  if (string.includes('ab') || string.includes('cd') || string.includes('pq') || string.includes('xy')){
    illegal += 1;
  };
  string_to_list = string.split('');
  string_to_list.forEach((item, i) => {
    if (i != 0 && item == string_to_list[i-1]){
      twice += 1;
    };
    item.includes('a') ? count += 1 : count += 0
    item.includes('e') ? count += 1 : count += 0
    item.includes('i') ? count += 1 : count += 0
    item.includes('o') ? count += 1 : count += 0
    item.includes('u') ? count += 1 : count += 0
  });
  return (count>=3 && twice>=1 && illegal == 0);
};
// It contains a pair of any two letters that appears at least twice in the string without overlapping, like xyxy (xy) or aabcdefgaa (aa), but not like aaa (aa, but it overlaps).
// It contains at least one letter which repeats with exactly one letter between them, like xyx, abcdefeghi (efe), or even aaa.
let nice_string = 0;
let nice_string_2 = 0;
res.forEach((item, i) => {
  if (verify(item)){
    nice_string += 1;
  };
  // Regex solution 2 explained:
  // (..).*\1 matches any two character spaced between 0 or more  of preceding token, \1 matches capture group 1. Works for xx**xx
  // (.).\1 matches any first character (capture group) spaced between at least one character and matches capture group 1. Works for xyx and aaa
  if (item.match(/(..).*\1/) && item.match(/(.).\1/)){
    nice_string_2 += 1;
  }
});
console.log(nice_string)
console.log(nice_string_2)
