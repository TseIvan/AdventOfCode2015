function getTotal(x,y,z,a){
  let calories        = 3*x + 3*y + 8*z + 8*a;
  if (calories != 500) return 0; // Part b
    let capacity        = 2*x + 0*y + 0*z + 0*a;
    let durability      = 0*x + 5*y + 0*z + -1*a;
    let flavor          = -2*x + -3*y + 5*z + 0*a;
    let texture         = 0*x + 0*y + -1*z + 5*a;
   if (capacity < 1 || durability < 1 || flavor < 1 || texture < 1){
     return 0;
   }
   return (capacity * durability * flavor *  texture);
}

let total = 0
for (q = 0; q < 101; q++){
  for (w = 0; w < 101-q; w++){
    for (e = 0; e < 101-q-w; e++){
      let r = 100-q-w-e // MUST EQUAL 100
      new_total = getTotal(q,w,e,r);
      if (new_total > total){
        total = new_total;
        }
    }
  }
}
console.log(total) // 21367368 1766400
