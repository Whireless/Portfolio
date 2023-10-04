import {page} from "./theme.js";

// Блок "Обо мне"
const info = page.querySelector('.main-header__info'),
      openInfo = page.querySelector('.main-header__button--open-info'),
      closeInfo = page.querySelector('.main-header__button--close-info');

openInfo.onclick = () => {
  info.classList.remove('main-header__info--hidden');
  page.classList.add('shadow');
  page.style.overflow = 'hidden';
};

closeInfo.onclick = () => {
  info.classList.add('main-header__info--hidden');
  page.classList.remove('shadow');
  page.removeAttribute('style');
};
