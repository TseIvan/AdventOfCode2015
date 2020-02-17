const maxPresent = 29000000;
arrHouse = [...Array(maxPresent/10 + 1).fill(0)]

for (let elf=1; elf <= maxPresent/10 + 1; elf++){ // elf maximally bounded
  let count = 0; //  Elf will stop after delivering presents to 50 houses
  for (let number=elf; number <= maxPresent/10 + 1; number += elf){
    ++count;
    arrHouse[number] += elf * 11; // part one 11 => 10 remove count/if-break;
    if (count >= 50){
      break;
    }
  }
}
for (let house = 1; house < arrHouse.length; house++){
  if (arrHouse[house] > maxPresent) {
    console.log(house)
    process.exit()
  }
}
