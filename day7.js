const fs = require('fs')
var res = fs.readFileSync("day7.txt", 'utf8').trim().split('\n');

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

res.forEach((item, i) => {
  let [first,second,third]= item.match(/[(\d)||(a-z)]{1,9}/g)
  if (isInt(first)){
    first=parseInt(first);
  }else if(first in wireDict){
    first = wireDict[first];
  }else{ // we cant do anything so we can just put into queue until later

    ;
  }
  if (isInt(second)){
    second=parseInt(second);
  }else if(second in wireDict){
    second = wireDict[second];
  }else{
    ;
  }
  if (item.includes('AND')){
    wireDict[third] = bitwiseAND(first,second)
  }else if(item.includes('LSHIFT')){
    wireDict[third] = leftshift(first,second)
  }else if(item.includes('RSHIFT')){
    wireDict[third] = rightshift(first,second)
  }else if(item.includes('OR')){
    wireDict[third] = bitwiseOR(first,second)
  }else if(item.includes('NOT')){
    wireDict[second] = bitwiseNOT(first)
  }else{
    wireDict[second] = parseInt(first)
  }
});
console.log(wireDict)
console.log(wireDict['a']);
