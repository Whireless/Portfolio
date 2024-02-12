import { gsap, ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

const afterLoad = gsap.timeline({delay: 0.15}),
      scroll = gsap.timeline();

window.onload = () => {
  if(window.matchMedia('(min-width: 375px) and (max-width: 767px)').matches) {
    afterLoad
    .from('.main-nav__button', {y: '-100%', opacity: 0})
    .from('.main-header__intro', {x: '-50%', opacity: 0})
    .from('.main-header__button--resume', {y: '100%', opacity: 0});
  } else if(window.matchMedia('(min-width: 768px)').matches) {
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
