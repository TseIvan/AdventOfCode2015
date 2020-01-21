const fs = require('fs')
function addVectors(vec_1,vec_2){
  return vec_1.map((total,index) => total + vec_2[index]);
}
function updateCoord(start_position, move){
  return addVectors(start_position,directionDict[move]);
}

var res = fs.readFileSync("day3.txt", 'utf8').trim().split('');
let map = new Map();
let robo_map = new Map();
const directionDict = {
  "^":[0,1], // North
  "v":[0,-1], // South
  ">":[1,0], // East
  "<":[-1,0], // West
};

let position = [0,0];
let robo_santa = [0,0];

map.set(String(position),1);
map.set(String(robo_santa),1);

res.forEach((item, i) => {
  // Comment Below for p1
  if (i%2 == 0){
    position = updateCoord(position,item);
    (map.has(String(position))) ? map.set(String(position),map.get(String(position))+1) : map.set(String(position),1);
  }else{
    robo_santa = updateCoord(robo_santa,item);
    (robo_map.has(String(robo_santa))) ? robo_map.set(String(robo_santa),robo_map.get(String(robo_santa))+1) : robo_map.set(String(robo_santa),1);
  };
  // Uncomment Below for p1
  // position = updateCoord(position,item);
  // (map.has(String(position))) ? map.set(String(position),map.get(String(position))+1) : map.set(String(position),1);
});

console.log(map.size) // 2572 Part 1

// Set difference
let unique = 0;
robo_map.forEach((value, key) => {
  if (map.has(key) == false){
      unique += 1;
  };
});
console.log(map.size + unique)
