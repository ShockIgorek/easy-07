const scrollContainer = document.querySelector('.slider');
const buttonLeft = document.querySelector('.slider__left-button');
const buttonRight = document.querySelector('.slider__right-button');


scrollContainer.addEventListener('wheel', (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});

buttonLeft.addEventListener('click', (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft -= 360;
});

buttonRight.addEventListener('click', (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += 360;
});