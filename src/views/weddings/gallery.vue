<template>
  <div ref="container">
    <nav-bar></nav-bar>

    <div class="container main">
      <hr />
      <h2>Wedding Gallery</h2>
      <hr />
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

export default {
  components: {
    NavBar,
    FooterNav,
    Masonry
  },
  data() {
    var images = [
      '/img/weddings/gallery/Knoxville_Wedding_Photographer-61.jpg',
      '/img/weddings/gallery/Knoxville_Wedding_Photographer-62.jpg',
      '/img/weddings/gallery/Knoxville_Wedding_Photographer-63.jpg',
      '/img/weddings/gallery/Knoxville_Wedding_Photographer-64.jpg',
      '/img/weddings/gallery/Knoxville_Wedding_Photographer-65.jpg',
      '/img/weddings/gallery/Knoxville_Wedding_Photographer-66.jpg',
      '/img/weddings/gallery/Knoxville_Wedding_Photographer-67.jpg',
      '/img/weddings/gallery/Knoxville_Wedding_Photographer-68.jpg',
      '/img/weddings/gallery/Knoxville_Wedding_Photographer-69.jpg',
      '/img/weddings/gallery/Knoxville_Wedding_Photographer-70.jpg',
      '/img/weddings/gallery/Knoxville_Wedding_Photographer-71.jpg',
      '/img/weddings/gallery/Knoxville_Wedding_Photographer-72.jpg',
      '/img/weddings/gallery/Knoxville_Wedding_Photographer-73.jpg',
      '/img/weddings/gallery/Knoxville_Wedding_Photographer-74.jpg',
      '/img/weddings/gallery/Knoxville_Wedding_Photographer-75.jpg',
      '/img/weddings/gallery/Knoxville_Wedding_Photographer-76.jpg',
      '/img/weddings/gallery/Knoxville_Wedding_Photographer-77.jpg',
      '/img/weddings/gallery/Knoxville_Wedding_Photographer-78.jpg',
      '/img/weddings/gallery/Knoxville_Wedding_Photographer-79.jpg',
      '/img/weddings/gallery/Knoxville_Wedding_Photographer-80.jpg',
      '/img/weddings/gallery/Knoxville_Wedding_Photographer-81.jpg',
      '/img/weddings/gallery/Knoxville_Wedding_Photographer-14.jpg',
      '/img/weddings/gallery/Knoxville_Wedding_Photographer-02.jpg',
      '/img/weddings/gallery/Knoxville_Wedding_Photographer-03.jpg',
      '/img/weddings/gallery/Knoxville_Wedding_Photographer-04.jpg',
      '/img/weddings/gallery/Knoxville_Wedding_Photographer-05.jpg',
      '/img/weddings/gallery/Knoxville_Wedding_Photographer-06.jpg',
      '/img/weddings/gallery/Knoxville_Wedding_Photographer-07.jpg',
      '/img/weddings/gallery/Knoxville_Wedding_Photographer-08.jpg',
      '/img/weddings/gallery/Knoxville_Wedding_Photographer-09.jpg',
      '/img/weddings/gallery/Knoxville_Wedding_Photographer-10.jpg',
      '/img/weddings/gallery/Knoxville_Wedding_Photographer-11.jpg',
      '/img/weddings/gallery/Knoxville_Wedding_Photographer-12.jpg',
      '/img/weddings/gallery/Knoxville_Wedding_Photographer-13.jpg',
      '/img/weddings/gallery/Knoxville_Wedding_Photographer-01.jpg',
      '/img/weddings/gallery/Knoxville_Wedding_Photographer-15.jpg',
      '/img/weddings/gallery/Knoxville_Wedding_Photographer-16.jpg',
      '/img/weddings/gallery/Knoxville_Wedding_Photographer-17.jpg',
      '/img/weddings/gallery/Knoxville_Wedding_Photographer-18.jpg',
      '/img/weddings/gallery/Knoxville_Wedding_Photographer-19.jpg',
      '/img/weddings/gallery/Knoxville_Wedding_Photographer-20.jpg',
      '/img/weddings/gallery/Knoxville_Wedding_Photographer-21.jpg',
      '/img/weddings/gallery/Knoxville_Wedding_Photographer-22.jpg',
      '/img/weddings/gallery/Knoxville_Wedding_Photographer-23.jpg',
      '/img/weddings/gallery/Knoxville_Wedding_Photographer-24.jpg',
      '/img/weddings/gallery/Knoxville_Wedding_Photographer-25.jpg',
      '/img/weddings/gallery/Knoxville_Wedding_Photographer-26.jpg',
      '/img/weddings/gallery/Knoxville_Wedding_Photographer-27.jpg',
      '/img/weddings/gallery/Knoxville_Wedding_Photographer-28.jpg',
      '/img/weddings/gallery/Knoxville_Wedding_Photographer-29.jpg',
      '/img/weddings/gallery/Knoxville_Wedding_Photographer-30.jpg',
      '/img/weddings/gallery/Knoxville_Wedding_Photographer-31.jpg',
      '/img/weddings/gallery/Knoxville_Wedding_Photographer-32.jpg',
      '/img/weddings/gallery/Knoxville_Wedding_Photographer-33.jpg',
      '/img/weddings/gallery/Knoxville_Wedding_Photographer-34.jpg',
      '/img/weddings/gallery/Knoxville_Wedding_Photographer-35.jpg',
      '/img/weddings/gallery/Knoxville_Wedding_Photographer-36.jpg',
      '/img/weddings/gallery/Knoxville_Wedding_Photographer-37.jpg',
      '/img/weddings/gallery/Knoxville_Wedding_Photographer-38.jpg',
      '/img/weddings/gallery/Knoxville_Wedding_Photographer-39.jpg',
      '/img/weddings/gallery/Knoxville_Wedding_Photographer-40.jpg',
      '/img/weddings/gallery/Knoxville_Wedding_Photographer-41.jpg',
      '/img/weddings/gallery/Knoxville_Wedding_Photographer-42.jpg',
      '/img/weddings/gallery/Knoxville_Wedding_Photographer-43.jpg',
      '/img/weddings/gallery/Knoxville_Wedding_Photographer-44.jpg',
      '/img/weddings/gallery/Knoxville_Wedding_Photographer-45.jpg',
      '/img/weddings/gallery/Knoxville_Wedding_Photographer-46.jpg',
      '/img/weddings/gallery/Knoxville_Wedding_Photographer-48.jpg',
      '/img/weddings/gallery/Knoxville_Wedding_Photographer-49.jpg',
      '/img/weddings/gallery/Knoxville_Wedding_Photographer-50.jpg',
      '/img/weddings/gallery/Knoxville_Wedding_Photographer-51.jpg',
      '/img/weddings/gallery/Knoxville_Wedding_Photographer-52.jpg',
      '/img/weddings/gallery/Knoxville_Wedding_Photographer-53.jpg',
      '/img/weddings/gallery/Knoxville_Wedding_Photographer-54.jpg',
      '/img/weddings/gallery/Knoxville_Wedding_Photographer-55.jpg',
      '/img/weddings/gallery/Knoxville_Wedding_Photographer-56.jpg',
      '/img/weddings/gallery/Knoxville_Wedding_Photographer-57.jpg',
      '/img/weddings/gallery/Knoxville_Wedding_Photographer-58.jpg',
      '/img/weddings/gallery/Knoxville_Wedding_Photographer-60.jpg'
    ];

    return {
      images: images.map((i) => ({ url: i, preview: i }))
    };
  }
};
</script>

<style></style>
