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
        <svg class="skills__icon" width="85" height="85">
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

<style lang="scss">
.skills {
  display: flex;
  flex-direction: column;
  padding: $mobileInt 0;
}

.skills__title {
  letter-spacing: 3px;
  width: 200px;
  display: flex;
  align-items: center;
  column-gap: 10px;
  padding: 0 0 5px 20px;
  border-bottom: 1px solid $blackColor;
}

.skills__skills-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 130px;
  margin: 80px 0 0 0;
  list-style: none;
}

.skills__skills-item {
  text-align: center;
  display: flex;
  align-items: center;
  column-gap: 15px;

  &:nth-of-type(2) {
    .skills__skills-info {
      order: -1;
    }
  }
}

.skills__skills-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 15px;
}

.skills__subtitle {
  width: 200px;
  font-weight: 500;
  letter-spacing: 3px;
  padding-bottom: 5px;
  border-bottom: 1px solid $blackColor;
}

.skills__details-list {
  font-weight: 200;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 5px;
  list-style: none;
}

@media (min-width: $smart) {
  .skills__skills-item {
    column-gap: 25px;
  }

  .skills__icon {
    width: 95px;
    height: 95px;
  }
}

@media (min-width: $tablet) {
  .skills {
    padding: 100px 0 $tabletInt 0;
  }

  .skills__title {
    column-gap: 15px;
    width: 210px;
    padding: 0 0 7px 30px;

    svg {
      width: 35px;
      height: 35px;
    }
  }

  .skills__skills-list {
    flex-direction: row;
    align-self: center;
    justify-content: space-evenly;
    width: 668px;
    margin: 70px 0 0 0;
  }

  .skills__skills-item {
    flex-direction: column;
    align-self: start;
    row-gap: 30px;

    &:nth-of-type(2) {
      .skills__icon {
        order: -1;
      }
    }
  }
}

@media (min-width: $desktop) {
  .skills {
    padding: $desktopInt 0;
  }

  .skills__title {
    font-size: 32px;
    column-gap: 20px;
    width: 210px;
    padding: 0 40px 10px 40px;

    svg {
      width: 45px;
      height: 45px;
    }
  }

  .skills__description {
    margin-top: 30px;
  }

  .skills__skills-list {
    width: 960px;
    margin: 80px 0 0 0;
  }

  .skills__skills-item {
    row-gap: 30px;
  }

  .skills__icon {
    width: 100px;
    height: 100px;
  }
}
</style>
