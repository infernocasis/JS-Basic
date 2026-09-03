const usdCurr = 28;
const discount = 0.9;

function convert(amount, curr) {
  return curr * amount;
}

function promotion(result) {
  console.log(result * discount);
}

const res = convert(500, usdCurr);
promotion(res); //обяснение: сначала выполняется функция convert, которая возвращает результат умножения 500 на 28, что равно 14000.
// затем этот результат передается в функцию promotion, которая умножает его на 0.9 и выводит результат в консоль, что равно 12600.

// promotion(convert(500, usdCurr));//обяснение: сначала выполняется функция convert, которая возвращает результат умножения 500 на 28, что равно 14000.
// // затем этот результат передается в функцию promotion, которая умножает его на 0.9 и выводит результат в консоль, что равно 12600.

function test() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
    if (i === 3) return; //обяснение: когда i равно 3, функция test прекращает свое выполнение и возвращает undefined.
  }
  console.log("Done"); //обяснение: эта строка не выполнится, так как функция test прекратила свое выполнение на 3 итерации цикла.
}

test();

function doNothing() {}
console.log(doNothing() === undefined); //обяснение: функция doNothing не возвращает никакого значения, поэтому она возвращает undefined.

//функция, которая не содержит return, возвращает undefined. Если функция содержит return без значения, то она также возвращает undefined.
