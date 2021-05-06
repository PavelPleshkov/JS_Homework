// Задание 1:
//   Описать класс Person в функциональном стиле.
//   У него должны быть публичное свойство name и приватное свойство personAge, значение которым будет задаваться при
//   создании объекта класса.
//   Также должен быть реализован приватный метод getFormattedAge, который будет возвращать возраст + слово 'лет'
//   и публичный метод showInfo, выводящий в консоль (!!!) информацию вида:
//     "Привет, меня зовут Вася, мне 20 лет."

//   Отнаследовать от Person класс Employee. Расширить контруктор публичным свойством salary, которое так же будет получаться
//   при создании объекта класса. И расширить метод родителя showInfo так, чтобы он выводил информацию вида:
//     "Привет, меня зовут Вася, мне 20 лет.
//      Моя зарплата 2000$."
//    Использовать вызов родительского метода вида personShowInfo().

function Person(name, age) {
    var self = this;
    var personAge = age;

    this.name = name;

    function getFormattedAge() {
        return personAge + ' лет';
    }

    this.showInfo = function() {
        console.log('Привет, меня зовут ' + self.name +', мне ' + getFormattedAge() + '.');
    }
}

function Employee(name, age, salary) {
    Person.apply(this, arguments);

    this.salary = salary;

    var personShowInfo = this.showInfo;

    this.showInfo = function() {
        personShowInfo();
        console.log('Моя зарплата ' + this.salary + '$.');
    }
}

var person = new Person('Вася', 20);
var vasya = new Employee('Вася', 20, 2000);

person.showInfo();
vasya.showInfo();



// Задание 2:
//   Переписать задание 1 на прототипный стиль.

function Person(name, age) {
    this.name = name;
    this._personAge = age;
}

Person.prototype._getFormattedAge = function() {
    return this._personAge + ' лет';
};

Person.prototype.showInfo = function() {
    console.log('Привет, меня зовут ' + this.name +', мне ' + this._getFormattedAge() + '.');
};

function Employee(name, age, salary) {
    Person.apply(this, arguments);

    this.salary = salary;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.showInfo = function() {
    // Person.prototype.showInfo.apply(this, arguments);
    Person.prototype.showInfo.call(this);
    console.log('Моя зарплата ' + this.salary + '$.');
;}

var person = new Person('Вася', 20);
var vasya = new Employee('Вася', 20, 2000);

person.showInfo();
vasya.showInfo();

// Критерии оценки:
//   Задание 1:
//     - Правильно описанное приватное свойство
//     - Правильно описанный приватный метод
//     - Правильно описанный публичный метод и его содержимое
//     - Правильная реализация наследования
//     - Правильное расширение метода родителя и использование переменной self

//   Задание 2:
//     - Грамотное использование защищенных свойств и методов
//     - Правильная реализация наследования
//     - Правильное расширение метода родителя

//   Общие критерии:
//     - Форматирование
//     - Рабочесть кода

//   За несоблюдение условий заданий оценка снижается на 1 балл.