// import {changeTheme} from './colorTheme.js';
import changeTheme from './colorTheme.js';

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
btnGo.addEventListener('click', showPageWorkouts);

const btnColorTheme = document.getElementById('btnColorTheme');
btnColorTheme.addEventListener('click', changeTheme);


const linkRefresh = document.getElementsByClassName('linkRefresh')[0];
linkRefresh.addEventListener('click', refreshApp);
function refreshApp(e) {
    // e.preventDefault();
    // location.hash = '';
    localStorage.clear();
}

const headerNav = document.getElementsByClassName('headerNav')[0];
headerNav.addEventListener('click', goToPage);
function goToPage(e) {
    if (e.target.tagName == 'A') {
        if (e.target.classList.contains('linkWorkouts') && localStorage.getItem('way')) {
            location.hash = `/${way}`;
            e.target.setAttribute('href', `/#/${way}`);
            showPageWorkouts();
        }
        if (e.target.classList.contains('linkStartPage') && localStorage.getItem('startMain')) {
            location.hash = '#/';
            main.innerHTML = JSON.parse(localStorage.getItem('startMain'));
            addListenersToMainBtns();
        }
    }
}

window.onload = () => {
    localStorage.setItem('startMain', JSON.stringify(main.innerHTML));
};
// window.onload = () => {
//     if (localStorage.getItem('way')) {
//         way = localStorage.getItem('way');
//         console.log(way);
//     }
// }

// mainBtns.addEventListener('click', saveWayToLocalStorage);
function addListenersToMainBtns() {
    const mainBtns = document.getElementsByClassName('mainBtns')[0];

    mainBtns.addEventListener('click', addInfoBlock);
    mainBtns.addEventListener('click', fillInfoBlock);
    mainBtns.addEventListener('click', activateBtn);
}
addListenersToMainBtns();

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
            localStorage.setItem('way', JSON.stringify(e.target.innerHTML));
            way = JSON.parse(localStorage.getItem('way'));

            // way = e.target.innerHTML;
            // localStorage.setItem('way', way);
        } else {
            return;
        }
    // }
    

    // infoBlock.innerHTML = `You choose ${way}!`;
    infoBlock.innerHTML = createInfoText(way);
    infoBlock.insertAdjacentElement('beforeend', btnGo);
    // btnGo.addEventListener('click', showPageWorkouts);
    
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

function createTableContent() {
    // if (main.children[1] && main.children[1].classList.contains('mainTable')) {
    //     return;
    // } else {

    // if (newTable.children) {
    //     return;
    // }
    // else {

    
    for (let i = 1; i <= 28; i++) {
        const newTableRow = mainTableRow.cloneNode(true);
    
        for (let j = 1; j <= 10; j++) {
            let newTableCell;
            const numOfExercises = 8;

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
                newTableCell.classList.add('mainTableCellRest');
            } else {
                // newTableCell.innerHTML = '<input type="text">';
                // newTable.addEventListener('click', activateTd);
            }
            fillFirstColumn();
            function fillFirstColumn() {
                let day = 1;
                if (j == 1 && i >= 2) {

                    if (i == 2) {
                        newTableCell.classList.add('mainTableCellDay');
                        newTableCell.innerHTML = `Day ${day}`;
                    } else if (i == 2 + (numOfExercises + 1)) {
                        newTableCell.classList.add('mainTableCellDay');
                        newTableCell.innerHTML = `Day ${++day}`;
                    } else if (i == 2 + (numOfExercises + 1) * 2) {
                        newTableCell.classList.add('mainTableCellDay');
                        newTableCell.innerHTML = `Day ${day + 2}`;
                    } else {
                        newTableCell.classList.add('mainTableCellExercise');
                        // newTableCell.innerHTML = `${i - 2}. works`;
                        fillFirstColumnExercises();
                    }

                    // if (i != 2 && i != 2 + (numOfExercises + 1) && i != 2 + (numOfExercises + 1) * 2) {
                    //     newTableCell.classList.add('mainTableCellExercise');
                    //     newTableCell.innerHTML = `${i - 2}. works`;
                    // }
                }
            }
            function fillFirstColumnExercises() {
                const exerciseCells = document.getElementsByClassName('mainTableCellExercise');
                for (let n = 1; n <= exerciseCells.length/3; n++) {
                    exerciseCells[n].innerHTML = `${n}.`;
                }
            }

            
            newTableRow.appendChild(newTableCell);
        }

        newTable.appendChild(newTableRow);
    }
    
    newTable.addEventListener('click', activateTd);

    return newTable;
// }
}

const tableFilled = createTableContent();

function activateTd(e) {
    if (e.target.tagName == 'TD' && !e.target.classList.contains('mainTableCellRest') && !e.target.classList.contains('mainTableCellExercise')) {
        let input = document.createElement('input');
        input.type = 'text';
        input.addEventListener('blur', diactivateTd);
        input.addEventListener('keydown', diactivateTdByEnter);

        function diactivateTd() {
            e.target.innerHTML = input.value;
        }

        function diactivateTdByEnter(e) {
            if (e.keyCode == 13) {
                input.blur();
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
            // input.setSelectionRange(0, input.value.length);
            input.addEventListener('blur', diactivateTd);
            input.addEventListener('keydown', diactivateTdByEnter);
        } else if (e.target.firstElementChild.tagName == 'INPUT') {
            e.target.firstElementChild.focus();
        }
    }
}

function showPageWorkouts() {
    // console.log('show page 2');
    location.hash = `/${way}`;
    main.innerHTML = `<h2 class="mainWay">${way}</h2>`;
    // main.innerHTML += `${createTableContent()}`;
    // createTableContent();
    // main.appendChild(newTable);
    // window.location.hash += `${way}`;
    
    // if (!main.children[1]) {
    //     main.appendChild(createTableContent());
    // }

    // if (main.children[1] && main.children[1].classList.contains('mainTable')) {
    //     main.replaceChild(createTableContent(), main.children[1]);
    // } else {
    //     main.appendChild(createTableContent());
    // }
    // main.appendChild(createTableContent());
    main.appendChild(tableFilled);
}