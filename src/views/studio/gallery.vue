<template>
  <div ref="container">
    <nav-bar></nav-bar>

    <div class="container main">
      <hr />
      <h2>Studio Session Gallery</h2>
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
      '/img/studio/gallery/Knoxville_Studio_Photographer-01.jpg',
      '/img/studio/gallery/Knoxville_Studio_Photographer-02.jpg',
      '/img/studio/gallery/Knoxville_Studio_Photographer-03.jpg',
      '/img/studio/gallery/Knoxville_Studio_Photographer-04.jpg',
      '/img/studio/gallery/Knoxville_Studio_Photographer-05.jpg',
      '/img/studio/gallery/Knoxville_Studio_Photographer-06.jpg',
      '/img/studio/gallery/Knoxville_Studio_Photographer-07.jpg',
      '/img/studio/gallery/Knoxville_Studio_Photographer-08.jpg',
      '/img/studio/gallery/Knoxville_Studio_Photographer-09.jpg',
      '/img/studio/gallery/Knoxville_Studio_Photographer-10.jpg',
      '/img/studio/gallery/Knoxville_Studio_Photographer-11.jpg',
      '/img/studio/gallery/Knoxville_Studio_Photographer-12.jpg',
      '/img/studio/gallery/Knoxville_Studio_Photographer-13.jpg',
      '/img/studio/gallery/Knoxville_Studio_Photographer-14.jpg',
      '/img/studio/gallery/Knoxville_Studio_Photographer-15.jpg',
      '/img/studio/gallery/Knoxville_Studio_Photographer-16.jpg',
      '/img/studio/gallery/Knoxville_Studio_Photographer-17.jpg',
      '/img/studio/gallery/Knoxville_Studio_Photographer-18.jpg',
      '/img/studio/gallery/Knoxville_Studio_Photographer-19.jpg',
      '/img/studio/gallery/Knoxville_Studio_Photographer-20.jpg',
      '/img/studio/gallery/Knoxville_Studio_Photographer-21.jpg',
      '/img/studio/gallery/Knoxville_Studio_Photographer-22.jpg',
      '/img/studio/gallery/Knoxville_Studio_Photographer-23.jpg',
      '/img/studio/gallery/Knoxville_Studio_Photographer-24.jpg',
      '/img/studio/gallery/Knoxville_Studio_Photographer-25.jpg',
      '/img/studio/gallery/Knoxville_Studio_Photographer-26.jpg',
      '/img/studio/gallery/Knoxville_Studio_Photographer-27.jpg',
      '/img/studio/gallery/Knoxville_Studio_Photographer-28.jpg',
      '/img/studio/gallery/Knoxville_Studio_Photographer-29.jpg',
      '/img/studio/gallery/Knoxville_Studio_Photographer-30.jpg',
      '/img/studio/gallery/Knoxville_Studio_Photographer-31.jpg',
      '/img/studio/gallery/Knoxville_Studio_Photographer-32.jpg',
      '/img/studio/gallery/Knoxville_Studio_Photographer-33.jpg',
      '/img/studio/gallery/Knoxville_Studio_Photographer-34.jpg',
      '/img/studio/gallery/Knoxville_Studio_Photographer-35.jpg',
      '/img/studio/gallery/Knoxville_Studio_Photographer-36.jpg',
      '/img/studio/gallery/Knoxville_Studio_Photographer-37.jpg',
      '/img/studio/gallery/Knoxville_Studio_Photographer-38.jpg',
      '/img/studio/gallery/Knoxville_Studio_Photographer-39.jpg',
      '/img/studio/gallery/Knoxville_Studio_Photographer-40.jpg',
      '/img/studio/gallery/Knoxville_Studio_Photographer-41.jpg',
      '/img/studio/gallery/Knoxville_Studio_Photographer-42.jpg',
      '/img/studio/gallery/Knoxville_Studio_Photographer-43.jpg',
      '/img/studio/gallery/Knoxville_Studio_Photographer-44.jpg',
      '/img/studio/gallery/Knoxville_Studio_Photographer-45.jpg',
      '/img/studio/gallery/Knoxville_Studio_Photographer-46.jpg',
      '/img/studio/gallery/Knoxville_Studio_Photographer-47.jpg',
      '/img/studio/gallery/Knoxville_Studio_Photographer-48.jpg',
      '/img/studio/gallery/Knoxville_Studio_Photographer-49.jpg',
      '/img/studio/gallery/Knoxville_Studio_Photographer-50.jpg',
      '/img/studio/gallery/Knoxville_Studio_Photographer-51.jpg',
      '/img/studio/gallery/Knoxville_Studio_Photographer-52.jpg',
      '/img/studio/gallery/Knoxville_Studio_Photographer-53.jpg',
      '/img/studio/gallery/Knoxville_Studio_Photographer-54.jpg',
      '/img/studio/gallery/Knoxville_Studio_Photographer-55.jpg',
      '/img/studio/gallery/Knoxville_Studio_Photographer-56.jpg',
      '/img/studio/gallery/Knoxville_Studio_Photographer-57.jpg',
      '/img/studio/gallery/Knoxville_Studio_Photographer-58.jpg',
      '/img/studio/gallery/Knoxville_Studio_Photographer-59.jpg',
      '/img/studio/gallery/Knoxville_Studio_Photographer-60.jpg',
      '/img/studio/gallery/Knoxville_Studio_Photographer-61.jpg',
      '/img/studio/gallery/Knoxville_Studio_Photographer-62.jpg',
      '/img/studio/gallery/Knoxville_Studio_Photographer-63.jpg',
      '/img/studio/gallery/Knoxville_Studio_Photographer-64.jpg',
      '/img/studio/gallery/Knoxville_Studio_Photographer-65.jpg',
      '/img/studio/gallery/Knoxville_Studio_Photographer-66.jpg',
      '/img/studio/gallery/Knoxville_Studio_Photographer-67.jpg',
      '/img/studio/gallery/Knoxville_Studio_Photographer-68.jpg'
    ];

    return {
      images: images.map((i) => ({ url: i, preview: i }))
    };
  }
};
</script>

<style></style>
