<template>
  <footer class="main-footer">
    <div class="container">
      <a class="main-footer__to-top" href="#start">
        <svg class="main-footer__icon main-footer__icon--arrow" widht="40" height="40">
          <use href="#arrow"></use>
        </svg>
      </a>
      <p class="main-footer__copyright">
        © Copyright. Все права защищены. 2024
      </p>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss">
.main-footer {
  color: $whitesmoke;
  background-color: $black2;
  transition: 0.5s;
}

.main-footer__to-top {
  display: block;
  width: 40px;
  margin: 0 auto;
}

.main-footer__icon {
  &--arrow {
    width: inherit;
    fill: $whitesmoke;
    transition: 0.4s;

    &:hover {
        fill: $green;
    }
  }
}

.main-footer__copyright {
  text-align: center;
  margin-top: 15px;

  @media (min-width: $tablet) {
    width: max-content;
    margin: 20px auto 0 auto;
  }

  @media (min-width: $desktop) {
    margin: 25px auto 0 auto;
  }

  @media (min-width: $laptop) {
    margin: 30px auto 0 auto;
  }
}
</style>
