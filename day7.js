const fs = require('fs')
var res = fs.readFileSync("day7.txt", 'utf8').trim().split('\n');
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
  return ~number;
};

class Wire{
  constructor(signal){
    this.signal = signal;
  }
}

// Can use set to store Wire letter assuming we dont need to put anything in queue?

// expected sample output
// d: 72
// e: 507
// f: 492
// g: 114
// h: 65412
// i: 65079
// x: 123
// y: 456

res.forEach((item, i) => {
  // console.log(item);
});
