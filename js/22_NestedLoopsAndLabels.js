for (let i = 0; i < 3; i++) {
  console.log(i);
  for (let j = 0; j < 3; j++) {
    console.log(j);
  }
} //вложенные циклы, цикл в цикле. сначала выполняется внешний цикл, потом внутренний. сначала выполняется первый цикл, потом второй и так далее

// *
// **
// ***
// ****
// *****
// ******

let result = "";
const length = 7;

for (let i = 1; i < length; i++) {
  for (let j = 0; j < i; j++) {
    result += "*"; // добавляем звездочку
  }

  result += "\n"; // перенос строки
}

console.log(result);

first: for (let i = 0; i < 3; i++) {
  console.log(`First level: ${i}`);
  for (let j = 0; j < 3; j++) {
    console.log(`Second level: ${j}`);
    for (let k = 0; k < 3; k++) {
      if (k === 2) continue first; // continue - пропускает итерацию, то есть если мы хотим пропустить определенное значение, то мы его пропускаем и продолжаем цикл дальше. break - полностью останавливает цикл.
      console.log(`Third level: ${k}`);
    }
  }
}
