// Главное меню
const mainNav = document.querySelector('.main-nav');
const navBtn = document.querySelector('.main-nav__nav-button');
const navElem = document.querySelectorAll('.main-nav__nav-item a');
const openTitle = document.querySelector('.main-nav__title-text-open');
const closeTitle = document.querySelector('.main-nav__title-text-close');

mainNav.classList.add('main-nav--close')

navBtn.addEventListener('click', function() {
  if(mainNav.classList.contains('main-nav--close')) {
    mainNav.classList.remove('main-nav--close')
    mainNav.classList.add('main-nav--open')
  } else {
    mainNav.classList.remove('main-nav--open')
    mainNav.classList.add('main-nav--close')
  }

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
});

navElem.forEach(a => {
  a.addEventListener('click', function() {
    if(mainNav.classList.contains('main-nav--open')) {
       mainNav.classList.remove('main-nav--open')
       mainNav.classList.add('main-nav--close')
    }
  })
});
