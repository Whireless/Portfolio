<template>
  <header class="main-header" id="start">
    <main-nav></main-nav>
    <div class="container">
      <article class="main-header__info">
        <h1 class="main-header__title">Front-End Vue Разработчик</h1>
        <p class="main-header__description">
          Привет, меня зовут Александр 👋<br />
          Я занимаюсь фронтенд-разработкой и ещё много чем интересным.
        </p>
        <ul class="main-header__list main-header__list--skills">
          <li class="main-header__item" v-for="li in skillsList" :key="li">
            <svg class="main-header__skill-icon" width="45" height="45">
              <use :href="li"></use>
            </svg>
          </li>
        </ul>
        <article class="main-header__resume-block">
          <img class="main-header__photo" width="60" height="60" src="/img/my-photo.png" alt="Моё фото"/>
          <a class="main-header__link main-header__link--resume" href="/public/Sidunov-Alexander.doc" download="">Скачать резюме</a>
        </article>
      </article>
    </div>
  </header>
</template>

<script>
import mainNav from './mainNav.vue';

import { useGlobalStore } from '../store';

export default {
  setup() {
    const { skillsList } = useGlobalStore();

    return {
      skillsList,
    };
  },
  components: {
    mainNav,
  },
};
</script>

<style lang="scss">
.main-header {
  padding-top: 62px;
  background-color: $grey;
  transition: 0.5s;

  @media (min-width: $tablet) {
    padding-top: 68px;
  }

  @media (min-width: $desktop) {
    padding-top: 77px;
  }

  @media (min-width: $laptop) {
    padding-top: 84px;
  }
}

.main-header__title {
  font-size: 33px;
  line-height: 45px;
  text-align: center;

  @media (min-width: $tablet) {
    font-size: 50px;
    line-height: 53px;
  }

  @media (min-width: $desktop) {
    font-size: 58px;
    line-height: 62px;
    text-align: left;
  }

  @media (min-width: $laptop) {
    font-size: 60px;
    line-height: 64px;
  }
}

.main-header__info {
  @media (min-width: $tablet) {
    display: flex;
    flex-direction: column;
  }

  @media (min-width: $desktop) {
    display: grid;
    grid-template-columns: 600px max-content;
    justify-content: space-between;
    align-items: center;
    row-gap: 40px;
    grid-template-rows: 120px 90px 60px;
  }

  @media (min-width: $laptop) {
    row-gap: 30px;
  }
}

.main-header__description {
  color: #555555;
  text-align: center;
  margin-top: 25px;

  @media (min-width: $tablet) {
    margin-top: 40px;
  }

  @media (min-width: $desktop) {
    line-height: 28px;
    grid-column: 1;
    margin-top: 0;
    text-align: left;
  }

  @media (min-width: $laptop) {
    line-height: 31px;
    text-align: justify;
  }
}

.main-header__subtitle {
  text-align: center;
  font-size: 18px;
}

.main-header__list {
  &--skills {
    display: grid;
    grid-template-columns: repeat(4, 45px);
    justify-content: center;
    column-gap: 20px;
    row-gap: 15px;
    margin-top: 25px;

    @media (min-width: $tablet) {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      gap: 0;
      margin-top: 40px;
      border-radius: 10px;
      order: 2;
    }

    @media (min-width: $desktop) {
      margin-top: 0;
      justify-content: space-between;
    }
  }
}

.main-header__item {
  @media (min-width: $tablet) {
    width: 55px;
    height: 55px;
  }

  @media (min-width: $laptop) {
    width: 50px;
    height: 50px;
  }
}

.main-header__skill-icon {
  width: inherit;
  height: inherit;
}

.main-header__resume-block {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 35px;

  @media (min-width: $tablet) {
    flex-direction: column;
    row-gap: 35px;
    order: 1;
  }

  @media (min-width: $desktop) {
    grid-row: 1/4;
    grid-column: 2;
    align-self: start;
    margin-top: 0;
    row-gap: 18px;
  }

  @media (min-width: $laptop) {
    row-gap: 40px;
    margin-bottom: 60px;
  }
}

.main-header__photo {
  display: block;
  border-radius: 50%;

  @media (min-width: $tablet) {
    width: 250px;
    height: 250px;
    // border-radius: 0;
    // animation: ease 6s photoBorder infinite;
  }

  @media (min-width: $desktop) {
    width: 290px;
    height: 290px;
  }

  @media (min-width: $laptop) {
    width: 300px;
    height: 300px;
  }
}

.main-header__link {
  text-align: center;
  text-decoration: none;
  color: $green;
  display: flex;
  width: max-content;
  padding: 12px 20px;
  border-radius: 30px;
  border: 1px solid $green;
  transition: 0.4s;

  &:hover {
    color: $white;
    background-color: $green;
  }

  @media (min-width: $desktop) {
    font-size: 18px;
    padding: 8px 16px;
  }

  @media (min-width: $laptop) {
    font-size: 19px;
    padding: 10px 18px;
  }
}
</style>
