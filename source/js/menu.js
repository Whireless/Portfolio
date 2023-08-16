const mainNav = document.querySelector('.main-nav'),
      navBtn = mainNav.querySelector('.main-nav__nav-button'),
      navElem = mainNav.querySelectorAll('.main-nav__nav-item a'),
      openMe = mainNav.querySelector('.main-nav__title');

// Мобильное меню
navBtn.onclick = function () {
  mainNav.classList.toggle('main-nav--open');

  if (mainNav.classList.contains('main-nav--open')) {
    openMe.textContent = 'закрой меня :)';
    page.style.overflow = 'hidden';
  } else {
    openMe.textContent = 'открой меня :)';
    page.removeAttribute('style');
  };
};

navElem.forEach(a => {
  a.onclick = () => {
    mainNav.classList.toggle('main-nav--open');
    page.removeAttribute('style');
  };
});
