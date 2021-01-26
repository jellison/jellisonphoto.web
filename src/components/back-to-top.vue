.
<template>
  <div class="tab-wrapper is-hidden-desktop" v-if="visible">
    <a class="tab" @click.prevent="scrollToTop">
      <i class="fas fa-angle-up"></i>
    </a>
  </div>
</template>

<script>
export default {
  created() {
    window.addEventListener('scroll', this.onScroll);
  },
  data() {
    return {
      scrollPosition: 0
    };
  },
  destroyed() {
    window.removeEventListener('scroll', this.onScroll);
  },
  methods: {
    onScroll() {
      this.scrollPosition = document.documentElement.scrollTop;
    },
    scrollToTop() {
      document.documentElement.scrollTop = 0;
    }
  },
  computed: {
    visible: function () {
      return this.scrollPosition > window.innerHeight * 0.5;
    }
  }
};
</script>

<style lang="scss">
@import '../assets/sass/variables';

.tab-wrapper {
  background-color: $accent-color;
  bottom: 40px;
  border-bottom-left-radius: 11px;
  border-top-left-radius: 11px;
  font-size: 200%;
  height: 35px;
  position: fixed;
  right: 0;
  text-align: center;
  width: 35px;

  .tab {
    color: #fff;
    position: relative;
    text-decoration: none;
    top: -6px;
  }
}
</style>
