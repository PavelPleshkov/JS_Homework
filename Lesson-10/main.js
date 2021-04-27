// task1
function Animal(name) {
    this.name = name;
    this.foodAmount = 50;
}

Animal.prototype.formatFoodAmount = function() {
    return this.foodAmount + ' гр.';
};

Animal.prototype.dailyNorm = function(amount) {
    if (!arguments.length) return this.formatFoodAmount();

    if (amount < 50 || amount > 500) {
        // throw new Error(amount + ' гр. - что-то не то в миске! :(');
        return amount + ' гр. - что-то не то в миске! :(';
    }

    this.foodAmount = amount;
};

Animal.prototype.feed = function() {
    console.log('Насыпаем в миску ' + this.dailyNorm() + ' корма.');
};

function Cat(name) {
    Animal.apply(this, arguments);
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.feed = function() {
    Animal.prototype.feed.apply(this, arguments);
    console.log('Кот доволен ^_^\n');

    return this;
};

Cat.prototype.stroke = function() {
    console.log('Гладим кота.\n');

    return this;
};

var barsik = new Cat('Барсик');

console.log(barsik.name);

console.log(barsik.dailyNorm());
// console.log(barsik.feed());
barsik.feed();

console.log(barsik.dailyNorm(600));
// console.log(barsik.dailyNorm());
// console.log(barsik.feed());
barsik.feed();

console.log(barsik.dailyNorm(250));
// console.log(barsik.dailyNorm());
// console.log(barsik.feed());
barsik.feed();

barsik.stroke();
barsik.feed().stroke().feed().stroke();

barsik = null;

//task2
function deepClone(obj) {
    var clonedObj = (Array.isArray(obj)) ? [] : {};

    for (var key in obj) {
        clonedObj[key] = (typeof obj[key] == 'object' && obj[key]) ? deepClone(obj[key]) : obj[key];
    }

    return clonedObj;
}

var initialObj = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{}, {}]
        },
        object3: {}
    },
    method: function() {
        alert('Hello');
    }
};

var clonedObj = deepClone(initialObj);

clonedObj.object.object2.array2[1].name = 'Vasya';
clonedObj.array.push(2);

console.log(initialObj);
console.log(clonedObj);


//task3
function compareObjects(obj1, obj2) {

}