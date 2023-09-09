import {page} from "./theme.js";

const info = page.querySelector('.main-header__info');
const openInfo = page.querySelector('.main-header__button--open-info');
const closeInfo = page.querySelector('.main-header__button--close-info');

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
