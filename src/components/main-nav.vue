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
</template>

<style lang="scss">
.main-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 0;
  background-color: $greyColor1;
  z-index: 5;
  transition: 0.5s;

  .main-nav__nav-span {
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
    .main-nav__nav-list {
      transform: translateX(0);
    }

    .main-nav__nav-span {
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
}

.main-nav__button {
  position: absolute;
  top: 20px;
  display: flex;
  width: 50px;
  height: 50px;
  padding: 10px;
  background-color: $whiteColor;
  border: none;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 15px;
  cursor: pointer;
  z-index: 4;

  &--theme {
    left: 15px;
    padding: 8px;
  }

  &--nav {
    right: 15px;
    flex-direction: column;
    justify-content: center;
    row-gap: 7px;
  }
}

.main-nav__nav-span {
  position: relative;
  width: 100%;
  height: 3px;
  background-color: $blackColor;
  box-shadow: 0 2px 10px #00000030;
  border-radius: 20px;
}

.main-nav__nav-list {
  position: relative;
  list-style: none;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  row-gap: 45px;
  width: 100%;
  height: 100vh;
  background-color: $greyColor1;
  margin: 0;
  padding: 200px 0 0 0;
  transform: translateX(100%);
  transition: 0.5s;
}

.main-nav__nav-item {
  display: flex;
  justify-content: center;
  align-items: center;
}

.main-nav__nav-link {
  font-size: 19px;
  text-transform: lowercase;
  text-decoration: none;
  font-weight: 300;
  color: $blackColor;
  letter-spacing: 1px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 50%;
  height: 8vh;
  border: 1px solid $blackColor;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 15px;
  transition: 0.7s;

  &:hover {
    color: $whiteColor;
    background-color: $blackColor;

    .main-nav__icon {
      fill: $whiteColor;
    }
  }
}

.main-nav__icon {
  &--link {
    &:hover {
      fill: $whiteColor;
    }
  }
}

@media (min-width: $smart) {
  .main-nav__button {
    &--theme {
      left: 20px;
    }

    &--nav {
      right: 20px;
    }
  }
}

@media (min-width: $tablet) {
  .main-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: max-content;
    padding: 10px 50px;
    border-bottom: 1px solid $greyColor2;
  }

  .main-nav__button {
    &--theme {
      position: static;
      width: 34px;
      height: 34px;
      padding: 3px;
      background-color: transparent;
      border: 1px solid $blackColor;
    }

    &--nav {
      display: none;
    }
  }

  .main-nav__nav-list {
    position: static;
    flex-direction: row;
    justify-content: space-between;
    column-gap: 65px;
    width: max-content;
    height: auto;
    background-color: inherit;
    padding: 16px 0;
    border: none;
    transform: translateX(0);
  }

  .main-nav__nav-item {
    margin: 0;
  }

  .main-nav__nav-link {
    font-size: 19px;
    width: 125px;
    height: 35px;
    margin-top: 0;

    &::before {
      top: 0;
      width: 75%;
    }

    &::after {
      bottom: 0;
      width: 75%;
    }
  }

  .main-nav__icon {
    &--theme {
      width: 95%;
      height: 95%;
    }

    &--link {
      width: 24px;
      height: 24px;
    }
  }
}

@media (min-width: $desktop) {
  .main-nav {
    padding: 0 120px;
  }

  .main-nav__button {
    &--theme {
      top: 55px;
      left: 48%;
      width: 42px;
      height: 42px;
      padding: 5px;
    }
  }

  .main-nav__nav-list {
    column-gap: 90px;
    padding: 25px 0;
  }

  .main-nav__nav-link {
    height: 40px;
    width: 155px;
  }

  .main-nav__icon {
    &--link {
      width: 30px;
      height: 30px;
    }
  }
}
</style>
