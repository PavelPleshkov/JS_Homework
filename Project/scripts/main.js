const main = document.getElementsByClassName('main')[0];
const mainBtns = document.getElementsByClassName('mainBtns')[0];
const mainBtnWeight = mainBtns.getElementsByClassName('mainBtn_weight')[0];
const mainBtnForce = mainBtns.getElementsByClassName('mainBtn_force')[0];
const mainBtnBurn = mainBtns.getElementsByClassName('mainBtn_burn')[0];
const infoBlock = document.createElement('div');
infoBlock.classList.add('mainInfo');
let activeBtn;

window.onload = () => {

}

mainBtns.addEventListener('click', addInfoBlock);
mainBtns.addEventListener('click', fillInfoBlock);
mainBtns.addEventListener('click', activateBtn);

function addInfoBlock(e) {
    if (e.target.tagName == 'BUTTON' || e.target.tagName == 'SPAN') {
        if (main.lastElementChild.classList.contains('mainInfo')) {
            main.replaceChild(infoBlock, main.lastElementChild)
        } else {
            main.appendChild(infoBlock);
        }
    }
}

function fillInfoBlock(e) {
    let choise;

    if (e.target.tagName == 'SPAN') {
        choise = e.target.innerHTML;
    } else if (e.target.tagName == 'BUTTON') {
        choise = e.target.children[0].innerHTML;
    } else {
        return;
    }

    infoBlock.innerHTML = `You choose ${choise}!`;
}

// let activeBtn;
function activateBtn(e) {
    if (e.target.classList.contains('mainBtn') || e.target.parentElement.classList.contains('mainBtn')) {
        if (activeBtn) {
            activeBtn.classList.remove('mainBtnActive');
        }

        if (e.target.classList.contains('mainBtn')) {
            activeBtn = e.target;
        } else {
            activeBtn = e.target.parentElement;
        }

        activeBtn.classList.add('mainBtnActive');
    }
}