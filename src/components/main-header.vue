<script>
  import mainNav from './main-nav.vue';

  export default {
    components: {
      mainNav,
    },
  }
</script>

<template>
  <header class="main-header" id="start">
    <div class="container">
      <main-nav></main-nav>
      <article class="main-header__intro">
        <h1 class="main-header__title">Александр Сидунов</h1>
        <p class="main-header__subtitle">Frontend-разработчик</p>
        <img class="main-header__photo" src="/img/my-photo.png" width="230" height="230" alt="На этом фото я :)">
        <a class="main-header__button main-header__button--resume" href="/Portfolio/Sidunov-Alexander.doc" download="">Скачать резюме</a>
      </article>
    </div>
  </header>
</template>

<style lang="scss">
.main-header {
  padding: 80px 0 $mobileInt 0;
}

.main-header__intro {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  // height: 450px;
  height: 78vh;
}

.main-header__title {
  line-height: 36px;
  letter-spacing: 1px;
  text-align: center;
  margin: 0;
}

.main-header__subtitle {
  margin: 0;
}

.main-header__photo {
  border-radius: 30px;
  display: block;
}

.main-header__button {
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;

  &--resume {
    font-size: 16px;
    text-decoration: none;
    color: $blackColor;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 45px;
    width: 160px;
    border: 1px solid $blackColor;
    border-top-right-radius: 15px;
    border-bottom-left-radius: 15px;
    z-index: 2;
    transition: 0.5s;

    &:hover {
      color: $whiteColor;
      background-color: $blackColor;
    }
  }
}

@media (min-width: $tablet) {
  .main-header {
    padding: 90px 0 $tabletInt 0;
  }

  .main-header__intro {
    display: grid;
    grid-template-columns: max-content max-content;
    grid-template-rows: repeat(3, min-content);
    justify-items: center;
    height: auto;
    padding: 140px 0 40px 0;
  }

  .main-header__title {
    font-size: 37px;
    line-height: 39px;
  }

  .main-header__subtitle {
    font-size: 20px;
    line-height: 26px;
  }

  .main-header__photo {
    grid-column: 2;
    grid-row: 1/-1;
    width: 230px;
    height: 230px;
  }
}

@media (min-width: $desktop) {
  .main-header {
    padding: 93px 0 $desktopInt 0;
  }

  .main-header__title {
    font-size: 46px;
    line-height: 50px;
    margin: 0;
  }

  .main-header__subtitle {
    font-size: 22px;
  }

  .main-header__photo {
    width: 280px;
    height: 280px;
  }
}

@media (min-width: $over-desktop) {
  .main-header__title {
    font-size: 53px;
    line-height: 57px;
  }

  .main-header__subtitle {
    font-size: 24px;
  }

  .main-header__photo {
    width: 340px;
    height: 340px;
  }
}
</style>
