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

<style lang="scss">
.preloader {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
  visibility: visible;
  background: rgba(18,18,18,1);
  transition: opacity 1s, visibility 0s 0s;

  &--hidden {
    visibility: hidden;
    opacity: 0;
    transition: opacity 1s, visibility 0s 1s;
  }
}

.spinner {
  width: 60px;
  height: 60px;
  position: relative;
  margin: 100px auto;
}

.circle {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: $preloaderColor;
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;
  animation: sk-bounce 2.0s infinite ease-in-out;

  &--two {
    animation-delay: -1.0s;
  }
}
</style>
