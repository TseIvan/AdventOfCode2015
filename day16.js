const fs = require('fs')
var res = fs.readFileSync("day16.txt", 'utf8').trim().split("\n")

var baseList = {
  children: 3,
  cats: 7,
  samoyeds: 2,
  pomeranians: 3,
  akitas: 0,
  vizslas: 0,
  goldfish: 5,
  trees: 3,
  cars: 2,
  perfumes: 1,
}

var realSue = res.filter(element => {
  ticket = element.replace('\r','').split(' ');
  var sue = true;
  for (const i of [2,4,6]) {
    var itemName = ticket[i].replace(':','');
    var trueQuantity = baseList[itemName];
    var givenQuantity = parseInt(ticket[i+1].replace(',',''));
    if (sue) {
      // sue = trueQuantity === givenQuantity // Part 1
      sue = sue2(itemName, givenQuantity, trueQuantity);
    }
  }
  return sue;
})

function sue2(itemName, givenQuantity, trueQuantity) {
  var metCondition = false;
  switch (itemName) {
    case 'cats':
      metCondition = givenQuantity > trueQuantity;
      break;
    case 'trees':
      metCondition = givenQuantity > trueQuantity;
      break;
    case 'pomeranians':
      metCondition = givenQuantity < trueQuantity;
      break;
    case 'goldfish':
      metCondition = givenQuantity < trueQuantity;
      break;
    default:
      metCondition = givenQuantity === trueQuantity;
      break;
  }
  return metCondition;
}

console.log(realSue)
