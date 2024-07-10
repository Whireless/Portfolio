<template>
<section class="contacts" id="contacts">
  <div class="container">
    <h2 class="contacts__title">Контакты</h2>
    <ul class="contacts__list" aria-label="Способы связи со мной">
      <li class="contacts__item" v-for="li in contacts" :key="li">
        <a class="contacts__link" :href="li.href">
          <svg class="contacts__icon" width="35" height="35">
            <use :href="li.icon"></use>
          </svg>
          <span>{{ li.aria }}</span>
        </a>
      </li>
    </ul>
  </div>
</section>
</template>

<script>
import { useGlobalStore } from '../store';

export default {
  setup() {
    const { contacts } = useGlobalStore();

    return {
      contacts,
    }
  },
}
</script>

<style lang="scss">
.contacts {
  background-color: $grey;
  transition: 0.5s;
}

.contacts__title {
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

.contacts__list {
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  row-gap: 15px;

  @media (min-width: $tablet) {
    flex-direction: row;
    justify-content: space-between;
    margin-top: 40px;
  }

  @media (min-width: $desktop) {
    margin-top: 60px;
  }

  @media (min-width: $laptop) {
    margin-top: 70px;
  }
}

.contacts__link {
  color: $grey2;
  text-decoration: none;
  display: flex;
  align-items: center;
  column-gap: 15px;
  width: max-content;
  transition: 0.5s;

  &:hover {
    color: $green;
  }

  @media (min-width: $tablet) {
    font-size: 15px;
  }

  @media (min-width: $desktop) {
    font-size: 18px;
  }

  @media (min-width: $laptop) {
    font-size: 19px;
    column-gap: 20px;
  }
}

.contacts__icon {
  fill: $black2;
  transition: 0.5s;

  @media (min-width: $desktop) {
    width: 40px;
    height: 40px;
  }

  @media (min-width: $laptop) {
    width: 45px;
    height: 45px;
  }
}
</style>
