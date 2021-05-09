var btn = document.getElementById('data-tdBtn');
var table = document.getElementById('data-table');
var tableBody = document.getElementById('data-tableBody')
var row = tableBody.firstElementChild;

btn.addEventListener('click', addRow);

function addRow(e) {
    console.log('btn pressed');
    // console.dir(row);
    tableBody.insertBefore(row.cloneNode(true), tableBody.firstElementChild);
    // tableBody.appendChild(row.cloneNode(true));
}