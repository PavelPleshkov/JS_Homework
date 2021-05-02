// task 1
function changeArr(arr) {
    return arr.map(function(item) {
        return {name: item};
    });
}

var names = ['Alex', 'Sam', 'Lion'];
console.log(changeArr(names)); 
//[
//     {name: "Alex"},
//     {name: "Sam"},
//     {name: "Lion"},
// ]


// task 2
function getTime(arr) {
    return 'Текущее время : ' + arr.reduce(function(str, current) {
        return str + ' : ' + current;
    });
}

var hms = ['00', '13', '24'];
console.log(getTime(hms)); //Текущее время : 00 : 13 : 24


// task 3
function getQuantityOfVowels(str) {
    var vowels = ['e', 'y', 'u', 'i', 'o', 'a'];

    return str.toLowerCase().split('').filter(function(item) {
        return vowels.indexOf(item) != -1;
    }).length;
}

var string = 'My name is ';
console.log(getQuantityOfVowels(string)); //4


// task 4
function countSentencesLetters(text) {
    return text.split(/\.|!|\?/).map(function(item) {
        return item.trim();
    }).forEach(function(item) {
        if (item != '') {
            console.log(item + ': Letters quantity is: ' + item.split(/\s|,/).join('').length);
        }
    });
}

var str = 'Привет, студент! Студент... Как дела, студент?';
countSentencesLetters(str);


// task 5 *
function getMostFrequentWord(text) {
    var words = text.toLowerCase().split(/[.,:;!+?()"\s]{1,}/).filter(function(item) {
        return item != '';
    });
    // console.log(words);
    var nums = {};

    for (var key in words) {
        if (!nums.hasOwnProperty(words[key])) {
            nums[words[key]] = 1;
        } else {
            nums[words[key]]++;
        }
        // or
        // nums[words[key]] = (!nums.hasOwnProperty(words[key])) ? 1 : nums[words[key]] + 1;
    }

    var temp = '';
    var max = 0;

    for (var key in nums) {
        if (nums[key] > max) {
            max = nums[key];
            temp = key;
        }
    }

    return 'Максимальное число повторений у слова "' + temp + '" - ' + max;
}

var text = 'Привет, студент! "Студент"... Как: (дела);,  студент?';
console.log(getMostFrequentWord(text));