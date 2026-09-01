"use strict";

const category = "toys";

//console.log("https://someurl.com" + category);//конкатенация строк, старый метод, для этого и был создан метод интерполяции.
console.log(`https://someurl.com${category}/5`); //интерполяция

const user = "Ivan";
alert(`Привет, ${user}`);
