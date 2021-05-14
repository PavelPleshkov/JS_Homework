var container = document.getElementById('container');
var button = document.getElementsByTagName('button')[0];

var firstPar = document.createElement('p');
var secondPar = document.createElement('p');

window.onload = function() {
    localStorage.clear();
}

firstPar.innerHTML = 'Hello, here are <a href="https://www.facebook.com">Link 1</a> and <a href="https://twitter.com">Link 2</a>';
secondPar.innerHTML = 'Hello, here are <a href="http://google.by">Link 3</a> and <a href="https://vk.com">Link 4</a>';

container.appendChild(firstPar);
container.appendChild(secondPar);

button.addEventListener('click', changeLinks);

function changeLinks() {
    // var links = firstPar.getElementsByTagName('a');
    var links = firstPar.children;

    for (var i = 0; i < links.length; i++) {
        links[i].classList.add('link');
    }
}

secondPar.onclick = function(e) {
    if (e.target.tagName == 'A') {
        e.preventDefault();

        if (localStorage.getItem(e.target.innerHTML) == null) {
            localStorage.setItem(e.target.innerHTML, JSON.stringify({path: e.target.getAttribute('href')}));
            e.target.setAttribute('href', '#');
            alert(e.target.innerHTML + ' saved');
        } else {
            alert(JSON.parse(localStorage.getItem(e.target.innerHTML)).path);
        }
    }
}