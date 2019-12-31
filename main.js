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

//функция возвращающая меньшее из двух значений
function min(x, y) {
  if(x > y) {
    return y;
  } else {
    return x;
  }
}

min(3,4);

//функция показывающая четность числа
function isEven(x) {
  if (x % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isEven(50));


//рекурсивная функция на четность, которая преобразует отрицательные числа
function isEven(n) {
  if (n == 0) { 
    return true;
  } else if (n == 1) {
    return false;
  } else if (n < 0) {
    return isEven(-n);
  } else {
    return isEven(n - 2);
  }
}
console.log(isEven(-50));

//FizzBuzz
for (let x = 0; x < 100; x++) {
  if(x % 3 == 0 && x % 5 == 0) {
    console.log('FizzBuzz');
  } else if(x % 3 == 0 && x % 5 !== 0)  {
    console.log('Fizz');
  } else if(x % 3 !==0 && x % 5 == 0) {
    console.log('Buzz');
  } else {
    console.log(x);
  }
}

//треугольник в цикле
for (let line = "#"; line.length < 8; line += "#") {
  console.log(line);
}