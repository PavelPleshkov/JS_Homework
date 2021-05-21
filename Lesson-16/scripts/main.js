var container = document.getElementById('container');
var main = document.getElementsByClassName('main')[0];
var btn = document.getElementById('getBtn');
var users = document.getElementsByClassName('users')[0];

btn.addEventListener('click', getData);

function getData() {
    var request = new XMLHttpRequest();

    request.open('GET', 'https://reqres.in/api/users?page=2', true);
    request.send();

    request.onload = function () {
        var statusType = Math.round(this.status / 100);

        if (statusType === 2) {
            var data = JSON.parse(this.response).data;
            console.log(JSON.parse(this.response).data);

            var usersList = document.createElement('div');
            usersList.classList.add('usersList');
            
            if (users.children[0]) {
                users.replaceChild(usersList, users.children[0]);
            } else {
                users.appendChild(usersList);
            }
            

            usersList.addEventListener('click', activateUser);
            var activeLink;
            function activateUser(e) {
                if (e.target.classList.contains('userLink')) {
                    e.preventDefault();
                    if (activeLink) {
                        activeLink.classList.remove('userLinkActive');
                    }
                    if (activeLink != usersList.children[0]) {
                        usersList.children[0].classList.remove('userLinkActive');
                    }
                    activeLink = e.target;
                    activeLink.classList.add('userLinkActive');
                }

            }


            for (var i = 0; i < data.length; i++) {
                var userLink = document.createElement('a');
                userLink.setAttribute('href', '#');
                userLink.setAttribute('id', data[i].id);
                userLink.classList.add('userLink');
                userLink = userLink.cloneNode(true);
                userLink.innerHTML = 'User ' + (i + 1);
                usersList.appendChild(userLink);
            }
            if (usersList.children[0]) {
                usersList.children[0].classList.add('userLinkActive');
            }
            

            var userData = document.createElement('div');

            userData.classList.add('userData');
            userData = userData.cloneNode(true);

            if (users.children[1]) {
                users.replaceChild(userData, users.children[1]);
            } else {
                users.appendChild(userData);
            }

            var userImg = document.createElement('img');

            userImg.classList.add('userDataImg');
            userImg = userImg.cloneNode(true);
            // userData.appendChild(userImg);

            for (i = 0; i < data.length; i++) {
                // userImg.setAttribute('src', data[i].avatar);
                console.log(data[i].avatar);
            }
            userData.appendChild(userImg);

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