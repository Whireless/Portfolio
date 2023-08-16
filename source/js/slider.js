// Слайдер проектов
const portfolio = document.querySelector('.portfolio'),
      projectImg = portfolio.querySelector('.portfolio__project-image'),
      projectLink = portfolio.querySelector('.portfolio__project-link'),
      projectType = portfolio.querySelector('.portfolio__project-type span'),
      prevProject = portfolio.querySelector('.portfolio__button--previus'),
      nextProject = portfolio.querySelector('.portfolio__button--next');

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
