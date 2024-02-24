<script>
export default {
  data() {
    return {
      nav: { open: false, hidden: 'hidden', },
      navList: [
        { href: '#skills', text: 'Скиллы', },
        { href: '#portfolio', text: 'Проекты', },
      ],
    }
  },
  methods: {

    // Открытие меню

    openMenu(navItem) {
      if(navItem) {
        this.nav.open = false;
        document.body.removeAttribute('style');
      } else if(this.nav.open === false) {
        this.nav.open = true;
        document.body.style.overflow = this.nav.hidden;
      } else {
        this.nav.open = false;
        document.body.removeAttribute('style');
      }
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
      <nav :class="['main-nav', {'main-nav--open' : nav.open}]">
        <button class="main-nav__button main-nav__button--theme"
                type="button"
                @click="changeTheme()"
                aria-label="Сменить тему">
          <svg class="main-nav__icon" width="35" height="35">
            <use xlink:href="#dark-theme"></use>
          </svg>
        </button>
        <button class="main-nav__button main-nav__button--nav"
                @click="openMenu()"
                aria-label="Открыть меню">
          <span class="main-nav__nav-span"></span>
          <span class="main-nav__nav-span"></span>
          <span class="main-nav__nav-span"></span>
        </button>
        <ul class="main-nav__nav-list">
          <li class="main-nav__nav-item"
              v-for="li in navList"
              :key="li">
              <a :href="li.href"
                  @click="openMenu(true)">{{ li.text }}</a>
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
