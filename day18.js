
const max_arr = 100;

const fs = require('fs')
var res = fs.readFileSync("day18.txt", 'utf8').trim().split("\n")
let grid = [...Array(max_arr)].map(x=>Array(max_arr).fill(0))
res.forEach((line, y) => {
  line.trim().split("").forEach((item, x) => {
    grid[y][x] = item;
  });
});

// 4 Lights on corner is always on
function turnOnCorner(grid){
  grid[0][0] = "#"
  grid[max_arr-1][0] = "#"
  grid[0][max_arr-1] = "#"
  grid[max_arr-1][max_arr-1] = "#"
  return grid;
}
function inGrid(x,y){
 return (x < 0 || x >= max_arr || y < 0 || y >= max_arr) ? 0 : 1
}
function countLights(grid){
  let count = 0;
  for (x = 0; x < max_arr; x++){
    for (y = 0; y < max_arr; y++){
      count += (grid[x][y] == "#") ? 1 : 0;
    }
  }
  return count;
}
function loopGrid(grid){
  updated_grid = [...Array(max_arr)].map(x=>Array(max_arr).fill("#"))
  for (x = 0; x < max_arr; x++){
    for (y = 0; y < max_arr; y++){
      // Part two
      if ((x==0 && y == 0) || (x==max_arr-1 && y == 0) || (x==0 && y == max_arr-1) || (x==max_arr-1 && y == max_arr-1)){
        continue;
      }
      let on = 0;
      let off = 0;
      // IMPORTANT Grid starts at top corner not bottom (like cartesian plane)

      if (inGrid(x-1,y-1)){
        (grid[x-1][y-1] == "#") ? (on+=1) : (off+=1);
      }
      if (inGrid(x-1,y)){
        (grid[x-1][y] == "#") ? (on+=1) : (off+=1);
      }
      if (inGrid(x-1,y+1)){
        (grid[x-1][y+1] == "#") ? (on+=1) : (off+=1);
      }

      if (inGrid(x,y-1)){
        (grid[x][y-1] == "#") ? (on+=1) : (off+=1);
      }
      if (inGrid(x,y+1)){
        (grid[x][y+1] == "#") ? (on+=1) : (off+=1);
      }

      if (inGrid(x+1,y+1)){
        (grid[x+1][y+1] == "#") ? (on+=1) : (off+=1);
      }
      if (inGrid(x+1,y)){
        (grid[x+1][y] == "#") ? (on+=1) : (off+=1);
      }
      if (inGrid(x+1,y-1)){
        (grid[x+1][y-1] == "#") ? (on+=1) : (off+=1);
      }

      (grid[x][y] == ".") ? (updated_grid[x][y] = (on === 3) ? "#" : ".") : (updated_grid[x][y] = (on == 3 || on == 2) ? "#" : ".");
    }
  }
  return updated_grid
}
let iter = 100
grid = turnOnCorner(grid); // part two
while (iter > 0){
  grid = loopGrid(grid);
  --iter;
}

console.log(countLights(grid)) // 821 // 886
