<script>
import preloader from './components/preloader.vue';
import mainHeader from './components/main-header.vue';
import skills from './components/skills.vue';
import portfolio from './components/portfolio.vue';
import mainFooter from './components/main-footer.vue';

import { gsap, ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

export default {
  mounted() {
    const page = document.querySelector('body');

    window.onload = () => {

      // Скрытие прелоадера

      page.querySelector('.preloader').classList.add('preloader--hidden');

      // Установка темы при загрузке страницы

      const themeIcon = page.querySelector('.main-nav__icon use');
      window.matchMedia('(prefers-color-scheme: dark)').matches ? page.classList.add('dark-theme') : page.classList.remove('dark-theme');

      if (localStorage.getItem('theme') === 'light') {
        page.classList.remove('dark-theme');
        themeIcon.setAttribute('xlink:href', '#dark-theme');
      } else if (localStorage.getItem('theme') === 'dark') {
        page.classList.add('dark-theme');
        themeIcon.setAttribute('xlink:href', '#light-theme');
      }

      // Анимации

      const afterLoad = gsap.timeline({delay: 0.15}),
            scroll = gsap.timeline();

      if(window.matchMedia('(min-width: 375px) and (max-width: 767px)').matches) {
        afterLoad
        .from('.main-nav__button', {y: '-100%', opacity: 0})
        .from('.main-header__intro', {x: '-50%', opacity: 0})
      } else {
        afterLoad
        .fromTo('.main-nav', {y: '-300%', opacity: 0}, {y: '0', opacity: 1, ease: 'linear', duration: 1})
        .from('.main-header__intro', {y: '30%', opacity: 0, ease: 'linear', duration: 0.5, delay: 0.5})
        .from('.main-footer__contact-list', {x: '-500%', ease: 'linear', duration: 0.5, delay: 0.5});

        const skills = gsap.utils.toArray('.skills__skills-item');
        skills.forEach((skill, i) => {
          if (i === 0) {
            scroll.from(skills[i], {
              x: '-1000%',
              opacity: 0,
              scrollTrigger: {
                trigger: '.main-header',
                start: '-200px center',
                scrub: true,
              }
            })
          } else if (i === 1) {
            scroll.from(skills[i], {
              y: '-5000%',
              opacity: 0,
              scrollTrigger: {
                trigger: '.main-header',
                start: '-200px center',
                scrub: true,
              }
            })
          } else if (i === 2) {
            scroll.from(skills[i], {
              y: '1000%',
              opacity: 0,
              scrollTrigger: {
                trigger: '.main-header',
                start: '-200px center',
                scrub: true,
              }
            });
          }
        });
        scroll.from('.portfolio', {
          y: '50%',
          opacity: 0,
          scrollTrigger: {
            trigger: '.skills',
            start: 'center top',
            scrub: true,
          }
        });
      }
    };

    // Кнопка "В начало"

    const btnUp = page.querySelector('.main-footer__button-up');
    window.onscroll = () => {
      window.pageYOffset > 450 ? btnUp.classList.add('main-footer__button-up--active') : btnUp.classList.remove('main-footer__button-up--active');
    };
  },
  components: {
    preloader,
    mainHeader,
    skills,
    portfolio,
    mainFooter,
  }
}
</script>

<template>
  <preloader></preloader>
  <main-header></main-header>
  <skills></skills>
  <portfolio></portfolio>
  <main-footer></main-footer>
</template>
