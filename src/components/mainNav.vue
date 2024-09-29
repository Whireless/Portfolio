<template>
<nav :class="['main-nav', {'main-nav--open' : navIsOpen}]">
  <button class="main-nav__button main-nav__button--theme" @click="changeTheme()">
    <svg class="main-nav__theme-icon" width="35" height="35">
      <use :href="theme.icon"></use>
    </svg>
  </button>
  <ul class="main-nav__list" aria-label="Навигация по портфолио">
    <li class="main-nav__item" v-for="li in navList" :key="li">
      <a class="main-nav__link" :href="li.href" @click="openMenu(true)">{{ li.text }}</a>
    </li>
  </ul>
  <button class="main-nav__button main-nav__button--menu" @click="openMenu()">
    <span class="main-nav__menu-elem"></span>
    <span class="main-nav__menu-elem"></span>
    <span class="main-nav__menu-elem"></span>
  </button>
</nav>
</template>

<script>
import { useGlobalStore } from '../store';
import { storeToRefs } from 'pinia';

export default {
  setup() {
    const { theme, navIsOpen } = storeToRefs(useGlobalStore());
    const { navList, openMenu, changeTheme } = useGlobalStore();
    return {
      theme,
      navIsOpen,
      navList,
      openMenu,
      changeTheme,
    }
  },
}
</script>

<style lang="scss">
.main-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  background-color: $white;
  padding: 12px 20px;
  box-shadow: 0px 1px 5px $green;
  z-index: 5;
  transition: 0.5s;

  .main-nav__menu-elem {
    &:nth-of-type(1) {
      animation: ease 0.5s topClose forwards;
    }

    &:nth-of-type(2) {
      animation: ease 0.5s mdlClose forwards;
    }

    &:nth-of-type(3) {
      animation: ease 0.5s btmClose forwards;
    }
  }

  &--open {
    .main-nav__list {
      transform: translateX(0);
    }

    .main-nav__menu-elem {
      &:nth-of-type(1) {
        animation: ease 0.5s topOpen forwards;
      }

      &:nth-of-type(2) {
        animation: ease 0.5s mdlOpen forwards;
      }

      &:nth-of-type(3) {
        animation: ease 0.5s btmOpen forwards;
      }
    }
  }

  @media (min-width: $smart) {
    padding: 13px 35px;
  }

  @media (min-width: $tablet) {
    background-color: inherit;
    padding: 15px 45px;
  }

  @media (min-width: $desktop) {
    padding: 17px 80px;
  }

  @media (min-width: $laptop) {
    padding: 18px 120px;
  }
}

.main-nav__list {
  position: absolute;
  top: 62px;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 60px;
  height: 91vh;
  background-color: inherit;
  transform: translateX(-250%);
  transition: 0.6s;

  @media (min-width: $tablet) {
    position: static;
    flex-direction: row;
    column-gap: 50px;
    height: auto;
    transform: translateX(0);
    transition: 0s;
  }

  @media (min-width: $desktop) {
    column-gap: 70px;
  }

  @media (min-width: $laptop) {
    column-gap: 90px;
  }
}

.main-nav__button {
  border: none;
  background-color: transparent;
  cursor: pointer;

  &--theme {
    transition: 0.4s;

    &:hover {
      transform: scale(1.1);
    }
  }

  &--menu {
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 7px;
    width: 35px;
  }

  @media (min-width: $tablet) {
    &--menu {
      display: none;
    }
  }
}

.main-nav__theme-icon {
  @media (min-width: $desktop) {
    width: 40px;
    height: 40px;
  }

  @media (min-width: $laptop) {
    width: 45px;
    height: 45px;
  }
}

.main-nav__menu-elem {
  position: relative;
  height: 3px;
  width: 100%;
  background-color: $green;
  border-radius: 5px;
}

.main-nav__link {
  font-size: 21px;
  text-transform: uppercase;
  text-decoration: none;
  color: $black2;
  letter-spacing: 1px;
  font-weight: bold;
  transition: 0.4s;

  &:hover {
    color: $green;
    opacity: 0.6;
  }

  @media (min-width: $tablet) {
    font-size: inherit;
  }
}
</style>
