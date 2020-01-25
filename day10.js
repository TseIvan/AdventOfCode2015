const fs = require('fs')
var res = fs.readFileSync("day10.txt", 'utf8').trim()

// https://en.wikipedia.org/wiki/Look-and-say_sequence
let input = res.split('').map(x => parseInt(x));

const value = (number) => {
  let new_String = "";
  let counter = 0;
  let prev = number[0]
  number.forEach((item, i) => {
    if (prev == item){
      counter += 1;
    }else{
      new_String += String(counter) + String(prev);
      counter = 1;
      prev = item;
    }
  });
  return new_String += String(counter) + String(prev);
}

let i = 0;

while(i < 50){ // 40 => 492982
  input = value(input).split('').map(x => parseInt(x));
  i++;
}

console.log(input.length);
