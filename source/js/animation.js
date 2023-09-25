const afterLoad = gsap.timeline({delay: 0.20});
const scroll = gsap.timeline();

window.onload = () => {
  if(window.matchMedia('(min-width: 375px) and (max-width: 767px)').matches) {
    afterLoad
    .from('.main-nav__button', {y: '-150%'})
    .from('.main-header__intro', {x: '-150%', opacity: 0})
    .from('.main-header__button--open-info', {y: '280%'});
  } else if (window.matchMedia('(min-width: 768px)').matches) {
    afterLoad
    .from('.main-header__title', {x: '-40%', opacity: 0})
    .from('.main-header__subtitle', {x: '-40%', opacity: 0})
    .from('.main-header__button--open-info', {x: '-40%', opacity: 0})
    .from('.main-header__photo', {y: '30%', opacity: 0})
    .fromTo('.main-nav', {opacity: 0}, {opacity: 1})
    .fromTo('.main-nav__button--theme', {opacity: 0, y: '-30%'}, {opacity: 1, y: '0%', stagger: 0.15})
    .fromTo('.main-nav__nav-item', {opacity: 0, y: '-30%'}, {opacity: 1, y: '0%', stagger: 0.25});
  } else if (window.matchMedia('(min-width: 1200px)').matches) {

  }
};

scroll.from('.skills', {
  x: '-100%',
  opacity: 0,
  scrollTrigger: {
    trigger: '.main-header',
    start: 'top center',
    scrub: true,
  }
});

scroll.from('.portfolio', {
  x: '-100%',
  opacity: 0,
  scrollTrigger: {
    trigger: '.skills',
    start: 'top center',
    scrub: true,
  }
});
