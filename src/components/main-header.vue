<script>
  import { useGlobalStore } from '../store';
  import { storeToRefs } from 'pinia';

  export default {
    setup() {
      const { navIsOpen, themeIcon } = storeToRefs(useGlobalStore());
      const { openMenu, changeTheme, navList } = useGlobalStore();
      return {
        navIsOpen,
        themeIcon,
        openMenu,
        changeTheme,
        navList,
      }
    },
  }
</script>

<template>
  <header class="main-header" id="start">
    <div class="container">
      <nav :class="['main-nav', {'main-nav--open' : navIsOpen}]">
        <button class="main-nav__button main-nav__button--theme"
                type="button"
                @click="changeTheme()"
                aria-label="Сменить тему">
          <svg class="main-nav__icon main-nav__icon--theme" width="35" height="35">
            <use :href="themeIcon"></use>
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
              <a class="main-nav__nav-link"
                 :href="li.href"
                 @click="openMenu(true)">
                 <svg class="main-nav__icon main-nav__icon--link" width="30" height="30">
                  <use :href="li.icon"></use>
                 </svg>
                 {{ li.text }}
              </a>
          </li>
        </ul>
      </nav>
      <article class="main-header__intro">
        <h1 class="main-header__title">Александр Сидунов</h1>
        <p class="main-header__subtitle">Frontend-разработчик</p>
        <img class="main-header__photo" src="/img/my-photo.png" width="225" height="225" alt="На этом фото я :)">
        <a class="main-header__button main-header__button--resume" href="/Portfolio/Sidunov-Alexander.doc" download="">Скачать резюме</a>
      </article>
    </div>
  </header>
</template>
