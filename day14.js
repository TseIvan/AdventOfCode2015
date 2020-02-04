const fs = require('fs')
var res = fs.readFileSync("day14.txt", 'utf8').trim().split("\n")
dict = {}
res.forEach((item, i) => {
  parsed = item.split(" ")
  dict[parsed[0]] = [parsed[3],parsed[6],parsed[13]].map(x => parseInt(x))
});
// exactly 2503 seconds
const maximum = 2503
let maxDist = -1;
Object.entries(dict).forEach(([key, value]) => {
    let elapsed = 0;
    let distance = 0;
    while (elapsed < maximum){
        let timeRemaining = maximum - elapsed;
        (timeRemaining >= value[1]) ? distance += value[0] * value[1] : (timeRemaining-value[1])*value[0];
        elapsed += value[1] + value[2];
    }
    if (distance > maxDist){
      maxDist = distance;
    }
});
console.log(maxDist);
