<template>
  <div>
    <router-view />
    <back-to-top />
  </div>
</template>

<script>
import BackToTop from './components/back-to-top.vue';

export default {
  components: {
    BackToTop
  }
};
</script>

<style></style>
