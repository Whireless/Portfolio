<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';

export default {
  data() {
    return {
      projectList: [
        {
          img: {
            src: 'img/projects/Saturn-Braids.png',
            alt: 'Плетут шикарные дреды, кудри и брейды в Питере.',
          },
          projectText: {
            site: 'saturnbraids.ru',
            type: 'Коммерческий',
            github: 'github/saturnbraids',
          },
          projectLink: {
            site: 'https://saturnbraids.ru',
            github: 'https://github.com/Whireless/saturn-braids',
          },
        },
        {
          img: {
            src: 'img/projects/Andrestatix.png',
            alt: 'Если хочешь стать греческим атлетом - тебе сюда.',
          },
          projectText: {
            site: 'andrestatix.com',
            type: 'Коммерческий',
            github: 'github/andrestatix',
          },
          projectLink: {
            site: 'https://andrestatix.com',
            github: 'https://github.com/Whireless/andrestatix',
          },
        },
        {
          img: {
            src: 'img/projects/Easyweather.png',
            alt: 'Акутальная погода в любой точке мира.',
          },
          projectText: {
            site: 'easyweather',
            type: 'Pet-проект',
            github: 'github/weather',
          },
          projectLink: {
            site: 'https://whireless.github.io/weather/',
            github: 'https://github.com/Whireless/weather',
          },
        },
        {
          img: {
            src: 'img/projects/Nevelvend.png',
            alt: 'Лучшие палочки в мире. И это точно.',
          },
          projectText: {
            site: 'Nevelvend',
            type: 'Учебный',
            github: '',
          },
          projectLink: {
            site: 'https://whireless.github.io/Nevelvend/',
            github: '',
          },
        },
        {
          img: {
            src: 'img/projects/Pink.png',
            alt: 'Надоели серые будни? Тогда мы идём к вам!',
          },
          projectText: {
            site: 'Pink',
            type: 'Учебный',
            github: '',
          },
          projectLink: {
            site: 'https://whireless.github.io/Pink/',
            github: '',
          },
        },
        {
          img: {
            src: 'img/projects/ProductFit.png',
            alt: 'На самом деле интернет создали мы.',
          },
          projectText: {
            site: 'ProductFit',
            type: 'Учебный',
            github: '',
          },
          projectLink: {
            site: 'https://whireless.github.io/ProductFit/',
            github: '',
          },
        },
        {
          img: {
            src: 'img/projects/Restaurant.png',
            alt: 'Путник, ты слишком долго искал сочный стейк, в этом ресторане твоя награда.',
          },
          projectText: {
            site: 'Restaurant',
            type: 'Учебный',
            github: '',
          },
          projectLink: {
            site: 'https://whireless.github.io/Restaurant/',
            github: '',
          },
        },
        {
          img: {
            src: 'img/projects/Grand-Theatre.png',
            alt: 'Надо уважать культуру, мать её.',
          },
          projectText: {
            site: 'Grand-Theatre',
            type: 'Учебный',
            github: '',
          },
          projectLink: {
            site: 'https://whireless.github.io/Grand-Theatre/',
            github: '',
          },
        },
        {
          img: {
            src: 'img/projects/Nerds.png',
            alt: 'Они создают внеземной дизайн.',
          },
          projectText: {
            site: 'Nerds',
            type: 'Учебный',
            github: '',
          },
          projectLink: {
            site: 'https://whireless.github.io/Nerds/',
            github: '',
          },
        },
      ],
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
    <div class="container">
      <h2 class="portfolio__title">Проекты</h2>
      <h3 class="portfolio__subtitle">Сайты</h3>
      <swiper :modules="modules"
              :space-between="50"
              :pagination="true"
              :navigation="true"
              effect="coverflow"
              :speed="600">
        <swiper-slide v-for="project in projectList" :key="project">
          <img class="portfolio__project-image" :src="project.img.src" :alt="project.img.alt" width="325" height="220">
          <article class="portfolio__project-info">
            <a class="portfolio__project-link portfolio__project-link--site" :href="project.projectLink.site">{{ project.projectText.site }}</a>
            <p class="portfolio__project-type">Тип: {{ project.projectText.type }}</p>
            <a class="portfolio__project-link portfolio__project-link--gh" :href="project.projectLink.github">{{ project.projectText.github }}</a>
          </article>
        </swiper-slide>
      </swiper>
      <h3 class="portfolio__subtitle">Прочее</h3>
      <ul class="portfolio__other-list">
        <li class="portfolio__other-item">
          <a href="https://t.me/trueetherbot" class="portfolio__other-link">@trueetherbot</a>
          Телеграм-бот для получения погоды в любой точке мира.
        </li>
      </ul>
    </div>
  </section>
</template>
