"use strict";

const options = {
  name: "test",
  width: 1024,
  height: 1024,
  colors: {
    border: "black",
    bg: "red",
  },
  makeTest: function () {
    console.log("Test");
  },
};

options.makeTest(); // вызываем метод makeTest объекта options

const { border, bg } = options.colors; // деструктуризация объекта options.colors
console.log(border); // black
console.log(bg); // red

// console.log(Object.keys(options).length); // выводим количество свойств объекта options

// console.log(options.name); // test

// delete options.name; // удаляем свойство name из объекта options
// console.log(options); // { width: 1024, height: 1024, colors: { border: 'black', bg: 'red' } }

// let counter = 0; // создаем переменную counter, которая будет считать количество свойств объекта options
// for (let key in options) {
//   if (typeof options[key] === "object") {
//     // проверяем, является ли свойство объектом
//     for (let i in options[key]) {
//       // если да, то проходимся по его свойствам
//       console.log(`Свойство ${i} имеет значение ${options[key][i]}`); // выводим все свойства объекта options и их значения
//       counter++; // увеличиваем счетчик на 1
//     }
//   } else {
//     console.log(`Свойство ${key} имеет значение ${options[key]}`); // выводим все свойства объекта options и их значения
//     counter++; // увеличиваем счетчик на 1
//   }
// }
// console.log(counter); // выводим количество свойств объекта options
