// They have a JSON document which contains a variety of things: arrays ([1,2,3]), objects ({"a":1, "b":2}), numbers, and strings.
// Your first job is to simply find all of the numbers throughout the document and add them together.
//
// For example:
//
// [1,2,3] and {"a":2,"b":4} both have a sum of 6.
// [[[3]]] and {"a":{"b":4},"c":-1} both have a sum of 3.
// {"a":[-1,1]} and [-1,{"a":1}] both have a sum of 0.
// [] and {} both have a sum of 0.
// You will not encounter any strings containing numbers.
//
// What is the sum of all numbers in the document?


// https://stackoverflow.com/a/49042916


const fs = require('fs')
var res = fs.readFileSync("day12.txt", 'utf8').trim() // String does not contain any linebreaks
res = JSON.parse(res)

const flatten = (obj, path = '') => {
    if (!(obj instanceof Object)) return {[path.replace(/\.$/g, '')]:obj};

    return Object.keys(obj).reduce((output, key) => {
        return obj instanceof Array ?
             {...output, ...flatten(obj[key], path +  '[' + key + '].')}:
             {...output, ...flatten(obj[key], path + key + '.')};
    }, {});
}
let total = 0
Object.values(flatten(res)).forEach((item, i) => {
  if (Number.isInteger(item)){
    total += item;
  }
});
console.log(total)

function count(obj){
  if (Array.isArray(obj) == false){
    for (key in obj){
      if (obj[key] === 'red'){
        return 0; // key is red ignore this
      }
    }
  }
  let total = 0;
  for (key in obj){
    if (typeof obj[key] === 'object'){
      total += count(obj[key])
    }else if (Number.isInteger(obj[key])){
      total += obj[key]
    }
  }
  return total;
}
console.log(count(res));
