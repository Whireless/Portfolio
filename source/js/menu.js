import {page} from "./theme.js";

// Мобильное меню
const mainNav = page.querySelector('.main-nav'),
      navBtn = mainNav.querySelector('.main-nav__button--nav'),
      navElem = mainNav.querySelectorAll('.main-nav__nav-item a');

navBtn.onclick = function () {
  mainNav.classList.toggle('main-nav--open');
  mainNav.classList.contains('main-nav--open') ? page.style.overflow = 'hidden' : page.removeAttribute('style');
};

navElem.forEach(a => {
  a.onclick = () => {
    mainNav.classList.toggle('main-nav--open');
    page.removeAttribute('style');
  };
});
