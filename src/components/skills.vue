<script>
export default {
  data() {
    return {
      skillsList: [
        {
          title: 'Frontend',
          detailsList: ['JS ES6+', 'Vue 3', 'Pinia (Vuex)', 'SCSS', 'БЭМ', '@keyframes', '@media',],
        },
        {
          title: 'Backend',
          detailsList: ['NodeJS', 'Express.js', 'Nginx',],
        },
        {
          title: 'Dev Tool',
          detailsList: ['Git', 'NPM', 'Figma','Vite', 'Gulp',],
        },
      ],
    }
  },
}
</script>

<template>
  <section class="skills" id="skills">
     <div class="container">
      <h2 class="skills__title">Скиллы</h2>
      <ul class="skills__skills-list" aria-label="Список моих скиллов">
        <li class="skills__skills-item" v-for="li in skillsList" v-bind:key="li">
          <h3 class="skills__skills-title">{{ li.title }}</h3>
          <ul class="skills__details-list">
            <li class="skills__details-item" v-for="detailsItem in li.detailsList" v-bind:key="detailsItem">{{ detailsItem }}</li>
          </ul>
        </li>
      </ul>
    </div>
  </section>
</template>