<template>
  <div ref="container">
    <nav-bar></nav-bar>

    <div class="container main">
      <hr />
      <h2>Senior Session Gallery</h2>
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
      '/img/senior/gallery/Knoxville_Senior_Photographer-01.jpg',
      '/img/senior/gallery/Knoxville_Senior_Photographer-02.jpg',
      '/img/senior/gallery/Knoxville_Senior_Photographer-03.jpg',
      '/img/senior/gallery/Knoxville_Senior_Photographer-04.jpg',
      '/img/senior/gallery/Knoxville_Senior_Photographer-05.jpg',
      '/img/senior/gallery/Knoxville_Senior_Photographer-06.jpg',
      '/img/senior/gallery/Knoxville_Senior_Photographer-07.jpg',
      '/img/senior/gallery/Knoxville_Senior_Photographer-08.jpg',
      '/img/senior/gallery/Knoxville_Senior_Photographer-09.jpg',
      '/img/senior/gallery/Knoxville_Senior_Photographer-10.jpg',
      '/img/senior/gallery/Knoxville_Senior_Photographer-11.jpg',
      '/img/senior/gallery/Knoxville_Senior_Photographer-12.jpg',
      '/img/senior/gallery/Knoxville_Senior_Photographer-13.jpg',
      '/img/senior/gallery/Knoxville_Senior_Photographer-14.jpg',
      '/img/senior/gallery/Knoxville_Senior_Photographer-15.jpg',
      '/img/senior/gallery/Knoxville_Senior_Photographer-16.jpg',
      '/img/senior/gallery/Knoxville_Senior_Photographer-17.jpg',
      '/img/senior/gallery/Knoxville_Senior_Photographer-18.jpg',
      '/img/senior/gallery/Knoxville_Senior_Photographer-19.jpg',
      '/img/senior/gallery/Knoxville_Senior_Photographer-20.jpg',
      '/img/senior/gallery/Knoxville_Senior_Photographer-21.jpg',
      '/img/senior/gallery/Knoxville_Senior_Photographer-22.jpg',
      '/img/senior/gallery/Knoxville_Senior_Photographer-23.jpg',
      '/img/senior/gallery/Knoxville_Senior_Photographer-24.jpg',
      '/img/senior/gallery/Knoxville_Senior_Photographer-25.jpg',
      '/img/senior/gallery/Knoxville_Senior_Photographer-26.jpg',
      '/img/senior/gallery/Knoxville_Senior_Photographer-27.jpg',
      '/img/senior/gallery/Knoxville_Senior_Photographer-28.jpg',
      '/img/senior/gallery/Knoxville_Senior_Photographer-29.jpg',
      '/img/senior/gallery/Knoxville_Senior_Photographer-30.jpg',
      '/img/senior/gallery/Knoxville_Senior_Photographer-31.jpg',
      '/img/senior/gallery/Knoxville_Senior_Photographer-32.jpg',
      '/img/senior/gallery/Knoxville_Senior_Photographer-33.jpg',
      '/img/senior/gallery/Knoxville_Senior_Photographer-34.jpg',
      '/img/senior/gallery/Knoxville_Senior_Photographer-35.jpg',
      '/img/senior/gallery/Knoxville_Senior_Photographer-36.jpg',
      '/img/senior/gallery/Knoxville_Senior_Photographer-37.jpg',
      '/img/senior/gallery/Knoxville_Senior_Photographer-38.jpg',
      '/img/senior/gallery/Knoxville_Senior_Photographer-39.jpg',
      '/img/senior/gallery/Knoxville_Senior_Photographer-40.jpg',
      '/img/senior/gallery/Knoxville_Senior_Photographer-41.jpg',
      '/img/senior/gallery/Knoxville_Senior_Photographer-42.jpg',
      '/img/senior/gallery/Knoxville_Senior_Photographer-43.jpg',
      '/img/senior/gallery/Knoxville_Senior_Photographer-44.jpg',
      '/img/senior/gallery/Knoxville_Senior_Photographer-45.jpg',
      '/img/senior/gallery/Knoxville_Senior_Photographer-46.jpg',
      '/img/senior/gallery/Knoxville_Senior_Photographer-47.jpg',
      '/img/senior/gallery/Knoxville_Senior_Photographer-48.jpg',
      '/img/senior/gallery/Knoxville_Senior_Photographer-49.jpg',
      '/img/senior/gallery/Knoxville_Senior_Photographer-50.jpg',
      '/img/senior/gallery/Knoxville_Senior_Photographer-51.jpg',
      '/img/senior/gallery/Knoxville_Senior_Photographer-52.jpg',
      '/img/senior/gallery/Knoxville_Senior_Photographer-53.jpg',
      '/img/senior/gallery/Knoxville_Senior_Photographer-54.jpg',
      '/img/senior/gallery/Knoxville_Senior_Photographer-55.jpg',
      '/img/senior/gallery/Knoxville_Senior_Photographer-56.jpg',
      '/img/senior/gallery/Knoxville_Senior_Photographer-57.jpg',
      '/img/senior/gallery/Knoxville_Senior_Photographer-58.jpg',
      '/img/senior/gallery/Knoxville_Senior_Photographer-59.jpg',
      '/img/senior/gallery/Knoxville_Senior_Photographer-60.jpg',
      '/img/senior/gallery/Knoxville_Senior_Photographer-61.jpg',
      '/img/senior/gallery/Knoxville_Senior_Photographer-62.jpg',
      '/img/senior/gallery/Knoxville_Senior_Photographer-63.jpg',
      '/img/senior/gallery/Knoxville_Senior_Photographer-64.jpg',
      '/img/senior/gallery/Knoxville_Senior_Photographer-65.jpg'
    ];

    return {
      images: images.map((i) => ({ url: i, preview: i }))
    };
  }
};
</script>

<style></style>
