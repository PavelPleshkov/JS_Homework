var mobileMenuBtn = document.querySelector('#mobileMenuBtn');
var headerMobileMenuList = document.querySelector('.headerMobileMenuList');

mobileMenuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (headerMobileMenuList.style.display == "none") {
        headerMobileMenuList.style.display = "flex";
        mobileMenuBtn.innerHTML = '<i class="fa fa-close"></i>';
    } else {
        headerMobileMenuList.style.display = "none";
        mobileMenuBtn.innerHTML = '<i class="fa fa-navicon"></i>';
    }
}