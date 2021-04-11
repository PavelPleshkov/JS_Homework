var mobileMenuBtn = document.querySelector('#mobileMenuBtn');
var headerMobileMenuList = document.querySelector('.headerMobileMenuList');

mobileMenuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (headerMobileMenuList.style.display == "none") { // if is menuBox displayed, hide it
        headerMobileMenuList.style.display = "flex";
        mobileMenuBtn.innerHTML = '<i class="fa fa-close"></i>';
    } else { // if is menuBox hidden, display it
        headerMobileMenuList.style.display = "none";
        mobileMenuBtn.innerHTML = '<i class="fa fa-navicon"></i>';
    }
}