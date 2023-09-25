// Слайдер проектов
const swiper = new Swiper('.portfolio__slider', {
  speed: 600,
  initialSlide: 0,
  slidesPerGroup: 1,
  slidesPerView: 1,
  breakpoints: {
    370: {
      grid: {
        fill: 'row',
        rows: 2,
      },
      spaceBetween: 30,
    },
    768: {
      grid: {
        fill: 'column',
        rows: 1,
      },
    },
  },
  loop: false,
  effect: 'coverflow',

  navigation: {
    prevEl: '.portfolio__button--prev',
    nextEl: '.portfolio__button--next',
  },
  pagination: {
    el: '.portfolio__pagination',
  },
});

//Стили для пагинации (Свойства не поддающиеся изменению через css)
const pagination = document.querySelector('.portfolio__pagination');
pagination.style.width = 'max-content';
pagination.style.top = 'auto';
pagination.style.bottom = 0;
pagination.style.left = 'auto';
