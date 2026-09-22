"use strict";

let str = "some"; // создаем примитивную строку
let strObj = new String(); // создаем объект-обертку для строки

console.log(typeof str); // выводим тип переменной str в консоль, ожидаем "string"
console.log(typeof strObj); // выводим тип переменной strObj в консоль, ожидаем "object"

console.dir([1, 2, 3]); // выводим массив в консоль в виде объекта, чтобы увидеть его свойства и методы

const solider = {
  health: 400,
  armor: 100,
  sayHello: function () {
    console.log("Hello");
  },
};

const jonh = Object.create(solider); // создаем объект jonh, прототипом которого является объект solider

// const jonh = {
//     health: 100
// }

// jonh.__proto__ = solider; // устанавливаем прототип объекта jonh на объект solider, устаревший способ,
// лучше использовать Object.setPrototypeOf(jonh, solider);

// Object.setPrototypeOf(jonh, solider); // устанавливаем прототип объекта jonh на объект solider, современный способ

// console.log(jonh.armor);
jonh.sayHello();
