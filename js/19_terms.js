"use strict";

if (4 == 9) {
  //if - условие
  console.log("Ok!");
} else {
  // else - выполнение, если наше условие неверно
  console.log("Error!");
}

// const num = 50;

// if (num < 49) {
//   console.log("Error");
// } else if (num > 100) {
//   console.log("много");
// } else {
//   console.log("ok!");
// }

// num === 50 ? console.log("ok!") : console.log("Error"); //если условие верно, выполняем первое условие, если не верно то выполняем 2 условие. Тернарный оператор, это оператор в котором участвуют 3 аргумента. Это единственный тернарный оператор в js. 1 аргумент - num === 50, 2 - console.log("ok!"), 3 - console.log("Error").

const num = "50";

switch (num) {
  case "49":
    console.log("неверно!");
    break;
  case "100":
    console.log("неверно!");
    break;
  case "50":
    console.log("в точку!");
    break;
  default:
    console.log("не в этот раз!");
    break;
}
