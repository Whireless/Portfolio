'use strict';

const page = document.querySelector('.main-body');
const mainNav = document.querySelector('.main-nav'),
      navBtn = document.querySelector('.main-nav__nav-button'),
      navElem = document.querySelectorAll('.main-nav__nav-item a'),
      openTitle = document.querySelector('.main-nav__title-text-open'),
      closeTitle = document.querySelector('.main-nav__title-text-close');
const themeButton = document.querySelector('.main-header__theme-toggle');

// Главное меню

mainNav.classList.add('main-nav--close');
navBtn.onclick = function() {
  mainNav.classList.toggle('main-nav--close');
  mainNav.classList.toggle('main-nav--open');

  if(openTitle.classList.contains('main-nav__title-text-open--open')) {
    openTitle.classList.remove('main-nav__title-text-open--open')
    openTitle.classList.add('main-nav__title-text-open--close')
  } else {
    openTitle.classList.remove('main-nav__title-text-open--close')
    openTitle.classList.add('main-nav__title-text-open--open')
  }

  if(closeTitle.classList.contains('main-nav__title-text-close--open')) {
    closeTitle.classList.remove('main-nav__title-text-close--open')
    closeTitle.classList.add('main-nav__title-text-close--close')
  } else {
    closeTitle.classList.remove('main-nav__title-text-close--close')
    closeTitle.classList.add('main-nav__title-text-close--open')
  }
};

navElem.forEach(a => {
  a.onclick = function() {
    mainNav.classList.toggle('main-nav--open')
    mainNav.classList.toggle('main-nav--close')
  };
});

// Тёмная тема

themeButton.onclick = function() {
  page.classList.toggle('dark-theme');
};
