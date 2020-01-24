const fs = require('fs')
var res = fs.readFileSync("day9.txt", 'utf8').trim().split('\n')

// https://stackoverflow.com/a/37580979 Permutation in Js
function permute(permutation) {
  var length = permutation.length,
      result = [permutation.slice()],
      c = new Array(length).fill(0),
      i = 1, k, p;

  while (i < length) {
    if (c[i] < i) {
      k = i % 2 && c[i];
      p = permutation[i];
      permutation[i] = permutation[k];
      permutation[k] = p;
      ++c[i];
      i = 1;
      result.push(permutation.slice());
    } else {
      c[i] = 0;
      ++i;
    }
  }
  return result;
}

const citiesDict = {}

res.forEach((item, i) => {
  let [from,to,dest,_,dist] = (item.trim().split(' '))
  // Default dictionary similar to python defaultdict({})
  citiesDict[from] = citiesDict[from] || {};
  citiesDict[dest] = citiesDict[dest] || {};
  citiesDict[from][dest] = parseInt(dist);
  citiesDict[dest][from] = parseInt(dist);
});

let minDistance = Math.inf;
let maxDistance = -Math.inf;
permute(Object.keys(citiesDict)).forEach((item, i) => {

  var arr = item.map(function(e, i) { // pseudo zip function, needs to remove last line since it maps last city to nothing.
      return [e, item.slice(1)[i]];
  });
    let temp = 0;
    arr.slice(0,arr.length-1).forEach((list, idx) => {
      temp += citiesDict[list[0]][list[1]]
    });
    if (temp <= minDistance) minDistance=temp;
    if (temp >= maxDistance) maxDistance=temp;
});

console.log(minDistance)
console.log(maxDistance)
