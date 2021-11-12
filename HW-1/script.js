
// Напишите "if", аналогичный "switch"

let browser = 'Chrome';

if (browser === 'Edge') {
    console.log("You've got the edge")
} else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
    console.log('Okay we support these browsers too');
} else {
    console.log('We hope that this page looks ok');
}


// Переписать условия if на switch
// const number = +prompt('Введите число между 0 и 3');
//
// switch (number) {
//     case 0:
//         alert('Вы введи число 0');
//         break;
//
//     case 1:
//         alert('Вы ввели число 1');
//         break;
//
//     case 2:
//     case 3:
//         alert('Вы ввели число 2, а может и 3');
//         break;
// }


// В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).
let day = 0;

if (day >=1 && day <=10) {
    console.log('Первая декада');
} else if (day >= 11 && day <= 20) {
    console.log('Вторая декада');
} else if (day >= 21 && day <= 31) {
    console.log('Третья декада');
} else {
    console.log('Такого дня в месяце нет');
}

// В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).

let month = 7;

if (month === 12 || (month >=1 && month <= 2)) {
    console.log('зима');
} else if (month >= 3 && month <= 5) {
    console.log('весна');
} else if (month >= 6 && month <= 8) {
    console.log('лето');
}  else if (month >= 9 && month <= 11) {
    console.log('осень');
} else {
    console.log('Такой поры года не существует');
}


// В переменной min лежит число от 0 до 59. Определите в какую четверть часа попадает это число (в первую, вторую, третью или четвертую).

let min = 18;

if (min >=0 && min <=15 ) {
    console.log('Первая четверть часа');
} else if (min >= 16 && min <= 30) {
    console.log('Вторая четверть часа');
} else if (min >= 31 && min <= 45) {
    console.log('Третья четверть часа');
}  else if (min >= 46 && min <= 60) {
    console.log('Четвертая четверть часа');
} else {
    console.log('В часе 60 минут! Введите другое число');
}


// Задать начальное значение возраста в переменную age и проверить, является ли пользователь совершеннолетним или нет, выводя соответствующие сообщения

let age = 27;

if( age < 18 ) {
    console.log('Пользователь не совершеннолетний');
} else {
    console.log('Пользователь совершеннолетний');
}


// При помощи цикла for выведите четные числа от 2 до 10

for(let i = 1; i <= 10; i++) {
    if(i % 2 === 0) {
        console.log(i);
    }
}


// Перепишите код, заменив цикл for на while, без изменения поведения цикла.

// let i = 0;
// while (i < 3) {
//     alert( `number ${i}!` );
//     i++;
// }

// Повторять цикл, пока ввод неверен

// let num;
//
// do {
//     num = prompt("Введите число больше 100?", 0);
// } while (num <= 100 && num);
//
//
// let n = 10;
//
// next:
// for (let i = 2; i <= n; i++) {
//     for (let j = 2; j < i; j++) {
//         if (i % j === 0) continue next;
//     }
//     alert( i ); // простое число
// }

//  Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50. Какое число получится?
//  Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла), и запишите его в переменную num.

let numb = 1000;
let numIter = 0;

while (numb > 50) {
    numb = numb / 2;
    numIter++;
}

console.log(numb, numIter);
