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
