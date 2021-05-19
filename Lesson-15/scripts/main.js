var x = document.getElementById('boardWidth');
var y = document.getElementById('boardLength');
var btn = document.getElementById('createBtn');
var container = document.getElementById('container');
var form = document.getElementById('form');

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

    for (var i = 1; i <= +y.value; i++) {
        var row = document.createElement('tr');
        row.classList.add('row');
        row = row.cloneNode(false);

        for (var j = 1; j <= +x.value; j++) {
            var cell = document.createElement('td');
            cell.classList.add('cell');
            cell = cell.cloneNode(true);

            if ((i+j)%2) {
                cell.classList.add('cellBlack');
            } else {
                cell.classList.add('cellWhite');
            }

            row.appendChild(cell);
        }

        board.appendChild(row);
    }

    if (!container.children[1] || container.children[1].id != 'board') {
        container.appendChild(board);
    } else {
        container.replaceChild(board, container.children[1]);
    }

    board.addEventListener('click', recolorBoard);

    function recolorBoard() {
        var cells = board.getElementsByClassName('cell');

        for (var i = 0; i < cells.length; i++) {
            cells[i].classList.toggle('cellWhite');
            cells[i].classList.toggle('cellBlack');
        }
    }
}