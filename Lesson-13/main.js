var btn = document.getElementById('thBtn');
var tableBody = document.getElementById('tableBody')
var row = tableBody.firstElementChild.cloneNode(true);

btn.addEventListener('click', addRow);

function addRow(e) {
    // console.dir(row);
    var newRow = row.cloneNode(true);

    tableBody.insertBefore(newRow, tableBody.firstElementChild);
    console.log('new row added', newRow);
}

tableBody.addEventListener('click', activateTd);

function activateTd(e) {

    if (e.target.tagName == 'TD') {
        var input = document.createElement('input');
        input.type = 'text';
        input.addEventListener('blur', diactivateTd);
        input.addEventListener('keydown', diactivateTdByEnter);

        function diactivateTd() {
            e.target.innerHTML = input.value;
        }

        function diactivateTdByEnter(event) {
            if (event.keyCode == 13) {
                // e.target.innerHTML = input.value;
                input.blur();
                // console.log(input.value);
            }
        }

        if (!e.target.innerHTML) {
            e.target.insertAdjacentElement('afterbegin', input);
            input.focus();
        } else if (!e.target.firstElementChild) {
            e.target.innerHTML = '<input type="text" value ="' + e.target.innerHTML + '">';
            input = e.target.firstElementChild;
            input.focus();
            input.selectionStart = input.value.length;
            input.addEventListener('blur', diactivateTd);
            input.addEventListener('keydown', diactivateTdByEnter);
        } else if (e.target.firstElementChild.tagName == 'INPUT') {
            e.target.firstElementChild.focus();
        }
    }
}