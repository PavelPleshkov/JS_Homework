var container = document.getElementById('container');
var main = document.getElementsByClassName('main')[0];
var btn = document.getElementById('getBtn');
var users = document.getElementsByClassName('users')[0];

// window.onload = function() {
//     localStorage.getItem('data');
// }

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
            // localStorage.setItem('data', JSON.stringify(data));

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
                    userImg.setAttribute('src', getImg(data));
                    function getImg(data) {
                        for (var i = 0; i < data.length; i++) {
                            if (data[i].id == activeLink.id) {
                                return data[i].avatar;
                            }
                        }
                    }
                    userFirstName.innerHTML = 'First Name: ' + getFirstName(data);
                    function getFirstName(data) {
                        for (var i = 0; i < data.length; i++) {
                            if (data[i].id == activeLink.id) {
                                return data[i].first_name;
                            }
                        }
                    }
                    userLastName.innerHTML = 'Last Name: ' + getLastName(data);
                    function getLastName(data) {
                        for (var i = 0; i < data.length; i++) {
                            if (data[i].id == activeLink.id) {
                                return data[i].last_name;
                            }
                        }
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

            for (i = 0; i < data.length; i++) {
                console.log(data[i].avatar);
            }

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