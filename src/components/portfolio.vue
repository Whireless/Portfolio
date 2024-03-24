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
            <img class="portfolio__project-image" :src="project.img.src" :alt="project.img.alt" width="310" height="200">
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
            <img class="portfolio__img" :src="project.img.src" width="310" height="160" :alt="project.img.alt">
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
            <img class="portfolio__img" :src="project.img.src" width="310" height="160" :alt="project.img.alt">
            <a :href="project.site.link" class="portfolio__link">{{ project.site.name }}</a>
            <p>{{ project.description }}</p>
          </li>
        </ul>
      </article>
    </article>
  </section>
</template>
