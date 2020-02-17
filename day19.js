const fs = require('fs')
var res = fs.readFileSync("day19.txt", 'utf8').trim().split("\n")

d = {};
let init_string;
let unique =  new Set(); //set.add() set.has()
res.forEach((item, i) => {
    if (item.includes("=>")){
      let [input, output] = item.trim().split(" => ");
      d[input]=output;
    }else if(item.includes(" ") == false){
      init_string = item.split("");
    };
});

for (let [key, value] of Object.entries(d)) {
  for (let x = 0;  x < init_string.length; x ++){
    if (init_string.slice(x,x+key.length) == key){ // Loop through each idx
    }
  }
}

console.log(unique.length)
