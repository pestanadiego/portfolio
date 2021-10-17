const menu = document.querySelector('.menu-icon');
const headerNav = document.querySelector('nav');
const imageHero = document.querySelector('.hero-image');
const buttonHeroLeft = document.querySelector('.button-left');
const buttonHeroRight = document.querySelector('.button-right')

// Everytime the icon menu is clicked, the navigation links will pop up
menu.addEventListener('click', () => {
    if(headerNav.className === '') {
        headerNav.className += 'responsive';
        menu.src = '/img/menu-up.svg';
    } else {
        headerNav.className = '';
        menu.src = '/img/menu.svg';
    };
});

// Implementation of the carousel (hero)
const carousel = [
    '/img/carousel/1.jpg',
    '/img/carousel/2.jpg',
    '/img/carousel/3.jpg'
];
let arrayIndex = 1;

function changeImg() {
    imageHero.src = carousel[arrayIndex];
    if(arrayIndex < 2) {
        arrayIndex++;
    } else {
        arrayIndex = 0;
    };
}

let carouselInterval = setInterval(changeImg, 3000);

// Everytime one of the buttons of the carousel is clicked, the image will change and the interval will reset
buttonHeroLeft.addEventListener('click', () => {
    if(arrayIndex < 2) {
        arrayIndex++;
    } else {
        arrayIndex = 0;
    }
    imageHero.src = carousel[arrayIndex];
    clearInterval(carouselInterval);
    carouselInterval = setInterval(changeImg, 3000);
});

buttonHeroRight.addEventListener('click', () => {
    if(arrayIndex > 0) {
        arrayIndex--;
    } else {
        arrayIndex = 2;
    }
    imageHero.src = carousel[arrayIndex];
    clearInterval(carouselInterval);
    carouselInterval = setInterval(changeImg, 3000);
})