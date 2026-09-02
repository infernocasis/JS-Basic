// const hamburger = true;
// const fries = true;

if (hamburger && fries) {
  console.log("Я сыт!");
}

console.log(hamburger && fries); // true

// const hamburger = 3;
// const fries = 1;
// const cola = 0;

console.log(hamburger === 3 && cola && fries); // false, так как у нас оператор && и хотя бы один из них false, то и ответ будет false. если бы у нас был оператор ||, то ответ был бы true, так как хотя бы один из них правдивый.

if (hamburger === 3 && fries === 1 && cola === 1) {
  console.log("Все сыты!");
} else {
  console.log("Мы уходим!");
}

// const hamburger = 3;
// const fries = 0;
// const cola = 0;

if (hamburger || fries || cola) {
  console.log("Все довольны!");
} else {
  console.log("Мы уходим!");
}

let JohnReport,
  AlexReport,
  SamReport,
  MariaReport = "done";

console.log(JohnReport || AlexReport || SamReport || MariaReport); // done, так как у нас оператор || и хотя бы один из них правдивый, то и ответ будет правдивый. если бы у нас был оператор &&, то ответ был бы false, так как хотя бы один из них ложный.

const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

if ((hamburger === 3 && cola === 2) || (fries === 3 && nuggets)) {
  console.log("Все довольны!");
} else {
  console.log("Мы уходим!");
}

console.log(!0); // true, так как у нас оператор отрицания, то есть если у нас false, то ответ будет true. если бы у нас было !1, то ответ был бы false.
