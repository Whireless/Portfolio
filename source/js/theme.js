// Смена темы
const page = document.querySelector('body'),
      themeButton = page.querySelector('.main-nav__button--theme');

themeButton.onclick = () => {
  page.classList.toggle('dark-theme');
  page.classList.contains('dark-theme') ? localStorage.setItem('theme', 'dark') : localStorage.setItem('theme', 'light');
};

window.addEventListener('load', () => {
  window.matchMedia('(prefers-color-scheme: dark)').matches ? page.classList.add('dark-theme') : page.classList.remove('dark-theme');

  if (localStorage.getItem('theme') === 'light') {
    page.classList.remove('dark-theme');
  } else if (localStorage.getItem('theme') === 'dark') {
    page.classList.add('dark-theme');
  }
});

export {page};
