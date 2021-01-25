<template>
  <div ref="container">
    <nav-bar></nav-bar>

    <div class="container main">
      <hr />
      <h2>Regular Session Gallery</h2>
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
      '/img/regular/gallery/Knoxville_Photographer-01.jpg',
      '/img/regular/gallery/Knoxville_Photographer-02.jpg',
      '/img/regular/gallery/Knoxville_Photographer-03.jpg',
      '/img/regular/gallery/Knoxville_Photographer-04.jpg',
      '/img/regular/gallery/Knoxville_Photographer-05.jpg',
      '/img/regular/gallery/Knoxville_Photographer-06.jpg',
      '/img/regular/gallery/Knoxville_Photographer-07.jpg',
      '/img/regular/gallery/Knoxville_Photographer-08.jpg',
      '/img/regular/gallery/Knoxville_Photographer-09.jpg',
      '/img/regular/gallery/Knoxville_Photographer-10.jpg',
      '/img/regular/gallery/Knoxville_Photographer-11.jpg',
      '/img/regular/gallery/Knoxville_Photographer-12.jpg',
      '/img/regular/gallery/Knoxville_Photographer-13.jpg',
      '/img/regular/gallery/Knoxville_Photographer-14.jpg',
      '/img/regular/gallery/Knoxville_Photographer-15.jpg',
      '/img/regular/gallery/Knoxville_Photographer-16.jpg',
      '/img/regular/gallery/Knoxville_Photographer-17.jpg',
      '/img/regular/gallery/Knoxville_Photographer-18.jpg',
      '/img/regular/gallery/Knoxville_Photographer-19.jpg',
      '/img/regular/gallery/Knoxville_Photographer-20.jpg',
      '/img/regular/gallery/Knoxville_Photographer-21.jpg',
      '/img/regular/gallery/Knoxville_Photographer-22.jpg',
      '/img/regular/gallery/Knoxville_Photographer-23.jpg',
      '/img/regular/gallery/Knoxville_Photographer-24.jpg',
      '/img/regular/gallery/Knoxville_Photographer-25.jpg',
      '/img/regular/gallery/Knoxville_Photographer-26.jpg',
      '/img/regular/gallery/Knoxville_Photographer-27.jpg',
      '/img/regular/gallery/Knoxville_Photographer-28.jpg',
      '/img/regular/gallery/Knoxville_Photographer-29.jpg',
      '/img/regular/gallery/Knoxville_Photographer-30.jpg',
      '/img/regular/gallery/Knoxville_Photographer-31.jpg',
      '/img/regular/gallery/Knoxville_Photographer-32.jpg',
      '/img/regular/gallery/Knoxville_Photographer-33.jpg',
      '/img/regular/gallery/Knoxville_Photographer-34.jpg',
      '/img/regular/gallery/Knoxville_Photographer-35.jpg',
      '/img/regular/gallery/Knoxville_Photographer-36.jpg',
      '/img/regular/gallery/Knoxville_Photographer-37.jpg',
      '/img/regular/gallery/Knoxville_Photographer-38.jpg',
      '/img/regular/gallery/Knoxville_Photographer-39.jpg',
      '/img/regular/gallery/Knoxville_Photographer-40.jpg',
      '/img/regular/gallery/Knoxville_Photographer-41.jpg',
      '/img/regular/gallery/Knoxville_Photographer-42.jpg',
      '/img/regular/gallery/Knoxville_Photographer-43.jpg',
      '/img/regular/gallery/Knoxville_Photographer-44.jpg',
      '/img/regular/gallery/Knoxville_Photographer-45.jpg',
      '/img/regular/gallery/Knoxville_Photographer-46.jpg',
      '/img/regular/gallery/Knoxville_Photographer-47.jpg',
      '/img/regular/gallery/Knoxville_Photographer-48.jpg',
      '/img/regular/gallery/Knoxville_Photographer-49.jpg',
      '/img/regular/gallery/Knoxville_Photographer-50.jpg',
      '/img/regular/gallery/Knoxville_Photographer-51.jpg',
      '/img/regular/gallery/Knoxville_Photographer-52.jpg',
      '/img/regular/gallery/Knoxville_Photographer-53.jpg',
      '/img/regular/gallery/Knoxville_Photographer-54.jpg',
      '/img/regular/gallery/Knoxville_Photographer-55.jpg',
      '/img/regular/gallery/Knoxville_Photographer-56.jpg',
      '/img/regular/gallery/Knoxville_Photographer-57.jpg',
      '/img/regular/gallery/Knoxville_Photographer-58.jpg',
      '/img/regular/gallery/Knoxville_Photographer-59.jpg',
      '/img/regular/gallery/Knoxville_Photographer-60.jpg',
      '/img/regular/gallery/Knoxville_Photographer-61.jpg',
      '/img/regular/gallery/Knoxville_Photographer-62.jpg',
      '/img/regular/gallery/Knoxville_Photographer-63.jpg',
      '/img/regular/gallery/Knoxville_Photographer-64.jpg',
      '/img/regular/gallery/Knoxville_Photographer-65.jpg',
      '/img/regular/gallery/Knoxville_Photographer-66.jpg',
      '/img/regular/gallery/Knoxville_Photographer-67.jpg',
      '/img/regular/gallery/Knoxville_Photographer-68.jpg',
      '/img/regular/gallery/Knoxville_Photographer-69.jpg',
      '/img/regular/gallery/Knoxville_Photographer-70.jpg',
      '/img/regular/gallery/Knoxville_Photographer-71.jpg',
      '/img/regular/gallery/Knoxville_Photographer-72.jpg',
      '/img/regular/gallery/Knoxville_Photographer-73.jpg',
      '/img/regular/gallery/Knoxville_Photographer-74.jpg',
      '/img/regular/gallery/Knoxville_Photographer-75.jpg',
      '/img/regular/gallery/Knoxville_Photographer-76.jpg',
      '/img/regular/gallery/Knoxville_Photographer-77.jpg',
      '/img/regular/gallery/Knoxville_Photographer-78.jpg',
      '/img/regular/gallery/Knoxville_Photographer-79.jpg',
      '/img/regular/gallery/Knoxville_Photographer-80.jpg',
      '/img/regular/gallery/Knoxville_Photographer-81.jpg',
      '/img/regular/gallery/Knoxville_Photographer-82.jpg',
      '/img/regular/gallery/Knoxville_Photographer-83.jpg',
      '/img/regular/gallery/Knoxville_Photographer-84.jpg',
      '/img/regular/gallery/Knoxville_Photographer-85.jpg',
      '/img/regular/gallery/Knoxville_Photographer-86.jpg',
      '/img/regular/gallery/Knoxville_Photographer-87.jpg',
      '/img/regular/gallery/Knoxville_Photographer-88.jpg',
      '/img/regular/gallery/Knoxville_Photographer-89.jpg',
      '/img/regular/gallery/Knoxville_Photographer-90.jpg',
      '/img/regular/gallery/Knoxville_Photographer-91.jpg',
      '/img/regular/gallery/Knoxville_Photographer-92.jpg',
      '/img/regular/gallery/Knoxville_Photographer-93.jpg',
      '/img/regular/gallery/Knoxville_Photographer-94.jpg',
      '/img/regular/gallery/Knoxville_Photographer-95.jpg',
      '/img/regular/gallery/Knoxville_Photographer-96.jpg',
      '/img/regular/gallery/Knoxville_Photographer-97.jpg',
      '/img/regular/gallery/Knoxville_Photographer-98.jpg',
      '/img/regular/gallery/Knoxville_Photographer-99.jpg',
      '/img/regular/gallery/Knoxville_Photographer-100.jpg',
      '/img/regular/gallery/Knoxville_Photographer-101.jpg',
      '/img/regular/gallery/Knoxville_Photographer-102.jpg',
      '/img/regular/gallery/Knoxville_Photographer-103.jpg',
      '/img/regular/gallery/Knoxville_Photographer-104.jpg'
    ];

    return {
      images: images.map((i) => ({ url: i, preview: i }))
    };
  }
};
</script>

<style></style>
