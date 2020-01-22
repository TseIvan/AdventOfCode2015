const fs = require('fs')
var res = fs.readFileSync("day6.txt", 'utf8').trim().split('\n');

// Lights in your grid are numbered from 0 to 999 in each direction; the lights at each corner are at 0,0, 0,999, 999,999, and 999,0.
// The instructions include whether to turn on, turn off, or toggle various inclusive ranges given as coordinate pairs.
// Each coordinate pair represents opposite corners of a rectangle, inclusive; a coordinate pair like 0,0 through 2,2 therefore refers to 9 lights in a 3x3 square.
// The lights all start turned off.
// 0,0, 0,999, 999,999, and 999,0
function light_switch(x1,y1,x2,y2,action){
  for (i = x1; i <= x2; i++){
    for (j = y1; j <= y2; j++){
      switch(action){
        // Part 1 Implementation

        case 1: grid[i][j] = true; break; // turn on
        case 2: grid[i][j] = false; break; // turn off
        case 3: grid[i][j] = !grid[i][j]; break; // toggle

        // Part 2 Implementation
        case 4: grid[i][j] = grid[i][j] += 1; break; // turn on
        case 5: grid[i][j] -= 1;if (grid[i][j] < 0){grid[i][j] = 0}; break; // turn off
        case 6: grid[i][j] = grid[i][j] += 2; break; // toggle

      }
    }
  }
}
// let grid = [...Array(1000)].map(x=>Array(1000).fill(false))
let grid = [...Array(1000)].map(x=>Array(1000).fill(0)) // Part 2 all lights start at zero
res.forEach((item, i) => {
  matchgroup = item.match(/(\d{0,3},\d{0,3})/g)
  let [x1,y1] = matchgroup[0].split(',').map(x => parseInt(x))
  let [x2,y2] = matchgroup[1].split(',').map(x => parseInt(x))

  if (item.includes("turn on")){
    light_switch(x1,y1,x2,y2,4);
  }else if (item.includes("turn off")){
    light_switch(x1,y1,x2,y2,5);
  }else{
    light_switch(x1,y1,x2,y2,6);
  }
});
let lights_on = 0;
for (i = 0; i < 1000; i++){
  for (j = 0; j < 1000; j++){
    if (grid[i][j]){
      // lights_on += 1; // Part 1
      lights_on += grid[i][j];
    }
  }
}
console.log(lights_on)
