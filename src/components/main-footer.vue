<script>
export default {
  methods: {
    scrollUp() {
      window.scrollTo(0, 0);
    },
  },
}
</script>

<template>
  <footer class="main-footer" id="contacts">
    <ul class="main-footer__contact-list" aria-label="Способы связи со мной">
      <li class="main-footer__contact-item">
        <a href="https://t.me/whireless" aria-label="Написать в Телеграме">
          <svg class="main-footer__contact-icon" width="35" height="35">
             <use xlink:href="#telegram"></use>
          </svg>
        </a>
      </li>
      <li class="main-footer__contact-item">
        <a href="https://github.com/Whireless" aria-label="Профиль на ГитХабе">
          <svg class="main-footer__contact-icon" width="35" height="35">
            <use xlink:href="#github"></use>
          </svg>
        </a>
      </li>
    </ul>
    <button class="main-footer__button-up"
            type="button"
            v-on:click="scrollUp"
            aria-label="В начало сайта">
      <svg width="40" height="40">
        <use xlink:href="#arrow"></use>
      </svg>
    </button>
  </footer>
</template>