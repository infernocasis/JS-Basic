const cat = {
  name: "Барсик",
  age: 3,
  color: "рыжий",
};

function isYoungGinger(obj) {
  if (obj.age < 5 && obj.color === "рыжий") {
    return true;
  } else {
    return false;
  }
}
isYoungGinger(cat);

function isOldOrBlack(obj) {
  return obj.age > 7 || obj.color === "черный";
}

function canAdopt(obj) {
  return obj.age < 5 && obj.color !== "чёрный";
}

// const cats = ["Барсик", "Мурзик", "Васька"];
function describeCats(arr) {
  return `всего котов ${arr.length}, первый - ${arr[0]}`;
}

describeCats(cats);

function showAll(cats) {
  for (let value of cats) {
    // код для каждого элемента
    console.log(value);
  }
}
showAll(cats);

function showAllUpper(arr) {
  for (let value of arr) {
    console.log(value.toUpperCase());
  }
}
showAllUpper(cats);

function showAllLower(arr) {
  for (let value of arr) {
    console.log(value.toLowerCase());
  }
}
showAllLower(cats);

// const cats = ["Барсик", "Мур", "Бегемотик", "Тим"];

function showLongNames(arr) {
  for (let name of arr) {
    if (name.length > 6) {
      console.log(name);
    }
  }
}
showLongNames(cats);

function showShortNames(arr) {
  for (let name of arr) {
    if (name.length < 5) {
      console.log(name);
    }
  }
}
showShortNames(cats);

function countLongNames(arr) {
  let count = 0; // 1. завели счётчик
  for (let name of arr) {
    if (name.length > 5) {
      count++; // 2. нашли подходящее — увеличили
    }
  }
  return count; // 3. цикл закончился — отдали итог
}

countLongNames(cats);

function countShortNames(arr) {
  let count = 0;
  for (let name of arr) {
    if (name.length < 5) {
      count++;
    }
  }
  return count;
}

countShortNames(cats);

const cats = ["Барсик", "Мур", "Бегемотик", "Тим"];

function getReport(arr) {
  let count = 0;
  for (let name of arr) {
    if (name.length > 5) {
      count++;
    }
  }
  return `Всего котов: ${arr.length}, длинных имен: ${count}`;
}

console.log(getReport(cats));
