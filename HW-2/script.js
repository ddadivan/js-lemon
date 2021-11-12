
// --- Number ---
// Задача №1. Получить верное значение округления
let numOne = Math.ceil(1.005 * 100 / 100);
console.log(numOne);

// Задача №2 Получить число 135.58 из строки
let value = "135.58px";
console.log(parseFloat(value));

// Задача №3 Посторить верное условное ветвление
let valueNum = 58 + "Фрилансер";
if( isNaN(valueNum) ) {
    console.log('Результат выражения NaN');
}

// Задача №4 Найти максимальное число из 10, 58, 39, -150, 0
console.log(Math.max(10, 58, 39, -150, 0));


// Задача №5 Округлить число 58.858 до числа 58
let num = 58.858;
console.log(Math.floor(num));



// --- String ---

// Задача №1. Верна ли запись?
let fls = 'фрилансер';
let text = `Привет! Я ${fls}`;
console.log(text);

// Задача №2 Получить символ "н" строки
let text2 = 'фрилансер';
console.log(text2[5]);

// Задача №3 Верно?
let text3 = 123 - '456';
console.log(text3);
// Верно

// Задача №4 Получить строку в верхнем регистре
let str = 'фрилансер';
console.log(str.toUpperCase());

// Задача №5 Получить строку "лан"
let str2 = 'фрилансер';
console.log(str2.slice(3,6));

// Задача №6
let str3 = 'фрилансер';
console.log(str2.includes('лан', 4));
// false
