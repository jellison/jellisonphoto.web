<template>
  <div ref="container">
    <nav-bar></nav-bar>

    <div class="container main">
      <hr />
      <h2>Photo Galleries</h2>
      <hr />
    </div>

    <div class="container main">
      <div class="columns mt-6 links">
        <div class="column">
          <router-link tag="a" to="/sessions/regular/gallery">
            <img src="/img/regular/focal-01.jpg" />
            <h5>Regular<br />Sessions</h5>
          </router-link>
        </div>
        <div class="column">
          <router-link tag="a" to="/sessions/senior/gallery">
            <img src="/img/senior/focal-04.jpg" />
            <h5>Senior<br />Sessions</h5>
          </router-link>
        </div>
        <div class="column">
          <router-link tag="a" to="/sessions/studio/gallery">
            <img src="/img/studio/focal-01.jpg" />
            <h5>Newborn &amp; Studio<br />Sessions</h5>
          </router-link>
        </div>
      </div>
    </div>

    <footer-nav></footer-nav>
  </div>
</template>

<script>
import Vue from 'vue';

import NavBar from '../components/navbar.vue';
import FooterNav from '../components/footer.vue';
import Masonry from '../components/masonry.vue';

export default {
  components: {
    NavBar,
    FooterNav,
    Masonry
  }
};
</script>

<style lang="scss">
.links a {
  border: 0;
  background: transparent;
}
</style>
