<template>
  <main :class="{'dark-theme' : theme.status}">
    <main-header></main-header>
    <my-projects></my-projects>
    <my-contacts></my-contacts>
    <main-footer></main-footer>
  </main>
</template>

<script>
import mainHeader from './components/mainHeader.vue';
import myProjects from './components/myProjects.vue';
import myContacts from './components/myContacts.vue';
import mainFooter from './components/mainFooter.vue';

import { useGlobalStore } from './store';
import { storeToRefs } from 'pinia';

export default {
  setup() {
    const { theme } = storeToRefs(useGlobalStore());

    return {
      theme,
    }
  },
  components: {
    mainHeader,
    myProjects,
    myContacts,
    mainFooter,
  },
}
</script>

<style>

</style>
