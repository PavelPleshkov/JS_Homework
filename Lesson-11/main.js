//task1
function filterNumbersArr(numbers) {
    var newArr = [];

    for (var i = 0; i < numbers.length; i++) {
        var el = numbers[i];

        if (el > 0) {
            newArr[newArr.length] = el;
        }
    }

    return newArr;
}

function filterNumbersArrModify(arr) {
    return arr.filter(function(item) {
        return item > 0;
    });
}

console.log(filterNumbersArr([-1, 0, 2, 34, -2])); // [2, 34]
console.log(filterNumbersArrModify([-1, 0, 2, 34, -2])); // [2, 34]


//task2
function findFirstPos(arr) {
    return arr.find(function(item) {
        return item > 0;
    });
}

console.log(findFirstPos([-1, 0, 2, 34, -2])); // 2


//task3
function isPalindrome(str) {
    return str.toLowerCase() == str.toLowerCase().split('').reverse().join('');
}

console.log(isPalindrome('шалаШ')); // true
console.log(isPalindrome('привет')); // false


//task4
function areAnagrams(str1, str2) {
    return str1.toLowerCase().split('').sort().join('') == str2.toLowerCase().split('').sort().join('');
}

console.log(areAnagrams('кот', 'отк')); // true
console.log(areAnagrams('кот', 'оТк')); // true
console.log(areAnagrams('кот', 'атк')); // false
console.log(areAnagrams('кот', 'отко')); // false

//task5
function divideArr(arr, num) {
    var newArr = [];

    while (arr.length) {
        newArr.push(arr.splice(0, num));
    }
    
    return newArr;
}

console.log(divideArr([1, 2, 3, 4], 2)); // [[1, 2], [3, 4]]
console.log(divideArr([1, 2, 3, 4, 5, 6, 7, 8], 3)); // [[1, 2, 3], [4, 5, 6], [7, 8]]