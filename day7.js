const fs = require('fs')
var res = fs.readFileSync("day7_test.txt", 'utf8').trim().split('\n');

// { x: 123, y: 456, d: 72, e: 507, f: 492, g: 114, h: 65412, i: 65079 }

// Defining functions to be used later
const leftshift = (number,val) => {
  return number << val;
};
const rightshift = (number,val) => {
  return number >> val;
};
const bitwiseOR = (a,b) => {
  return a | b;
};
const bitwiseAND = (a,b) => {
  return a & b;
};
const bitwiseNOT = (number) => {
  if (~number < 0){
    return mod(~number,65535)+1;
  }else{
    return ~number;
  }
};

function isInt(value) {
  return !isNaN(value) && parseInt(Number(value)) == value &&!isNaN(parseInt(value, 10));
}
function mod(n, m) {
  return ((n % m) + m) % m;
}
wireDict = {};
let queue = [];
let count = 0;
res.forEach((item, i) => {
  queue.push(item)
  let [first,second,third]=item.match(/[(\d)||(a-z)]{1,9}/g)
});
console.log(count);
// A gate provides no signal until all of its inputs have a signal.
while(queue.length){
    item = queue.shift()
    let [first,second,third]=item.match(/[(\d)||(a-z)]{1,9}/g)
    if (item.includes('LSHIFT')){
      (first in wireDict) ? wireDict[third] = leftshift(wireDict[first],second) : queue.push(item);
    }else if (item.includes('RSHIFT')){
      (first in wireDict) ? wireDict[third] = rightshift(wireDict[first],second) : queue.push(item);
    }else if (item.includes('OR')){
      (first in wireDict && second in wireDict) ? wireDict[third] = bitwiseOR(wireDict[first],wireDict[second]) : queue.push(item);
    }else if (item.includes('AND')){
      if (first in wireDict && second in wireDict){
        wireDict[third] = bitwiseAND(wireDict[first],wireDict[second]);
      }else if (isInt(first) && second in wireDict){
        wireDict[third] = bitwiseAND(parseInt(first),wireDict[second]);
      }else{
        queue.push(item);
      }
    }else if (item.includes('NOT')){
      if (first in wireDict){
        wireDict[second] = bitwiseNOT(wireDict[first]);
      }else{
        queue.push(item);
      }
    }else{
      console.log(item)
      if (isInt(first)){
        wireDict[second] = parseInt(first);
      }else if (first in wireDict){
        wireDict[second] = wireDict[first];
      }else{
        queue.push(item);
      }
    }
};
console.log(wireDict)
console.log(wireDict['a']);
