import {Swiper} from './swiper-bundle.js';

// Слайдер проектов
const swiper = new Swiper('.portfolio__slider', {
  direction: 'horizontal',
  initialSlide: 0,
  loop: false,
  effect: 'coverflow',

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    bulletElement: 'span',
    type: 'bullets',
  },
});
