var md5 = require('md5');
secret_key = "iwrupvqb"; // Secret key is different for each person
function verify(hash_hex){
  hash_hex = hash_hex.map(x=>parseInt(x));
  condition_met = true;
  hash_hex.forEach((item, i) => {
    if (item != 0){
      condition_met = false;
    }
    });
  return condition_met;
}
i = 0;
while(1){
  let input = secret_key+String(i);
  // Change 0,5 for p1
  if (verify(md5(input).split('').slice(0,6))){
    break;
  };
  i+=1;
}
console.log(i);
