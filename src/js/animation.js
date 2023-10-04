import { gsap, ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

const afterLoad = gsap.timeline({delay: 0.12}),
      scroll = gsap.timeline();

window.onload = () => {
  if(window.matchMedia('(min-width: 375px) and (max-width: 767px)').matches) {
    afterLoad
    .from('.main-nav__button', {y: '-150%'})
    .from('.main-header__intro', {x: '-150%', opacity: 0})
    .from('.main-header__button--open-info', {y: '300%'});
  } else if (window.matchMedia('(min-width: 768px) and (max-width: 1199px)').matches) {
    afterLoad
    .from('.main-header__title', {x: '-40%', opacity: 0})
    .from('.main-header__subtitle', {x: '-40%', opacity: 0})
    .from('.main-header__button--open-info', {x: '-40%', opacity: 0})
    .from('.main-header__photo', {y: '30%', opacity: 0})
    .fromTo('.main-nav', {opacity: 0}, {opacity: 1})
    .fromTo('.main-nav__button--theme', {opacity: 0, y: '-30%'}, {opacity: 1, y: '0%', stagger: 0.15})
    .fromTo('.main-nav__nav-item', {opacity: 0, y: '-30%'}, {opacity: 1, y: '0%', stagger: 0.20});

    scroll
    .from('.skills', {
      x: '-220%',
      scale: 0,
      scrollTrigger: {
        trigger: '.main-header',
        start: 'top center',
        scrub: true,
      }
    })
    .from('.portfolio', {
      x: '-220%',
      scale: 0,
      scrollTrigger: {
        trigger: '.skills',
        start: 'top center',
        scrub: true,
      }
    });
  } else if (window.matchMedia('(min-width: 1200px)').matches) {
    afterLoad.from('.main-header', {opacity: 0, x: '-100%', duration: 1});

    const skills = gsap.utils.toArray('.skills__skills-item');
    skills.forEach((skill, i) => {
      if (i === 0 || i === 1) {
        scroll.from(skills[i], {
          x: '-1000%',
          opacity: 0,
          scrollTrigger: {
            trigger: '.main-header',
            start: '-200px center',
            scrub: true,
          }
        })
      } else if (i === 2 || i === 3) {
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
      scale: 0,
      scrollTrigger: {
        trigger: '.skills',
        start: 'top top',
        scrub: true,
      }
    });
  }
};
