// task 1
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



// task 2
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
    Person.prototype.showInfo.call(this);
    console.log('Моя зарплата ' + this.salary + '$.');
}

var person = new Person('Вася', 20);
var vasya = new Employee('Вася', 20, 2000);

person.showInfo();
vasya.showInfo();