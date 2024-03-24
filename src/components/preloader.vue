<script>
  import { useGlobalStore } from '../store';
  import { storeToRefs } from 'pinia';

  export default {
    setup() {
      const { preloader } = storeToRefs(useGlobalStore());
      return {
        preloader,
      }
    },
  }
</script>

<template>
  <article :class="['preloader', {'preloader--hidden' : preloader}]">
    <div class="spinner">
      <div class="circle circle--one"></div>
      <div class="circle circle--two"></div>
    </div>
  </article>
</template>
