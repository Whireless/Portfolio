<script>
export default {
  data() {
    return {
      navList: [
        {
          href: '#skills',
          text: 'Скиллы',
        },
        {
          href: '#portfolio',
          text: 'Проекты',
        },
      ],
    }
  },
  methods: {

    // Открытие меню

    openMenu() {
      const page = document.querySelector('body');
      const nav = page.querySelector('.main-nav');
      nav.classList.toggle('main-nav--open');
      nav.classList.contains('main-nav--open') ? page.style.overflow = 'hidden' : page.removeAttribute('style');
    },

    // Смена темы

    changeTheme() {
      const page = document.querySelector('body'),
            themeIcon = page.querySelector('.main-nav__icon use');

      page.classList.toggle('dark-theme');
      if (page.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
        themeIcon.setAttribute('xlink:href', '#light-theme');
      } else {
        localStorage.setItem('theme', 'light');
        themeIcon.setAttribute('xlink:href', '#dark-theme');
      }
    },
  },
}
</script>

<template>
  <header class="main-header">
    <div class="container">
      <nav class="main-nav">
        <button class="main-nav__button main-nav__button--theme"
                type="button"
                v-on:click="changeTheme()"
                aria-label="Сменить тему">
          <svg class="main-nav__icon" width="35" height="35">
            <use xlink:href="#dark-theme"></use>
          </svg>
        </button>
        <button class="main-nav__button main-nav__button--nav"
                v-on:click="openMenu()"
                aria-label="Открыть меню">
          <span class="main-nav__nav-span"></span>
          <span class="main-nav__nav-span"></span>
          <span class="main-nav__nav-span"></span>
        </button>
        <ul class="main-nav__nav-list">
          <li class="main-nav__nav-item"
              v-for="li in navList"
              v-bind:key="li">
              <a :href="li.href"
                  v-on:click="openMenu()">{{ li.text }}</a>
          </li>
        </ul>
      </nav>
      <article class="main-header__intro">
        <h1 class="main-header__title">Александр Сидунов</h1>
        <p class="main-header__subtitle">Frontend-разработчик</p>
        <img class="main-header__photo" src="/img/my-photo.png" width="200" height="200" alt="На этом фото я :)">
        <a class="main-header__button main-header__button--resume" href="/Portfolio/Sidunov-Alexander.doc" download="">Скачать резюме</a>
      </article>
    </div>
  </header>
</template>
