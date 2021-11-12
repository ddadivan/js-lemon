// Задача №1 (верна ли запись)
// const userInfo = {
//     name: 'Вася',
//     age: 30
// }
// Верна

// Задача №2 (что будет в консоли?)
// const userInfo = {
//     name: 'Вася',
//     age: 30,
//     '58': 'Значение свойства'
// }
// console.log(userInfo[58]);
// в консоле будет --> Значение свойства

// Задача №3 (что будет в консоли?)
// const userInfo = {
//     name: 'Вася',
//     age: 30
// }
// let user = userInfo;
// user.age = 45;
// console.log(userInfo.age); --> будет 45

// Задача №4 (что будет в консоли?)
// let userInfo = {
//     name: 'Вася',
//     age: 30,
//     showInfo() {
//         console.log(`${this.name}`);
//     }
// }
// let user = userInfo;
// userInfo = null;
// console.log(user.showInfo());
// В консоле будет "Вася"

// Задача №5 (что будет в консоли?)
// let userInfo = {
//     name: 'Вася',
//     age: 30,
// }
//
// for (const key in userInfo) {
//     const value = userInfo[key];
//     console.log(value);
// }

// В консоле будет --> Вася и 30

// Задача №6 (что будет в консоли?)
// let userInfo = {
//     name: 'Вася',
//     age: 30,
//     address: {
//         city: 'Uzhhorod'
//     }
// }
//
// for (const key in userInfo.address) {
//     console.log(userInfo.address[key]);
// }
// Ответ: Uzhhorod

// Задача №7 (что будет в консоли?)
// let userInfo = {
//     name: 'Вася',
//     age: 30,
//     "likes js": true
// }
// console.log(userInfo."likes js"); --> В консоле будет синтаксическая ошибка

// Задача №8
// 1. Создайте пустой обьект userInfo
// 2. Добавьте свойство name со значением Вася
// 3. Добавьте свойство age со значением 30
// 4. Измените значение свойства name на Лена
// 5. Удалите свойство name

let userInfo = {};
userInfo.name = 'Вася';
userInfo.age = 30;
userInfo.name = 'Лена';
delete userInfo.name;


//Напишите свой аналог метода Object.keys();

let userDescription = {
    name: 'Вася',
    age: 30,
    city: 'Kharkiv'
}
let objKeys = [];

for (let key in userDescription) {
    objKeys.push(key);
}
console.log(objKeys);


//Напишите свой аналог метода Object.values();
let userDescript = {
    name: 'Вася',
    age: 30,
    city: 'Kharkiv'
}
let objValues = [];

for (let key in userDescript) {
    objValues.push(userDescript[key]);
}
console.log(objValues);


// С помощью функций конструкторов создайте ферму животных. Ферма будет массивом, а объекты – животными.
// Создайте несколько разных животных и потом отфильтруйте их из массива животных по разным критериям. Например по месту проживания или питанию

function Animal(name, area, nutrition) {
    this.name = name;
    this.area = area;
    this.nutrition = nutrition;
}

let arrAnimals = [];

let elephant = new Animal('Elephant', 'Africa',  'herbivorous');
let wolf = new Animal('Wolf', 'steppe',  'meat-eater');
let zebra = new Animal('Zebra', 'Africa',  'herbivorous');

arrAnimals.push(elephant, wolf, zebra);

for( let item of arrAnimals) {
    if (arrAnimals[0].area === item.area) {
        console.log(item);

    }
}










