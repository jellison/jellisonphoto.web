<template>
    <div ref="container">
        <nav-bar></nav-bar>

        <div class="container main">
            <hr>
            <h2>Wedding Gallery</h2>
            <hr>
        </div>

        <div class="container main">
            <masonry :images="images"></masonry>
        </div>

        <footer-nav></footer-nav>
    </div>
</template>

<script>
  import Vue from 'vue';

  import NavBar from '../../components/navbar.vue';
  import FooterNav from '../../components/footer.vue';
  import Masonry from '../../components/masonry.vue';
  import WeddingModal from '../../components/modals/wedding.vue';

  export default {
    components: {
      NavBar, FooterNav, Masonry
    },
    data() {
      return {
        images: [
          { url: '/img/weddings/grid-09_full.jpg', preview: '/img/weddings/grid-09.jpg' },
          { url: '/img/weddings/grid-10_full.jpg', preview: '/img/weddings/grid-10.jpg' },
          { url: '/img/weddings/grid-11_full.jpg', preview: '/img/weddings/grid-11.jpg' },
          { url: '/img/weddings/grid-12_full.jpg', preview: '/img/weddings/grid-12.jpg' },
          { url: '/img/weddings/grid-13_full.jpg', preview: '/img/weddings/grid-13.jpg' },
          { url: '/img/weddings/grid-16_full.jpg', preview: '/img/weddings/grid-16.jpg' },
          { url: '/img/weddings/grid-14_full.jpg', preview: '/img/weddings/grid-14.jpg' },
          { url: '/img/weddings/grid-15_full.jpg', preview: '/img/weddings/grid-15.jpg' },
          { url: '/img/weddings/grid-17_full.jpg', preview: '/img/weddings/grid-17.jpg' },
          { url: '/img/weddings/grid-18_full.jpg', preview: '/img/weddings/grid-18.jpg' },
          { url: '/img/weddings/grid-19_full.jpg', preview: '/img/weddings/grid-19.jpg' },
          { url: '/img/weddings/grid-20_full.jpg', preview: '/img/weddings/grid-20.jpg' },
          { url: '/img/weddings/grid-50_full.jpg', preview: '/img/weddings/grid-50.jpg' },
          { url: '/img/weddings/grid-51_full.jpg', preview: '/img/weddings/grid-51.jpg' },
          { url: '/img/weddings/grid-21_full.jpg', preview: '/img/weddings/grid-21.jpg' },
          { url: '/img/weddings/grid-22_full.jpg', preview: '/img/weddings/grid-22.jpg' },
          { url: '/img/weddings/grid-23_full.jpg', preview: '/img/weddings/grid-23.jpg' },
          { url: '/img/weddings/grid-24_full.jpg', preview: '/img/weddings/grid-24.jpg' },
          { url: '/img/weddings/grid-25_full.jpg', preview: '/img/weddings/grid-25.jpg' },
          { url: '/img/weddings/grid-26_full.jpg', preview: '/img/weddings/grid-26.jpg' },
          { url: '/img/weddings/grid-27_full.jpg', preview: '/img/weddings/grid-27.jpg' },
          { url: '/img/weddings/grid-28_full.jpg', preview: '/img/weddings/grid-28.jpg' },
          { url: '/img/weddings/grid-29_full.jpg', preview: '/img/weddings/grid-29.jpg' },
          { url: '/img/weddings/grid-30_full.jpg', preview: '/img/weddings/grid-30.jpg' },
          { url: '/img/weddings/grid-31_full.jpg', preview: '/img/weddings/grid-31.jpg' },
          { url: '/img/weddings/grid-32_full.jpg', preview: '/img/weddings/grid-32.jpg' },
          { url: '/img/weddings/grid-33_full.jpg', preview: '/img/weddings/grid-33.jpg' },
          { url: '/img/weddings/grid-34_full.jpg', preview: '/img/weddings/grid-34.jpg' },
          { url: '/img/weddings/grid-35_full.jpg', preview: '/img/weddings/grid-35.jpg' },
          { url: '/img/weddings/grid-36_full.jpg', preview: '/img/weddings/grid-36.jpg' },
          { url: '/img/weddings/grid-37_full.jpg', preview: '/img/weddings/grid-37.jpg' },
          { url: '/img/weddings/grid-38_full.jpg', preview: '/img/weddings/grid-38.jpg' },
          { url: '/img/weddings/grid-39_full.jpg', preview: '/img/weddings/grid-39.jpg' },
          { url: '/img/weddings/grid-40_full.jpg', preview: '/img/weddings/grid-40.jpg' },
          { url: '/img/weddings/grid-41_full.jpg', preview: '/img/weddings/grid-41.jpg' },
          { url: '/img/weddings/grid-42_full.jpg', preview: '/img/weddings/grid-42.jpg' },
          { url: '/img/weddings/grid-43_full.jpg', preview: '/img/weddings/grid-43.jpg' },
          { url: '/img/weddings/grid-44_full.jpg', preview: '/img/weddings/grid-44.jpg' },
          { url: '/img/weddings/grid-45_full.jpg', preview: '/img/weddings/grid-45.jpg' },
          { url: '/img/weddings/grid-46_full.jpg', preview: '/img/weddings/grid-46.jpg' },
          { url: '/img/weddings/grid-48_full.jpg', preview: '/img/weddings/grid-48.jpg' },
          { url: '/img/weddings/grid-47_full.jpg', preview: '/img/weddings/grid-47.jpg' },
          { url: '/img/weddings/grid-49_full.jpg', preview: '/img/weddings/grid-49.jpg' },
        ]
      }
    },
    methods: {
      onBookNow(selectedPackage){
        var modalClass = Vue.extend(WeddingModal);
        var modal = new modalClass({
          propsData: { defaultPackage: selectedPackage }
        });

        modal.$mount();
        this.$refs.container.appendChild(modal.$el);
      }
    }
  };
</script>

<style>
</style>
