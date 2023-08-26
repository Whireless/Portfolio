const about = document.querySelector('.about-me'),
      shortInfoBtn = about.querySelector('.about-me__button--short'),
      moreInfoBtn = about.querySelector('.about-me__button--more'),
      infoClose = about.querySelectorAll('.about-me__button-close'),
      shortInfo = about.querySelector('.about-me__shorter-info'),
      moreInfo = about.querySelector('.about-me__more-info');

// Блок 'Обо мне'
shortInfoBtn.onclick = () => shortInfo.classList.add('about-me__shorter-info--active');
moreInfoBtn.onclick = () => moreInfo.classList.add('about-me__more-info--active');

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
