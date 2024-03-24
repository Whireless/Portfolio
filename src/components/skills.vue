<script>
  import { useGlobalStore } from '../store';

  export default {
    setup() {
      const { skillsList } = useGlobalStore();
      return {
        skillsList,
      }
    },
  }
</script>

<template>
  <section class="skills" id="skills">
    <h2 class="skills__title">
      Скиллы
      <svg width="30" height="30">
        <use href="#skill"></use>
      </svg>
    </h2>
    <ul class="skills__skills-list" aria-label="Список моих скиллов">
      <li class="skills__skills-item" v-for="skill in skillsList" :key="skill">
        <svg class="skills__icon" width="100" height="100">
          <use :href="skill.icon"></use>
        </svg>
        <article class="skills__skills-info">
          <h3 class="skills__subtitle">{{ skill.title }}</h3>
          <ul class="skills__details-list">
            <li class="skills__details-item" v-for="detailsItem in skill.detailsList" :key="detailsItem">{{ detailsItem }}</li>
          </ul>
        </article>
      </li>
    </ul>
  </section>
</template>
