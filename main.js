// инвентаризация фермы с добавлением нулей до трех знаков в числе

function zeroPad(number,width) {
  let string = String(number);
  while (string.length < width) {
    string = "0" + string;
  }
  return string;
}
function printFarmInventory(cows, chickens, pigs) {
  console.log(`${zeroPad(cows, 3)} коров`);
  console.log(`${zeroPad(chickens, 3)} куриц`);
  console.log(`${zeroPad(pigs, 3)} свиней`);
}

printFarmInventory(7,15,3);
