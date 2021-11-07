const header = document.querySelector('.header');
const burgerMenuButton = header.querySelector('.burger__button');
const burgerMenu = header.querySelector('.burger');
const burgerLinks = burgerMenu.querySelectorAll('.burger__link');



function menu(selector) {
    selector.classList.toggle('burger_open')
}

function button(selector) {
    selector.classList.toggle('burger__button_open')
}

burgerMenuButton.addEventListener('click', () => {
    menu(burgerMenu);
    button(burgerMenuButton);
});


for (let burgerLink of burgerLinks) {
    burgerLink.addEventListener('click', (e) => {
    e.preventDefault();
    menu(burgerMenu);
    button(burgerMenuButton);});
}
