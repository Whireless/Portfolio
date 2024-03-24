<script>
  import preloader from './components/preloader.vue';
  import mainHeader from './components/main-header.vue';
  import skills from './components/skills.vue';
  import portfolio from './components/portfolio.vue';
  import mainFooter from './components/main-footer.vue';

  import { useGlobalStore } from './store';
  import { storeToRefs } from 'pinia';

  import { gsap, ScrollTrigger } from 'gsap/all';
  gsap.registerPlugin(ScrollTrigger);

  export default {
    setup() {
      const { themeStatus } = storeToRefs(useGlobalStore());
      const { preloaderHidden, toUp, } = useGlobalStore();
      return {
        themeStatus,
        preloaderHidden,
        toUp,
      }
    },
    mounted() {
      this.preloaderHidden();
      this.toUp();

      // const page = document.querySelector('body');

      window.onload = () => {

        // Установка темы при загрузке страницы

        // const themeIcon = page.querySelector('.main-nav__icon use');
        // window.matchMedia('(prefers-color-scheme: dark)').matches ? page.classList.add('dark-theme') : page.classList.remove('dark-theme');

        // if (localStorage.getItem('theme') === 'light') {
        //   page.classList.remove('dark-theme');
        //   themeIcon.setAttribute('xlink:href', '#dark-theme');
        // } else if (localStorage.getItem('theme') === 'dark') {
        //   page.classList.add('dark-theme');
        //   themeIcon.setAttribute('xlink:href', '#light-theme');
        // }

        // Анимации

        const afterLoad = gsap.timeline({delay: 0.15}),
              scroll = gsap.timeline();

        const skills = gsap.utils.toArray('.skills__skills-item');
        const personalList = gsap.utils.toArray('.portfolio__item--personal');
        const studyList = gsap.utils.toArray('.portfolio__item--study');

        if (window.matchMedia('(min-width: 320px) and (max-width: 767px)').matches) {

          // Анимации для мобильной версии

          afterLoad.from('.main-nav__button', {y: '-200%', opacity: 0})
          .from('.main-header__title', {x: '-200%', opacity: 0})
          .from('.main-header__subtitle', {x: '-200%', opacity: 0})
          .from('.main-header__photo', {x: '-200%', opacity: 0})
          .fromTo('.main-header__button--resume', {x: '-200%', opacity: 0}, {x: 0, opacity: 1})

          scroll.to('.main-header__intro', {
            x: '-100%',
            opacity: 0,
            scrollTrigger: {
              trigger: '.main-header',
              start: 'bottom center',
              end: '850px center',
              scrub: true,
            },
          }).from('.skills__title', {
            scale: 0,
            opacity: 0,
            scrollTrigger: {
              trigger: '.skills',
              start: 'top center',
              end: '40px center',
              scrub: true,
            },
          }).from(skills[0], {
            x: '-60%',
            opacity: 0,
            scrollTrigger: {
              // markers: true,
              trigger: '.skills',
              start: '40px center',
              end: '100px center',
              scrub: true,
            },
          }).from(skills[1], {
            display: 'none',
            x: '60%',
            opacity: 0,
            scrollTrigger: {
              trigger: skills[0],
              start: '-50px center',
              scrub: true,
            },
          }).from(skills[2], {
            x: '-60%',
            opacity: 0,
            scrollTrigger: {
              trigger: skills[1],
              start: '-80px center',
              scrub: true,
            },
          }).from('.portfolio__title', {
            scale: 0,
            opacity: 0,
            scrollTrigger: {
              trigger: skills[2],
              start: '-400px top',
              scrub: true,
            },
          }).from('.portfolio__subtitle--commercial', {
            display: 'none',
            x: '60%',
            opacity: 0,
            scrollTrigger: {
              trigger: '.portfolio__title',
              start: '150px center',
              end: '400px center',
              scrub: true,
            },
          }).from('.swiper', {
            scale: 0,
            opacity: 0,
            scrollTrigger: {
              trigger: '.portfolio__title',
              start: '350px center',
              end: '450px center',
              scrub: true,
            },
          }).from('.portfolio__subtitle--personal', {
            x: '-60%',
            opacity: 0,
            scrollTrigger: {
              trigger: '.portfolio__projects--personal',
              start: '200px center',
              end: '255px center',
              scrub: true,
            },
          }).from(personalList, {
            scale: 0,
            opacity: 0,
            stagger: 0.9,
            scrollTrigger: {
              trigger: '.portfolio__projects--personal',
              start: '250px center',
              end: 'bottom center',
              scrub: true,
            },
          }).from('.portfolio__subtitle--study', {
            display: 'none',
            x: '60%',
            opacity: 0,
            scrollTrigger: {
              trigger: '.portfolio__projects--study',
              start: '200px center',
              end: '255px center',
              scrub: true,
            },
          }).from(studyList, {
            scale: 0,
            opacity: 0,
            stagger: 0.9,
            scrollTrigger: {
              trigger: '.portfolio__projects--study',
              start: '300px center',
              end: 'bottom center',
              scrub: true,
            },
          }).from('.main-footer__title', {
            scale: 0,
            opacity: 0,
            scrollTrigger: {
              trigger: '.main-footer',
              start: '200px center',
              end: '255px center',
              scrub: true,
            },
          }).from('.main-footer__contact-list', {
            y: '100%',
            opacity: 0,
            scrollTrigger: {
              trigger: '.main-footer',
              start: '240px center',
              end: '340px center',
              scrub: true,
            },
          }).from('.main-footer__copyright', {
            x: '-60%',
            opacity: 0,
            scrollTrigger: {
              trigger: '.main-footer',
              start: '295px center',
              end: '315px center',
              scrub: true,
            },
          })
        } else if (window.matchMedia('(min-width: 768px)').matches) {

          // Анимации для планшета

          const navLinks = gsap.utils.toArray('.main-nav__nav-link');

          afterLoad.fromTo('.main-nav', {y: '-1000%', opacity: 0}, {y: 0, opacity: 1, ease: 'linear', duration: 0.45})
          .fromTo('.main-nav__button--theme', {y: '-1100%', opacity: 0}, {y: 0, opacity: 1, duration: 0.5})
          .fromTo(navLinks, {y: '-100%', opacity: 0,}, {y: 0, opacity: 1, stagger: 0.25})
          .from('.main-header__title', {y: '-100%', opacity: 0})
          .from('.main-header__subtitle', {y: '-100%', opacity: 0})
          .fromTo('.main-header__button--resume', {y: '-100%', opacity: 0}, {y: 0, opacity: 1})
          .from('.main-header__photo', {x: '-100%', opacity: 0})

          scroll.to('.main-header__intro', {
            x: '-100%',
            opacity: 0,
            scrollTrigger: {
              trigger: '.main-header',
              start: '350px center',
              end: '800px center',
              scrub: true,
            },
          }).from('.skills__title', {
            x: '-100%',
            opacity: 0,
            scrollTrigger: {
              trigger: '.skills',
              start: '-120px center',
              end: 'top center',
              scrub: true,
            },
          }).from(skills[0], {
            x: '-800%',
            opacity: 0,
            scrollTrigger: {
              trigger: '.main-header',
              start: '350px center',
              scrub: true,
            }
          }).from(skills[1], {
            y: '-1500%',
            opacity: 0,
            scrollTrigger: {
              trigger: '.main-header',
              start: '350px center',
              scrub: true,
            }
          }).from(skills[2], {
            y: '800%',
            opacity: 0,
            scrollTrigger: {
              trigger: '.main-header',
              start: '350px center',
              scrub: true,
            }
          }).from('.portfolio__title', {
            x: '-100%',
            opacity: 0,
            scrollTrigger: {
              trigger: '.portfolio',
              start: '-150px center',
              end: '50px center',
              scrub: true,
            },
          }).from('.portfolio__subtitle--commercial', {
            display: 'none',
            x: '60%',
            opacity: 0,
            scrollTrigger: {
              trigger: '.portfolio__projects--commercial',
              start: '-120px center',
              end: 'top center',
              scrub: true,
            },
          }).from('.swiper', {
            scale: 0,
            opacity: 0,
            scrollTrigger: {
              trigger: '.portfolio__projects--commercial',
              start: 'top center',
              end: 'center center',
              scrub: true,
            },
          }).from('.portfolio__subtitle--personal', {
            x: '-60%',
            opacity: 0,
            scrollTrigger: {
              trigger: '.portfolio__projects--personal',
              start: '-120px center',
              end: 'top center',
              scrub: true,
            },
          }).from(personalList, {
            scale: 0,
            opacity: 0,
            stagger: 0.9,
            scrollTrigger: {
              trigger: '.portfolio__projects--personal',
              start: 'top center',
              end: 'bottom 460px',
              scrub: true,
            },
          }).from('.portfolio__subtitle--study', {
            display: 'none',
            x: '60%',
            opacity: 0,
            scrollTrigger: {
              trigger: '.portfolio__projects--study',
              start: '-120px center',
              end: 'top center',
              scrub: true,
            },
          }).from(studyList, {
            scale: 0,
            opacity: 0,
            stagger: 0.9,
            scrollTrigger: {
              trigger: '.portfolio__projects--study',
              start: 'top center',
              end: 'bottom 460px',
              scrub: true,
            },
          }).from('.main-footer__title', {
            x: '-100%',
            opacity: 0,
            scrollTrigger: {
              trigger: '.main-footer',
              start: '-150px center',
              end: '50px center',
              scrub: true,
            },
          }).from('.main-footer__contact-list', {
            y: '100%',
            opacity: 0,
            scrollTrigger: {
              trigger: '.main-footer',
              start: '-50px center',
              end: '80px center',
              scrub: true,
            },
          }).from('.main-footer__copyright', {
            x: '-60%',
            opacity: 0,
            scrollTrigger: {
              trigger: '.main-footer',
              start: 'top center',
              end: '120px center',
              scrub: true,
            },
          })
        }
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
  <main :class="{'dark-theme' : themeStatus}">
    <preloader></preloader>
    <main-header></main-header>
    <skills></skills>
    <portfolio></portfolio>
    <main-footer></main-footer>
  </main>
</template>
