// ДОМАШНЕЕ ЗАДАНИЕ
//   Задание 1:
//     Написать свой секундомер в формате mm:ss:msms (по 2 цифры в каждом параметре).
//     + Изначально на странице должна быть кнопка "Start". При запуске секундомера текст кнопки меняется на "Stop".
//     + Если пользователь нажимает на кнопку "Stop" - ее текст должен измениться на "Run".
//     Использовать data-атрибут, хранящий состояние секундомера. Работа кнопки и секундомера должна опираться на него.
//     + Также после старта работы секундомера должны появиться кнопки "Save" и "Reset".
//     + Кнопки должны работать соответственным образом (по клику на кнопку "Reset" секундомер должен полностью вернуться
//     в изначальное состояние).
//     + Максимальное количество минут - 60. После этого секундомер останавливается (тестировать на значениях поменьше).
//     Должны остаться только кнопка "Reset" и метки.
//     * Секундомер должен работать после перезагрузки страницы и полностью сохранять свое состояние и метки.
//     + Чтобы время шло со скоростью реального - запускать интервал с промежутком в 10 ms, увеличивать значение ms на 1
//     на каждой итерации и считать их до 100.
//     + При реализации класс Date использовать запрещено.

var main = document.getElementsByClassName('main')[0];
var btnControl = document.getElementsByClassName('btnControl')[0];
var watch = document.getElementsByClassName('watch')[0];
var minutesBlock = document.getElementsByClassName('minutes')[0];
var secondsBlock = document.getElementsByClassName('seconds')[0];
var milisecondsBlock = document.getElementsByClassName('miliseconds')[0];
var minutes = +minutesBlock.innerHTML.trim();
var seconds = +secondsBlock.innerHTML.trim();
var miliseconds = +milisecondsBlock.innerHTML.trim();
var workingBlock = document.createElement('div');
var resultsBlock = document.createElement('div');
resultsBlock.classList.add('results');
var result = document.createElement('div');
result.classList.add('result');
var removedBtnControl;
// var newWatch = watch.cloneNode(true);
var removedWatch;

btnControl.addEventListener('click', controlBtns);
btnControl.addEventListener('click', controlState);
btnControl.addEventListener('click', controlWatch);

function controlState() {
    if (watch.dataset.state == 'initial' || watch.dataset.state == 'stopped') {
        // btnControl.innerHTML = 'Stop';
        watch.dataset.state = 'running';
        console.log(watch.dataset.state);
    } else if (watch.dataset.state == 'running') {
        // btnControl.innerHTML = 'Run';
        watch.dataset.state = 'stopped';
        console.log(watch.dataset.state);
    }
}

function controlBtns() {
    if (watch.dataset.state == 'initial') {
        main.appendChild(workingBlock);
        workingBlock.appendChild(btnReset);
        workingBlock.appendChild(btnSave);
    }
    if (watch.dataset.state == 'initial' || watch.dataset.state == 'stopped') {
        btnControl.innerHTML = 'Stop';
    } else if (btnControl.innerHTML == 'Stop') {
        btnControl.innerHTML = 'Run';
    }
}

function setValue(val, block) {
    if (val.toString().length == 1) {
        block.innerHTML = '0' + val;
    } else {
        block.innerHTML = val;
    }
}

function controlWatch() {
    var timer = setInterval(function() {
        if (watch.dataset.state == 'running') {
        
            miliseconds += 1;
            // if (miliseconds.toString().length == 1) {
            //     milisecondsBlock.innerHTML = '0' + miliseconds;
            // } else {
            //     milisecondsBlock.innerHTML = miliseconds;
            // }
            setValue(miliseconds, milisecondsBlock);
            // milisecondsBlock.innerHTML = miliseconds;

            if (miliseconds == 100) {
                seconds += 1;
                // if (seconds.toString().length == 1) {
                //     secondsBlock.innerHTML = '0' + seconds;
                // } else {
                //     secondsBlock.innerHTML = seconds;
                // }
                setValue(seconds, secondsBlock);
                // secondsBlock.innerHTML = seconds;
                miliseconds = 0;
                // milisecondsBlock.innerHTML = '0' + miliseconds;
                setValue(miliseconds, milisecondsBlock);
            }

            if (seconds == 60) {
                minutes += 1;
                if (minutes.toString().length == 1) {
                    minutesBlock.innerHTML = '0' + minutes;
                } else {
                    minutesBlock.innerHTML = minutes;
                }
                setValue(minutes, minutesBlock);

                seconds = 0;
                // secondsBlock.innerHTML = '0' + seconds;
                setValue(seconds, secondsBlock);
            }

            if (minutes == 0 && seconds == 7) {
                clearInterval(timer);
                // btnControl.remove();
                removedBtnControl = main.removeChild(btnControl);
                removedWatch = main.removeChild(watch);
                // watch.remove();
                btnSave.remove();
            }
        
        } else if (watch.dataset.state == 'initial' || watch.dataset.state == 'stopped') {
            console.log('stop timer');
            clearInterval(timer);
        }
    }, 10);
}

if (watch.dataset.state == 'initial') {
    var btnReset = createBtn('Reset');
    var btnSave = createBtn('Save');
}

function createBtn(type) {
    var btn = document.createElement('button');

    btn.setAttribute('type', 'button');
    btn.innerHTML = type;
    btn.classList.add('btn', 'btn' + type);

    return btn;
}

btnReset.addEventListener('click', resetWatch);

function resetWatch() {
    // console.log('btn reset works');
    for (var i = 0; i < watch.children.length; i++) {
        watch.children[i].innerHTML = '00';
    }

    if (main.firstElementChild != btnControl) {
        watch = removedWatch;
        main.insertBefore(watch, main.children[0]);
        main.insertBefore(removedBtnControl, main.children[0]);
        // main.insertBefore(removedBtnControl, watch);

    }
    // main.removeChild(main.lastElementChild);
    // main.removeChild(workingBlock);
    workingBlock.innerHTML = '';
    resultsBlock.innerHTML = '';
    resultsBlock.remove();
    workingBlock.remove();
    watch.dataset.state = 'initial';
    btnControl.innerHTML = 'Start';
    miliseconds = 0;
    seconds = 0;
    minutes = 0;
}

btnSave.addEventListener('click', function() {
    workingBlock.appendChild(resultsBlock);
    // main.appendChild(resultsBlock);
});

btnSave.addEventListener('click', addResult);

function addResult() {
    // var minutes = minutesBlock.innerHTML.trim();
    // var seconds = secondsBlock.innerHTML.trim();
    // var miliseconds = milisecondsBlock.innerHTML.trim();
    var newResult = result.cloneNode(false);

    if (!resultsBlock.firstElementChild) {
        newResult.innerHTML = '1) ' + minutesBlock.innerHTML + ' : ' + secondsBlock.innerHTML + ' : ' + milisecondsBlock.innerHTML;
    } else {
        // newResult.innerHTML = +resultsBlock.lastElementChild.innerHTML[0] + 1 + ') ' + minutes + ' : ' + seconds + ' : ' + miliseconds;
        newResult.innerHTML = +resultsBlock.lastElementChild.innerHTML.match(/\d+(?=\))/) + 1 + ') ' + minutesBlock.innerHTML + ' : ' + secondsBlock.innerHTML + ' : ' + milisecondsBlock.innerHTML;
    }
    
    resultsBlock.appendChild(newResult);
}