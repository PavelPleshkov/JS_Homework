function Animal(name) {
    var self = this;
    var foodAmount = 50;

    function formatFoodAmount() {
        return foodAmount + ' гр.';
    };

    this.name = name;

    this.dailyNorm = function(amount) {
        if (!arguments.length) return formatFoodAmount();

        if (amount < 50 || amount > 500) {
            // throw new Error(amount + ' гр. - что-то не то в миске! :(');
            return amount + ' гр. - что-то не то в миске! :(';
        }

        foodAmount = amount;
    };

    this.feed = function() {
        console.log('Насыпаем в миску ' + self.dailyNorm() + ' корма.');
    };
}

function Cat(name) {
    Animal.apply(this, arguments);

    var animalFeed = this.feed;

    this.feed = function() {
        // animalFeed.call(this);
        animalFeed();
        console.log('Кот доволен ^_^\n');
    };
}

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

barsik = null;