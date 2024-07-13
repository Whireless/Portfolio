<template>
<section class="projects" id="projects">
  <div class="container">
    <h2 class="projects__title">Проекты</h2>
    <p class="projects__sub projects__sub--commercial">коммерческие</p>
    <ul class="projects__list projects__list--commercial">
      <li class="projects__item" v-for="li in projects.commercial" :key="li">
        <img class="projects__img" :src="li.img.src" width="280" height="145" :alt="li.img.alt">
        <article class="projects__info">
          <h3 class="projects__subtitle">{{ li.name }}</h3>
          <p class="projects__description">{{ li.description }}</p>
          <div class="projects__technologies">
            <svg class="projects__technologies-icon" v-for="icon in li.technologies" :key="icon" width="25" height="25">
              <use :href="icon"></use>
            </svg>
          </div>
          <div class="projects__links">
            <a class="projects__link" :href="li.site.link">Посмотреть сайт</a>
            <a class="projects__link" :href="li.github">Код проекта</a>
          </div>
        </article>
      </li>
    </ul>
    <p class="projects__sub projects__sub--pets">pet-проекты</p>
    <ul class="projects__list projects__list--pets">
      <li class="projects__item" v-for="li in projects.pets" :key="li">
        <img class="projects__img" :src="li.img.src" width="280" height="145" :alt="li.img.alt">
        <article class="projects__info">
          <h3 class="projects__subtitle">{{ li.name }}</h3>
          <p class="projects__description">{{ li.description }}</p>
          <div class="projects__technologies">
            <svg class="projects__technologies-icon" v-for="icon in li.technologies" :key="icon" width="25" height="25">
              <use :href="icon"></use>
            </svg>
          </div>
          <div class="projects__links">
            <a class="projects__link" :href="li.site.link">Посмотреть сайт</a>
            <a class="projects__link" :href="li.github">Код проекта</a>
          </div>
        </article>
      </li>
    </ul>
  </div>
</section>
</template>

<script>
import { useGlobalStore } from '../store';

export default {
  setup() {
    const { projects } = useGlobalStore();

    return {
      projects,
    }
  },
}
</script>

<style lang='scss'>
.projects__title {
  font-size: 17px;
  color: $green;
  text-transform: uppercase;
  letter-spacing: 1px;

  @media (min-width: $tablet) {
    font-size: 19px;
  }

  @media (min-width: $desktop) {
    font-size: 23px;
  }

  @media (min-width: $laptop) {
    font-size: 26px;
  }
}

.projects__sub {
  text-align: center;
  color: $green;
  width: max-content;
  margin: 20px auto 0 auto;
  padding: 2px 8px;
  border: 1px solid $green;
  border-radius: 20px;
  opacity: 0.8;

  &--pets {
    margin-top: 30px;
  }

  @media (min-width: $smart) {
    &--pets {
    margin-top: 40px;
  }
  }

  @media (min-width: $tablet) {
    margin-top: 15px;
    padding: 5px 14px;

    &--pets {
      margin-top: 60px;
    }
  }

  @media (min-width: $desktop) {
    margin-top: 20px;

    &--pets {
      margin-top: 90px;
    }
  }
}

.projects__list {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 50px;
  margin: 25px auto 0 auto;

  @media (min-width: $smart) {
    row-gap: 60px;
  }

  @media (min-width: $tablet) {
    row-gap: 70px;
    margin: 40px auto 0 auto;
  }

  @media (min-width: $desktop) {
    row-gap: 95px;
    margin: 60px auto 0 auto;
  }

  @media (min-width: $laptop) {
    row-gap: 130px;
    margin: 80px auto 0 auto;
  }
}

.projects__item {
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: $tablet) {
    flex-direction: row;
    justify-content: space-around;
    column-gap: 35px;
    padding: 0;
    border-radius: 20px;
    transition: 0.5s;

    &:hover {
      transform: scale(1.06);
      box-shadow: 1px 1px 5px 1px $green;
    }

    &:nth-child(even) {
      .projects__img {
        order: 1,
      }

      .projects__info {
        padding: 7px 0 7px 8px;
      }
    }
  }

  @media (min-width: $desktop) {
    column-gap: 85px;
  }

  @media (min-width: $laptop) {
    column-gap: 190px;
  }
}

.projects__img {
  box-shadow: 1px 1px 5px 1px $green;
  border-radius: 15px;

  @media (min-width: $smart) {
    width: 345px;
    height: 175px;
  }

  @media (min-width: $tablet) {
    width: 370px;
    height: 195px;
  }

  @media (min-width: $desktop) {
    width: 400px;
    height: 210px;
  }

  @media (min-width: $laptop) {
    width: 480px;
    height: 240px;
  }
}

.projects__info {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 15px;
  margin-top: 20px;

  @media (min-width: $smart) {
    row-gap: 20px;
  }

  @media (min-width: $tablet) {
    text-align: center;
    width: 280px;
    margin-top: 0;
    padding: 7px 8px 7px 0;
  }

  @media (min-width: $desktop) {
    width: 330px;
  }

  @media (min-width: $laptop) {
    width: 450px;
    row-gap: 25px;
  }
}

.projects__description {
  text-align: center;
}

.projects__technologies {
  display: flex;
  column-gap: 7px;
  border: 1px solid $grey2;
  border-radius: 15px;
  padding: 2px 15px;
}

.projects__links {
  display: flex;
  justify-content: space-around;
  width: 100%;
}

.projects__link {
  color: $grey2;
  text-decoration: none;
  transition: 0.5s;

  &:hover {
    color: $green;
  }
}
</style>
