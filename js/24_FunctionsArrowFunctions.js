"use strict";

function showFirstMessage(text) {
  //аргумент text, который мы передаем в функцию showFirstMessage
  console.log(text);
  let num = 20; //локальная переменная, которая доступна только внутри функции showFirstMessage
}

showFirstMessage("Hello, World!");
console.log(num); //ошибка, так как переменная num доступна только внутри функции showFirstMessage

// let num = 20;

// function showFirstMessage(text) {
//   //аргумент text, который мы передаем в функцию showFirstMessage
//   console.log(text);
//   num = 10; //глобальная переменная, которая доступна везде, так как мы не используем ключевое слово let, const или var
// }

// showFirstMessage("Hello, World!");
// console.log(num);

// let num = 20;

// function showFirstMessage(text) {
//   //аргумент text, который мы передаем в функцию showFirstMessage
//   console.log(text);
//   let num = 10; //локальная переменная, которая доступна только внутри функции showFirstMessage
// }

// showFirstMessage("Hello, World!");
// console.log(num); //глобальная переменная, которая доступна везде, так как мы не используем ключевое слово let, const или var

// let num = 20;

// function showFirstMessage(text) {
//   console.log(text);
//   let num = 10;
//   console.log(num); //локальная переменная, которая доступна только внутри функции showFirstMessage
// }

// showFirstMessage("Hello, World!");
// console.log(num);
//замыкание - это когда функция запоминает переменные, которые были доступны в момент ее создания. В нашем случае,
// функция showFirstMessage запомнила переменную num, которая была доступна в момент ее создания, и теперь она доступна внутри функции showFirstMessage.

let num = 20;

function showFirstMessage(text) {
  console.log(text);
  let num = 10;
  console.log(num); //локальная переменная, которая доступна только внутри функции showFirstMessage
}

showFirstMessage("Hello, World!");
console.log(num);

function calc(a, b) {
  return a + b; //возвращаем результат сложения a и b. после return функция прекращает свое выполнение и возвращает значение, которое мы указали после return
}

console.log(calc(4, 3)); //вызываем функцию calc с аргументами 4 и 3, и выводим результат в консоль
console.log(calc(5, 6));
console.log(calc(10, 6));

function ret() {
  let num = 50;
  return num; //возвращаем значение переменной num, которая доступна только внутри функции ret
}

const anotherNum = ret(); //присваиваем переменной anotherNum значение, которое возвращает функция ret
console.log(anotherNum); //выводим значение переменной anotherNum в консоль

const logger = function () {
  console.log("Hello");
}; //функция, которая присваивается переменной logger. Это называется функциональное выражение. Функциональные выражения не могут быть вызваны до их объявления, в отличие от функциональных деклараций.

logger(); //вызываем функцию logger, которая выводит в консоль "Hello"

const calcArrow = (a, b) => {
  return a + b;
}; //стрелочная функция, которая возвращает результат сложения a и b. Стрелочные функции не имеют своего контекста, поэтому они не могут быть использованы как методы объектов.

const double = (a) => a * 2; //стрелочная функция, которая возвращает результат умножения a на 2. Если у стрелочной функции один аргумент, то можно опустить круглые скобки вокруг аргумента.

const calc = (a, b) => {
  console.log("1"); //стрелочная функция, которая выводит в консоль "1" и возвращает результат сложения a и b. Если у стрелочной функции несколько аргументов, то нужно использовать круглые скобки вокруг аргументов.
  return a + b;
};
