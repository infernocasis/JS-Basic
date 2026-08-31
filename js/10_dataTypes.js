"use strict";

let number = 4.6; //простые типы данных - числа

console.log(-4 / 0); //js проает такие ошибки = выдает Infinity - бесконечность
console.log("string" * 9); //js проает такие ошибки = выдает NaN - не число

const persone = "Alex"; //строки string name

const bool = true; // буллиновое значение

console.log(something); // null в таком типе оно и существует, когда переменная не обьявленна

let und;
console.log(und); // undefined когда переменная есть, но она не обьявленна

//спецобьекты
const obj = {
  name: "John",
  age: 25,
  isMarried: false,
};

// console.log(obj.name);
console.log(obj["name"]);

//массивы используются для хранения данных, которые идут строго по порядку. частный случай.
let arr = ["plum.png", "orange.jpg", 6, "apple.bmp", {}, []];
console.log(arr[1]);
