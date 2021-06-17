//task1
//деструктуризация, rest оператор
// Имеется следующий объект - {a: 1, b: 2, c: 3, d: 4}. Необходимо сделать так, чтобы в переменные a и b записались
//     соответствующие значения, а все, что осталось - в объект obj.
const obj1 = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
};

let {a, b, ...obj} = obj1;

console.log(a, b, obj);


//task2
//prompt, `${   }`, method(){}
// {
//     name
// }
// Запросить у пользователя имя и сохранить его в переменную.
// Создать объект со свойством name, куда записать короткой записью значение имени пользователя, и методом sayHi,
// который будет возвращать строку вида:
//   "Hi, (имя пользователя)!"
// Имя пользователя получать уже из объекта.
// Проверить работу метода. Убедиться в уместном использовании способов задания переменной.

let name = prompt('Enter your name: ', 'Sam');
const obj = {
    name,
    sayHi() {
        console.log(`Hi, ${this.name}`);
    }
}

obj.sayHi();

// let {obj} = {obj: {name, sayHi() {
//     console.log(`Hi, ${this.name}`);
// }}};

// obj.sayHi();


//task3
//**, деструктуризация в параметрах, установка параметров по умолчанию
//    Написать функцию, которая будет принимать параметры x, y, z.
// При вызове функции передать в неё первым параметром объект вида {a: 2, b: 3}, вторым параметром целое число.
// X и y получаем из свойств переданного в функцию объекта a и b. У z значение по-умолчанию должно быть 1.
// Функция должна возвращать результат возведения в степень y числа x, умноженный на z.
// Валидацию опустить.

function getParams({a: x, b: y}, z = 1) {
    return x ** y * z;
}

console.log(getParams({a: 2, b: 3}, 2));


//task4
//...spread, интерполяция
//    Создать массив с именем и возрастом. Передать его в функцию. Функция должна принять его как два отдельных параметра
// name и age и вернуть строку вида:
// "Hello, I'm (имя) and I'm (возраст) years old."
// Не использовать деструктуризацию.

function makeGreeting(name, age) {
    return `Hello, I'm ${name} and I'm ${age} years old.`;
}

const arr = ['Sam', 25];

console.log(makeGreeting(...arr));


//task5
//rest, for of
//    Написать функцию, принимающую массив чисел. При вызове числа передаются в функцию отдельными параметрами, не массивом.
// Вывести в консоль числа последовательно.

function showNums(...nums) {
    for (let num of nums) {
        console.log(num);
    }
}

console.log(showNums(1, 2, 3));

// task6
//includes(), spread
//    Переписать решение задачи с поиском гласных на новый синтаксис. Использовать перебирающий метод массива и поиск элемента в массиве.
// function countVowelLetters(text) {
//     text = text.toLowerCase().split('');

//     var vowelLetters = ['а', 'я', 'ы', 'и', 'о', 'ё', 'у', 'ю', 'э', 'е', 'a', 'e', 'i', 'o', 'u', 'y'],
//         counter = 0;

//     for (var i = 0; i < vowelLetters.length; i++) {
//         for (var j = 0; j < text.length; j++) {
//             vowelLetters[i] === text[j] && counter++;
//         }
//     }

//     return counter;
// }

function countVowelLetters(text) {
    const vowelLetters = ['а', 'я', 'ы', 'и', 'о', 'ё', 'у', 'ю', 'э', 'е', 'a', 'e', 'i', 'o', 'u', 'y'];
    let count = 0;

    text = text.toLowerCase();

    for (let letter of text) {
        for (let vowel of vowelLetters) {
            if (vowel == letter) {
                count++;
            }
        }
    }

    console.log(count);
}
//or
function countVowelLetters(text) {
    const vowelLetters = ['а', 'я', 'ы', 'и', 'о', 'ё', 'у', 'ю', 'э', 'е', 'a', 'e', 'i', 'o', 'u', 'y'];
    let count = 0;

    text = text.toLowerCase();

    for (let letter of text) {
        if (vowelLetters.includes(letter)) {
            count++;
        }
    }

    console.log(count);
}
//or



function countVowelLetters(text) {
    const vowelLetters = ['а', 'я', 'ы', 'и', 'о', 'ё', 'у', 'ю', 'э', 'е', 'a', 'e', 'i', 'o', 'u', 'y'];

    return [...text.toLowerCase()].filter( letter => vowelLetters.includes(letter)).length;
}

countVowelLetters('Шла Саша по шоссе И сосала сУшку'); // 12