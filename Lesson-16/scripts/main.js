var container = document.getElementById('container');
var main = document.getElementsByClassName('main')[0];
var btn = document.getElementById('getBtn');

btn.addEventListener('click', getData);

function getData() {
    var request = new XMLHttpRequest();

    request.open('GET', 'https://reqres.in/api1/users?page=2', true);
    request.send();

    request.onload = function () {
        var statusType = Math.round(this.status / 100);

        if (statusType === 2) {
            console.log(JSON.parse(this.response).data);



        } else {
            console.log(this.status);
            showError(this);
        }
        // console.log((statusType === 2) ? JSON.parse(this.response).data : this.status);
    };

    request.onerror = function() {
        console.error(this.status);
        showError(this);
    };

    function showError(request) {
        var errorBlock = document.createElement('div');

        container.classList.add('error');
        errorBlock.classList.add('errorBlock');
        errorBlock.innerHTML = 'ERROR<br>status code: ' + request.status + '<br>No data received<br><a href="https://ru.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_%D0%BA%D0%BE%D0%B4%D0%BE%D0%B2_%D1%81%D0%BE%D1%81%D1%82%D0%BE%D1%8F%D0%BD%D0%B8%D1%8F_HTTP">more info</a>';
        main.replaceChild(errorBlock, main.children[0]);
    }

    request.onloadend = function() {
        console.log('Запрос завершен');
    };
}