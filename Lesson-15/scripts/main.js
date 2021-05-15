var x = document.getElementById('boardWidth');
var y = document.getElementById('boardLength');
var btn = document.getElementById('createBtn');

console.dir(btn);

// if (x.value || !y.value) {
//     btn.disabled = true;
// } else {
//     btn.disabled = false;
// }

btn.addEventListener('click', checkInput);

function checkInput() {
    if ((isNaN(+x.value) ||  +x.value != parseInt(x.value) ||  +x.value < 1 || +x.value > 10) && (isNaN(+y.value) || +y.value != parseInt(y.value) || +y.value < 1 || +y.value > 10)) {
        alert('X and Y have to be integer 1 - 10');
        x.focus();
        x.select(); 
    } else if (isNaN(+x.value) || +x.value != parseInt(x.value) || +x.value < 1 || +x.value > 10) {
        alert('X have to be integer 1 - 10');
        x.focus();
        x.select();
    } else if (isNaN(+y.value) || +y.value != parseInt(y.value) || +y.value < 1 || +y.value > 10) {
        alert('Y have to be integer 1 - 10');
        y.focus();
        y.select();
    }
}


// regExpInput = new RegExp('^([1-9]|10)$');
// var num = 5;
// num = 10;
// num = '1';
// console.log(regExpInput.test(num));
// function checkInput() {
//     if (!regExpInput.test(x.value) && !regExpInput.test(y.value)) {
//         alert('X and Y have to be integer 1 - 10');
//         x.focus();
//     } else if (!regExpInput.test(x.value)) {
//         alert('X have to be integer 1 - 10');
//         x.focus();
//     } else if (!regExpInput.test(y.value)) {
//         alert('Y have to be integer 1 - 10');
//         y.focus();
//     }
// }