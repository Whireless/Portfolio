<script>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
  import { useGlobalStore } from '../store';

  export default {
    setup() {
      const { projects } = useGlobalStore();
      return {
        projects,
        modules: [Navigation, Pagination, EffectCoverflow],
      }
    },
    components: {
      Swiper,
      SwiperSlide,
    },
  }
</script>

<template>
  <section class="portfolio" id="portfolio">
    <h2 class="portfolio__title">
      Проекты
      <svg width="30" height="30">
        <use href="#project"></use>
      </svg>
    </h2>
    <article class="portfolio__all-projects">
      <article class="portfolio__projects portfolio__projects--commercial">
        <h3 class="portfolio__subtitle portfolio__subtitle--commercial">
          <svg class="main-nav__icon" width="35" height="35">
            <use :href="projects.commercial.icon"></use>
          </svg>
          Коммерческие
        </h3>
        <swiper :modules="modules"
              :space-between="50"
              :pagination="true"
              :navigation="true"
              effect="coverflow"
              :speed="600">
          <swiper-slide v-for="project in projects.commercial.list" :key="project">
            <img class="portfolio__project-img" :src="project.img.src" :alt="project.img.alt" width="280" height="190">
            <article class="portfolio__project-info">
              <a class="portfolio__project-link portfolio__project-link--site" :href="project.site.link">{{ project.site.name }}</a>
              <p>{{ project.description }}</p>
              <a class="portfolio__project-link portfolio__project-link--gh" :href="project.github.link">{{ project.github.name }}</a>
            </article>
          </swiper-slide>
        </swiper>
      </article>
      <article class="portfolio__projects portfolio__projects--personal">
        <h3 class="portfolio__subtitle portfolio__subtitle--personal">
          Личные
          <svg class="main-nav__icon" width="35" height="35">
            <use :href="projects.personal.icon"></use>
          </svg>
        </h3>
        <ul class="portfolio__list portfolio__list--personal">
          <li class="portfolio__item portfolio__item--personal" v-for="project in projects.personal.list" :key="project">
            <img class="portfolio__img" :src="project.img.src" width="280" height="150" :alt="project.img.alt">
            <a :href="project.site.link" class="portfolio__link">{{ project.site.name }}</a>
            <p>{{ project.description }}</p>
          </li>
        </ul>
      </article>
      <article class="portfolio__projects portfolio__projects--study">
        <h3 class="portfolio__subtitle portfolio__subtitle--study">
          <svg class="main-nav__icon" width="35" height="35">
            <use :href="projects.study.icon"></use>
          </svg>
          Учебные
        </h3>
        <ul class="portfolio__list portfolio__list--study">
          <li class="portfolio__item portfolio__item--study" v-for="project in projects.study.list" :key="project">
            <img class="portfolio__img" :src="project.img.src" width="280" height="150" :alt="project.img.alt">
            <a :href="project.site.link" class="portfolio__link">{{ project.site.name }}</a>
            <p>{{ project.description }}</p>
          </li>
        </ul>
      </article>
    </article>
  </section>
</template>

<style lang="scss">
.portfolio {
  padding: $mobileInt 0;
}

.portfolio__title {
  letter-spacing: 3px;
  width: 200px;
  display: flex;
  align-items: center;
  column-gap: 10px;
  padding: 0 0 5px 20px;
  border-bottom: 1px solid $blackColor;
}

.portfolio__all-projects {
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  row-gap: 100px;
}

.portfolio__projects {
  display: flex;
  flex-direction: column;
  align-items: center;

  &:nth-of-type(2) {
    .portfolio__subtitle {
      align-self: start;
    }
  }
}

.portfolio__subtitle {
  font-weight: 500;
  letter-spacing: 2px;
  display: flex;
  column-gap: 10px;
  align-items: center;
  align-self: end;
  width: max-content;
  padding: 5px 20px;
  border-bottom: 1px solid $blackColor;
}

.portfolio__project-img {
  border-radius: 20px;
}

.portfolio__project-info {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 5px;
  border: 1px solid $blackColor;
  border-radius: 20px;
  padding: 5px 0;
}

.portfolio__project-link {
  text-align: center;
  color: $greyColor2;
  transition: 0.7s;

  &:hover {
    opacity: 0.5;
  }
}

.portfolio__list {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 25px;
  width: 275px;
  margin-top: 40px;
  // padding: 0 15px;
  list-style: none;
}

.portfolio__item {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 15px;
  padding: 6px;
  border: 1px solid $blackColor;
  border-radius: 20px;
}

.portfolio__img {
  border-radius: 20px;
}

.portfolio__link {
  color: $greyColor2;
  transition: 0.7s;

  &:hover {
    opacity: 0.5;
  }
}

@media (min-width: $smart) {
  .portfolio__project-img {
    width: 320px;
  }

  .portfolio__project-info {
    row-gap: 10px;
  }

  .portfolio__item {
    width: 308px;
    padding: 9px;
  }

  .portfolio__img {
    width: 315px;
    height: 170px;
  }
}

@media (min-width: $tablet) {
  .portfolio {
    padding: $tabletInt 0;
  }

  .portfolio__title {
    column-gap: 15px;
    width: 210px;
    padding: 0 0 7px 30px;

    svg {
      width: 35px;
      height: 35px;
    }
  }

  .portfolio__subtitle {
    column-gap: 15px;
    padding: 7px 30px;

    svg {
      width: 35px;
      height: 35px;
    }
  }

  .portfolio__project-img {
    width: 100%;
    height: 330px;
  }

  .portfolio__project-info {
    font-size: 20px;
    padding: 15px 0;
    width: 638px;
  }

  .portfolio__item {
    width: 520px;
    padding: 20px;
  }

  .portfolio__img {
    width: 520px;
    height: 285px;
  }
}

@media (min-width: $desktop) {
  .portfolio {
    padding: $desktopInt 0;
  }

  .portfolio__title {
    font-size: 32px;
    column-gap: 20px;
    width: 220px;
    padding: 0 40px 10px 40px;

    svg {
      width: 45px;
      height: 45px;
    }
  }

  .portfolio__subtitle {
    column-gap: 20px;
    padding: 10px 40px;

    svg {
      width: 45px;
      height: 45px;
    }
  }

  .portfolio__project-img {
    height: 430px;
    transition: 0.7s;
    border-radius: 25px;
  }

  .portfolio__project-info {
    position: absolute;
    bottom: 20%;
    width: 250px;
    padding: 15px 20px;
    background-color: $greyColor1;
    border-radius: 25px;
    opacity: 0;
    transition: 0.7s;
  }

  .portfolio__project-link {
    font-size: 23px;
  }

  .portfolio__list {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: start;
    width: 1040px;
    padding: 0;
  }

  .portfolio__item {
    width: 460px;
  }

  .portfolio__img {
    width: 455px;
    height: 260px;
  }
}

@media (min-width: $over-desktop) {
  .portfolio__project-img {
    height: 500px;
  }
}
</style>
