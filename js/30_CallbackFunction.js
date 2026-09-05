"use strict";

function first() {
  // Do something

  setTimeout(function () {
    console.log(1);
  }, 500);
}

function second() {
  console.log(2);
}

first();
second();
// callback функция используется для того, чтобы выполнить код после завершения асинхронной операции

function learnJS(lang, callback) {
  console.log(`Я учу: ${lang}`);
  callback();
}

function done() {
  console.log("Я прошел этот урок!");
}

learnJS("JavaScript", done); // Я учу: JavaScript
