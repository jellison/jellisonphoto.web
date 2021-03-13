<template>
  <div>
    <analytics />
    <router-view />
    <back-to-top />
  </div>
</template>

<script>
import Analytics from './components/analytics.vue';
import BackToTop from './components/back-to-top.vue';

export default {
  components: {
    Analytics,
    BackToTop
  }
};
</script>

<style></style>
