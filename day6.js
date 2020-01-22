const fs = require('fs')
var res = fs.readFileSync("day6.txt", 'utf8').trim().split('\n');

// Lights in your grid are numbered from 0 to 999 in each direction; the lights at each corner are at 0,0, 0,999, 999,999, and 999,0.
// The instructions include whether to turn on, turn off, or toggle various inclusive ranges given as coordinate pairs.
// Each coordinate pair represents opposite corners of a rectangle, inclusive; a coordinate pair like 0,0 through 2,2 therefore refers to 9 lights in a 3x3 square.
// The lights all start turned off.
// 0,0, 0,999, 999,999, and 999,0

let grid = [...Array(1000)].map(x=>Array(1000).fill(0))
// console.log(grid[0][0],grid[0][999],grid[999][0],grid[999][999]) // verify initialization
// res.forEach((item, i) => {
//   console.log(item);
// });

console.log("a" in ["a","b","c"])
