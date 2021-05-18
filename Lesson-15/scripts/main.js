var x = document.getElementById('boardWidth');
var y = document.getElementById('boardLength');
var btn = document.getElementById('createBtn');
var container = document.getElementById('container');
var form = document.getElementById('form');

// console.dir(btn);
x.focus();

btn.disabled = true;
form.addEventListener('keyup', checkInputs)

function checkInputs(e) {
    if (e.target.tagName == 'INPUT') {
        if (x.value == '' || y.value == '') {
            btn.disabled = true;
        } else {
            btn.disabled = false;
        }
    }
}

btn.addEventListener('click', checkValues);
btn.addEventListener('click', createBoard);

function checkValues(e) {
    if ((isNaN(+x.value) ||  +x.value != parseInt(x.value) ||  +x.value < 1 || +x.value > 10) && (isNaN(+y.value) || +y.value != parseInt(y.value) || +y.value < 1 || +y.value > 10)) {
        alert('X and Y have to be integer 1 - 10');
        x.focus();
        x.select(); 
        e.stopImmediatePropagation();
    } else if (isNaN(+x.value) || +x.value != parseInt(x.value) || +x.value < 1 || +x.value > 10) {
        alert('X have to be integer 1 - 10');
        x.focus();
        x.select();
        e.stopImmediatePropagation();
    } else if (isNaN(+y.value) || +y.value != parseInt(y.value) || +y.value < 1 || +y.value > 10) {
        alert('Y have to be integer 1 - 10');
        y.focus();
        y.select();
        e.stopImmediatePropagation();
    }
}

function createBoard(e) {
    var board = document.createElement('table');
    board.classList.add('board');
    board.id = 'board';

    var row = document.createElement('tr');
    row.classList.add('row');
    // row = row.cloneNode(true);
    var cell = document.createElement('td');
    cell.classList.add('cell');
    // cell = cell.cloneNode(true);

    for (i = 1; i <= +y.value; i++) {
        row = row.cloneNode(false);
        board.appendChild(row);

        for (j = 1; j <= +x.value; j++) {
            cell = cell.cloneNode(true);
            row.appendChild(cell);
        }
    }

    if (!container.children[1] || container.children[1].id != 'board') {
        container.appendChild(board);
    } else {
        container.replaceChild(board, container.children[1]);
        // if (!container.children[1].classList.contains('red')) {
        //     container.children[1].classList.add('red');
        // } else {
        //     container.children[1].classList.remove('red');
        // }
        // container.children[1].classList.toggle('red');
        // board.classList.toggle('red');
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