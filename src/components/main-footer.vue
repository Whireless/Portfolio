<script>
  import { useGlobalStore } from '../store';
  import { storeToRefs } from 'pinia';

  export default {
    setup() {
      const { socialsList, buttonUp } = storeToRefs(useGlobalStore());
      return {
        socialsList,
        buttonUp,
      }
    },
  }
</script>

<template>
  <footer class="main-footer" id="contacts">
    <h2 class="main-footer__title">
      Контакты
      <svg width="30" height="30">
        <use href="#contact"></use>
      </svg>
    </h2>
    <ul class="main-footer__contact-list" aria-label="Способы связи со мной">
      <li class="main-footer__contact-item" v-for="item in socialsList" :key="item">
        <a :href="item.href" :aria-label="item.aria">
          <svg class="main-footer__contact-icon" width="35" height="35">
             <use :href="item.icon"></use>
          </svg>
        </a>
      </li>
    </ul>
    <p class="main-footer__copyright">© Copyright</p>
    <a :class="['main-footer__button-up', {'main-footer__button-up--active' : buttonUp}]"
            href="#start"
            aria-label="В начало сайта">
      <svg width="40" height="40">
        <use xlink:href="#arrow"></use>
      </svg>
    </a>
  </footer>
</template>

// <style lang="scss">
.main-footer {
  padding: 65px 0;
}

.main-footer__title {
  width: 200px;
  display: flex;
  align-items: center;
  column-gap: 10px;
  padding: 0 0 5px 20px;
  border-bottom: 1px solid $blackColor;
}

.main-footer__contact-list {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 40px;
  margin-top: 60px;
  list-style: none;
  z-index: 5;
}

.main-footer__contact-item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;

  a {
    display: flex;
    transition: 0.7s;

    &:hover {
      opacity: 0.5;
    }
  }
}

.main-footer__contact-icon {
  fill: $blackColor;
}

.main-footer__copyright {
  text-align: center;
  margin-top: 30px;
}

.main-footer__button-up {
  letter-spacing: 1px;
  text-transform: uppercase;
  position: fixed;
  right: 20px;
  bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: $whiteColor;
  padding: 0;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  z-index: 4;
  animation: ease 0.5s btnUp-noSee forwards;

  &--active {
    animation: ease 0.5s btnUp-see forwards;
  }
}

@media (min-width: $tablet) {
  .main-footer__contact-list {
    margin-top: 70px;
  }

  .main-footer__title {
    column-gap: 15px;
    width: 210px;
    padding: 0 0 7px 30px;

    svg {
      width: 35px;
      height: 35px;
    }
  }

  .main-footer__contact-item {
    svg {
      width: 45px;
      height: 45px;
    }
  }

  .main-footer__button-up {
    right: 50px;
    bottom: 60px;
    width: 50px;
    height: 50px;
  }
}

@media (min-width: $desktop) {
  .main-footer__contact-list {
    margin: 80px 0 0 0;
  }

  .main-footer__title {
    font-size: 32px;
    column-gap: 20px;
    width: 215px;
    padding: 0 40px 10px 40px;

    svg {
      width: 43px;
      height: 43px;
    }
  }

  .main-footer__button-up {
    right: 120px;
    bottom: 80px;

    svg {
      width: 50px;
      height: 50px;
    }
  }
}

@media (min-width: $over-desktop) {
  .main-footer__button-up {
    width: 60px;
    height: 60px;

    svg {
      width: 60px;
      height: 60px;
    }
  }
}
</style>
