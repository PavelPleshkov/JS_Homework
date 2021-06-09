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
localStorage.setItem('miliseconds', miliseconds);
localStorage.setItem('seconds', seconds);
localStorage.setItem('minutes', minutes);
localStorage.setItem('state', watch.dataset.state);

btnControl.addEventListener('click', controlBtns);
btnControl.addEventListener('click', controlState);
btnControl.addEventListener('click', controlWatch);

function controlState() {
    if (watch.dataset.state == 'initial' || watch.dataset.state == 'stopped') {
        localStorage.setItem('state', 'running');
        watch.dataset.state = localStorage.getItem('state');
        // watch.dataset.state = 'running';
        // console.log(watch.dataset.state);
    } else if (watch.dataset.state == 'running') {
        localStorage.setItem('state', 'stopped');
        watch.dataset.state = localStorage.getItem('state');
        // watch.dataset.state = 'stopped';
        // console.log(watch.dataset.state);
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
            // localStorage.setItem('miliseconds', miliseconds);
            // miliseconds = localStorage.getItem('miliseconds');
            // setValue(localStorage.getItem('miliseconds'), milisecondsBlock);
            setValue(miliseconds, milisecondsBlock);

            if (miliseconds == 100) {
                seconds += 1;
                setValue(seconds, secondsBlock);
                miliseconds = 0;
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
                setValue(seconds, secondsBlock);
            }

            if (minutes == 60) {
                clearInterval(timer);
                removedBtnControl = main.removeChild(btnControl);
                btnSave.remove();
            }
        
        } else if (watch.dataset.state == 'initial' || watch.dataset.state == 'stopped') {
            // console.log('stop timer');
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
    for (var i = 0; i < watch.children.length; i++) {
        watch.children[i].innerHTML = '00';
    }

    if (main.firstElementChild != btnControl) {
        main.insertBefore(removedBtnControl, main.children[0]);
    }

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
});

btnSave.addEventListener('click', addResult);

function addResult() {
    var newResult = result.cloneNode(false);

    if (!resultsBlock.firstElementChild) {
        newResult.innerHTML = '1) ' + minutesBlock.innerHTML + ' : ' + secondsBlock.innerHTML + ' : ' + milisecondsBlock.innerHTML;
    } else {
        newResult.innerHTML = +resultsBlock.lastElementChild.innerHTML.match(/\d+(?=\))/) + 1 + ') ' + minutesBlock.innerHTML + ' : ' + secondsBlock.innerHTML + ' : ' + milisecondsBlock.innerHTML;
    }
    
    resultsBlock.appendChild(newResult);
}