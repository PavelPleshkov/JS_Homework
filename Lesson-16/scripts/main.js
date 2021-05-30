var container = document.getElementById('container');
var main = document.getElementsByClassName('main')[0];
var btn = document.getElementById('getBtn');
var users = document.getElementsByClassName('users')[0];

window.onload = function() {
    if (localStorage.getItem('data')) {
        btn.addEventListener('click', function() {
            showData(JSON.parse(localStorage.getItem('data')));
        });
        // console.log('getting data from localStorage works');
    } else {
        btn.addEventListener('click', getData);
        // console.log('getting data from request works');
    }
}

function getData() {
    var request = new XMLHttpRequest();

    request.open('GET', 'https://reqres.in/api/users?page=2', true);
    if (!localStorage.getItem('data')) {
        request.send();
    } else {
        showData(JSON.parse(localStorage.getItem('data')));
        // console.log('localStorage works');
        return;
    }

    request.onload = function () {
        var statusType = Math.round(this.status / 100);

        // console.log((statusType === 2) ? JSON.parse(this.response).data : this.status);

        if (statusType === 2) {
            var data = JSON.parse(this.response).data;

            localStorage.setItem('data', JSON.stringify(data));
            showData(data);
        } else {
            console.log(this.status);
            showDataError(this);
        }
    };

    request.onerror = function() {
        console.error(this.status);
        showDataError(this);
    };

    function showDataError(request) {
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

function showData(data) {
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

            userImg.setAttribute('src', getUserData(data).avatar);
            userFirstName.innerHTML = 'First Name: ' + getUserData(data).firstName;
            userLastName.innerHTML = 'Last Name: ' + getUserData(data).lastName;

            function getUserData(data) {
                for (var i = 0; i < data.length; i++) {
                    if (data[i].id == activeLink.id) {
                        var user = new User(data[i]);

                        return user;
                    }
                }
            }

            function User(obj) {
                this.firstName = obj.first_name;
                this.lastName = obj.last_name;
                this.avatar = obj.avatar;
                this.id = obj.id;
            }
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
    var userName = document.createElement('div');
    var userFirstName = document.createElement('p');
    var userLastName = document.createElement('p');

    userImg.classList.add('userDataImg');
    userImg = userImg.cloneNode(true);
    userData.appendChild(userImg);

    userName.classList.add('userDataName');
    userName = userName.cloneNode(true);
    userData.appendChild(userName);

    userFirstName.classList.add('userDataNameFirst');
    userFirstName = userFirstName.cloneNode(true);
    userName.appendChild(userFirstName);

    userLastName.classList.add('userDataNameLast');
    userLastName = userLastName.cloneNode(true);
    userName.appendChild(userLastName);

    if (usersList.children[0].classList.contains('userLinkActive')) {
        userImg.setAttribute('src', data[0].avatar);
        userFirstName.innerHTML = 'First Name: ' + data[0].first_name;
        userLastName.innerHTML = 'Last Name: ' + data[0].last_name;
    }
}