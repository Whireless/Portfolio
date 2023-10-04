// Смена темы
const page = document.querySelector('body'),
      themeButton = page.querySelector('.main-nav__button--theme'),
      themeIcon = themeButton.querySelector('.main-nav__icon use');

themeButton.onclick = () => {
  page.classList.toggle('dark-theme');
  if (page.classList.contains('dark-theme')) {
    localStorage.setItem('theme', 'dark');
    themeIcon.setAttribute('xlink:href', '#light-theme');
  } else {
    localStorage.setItem('theme', 'light');
    themeIcon.setAttribute('xlink:href', '#dark-theme');
  }
};

window.addEventListener('load', () => {
  window.matchMedia('(prefers-color-scheme: dark)').matches ? page.classList.add('dark-theme') : page.classList.remove('dark-theme');

  if (localStorage.getItem('theme') === 'light') {
    page.classList.remove('dark-theme');
    themeIcon.setAttribute('xlink:href', '#dark-theme');
  } else if (localStorage.getItem('theme') === 'dark') {
    page.classList.add('dark-theme');
    themeIcon.setAttribute('xlink:href', '#light-theme');
  }
});

export {page};
