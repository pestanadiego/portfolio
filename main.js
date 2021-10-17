const menu = document.querySelector('.menu-icon');
const headerNav = document.querySelector('nav');

menu.addEventListener('click', () => {
    if(headerNav.className === '') {
        headerNav.className += 'responsive';
        menu.src = '/img/menu-up.svg';
    } else {
        headerNav.className = '';
        menu.src = '/img/menu.svg';
    };
});