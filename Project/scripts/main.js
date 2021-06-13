const main = document.getElementsByClassName('main')[0];
const mainBtns = document.getElementsByClassName('mainBtns')[0];
const mainBtnWeight = mainBtns.getElementsByClassName('mainBtn_weight')[0];
const mainBtnForce = mainBtns.getElementsByClassName('mainBtn_force')[0];
const mainBtnBurn = mainBtns.getElementsByClassName('mainBtn_burn')[0];
const infoBlock = document.createElement('p');
infoBlock.classList.add('mainInfo');
let activeBtn;
let way;
const btnGo = document.createElement('button');
btnGo.classList.add('mainInfoBtn');
btnGo.setAttribute('type', 'button');
btnGo.innerHTML = 'Go';
btnGo.addEventListener('click', showPage2);




// window.onload = () => {
//     if (localStorage.getItem('way')) {
//         way = localStorage.getItem('way');
//         console.log(way);
//     }
// }

// mainBtns.addEventListener('click', saveWayToLocalStorage);
mainBtns.addEventListener('click', addInfoBlock);
mainBtns.addEventListener('click', fillInfoBlock);
mainBtns.addEventListener('click', activateBtn);

function addInfoBlock(e) {
    if (e.target.tagName == 'BUTTON') {
    // if (e.target.tagName == 'BUTTON' || e.target.tagName == 'SPAN') {
        if (main.lastElementChild.classList.contains('mainInfo')) {
            main.replaceChild(infoBlock, main.lastElementChild)
        } else {
            main.appendChild(infoBlock);
        }
    }
}

function fillInfoBlock(e) {
    // if (!way) {
        // if (e.target.tagName == 'SPAN') {
        //     way = e.target.innerHTML;
        // } else if (e.target.tagName == 'BUTTON') {
        //     way = e.target.children[0].innerHTML;
        // } else {
        //     return;
        // }
        if (e.target.tagName == 'BUTTON') {
            way = e.target.innerHTML;
        } else {
            return;
        }
    // }
    

    // infoBlock.innerHTML = `You choose ${way}!`;
    infoBlock.innerHTML = createInfoText(way);
    infoBlock.insertAdjacentElement('beforeend', btnGo);
    // btnGo.addEventListener('click', showPage2);
    
    // return way;
}

function createInfoText(way) {
    // let info = `<p class="mainInfoText">${way}</p>
    //     <button class="mainInfoBtn" type="button">Go</button>`;
    let info = `<p class="mainInfoText">${way}</p>`;

    return info;
}

function activateBtn(e) {
    // if (e.target.classList.contains('mainBtn') || e.target.parentElement.classList.contains('mainBtn')) {
    if (e.target.classList.contains('mainBtn')) {
        if (activeBtn) {
            activeBtn.classList.remove('mainBtnActive');
        }

        activeBtn = e.target;
        

        // if (e.target.classList.contains('mainBtn')) {
        //     activeBtn = e.target;
        // } else {
        //     activeBtn = e.target.parentElement;
        // }

        activeBtn.classList.add('mainBtnActive');
    }
}

// function saveWayToLocalStorage(e) {
//     localStorage.setItem('way', way);
// }
//--------------------------------------------------------------
const mainTable = document.createElement('table');
mainTable.classList.add('mainTable');
const mainTableRow = document.createElement('tr');
mainTableRow.classList.add('mainTableRow');
const mainTableCellFirst = document.createElement('th');
const mainTableCell = document.createElement('td');
mainTableCellFirst.classList.add('mainTableCell');
mainTableCell.classList.add('mainTableCell');
const newTable = mainTable.cloneNode(true);
// const newTableRow = mainTableRow.cloneNode(true);

for (let i = 1; i <= 28; i++) {
    const newTableRow = mainTableRow.cloneNode(true);

    for (let j = 1; j <= 10; j++) {
        let newTableCell;
        if (i == 1) {
            newTableCell = mainTableCellFirst.cloneNode(true);
        } else {
            newTableCell = mainTableCell.cloneNode(true);
        }
        if (i == 1 && j == 1) {
            newTableCell.innerHTML = 'Workout exercises';
        } else if (i == 1 && j == 2) {
            newTableCell.innerHTML = 'Rest';
        } else if (i == 1) {
            newTableCell.innerHTML = `${j - 2}`;
        } else if (j == 2) {
            newTableCell.innerHTML = `2'`;
        } else {
            newTableCell.innerHTML = '<input type="text">';
        }
        // newTableCell.innerHTML = '123';
        newTableRow.appendChild(newTableCell);
    }

    newTable.appendChild(newTableRow);
}


function showPage2() {
    // console.log('show page 2');
    
    

    main.innerHTML = `<p class="mainWay">${way}</p>`
    main.appendChild(newTable);


        // <table class="mainTable">
        // </table>`;
}