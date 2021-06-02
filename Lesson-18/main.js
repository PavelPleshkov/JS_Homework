// Задание 1:
// Написать регулярное выражение, которое будет тестировать на соответствие строки вида - name_surname-1234@gmail.com :
//   + - имя и фамилия должны состоять только из англ. букв и быть длиной от 3 до 10 символов, между ними _ обязательно
//   + - далее опциональная часть, начинающаяся с тире и состоящая из 4-х цифр
//   + - затем обязательный знак @
//   + - название почтового сервиса должно быть длиной от 2-х до 20-ти символов, может состоять из букв английского
//     алфавита и цифр, а также опционально может содержать в центре себя одно тире или одну точку
//   - сделать так, чтобы точка или тире, указанные выше, могли содержаться в любом месте внутри почтового сервиса,
//     кроме начала и конца *
//   + - обязательная часть .com
// Хорошо протестировать регулярное выражение.


var pattern = '^[a-z]{3,10}_[a-z]{3,10}(-[\\d]{4})?@[a-z\\d]{2,20}.com$';
var pattern = '^[a-z]{3,10}_[a-z]{3,10}(-[\\d]{4})?@[a-z\\d]{1,10}[\\.-]?[a-z\\d]{1,10}.com$';

var regexp = new RegExp(pattern, 'i');

var str = 'name_surname-1234@gmail.com';
str = 'name_surname-1234@gma2il.com';
str = 'name_surname-1234@g-mail.com';
console.log(regexp.test(str));



//   Задание 2:
//     Написать функцию, которая с помощью регулярного выражения будет тестировать на соответствие строки вида:
//       +375-25-777-77-77
//       375299999999
//       8-044-444-44-44
//       8033-6666666
//     и возвращать boolean.

//     Условия:
//       - + перед 375 - опциональный
//       - номер может начинаться с 375 (без 0) либо с 80
//       - номер должен содержать один из кодов - 25, 29, 33, 44 либо 17
//       - основная часть номера не может начинаться с 0
//       - некоторые или все тире могут быть пропущены, но расположение тех, которые пропущены не будут, может быть только
//         таким, как в примерах 1 и 3

//     Перед отправкой постараться максимально оптимизировать своё решение и убрать все лишнее.

function validate(str, pattern) {
    var regexp = new RegExp(pattern, 'i');

    return regexp.test(str);
}

var pattern = '^(([\+]?375)|8-?0)-?(25|29|33|44|17)-?[1-9]{1}([\\d]{2}-?){2}[\\d]{2}$';

console.log(validate('+375-25-777-77-77', pattern));
console.log(validate('375299999999', pattern));
console.log(validate('8-044-444-44-44', pattern));
console.log(validate('8033-6666666', pattern));
console.log(validate('-8033-6666666', pattern));//false
console.log(validate('8033-666666-6', pattern));//false
console.log(validate('8033-0666666', pattern));//false



//   Задание 3:
//     Переписать решение задачи с поиском гласных с использованием регулярного выражения. Протестировать ситуацию, когда
//     гласных в переданном тексте будет 0. По возможности придумать несколько вариантов решения.
// Написать функцию, которая будет возвращать количество гласных в переданном тексте. Регистр любой. Решение не
// должно быть "топорным".

// function getQuantityOfEngVowels(str) {
//     var vowels = ['e', 'y', 'u', 'i', 'o', 'a'];

//     return str.toLowerCase().split('').filter(function(item) {
//         return vowels.indexOf(item) != -1;
//     }).length;
// }
function getQuantityOfEngVowels(str) {
    var regexp = new RegExp('[eyuioa]', 'ig');
    try {
        return str.match(regexp).length;
    } catch {
        return 0;
    }
}

function getQuantityOfEngVowels(str) {
    var regexp = new RegExp('[^eyuioa]', 'ig');
    
    return str.split(regexp).join('').length;
}

var string = 'My nAme is ';
console.log(getQuantityOfEngVowels(string)); //4
string = 'qwrt';
console.log(getQuantityOfEngVowels(string)); //0
//   Задание 4:
//     Создать свой первый PR со своей папкой.




// function validate(pattern, flags) {
//     return new RegExp(pattern, flags);
// }