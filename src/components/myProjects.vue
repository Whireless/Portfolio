<template>
<section class="projects" id="projects">
  <div class="container">
    <h2 class="projects__title">Проекты</h2>
    <article class="projects__all projects__all--commercial">
      <h3 class="projects__sub projects__sub--commercial">коммерческие</h3>
      <ul class="projects__list projects__list--commercial">
        <li class="projects__item" v-for="li in projects.commercial" :key="li">
          <img class="projects__img" :src="li.img.src" width="280" height="145" :alt="li.img.alt">
          <article class="projects__block">
            <a class="projects__subtitle" :href="li.site.link">{{ li.site.name }}</a>
            <p class="projects__description">{{ li.description }}</p>
            <div class="projects__info">
              <a class="projects__code" :href="li.github">Код проекта</a>
              <p class="projects__year">{{ li.year }}</p>
            </div>
          </article>
        </li>
      </ul>
    </article>
    <article class="projects__all projects__all--pets">
      <h3 class="projects__sub projects__sub--pets">pet-проекты</h3>
      <ul class="projects__list projects__list--pets">
        <li class="projects__item" v-for="li in projects.pets" :key="li">
          <img class="projects__img" :src="li.img.src" width="280" height="145" :alt="li.img.alt">
          <article class="projects__block">
            <a class="projects__subtitle" :href="li.site.link">{{ li.site.name }}</a>
            <p class="projects__description">{{ li.description }}</p>
            <div class="projects__info">
              <a class="projects__code" :href="li.github">Код проекта</a>
              <p class="projects__year">{{ li.year }}</p>
            </div>
          </article>
        </li>
      </ul>
    </article>
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

.projects__all {
  &--pets {
    margin-top: 30px;
  }

  @media (min-width: $smart) {
    &--pets {
      margin-top: 40px;
    }
  }

  @media (min-width: $tablet) {
    &--pets {
      margin-top: 60px;
    }
  }

  @media (min-width: $desktop) {
    &--pets {
      margin-top: 90px;
    }
  }
}

.projects__sub {
  font-weight: 100;
  text-align: center;
  color: $grey2;
  width: max-content;
  margin: 20px auto 0 auto;
  opacity: 0.8;

  @media (min-width: $tablet) {
    margin-top: 15px;
  }

  @media (min-width: $desktop) {
    margin-top: 35px;
  }
}

.projects__list {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 60px;
  margin: 25px auto 0 auto;

  @media (min-width: $smart) {
    row-gap: 70px;
  }

  @media (min-width: $tablet) {
    row-gap: 90px;
    margin: 40px auto 0 auto;
  }

  @media (min-width: $desktop) {
    row-gap: 120px;
    margin: 50px auto 0 auto;
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
  // align-content: center;
  // justify-content: center;

  @media (min-width: $tablet) {
    flex-direction: row;
    justify-content: space-around;
    column-gap: 40px;
    padding: 0;
    border-radius: 20px;

    &:nth-child(even) {
      .projects__img {
        order: 1,
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
  box-shadow: 1px 1px 3px 1px $green;
  border-radius: 15px;

  @media (min-width: $smart) {
    width: 350px;
    height: 175px;
  }

  @media (min-width: $tablet) {
    width: 320px;
    height: 160px;
  }

  @media (min-width: $desktop) {
    width: 425px;
    height: 210px;
  }

  @media (min-width: $laptop) {
    width: 480px;
    height: 240px;
  }
}

.projects__block {
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  margin-top: 25px;

  @media (min-width: $smart) {
    width: 100%;
  }

  @media (min-width: $tablet) {
    // align-self: start;
    margin-top: 0;
    padding: 0;
    row-gap: 13px;
  }

  @media (min-width: $desktop) {
    row-gap: 22px;
  }

  @media (min-width: $laptop) {
    width: 450px;
    row-gap: 30px;
  }
}

.projects__subtitle {
  font-weight: bold;
  // color: $green;
  color: $grey2;
  text-decoration: none;
  width: max-content;
  border-bottom: 1px solid $grey2;
  transition: 0.4s;

  &:hover {
    // color: $black2;
    color: $green;
    border-bottom: 1px solid $green;
  }

  @media (min-width: $tablet) {
    padding-bottom: 2px;
  }

  @media (min-width: $desktop) {
    padding-bottom: 3px;
  }
}

.projects__description {
  text-align: justify;
  font-weight: 100;
}

.projects__technologies {
  display: flex;
  column-gap: 7px;

  @media (min-width: $smart) {
    column-gap: 9px;
  }

  @media (min-width: $desktop) {
    column-gap: 15px;
  }

  @media (min-width: $laptop) {
    column-gap: 20px;
  }
}

.projects__info {
  display: flex;
  column-gap: 15px;

  @media (min-width: $smart) {
    column-gap: 20px;
  }

  @media (min-width: $tablet) {
    column-gap: 25px;
  }

  @media (min-width: $desktop) {
    column-gap: 30px;
  }

  @media (min-width: $laptop) {
    column-gap: 35px;
  }
}

.projects__year {
  align-self: center;
}

.projects__code {
  color: $green;
  text-decoration: none;
  transition: 0.4s;
  width: max-content;
  padding: 2px 9px;
  border: 1px solid $green;
  border-radius: 25px;

  &:hover {
    color: $white;
    background-color: $green;
  }

  @media (min-width: $smart) {
    padding: 3px 11px;
  }

  @media (min-width: $tablet) {
    padding: 3px 12px;
  }

  @media (min-width: $desktop) {
    padding: 4px 15px;
  }

  @media (min-width: $laptop) {
    padding: 5px 20px;
  }
}
</style>
