"use strict";

let a = 5,
  b = a;

b = b + 5;
console.log(b);
console.log(a);

const obj = {
  a: 5,
  b: 1,
};

const copy = obj; // ссылка на объект, а не его копия
copy.a = 10; // изменяем значение свойства a в объекте copy, что также изменяет значение свойства a в объекте obj
console.log(obj.a); // 10
console.log(copy.a); // 10

function copyObj(mainObj) {
  // функция copyObj создает копию объекта mainObj
  let objCopy = {};
  let key;
  for (key in mainObj) {
    // цикл for in проходит по всем свойствам объекта mainObj
    objCopy[key] = mainObj[key]; // копирует значение свойства из объекта mainObj в объект objCopy
  }
  return objCopy;
}

const numbers = {
  a: 2,
  b: 5,
  c: {
    x: 7,
    y: 4,
  },
};

const newNumbers = copyObj(numbers); // создаем копию объекта numbers
newNumbers.a = 10;
newNumbers.c.x = 15; // изменяем значение свойства x в объекте newNumbers, что также изменяет значение свойства x в объекте numbers

console.log(newNumbers); // { a: 10, b: 5, c: { x: 15, y: 4 } }
console.log(numbers); // { a: 2, b: 5, c: { x: 15, y: 4 } }

//глубокие и поверхностные копии: это копии объектов, которые могут быть поверхностными (shallow copy) или глубокими (deep copy).
// Поверхностная копия копирует только верхний уровень объекта, а глубокая копия копирует все уровни объекта, включая вложенные объекты.

const add = {
  d: 17,
  e: 20,
};

console.log(Object.assign(numbers, add)); // метод Object.assign копирует свойства объекта add в объект numbers и возвращает новый объект
const clone = Object.assign({}, add); // метод Object.assign создает поверхностную копию объекта add и возвращает новый объект
clone.d = 20;
console.log(clone); // { d: 20, e: 20 }

const oldArray = ["a", "b", "c"];
const newArray = oldArray.slice(); // метод slice создает поверхностную копию массива oldArray и возвращает новый массив
newArray[1] = "d";
console.log(newArray); // ['a', 'd', 'c']
console.log(oldArray); // ['a', 'b', 'c']

const video = ["youtube", "vimeo", "rutube"],
  blogs = ["wordpress", "livejournal", "blogger"],
  internet = [...video, ...blogs, "vk", "facebook"]; // оператор spread (...) создает поверхностную копию массивов video и
//blogs и объединяет их в новый массив internet
console.log(internet); // ['youtube', 'vimeo', 'rutube', 'wordpress', 'livejournal', 'blogger', 'vk', 'facebook']

function log(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

const num = [2, 5, 7];
log(...num); // оператор spread (...) передает элементы массива num в качестве отдельных аргументов функции log

const array = ["a", "b"];
const newAarray = [...array]; // оператор spread (...) создает поверхностную копию массива array и возвращает новый массив

const q = {
  one: 1,
  two: 2,
};

const newObj = { ...q }; // оператор spread (...) создает поверхностную копию объекта q и возвращает новый объект
