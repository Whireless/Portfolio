const page = document.querySelector('body');

const themeButton = page.querySelector('.main-header__theme-toggle');

const mainNav = page.querySelector('.main-nav'),
      navBtn = mainNav.querySelector('.main-nav__nav-button'),
      navElem = mainNav.querySelectorAll('.main-nav__nav-item a'),
      openMe = mainNav.querySelector('.main-nav__title');

const about = page.querySelector('.about-me'),
      shortInfoBtn = about.querySelector('.about-me__button--short'),
      moreInfoBtn = about.querySelector('.about-me__button--more'),
      infoClose = about.querySelectorAll('.about-me__button-close'),
      shortInfo = about.querySelector('.about-me__shorter-info'),
      moreInfo = about.querySelector('.about-me__more-info');

const portfolio = page.querySelector('.portfolio'),
      projectImg = portfolio.querySelector('.portfolio__project-image'),
      projectLink = portfolio.querySelector('.portfolio__project-link'),
      projectType = portfolio.querySelector('.portfolio__project-type span'),
      prevProject = portfolio.querySelector('.portfolio__button--previus'),
      nextProject = portfolio.querySelector('.portfolio__button--next');

const buttonUp = page.querySelector('.main-footer__button-up');

// Preloader
window.addEventListener('load', () => {
  const preloader = page.querySelector('.preloader');
  preloader.classList.add('preloader--hidden');
});

// Главное меню
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

// Тёмная тема
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  page.classList.add('dark-theme');
} else {
  page.classList.add('light-theme');
};

themeButton.onclick = () => {
  if (page.classList.contains('light-theme')) {
    page.classList.remove('light-theme');
    page.classList.add('dark-theme');
  } else {
    page.classList.remove('dark-theme');
    page.classList.add('light-theme');
  };
};

// Скролл в начало
window.onscroll = function () {
  if (window.pageYOffset > 450) {
    buttonUp.classList.add('main-footer__button-up--active');
  } else {
    buttonUp.classList.remove('main-footer__button-up--active');
  }
};

buttonUp.onclick = function () {
  window.scrollTo(0, 0);
};

// Блок 'Обо мне'
shortInfoBtn.onclick = () => {
  shortInfo.classList.add('about-me__shorter-info--active');
};

moreInfoBtn.onclick = () => {
  moreInfo.classList.add('about-me__more-info--active');
};

infoClose.forEach(a => {
  a.onclick = () => {
    shortInfo.classList.remove('about-me__shorter-info--active');
    moreInfo.classList.remove('about-me__more-info--active');
  };
});

window.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    shortInfo.classList.remove('about-me__shorter-info--active');
    moreInfo.classList.remove('about-me__more-info--active');
  };
});

// Список проектов
// const projects = [
//   {
//     img: 'img/projects/Andrestatix.png',
//     alt: 'Если хочешь стать греческим атлетом - тебе сюда.',
//     href: 'https://andrestatix.com',
//     text: 'Лучший сайт по развитию своего тела',
//     type: 'Коммерческий',
//   },
//   {
//     img: 'img/projects/Nevelvend.png',
//     alt: 'Лучшие палочки в мире. И это точно.',
//     href: 'https://whireless.github.io/Nevelvend/',
//     text: 'Твоё удобство на кончике размешивателя',
//     type: 'Учебный',
//   },
//   {
//     img: 'img/projects/ProductFit.png',
//     alt: 'На самом деле интернет создали мы.',
//     href: 'https://whireless.github.io/ProductFit/',
//     text: 'Разработка ИТ-продуктов нового поколения',
//     type: 'Учебный',
//   },
//   {
//     img: 'img/projects/Pink.png',
//     alt: 'Надоели серые будни? Тогда мы идём к вам!',
//     href: 'https://whireless.github.io/Pink/',
//     text: 'Приложение для скрашивания скучных дней',
//     type: 'Учебный',
//   },
//   {
//     img: 'img/projects/Restaurant.png',
//     alt: 'Путник, ты слишком долго искал сочный стейк, в этом ресторане твоя награда',
//     href: 'https://whireless.github.io/Restaurant/',
//     text: 'Шикарный ужин в Санкт-Петербурге',
//     type: 'Учебный',
//   },
//   {
//     img: 'img/projects/Grand-Theatre.png',
//     alt: 'Надо уважать культуру, мать её.',
//     href: 'https://whireless.github.io/Grand-Theatre/',
//     text: 'Большой театр в Санкт-Петербурге',
//     type: 'Учебный',
//   },
//   {
//     img: 'img/projects/Nerds.png',
//     alt: 'Они создали мой внеземной дизайн',
//     href: 'https://whireless.github.io/Nerds/',
//     text: 'Разработка дизайна для сайтов и приложений',
//     type: 'Учебный',
//   },
// ];

const projects = [
  {
    img: 'img/projects/Andrestatix.png',
    alt: 'Если хочешь стать греческим атлетом - тебе сюда.',
    href: 'https://andrestatix.com',
    text: 'andrestatix.com',
    type: 'Коммерческий',
  },
  {
    img: 'img/projects/Nevelvend.png',
    alt: 'Лучшие палочки в мире. И это точно.',
    href: 'https://whireless.github.io/Nevelvend/',
    text: 'Nevelvend',
    type: 'Учебный',
  },
  {
    img: 'img/projects/ProductFit.png',
    alt: 'На самом деле интернет создали мы.',
    href: 'https://whireless.github.io/ProductFit/',
    text: 'ProductFit',
    type: 'Учебный',
  },
  {
    img: 'img/projects/Pink.png',
    alt: 'Надоели серые будни? Тогда мы идём к вам!',
    href: 'https://whireless.github.io/Pink/',
    text: 'Pink',
    type: 'Учебный',
  },
  {
    img: 'img/projects/Restaurant.png',
    alt: 'Путник, ты слишком долго искал сочный стейк, в этом ресторане твоя награда',
    href: 'https://whireless.github.io/Restaurant/',
    text: 'Restaurant',
    type: 'Учебный',
  },
  {
    img: 'img/projects/Grand-Theatre.png',
    alt: 'Надо уважать культуру, мать её.',
    href: 'https://whireless.github.io/Grand-Theatre/',
    text: 'Grand-Theatre',
    type: 'Учебный',
  },
  {
    img: 'img/projects/Nerds.png',
    alt: 'Они создали мой внеземной дизайн',
    href: 'https://whireless.github.io/Nerds/',
    text: 'Nerds',
    type: 'Учебный',
  },
];

const getPreviewProject = () => {
  const {img, alt, href, text, type} = projects[i];
  projectImg.src = img;
  projectImg.alt = alt;
  projectLink.href = href;
  projectLink.textContent = text;
  projectType.textContent = type;
  return;
};

let i = 0;
const checkIndex = () => {
  if (i < projects.length - 1) {
    nextProject.disabled = false;
    nextProject.style.opacity = 1;
  } else {
    nextProject.disabled = true;
    nextProject.style.opacity = 0;
  };

  if (i > 0) {
    prevProject.disabled = false;
    prevProject.style.opacity = 1;
  } else {
    prevProject.disabled = true;
    prevProject.style.opacity = 0;
  };
  return;
};

nextProject.onclick = () => {
  i++;
  checkIndex();
  getPreviewProject();
};

prevProject.onclick = () => {
  i--;
  checkIndex();
  getPreviewProject();
};
checkIndex();
