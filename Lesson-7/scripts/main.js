var mobileMenuBtn = document.querySelector('#mobileMenuBtn');
var headerMobileMenuList = document.querySelector('.headerMobileMenuList');
var headerMobileMenuItem = document.querySelector('.headerMobileMenuItem');

mobileMenuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!headerMobileMenuList.classList.contains('headerMobileMenuList_show')) {
        headerMobileMenuList.classList.add('headerMobileMenuList_show');
        mobileMenuBtn.innerHTML = '<i class="fa fa-close"></i>';
    } else {
        headerMobileMenuList.classList.remove('headerMobileMenuList_show');
        mobileMenuBtn.innerHTML = '<i class="fa fa-navicon"></i>';
    }
}