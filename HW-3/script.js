
// Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.

function squareNumber(a) {
    let num = a * a;
    console.log(num);
    return num;
}
squareNumber(8);

// Сделайте функцию, которая отнимает от первого числа второе и делит на третье.

function numbersAction(a,b,c) {
    let num = (a - b) / c;
    console.log(num);
}
numbersAction(10,2,4);

// Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке

function daysOfWeek(day) {
    switch (day) {
        case 1:
            console.log('Понедельник');
            break;
        case 2:
            console.log('Вторник');
            break;
        case 3:
            console.log('Среда');
            break;
        case 4:
            console.log('Четверг');
            break;
        case 5:
            console.log('Пятница');
            break;
        case 6:
            console.log('Суббота');
            break;
        case 7:
            console.log('Воскресенье');
            break;
        default:
            console.log('В неделе всего 7 дней, введите правильное число');
            break;
    }
}
daysOfWeek(5);

// Задача №1 Какое число (длинну) мы получим?
let arr = ['Ваня', 'Иван', 'Оля'];
let newArr = arr;
newArr.push('Петя');
console.log(arr.length);
// 4


// Задача №2.
let users =['Ваня', 'Иван'];
users.push('Оля');
users[1] = 'Петя';
let firstEl = users.shift();
console.log(firstEl);
users.unshift('Маша','Паша');
console.log(users);

// Задача №3 Удалить элемент "Иван" и возвратить его в переменную
let arrNames = ['Ваня', 'Иван', 'Оля'];
let itemArr = arrNames.splice(1,1);
console.log(itemArr);

// Задача №4 Сделать из строки массив
let str = 'Ваня,Иван,Оля';
console.log(str.split(','));

// Дан массив с числами. Создайте новый массив, состоящий из квадратов этих чисел. Решите задачу двумя способами - через forEach и map
let squareArr = [2,4,7,9,15];
let newSquareArr = [];
let newSquareArrMap = [];

squareArr.forEach((item) => {
   item *= item;
    newSquareArr.push(item);
});
console.log(newSquareArr);

squareArr.map((item) => {
    item *= item;
    newSquareArrMap.push(item);
});
console.log(newSquareArrMap);


// Дан массив чисел. С помощью forEach посчитайте сумму всех элементов массива, возведенных во вторую степень
let sumArr = [2,4,7,9,15];
let newSumArr = [];
let result = 0;

sumArr.forEach((item) => {
    item *= item;
    newSumArr.push(item)
});
newSumArr.reduce((prev, item) => {
    return result = prev + item;

});
console.log(result);







