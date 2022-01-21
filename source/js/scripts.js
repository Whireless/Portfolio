const page = document.querySelector('.main-body');
const mainNav = page.querySelector('.main-nav'),
      navBtn = mainNav.querySelector('.main-nav__nav-button'),
      navElem = mainNav.querySelectorAll('.main-nav__nav-item a'),
      openMe = mainNav.querySelector('.main-nav__title');
const themeButton = page.querySelector('.main-header__theme-toggle');
const buttonUp = page.querySelector('.main-footer__button-up');

// Главное меню

mainNav.classList.add('main-nav--close');
navBtn.onclick = function() {
  mainNav.classList.toggle('main-nav--close');
  mainNav.classList.toggle('main-nav--open');

  if (mainNav.classList.contains('main-nav--open')) {
    openMe.textContent = 'закрой меня :)';
    page.style.overflow = 'hidden';
  } else {
    openMe.textContent = 'открой меня :)';
    page.removeAttribute('style')
  }
};

navElem.forEach(a => {
  a.onclick = function() {
    mainNav.classList.toggle('main-nav--open')
    mainNav.classList.toggle('main-nav--close')
    page.removeAttribute('style')
  };
});

// Тёмная тема

if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  page.classList.add('dark-theme')
} else {
  page.classList.add('light-theme')
};

themeButton.onclick = function() {
  if (page.classList.contains('light-theme')) {
    page.classList.remove('light-theme')
    page.classList.add('dark-theme')
  } else if (page.classList.contains('dark-theme')) {
    page.classList.remove('dark-theme')
    page.classList.add('light-theme')
  };
};

// Скролл в начало

window.onscroll = function () {
  if (window.pageYOffset > 450) {
    buttonUp.classList.add('main-footer__button-up--active');
  } else {
    buttonUp.classList.remove('main-footer__button-up--active');
  }
}

buttonUp.onclick = function () {
  window.scrollTo(0, 0);
}
