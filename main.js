console.log("=== Цикл for ===");
for (let i = 0; i < 5; i++) {
    console.log("Итерация:", i);
}

console.log("=== Числа от 1 до 10 ===");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log("=== Чётные числа ===");
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log("Сумма чисел от 1 до 10:", sum);

console.log("=== Цикл while ===");
let counter = 0;
while (counter < 5) {
    console.log("counter:", counter);
    counter++;
}

console.log("=== Уменьшение числа ===");
let number = 5;
while (number >= 0) {
    console.log(number);
    number--;
}

console.log("=== Цикл do...while ===");
let i = 0;
do {
    console.log("do-while:", i);
    i++;
} while (i < 3);

console.log("=== break (остановка на 5) ===");
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}

console.log("=== continue (пропуск 5) ===");
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}

console.log("=== Числа от 1 до 10, пропустить 5, остановиться на 8 ===");
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;
    }
    if (i === 8) {
        break;
    }
    console.log(i);
}

console.log("=== Вложенные циклы ===");
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`i = ${i}, j = ${j}`);
    }
}

console.log("=== Треугольник из звёздочек ===");
for (let i = 1; i <= 4; i++) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
        stars += "*";
    }
    console.log(stars);
}

console.log("=== Функции ===");
function greet(name) {
    return `Привет, ${name}!`;
}
console.log(greet("Алексей"));

function multiply(a, b) {
    return a * b;
}
console.log("5 * 3 =", multiply(5, 3));

function sayHello(name) {
    console.log(`Привет, ${name}!`);
}
sayHello("Денис");

function printInfo(name, age) {
    console.log(`Имя: ${name}, Возраст: ${age}`);
}
printInfo("Иван", 20);

function greetWithDefault(name = "Гость") {
    console.log(`Привет, ${name}!`);
}
greetWithDefault();
greetWithDefault("Мария");

function calculateDiscount(price, discount = 10) {
    return price - (price * discount / 100);
}
console.log("Цена со скидкой 10% (по умолчанию):", calculateDiscount(1000));
console.log("Цена со скидкой 20%:", calculateDiscount(1000, 20));

const sayBye = function(name) {
    console.log(`До свидания, ${name}!`);
};
sayBye("Алексей");

function createCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}
const counter2 = createCounter();
console.log("Замыкание:", counter2());
console.log("Замыкание:", counter2());

const sum2 = (a, b) => a + b;
console.log("Стрелочная функция (сумма):", sum2(5, 3));

const square = x => x * x;
console.log("Квадрат числа:", square(4));

const printMessage = () => console.log("Стрелочная функция без параметров");
printMessage();

const multiply2 = (a, b) => {
    const result = a * b;
    return result;
};
console.log("Умножение:", multiply2(6, 7));