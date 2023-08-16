const page = document.querySelector('body');
const themeButton = page.querySelector('.main-header__theme-toggle');

// Смена темы
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  page.classList.add('dark-theme');
} else {
  page.classList.add('light-theme');
};

themeButton.onclick = () => {
  if (page.classList.contains('light-theme')) {
    page.classList.remove('light-theme');
    page.classList.add('dark-theme');
  } else {
    page.classList.remove('dark-theme');
    page.classList.add('light-theme');
  };
};
