const fs = require('fs')
var res = fs.readFileSync("day14.txt", 'utf8').trim().split("\n")
const dict = {}
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
// Need new way of handling time so that it computes one second for each reindeer and tracks everything

class Reindeer {
  constructor(speed, stamina, recovery) {
    this.speed = speed;
    this.stamina = stamina;
    this.recovery = recovery;
    this.distance = 0;
    this.currentStamina = this.stamina;
    this.stalled  = 0;
    this.points = 0;
  }
  oneTimeInterval(){
    // If recovering return this.distance
    if (this.stalled){
        this.stalled -= 1;
        if (this.stalled == 0){
          this.recover();
        }
    }else{
      this.move();
      if (this.currentStamina == 0){
        this.stalled += this.recovery;
      }
    }
    return this.distance;
  }
  recover(){
    this.stalled = 0;
    this.currentStamina = this.stamina;
  }
  move(){
    this.distance += this.speed;
    this.currentStamina -= 1;
  }
}

reindeer_list = []
Object.entries(dict).forEach((item, i) => {
  reindeer_list.push(new Reindeer(item[1][0],item[1][1],item[1][2]))
});


let iter = 2503;
while(iter){
  let arr = reindeer_list.map(obj => obj.oneTimeInterval())

  reindeer_list.map(obj =>{
    if (obj.distance == Math.max(...arr)){
      obj.points++;
    }
  })
  --iter;
}
console.log(Math.max(...reindeer_list.map(x=>x.points)))
