<template>
<section class="projects" id="projects">
  <div class="container">
    <h2 class="projects__title">Проекты</h2>
    <article class="projects__block projects__block--commercial">
      <ul class="projects__list projects__list--commercial">
        <li class="projects__item projects__item--commercial" v-for="li in projects.commercial" :key="li">
          <img class="projects__img" :src="li.img.src" width="330" height="165" :alt="li.img.alt">
          <article class="projects__project">
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
    <article class="projects__block projects__block--tbots">
      <ul class="projects__list projects__list--tbots">
        <li class="projects__item projects__item--tbots" v-for="li in projects.tbots" :key="li">
          <article class="projects__bot-preview">
            <svg class="projects__icon" width="45" height="45">
              <use :href="li.icon"></use>
            </svg>
            <h3>{{ li.name }}</h3>
          </article>
          <p class="projects__description">{{ li.description }}</p>
          <a class="projects__link" :href="li.link.a">{{ li.link.b }}</a>
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
  scroll-margin-top: 1em;

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

.projects__block {
  margin-top: 30px;

  &--tbots {
    margin-top: 45px;
    border-top: 2px solid $green;
    padding-top: 20px;
  }

  @media (min-width: $tablet) {
    margin-top: 60px;

    &--tbots {
      margin-top: 75px;
      padding-top: 30px;
    }
  }

  @media (min-width: $desktop) {
    margin-top: 80px;

    &--tbots {
      margin-top: 90px;
      padding-top: 35px;
    }
  }
}

.projects__list {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 60px;
  margin: 0 auto;

  @media (min-width: $tablet) {
    flex-wrap: wrap;
    row-gap: 90px;

    &--tbots {
      flex-direction: row;
      justify-content: center;
      gap: 22px;
    }
  }

  @media (min-width: $desktop) {
    row-gap: 120px;

    &--tbots {
      gap: 40px;
    }
  }

  @media (min-width: $laptop) {
    row-gap: 130px;

    &--tbots {
      gap: 45px;
    }
  }
}

.projects__item {
  display: flex;
  flex-direction: column;

  &--commercial {
    align-items: center;

    @media (min-width: $tablet) {
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
      padding: 0;
      border-radius: 20px;

      &:nth-child(even) {
        .projects__img {
          order: 1,
        }
      }
    }

    @media (min-width: $laptop) {
      column-gap: 190px;
    }
  }

  &--tbots {
    row-gap: 10px;

    padding: 5px 10px;
    border: 1px solid $green;
    border-radius: 10px;

    @media (min-width: $tablet) {
      row-gap: 12px;
      width: 290px;
    }

    @media (min-width: $desktop) {
      row-gap: 15px;
      width: 380px;
      padding: 10px 20px;
    }

    @media (min-width: $laptop) {
      width: 470px;
      padding: 15px 25px;
    }
  }
}

.projects__img {
  box-shadow: 1px 1px 3px 1px $green;
  border-radius: 15px;

  @media (min-width: $tablet) {
    width: 380px;
    height: 190px;
  }

  @media (min-width: $desktop) {
    width: 550px;
    height: 270px;
  }

  @media (min-width: $laptop) {
    width: 750px;
    height: 370px;
  }
}

.projects__project {
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  margin-top: 25px;

  align-self: start;

  @media (min-width: $tablet) {
    row-gap: 20px;
    width: 280px;
    margin-top: 0;
    padding: 0;
  }

  @media (min-width: $desktop) {
    width: 450px;
    row-gap: 40px;
  }

  @media (min-width: $laptop) {
    width: 570px;
    row-gap: 60px;
  }
}

.projects__subtitle {
  font-size: 20px;
  font-weight: bold;
  color: $grey2;
  text-decoration: none;
  width: max-content;
  border-bottom: 1px solid $grey2;
  transition: 0.4s;

  &:hover {
    color: $green;
    border-bottom: 1px solid $green;
  }

  @media (min-width: $tablet) {
    font-size: 22px;
    padding-bottom: 3px;
  }

  @media (min-width: $desktop) {
    font-size: 30px;
    padding-bottom: 5px;
  }

  @media (min-width: $laptop) {
    font-size: 36px;
  }
}

.projects__description {
  font-weight: 100;
}

.projects__technologies {
  display: flex;
  column-gap: 7px;

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

  @media (min-width: $tablet) {
    padding: 5px 15px;
  }

  @media (min-width: $desktop) {
    padding: 7px 20px;
  }

  @media (min-width: $laptop) {
    padding: 10px 25px;
  }
}

.projects__bot-preview {
  display: flex;
  align-items: end;
  justify-content: center;

  h3 {
    margin-left: 20px;
  }
}

.projects__link {
  text-decoration: none;
  color: $green;
  align-self: center;
  display: block;
  transition: 0.4s;

  &:hover {
    color: $grey2;
  }
}
</style>
