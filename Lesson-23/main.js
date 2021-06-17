// ДОМАШНЕЕ ЗАДАНИЕ - ES6
//   Задание 1:
//     Написать функцию, принимающую массив объектов вида:
//       [
//           {name: 'Vasya Pupkin', age: 25},
//           {name: 'Ivan Petrov', age: 30},
//           {name: 'Fedor Ivanov', age: 42}
//       ]
//     и возвращающую объект вида:
//       {
//           Пользователи младше 40: [
//               {name: 'Vasya Pupkin', age: 25},
//               {name: 'Ivan Petrov', age: 30}
//           ],
//           Пользователь с именем Федор: {name: 'Fedor Ivanov', age: 42}
//       }
//     Для свойства "Пользователь с именем Федор" осуществлять поиск объекта по имени, которое начинается с подстроки Fedor.

//filter(), find()

const arrUsers = [
    {name: 'Vasya Pupkin', age: 25},
    {name: 'Ivan Petrov', age: 30},
    {name: 'Fedor Ivanov', age: 42}
];

console.log(getUsersByCategory(arrUsers));

function getUsersByCategory(arr) {
    const usersByCategory = {
        'Пользователи младше 40': [],
        'Пользователь с именем Федор': null,
    };

    const usersLess40 = arr.filter(user => user.age < 40);

    for (let user of usersLess40) {
        usersByCategory['Пользователи младше 40'].push(user);
    }

    const regexp = /^Fedor/;

    usersByCategory['Пользователь с именем Федор'] = arr.find(user => user.name.match(regexp));
    ////or
    // for (let user of arr) {
    //     if (regexp.test(user.name)) {
    //         usersByCategory['Пользователь с именем Федор'] = user;
    //     }
    // }
    
    return usersByCategory;
}



// Задание 2:
// Написать функцию, принимающую массив имен пользователей и возвращающую массив объектов вида:
//   [
//       {Пользователь 1: 'Вася'},
//       {Пользователь 2: 'Петя'}
//   ]

//map()

const arrNames =   [
    'Вася',
    'Петя'
]

console.log(createUsersList(arrNames));

function createUsersList(arr) {
    let i = 1;

    return arr.map(item => ({[`Пользователь ${i++}`]: item,}));
}

// Задание 3:
// Написать функцию, принимающую массив объектов и объединяющую их в один новый объект. Например:
//   [
//       {name: 'Vasya'},
//       {name: 'Piotr', age: 25},
//       {salary: '2000$'}
//   ]
// необходимо преобразовать в
//   {
//       name: 'Piotr',
//       age: 25,
//       salary: '2000$'
//   }
// Spread-оператор не использовать. Использовать перебирающий метод массивов. Старые объекты не должны преобразовываться.

//reduce(), Object.assign()

const arrObjects = [
    {name: 'Vasya'},
    {name: 'Piotr', age: 25},
    {salary: '2000$'}
];

console.log(getUser(arrObjects));

function getUser(arr) {
    let sumObj = {};

    return arr.reduce((obj, item) => {
        return Object.assign(obj, item);
    }, sumObj);
}



//  Задание 4:
// Переписать последнее задание с ООП на новый синтаксис. Проверить работоспособность всех методов.





//  Задание 5:
// Написать функцию-промис, которая принимает в себя 2 целых числа и выводит в консоль числа, входящие в диапазон,
// каждую секунду. После окончания работы интервала в консоль должно вывестись последнее запомненное число.
// Если в функцию первым параметром было передано бОльшее число - значения параметров следует поменять местами.
// В случае, если в функцию были переданы не целые числа - промис должен быть завершен неуспешно.

//isInteger(), promise, () => {}