const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let counter = 1;
const size = slider.clientWidth;

slider.style.transform = `translateX(-${size * counter}px)`;

nextBtn.addEventListener('click', () => {
  if (counter >= slider.children.length - 1