// Скролл в начало сайта
const buttonUp = document.querySelector('.main-footer__button-up');

window.onscroll = function () {
  if (window.pageYOffset > 450) {
    buttonUp.classList.add('main-footer__button-up--active');
  } else {
    buttonUp.classList.remove('main-footer__button-up--active');
  }
};

buttonUp.onclick = () => window.scrollTo(0, 0);
