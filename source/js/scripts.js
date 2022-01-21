const page = document.querySelector('.main-body');

const mainNav = page.querySelector('.main-nav'),
      navBtn = mainNav.querySelector('.main-nav__nav-button'),
      navElem = mainNav.querySelectorAll('.main-nav__nav-item a'),
      openMe = mainNav.querySelector('.main-nav__title');

const themeButton = page.querySelector('.main-header__theme-toggle');

const buttonUp = page.querySelector('.main-footer__button-up');

const projectImg = page.querySelector('.portfolio__project-image'),
      projectLink = page.querySelector('.portfolio__project-link'),
      photoBtn = page.querySelectorAll('.portfolio__button-preview');


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

// Список проектов

const projects = [
  {
    img: 'img/projects/Pink.png',
    alt: 'Надоели серые будни? Тогда мы идём к вам!',
    href: 'https://whireless.github.io/Pink/',
    text: 'Приложение для скрашивания скучных будней',
  },
  {
    img: 'img/projects/ProductFit.png',
    alt: 'На самом деле интернет создали мы.',
    href: 'https://whireless.github.io/ProductFit/',
    text: 'Разработка ИТ-продуктов нового поколения',
  },
  {
    img: 'img/projects/Nevelvend.png',
    alt: 'Лучшие палочки в мире. И это точно.',
    href: 'https://whireless.github.io/Nevelvend/',
    text: 'Твоё удобство на кончике размешивателя',
  },
  {
    img: 'img/projects/Grand-Theatre.png',
    alt: 'Надо уважать культуру, мать её.',
    href: 'https://whireless.github.io/Grand-Theatre/',
    text: 'Большой театр в Санкт-Петербурге',
  },
  {
    img: 'img/projects/Nerds.png',
    alt: 'Они создали мой внеземной дизайн',
    href: 'https://whireless.github.io/Nerds/',
    text: 'Разработка дизайна для сайтов и приложений',
  },
];

const getPreviewProject = (photo, img, alt, href, text) => {
  photo.addEventListener('click', function () {
    projectImg.src = img;
    projectImg.alt = alt;
    projectLink.href = href;
    projectLink.textContent = text;
  });
}

for (let i = 0; i < projects.length; i++) {
  getPreviewProject(photoBtn[i], projects[i].img, projects[i].alt, projects[i].href, projects[i].text);
}
