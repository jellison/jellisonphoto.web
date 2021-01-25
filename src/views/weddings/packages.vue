<template>
  <div ref="container">
    <nav-bar></nav-bar>

    <div class="container main">
      <img src="/img/weddings/portfolio-header.jpg" />
      <hr />
      <h2>Weddings</h2>
      <p>
        When the cake has been cut and the flowers have wilted, your photos will remain. Make sure you protect them by choosing a
        photographer you can trust to capture your wedding day memories for you to cherish for many years to come. Let my husband and I work
        to make sure your wedding photos are everything you've imagined.
      </p>
      <div class="columns packages">
        <div class="column">
          <div class="column-content">
            <div class="package">
              <div class="package-body">
                <h2>Basic</h2>
                <ul>
                  <li>4 hours coverage</li>
                  <li>2 photographers</li>
                  <li class="is-hidden-touch">&nbsp;</li>
                  <li class="is-hidden-touch">&nbsp;</li>
                  <li class="is-hidden-touch">&nbsp;</li>
                </ul>
              </div>
              <div class="package-footer">
                <h4>$1,200.00</h4>
                <router-link
                  class="button bookNow"
                  tag="a"
                  :to="{
                    path: 'contact',
                    query: {
                      formOnly: 'true',
                      sessionType: 'Wedding',
                      package: 'Basic'
                    }
                  }"
                  >Request Date</router-link
                >
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="column-content">
            <div class="package">
              <div class="package-body">
                <h2>Silver</h2>
                <ul>
                  <li>4 hours coverage</li>
                  <li>2 photographers</li>
                  <li>1 engagement session</li>
                  <li style="margin-left: 55px">or</li>
                  <li>+1 hour coverage</li>
                </ul>
              </div>
              <div class="package-footer">
                <h4>$1,425.00</h4>
                <router-link
                  class="button bookNow"
                  tag="a"
                  :to="{
                    path: 'contact',
                    query: {
                      formOnly: 'true',
                      sessionType: 'Wedding',
                      package: 'Silver'
                    }
                  }"
                  >Request Date</router-link
                >
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="column-content">
            <div class="package">
              <div class="package-body">
                <h2>Gold</h2>
                <ul>
                  <li>5 hours coverage</li>
                  <li>2 photographers</li>
                  <li>1 engagement session</li>
                  <li style="margin-left: 55px">or</li>
                  <li>+1 hour coverage</li>
                </ul>
              </div>
              <div class="package-footer">
                <h4>$1,680.00</h4>
                <router-link
                  class="button bookNow"
                  tag="a"
                  :to="{
                    path: 'contact',
                    query: {
                      formOnly: 'true',
                      sessionType: 'Wedding',
                      package: 'Gold'
                    }
                  }"
                  >Request Date</router-link
                >
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="column-content">
            <div class="package">
              <div class="package-body">
                <h2>Platinum</h2>
                <ul>
                  <li>7 hours coverage</li>
                  <li>2 photographers</li>
                  <li>1 Engagement session</li>
                  <li style="margin-left: 55px">or</li>
                  <li>+1 hour coverage</li>
                </ul>
              </div>
              <div class="package-footer">
                <h4>$2,200.00</h4>
                <router-link
                  class="button bookNow"
                  tag="a"
                  :to="{
                    path: 'contact',
                    query: {
                      formOnly: 'true',
                      sessionType: 'Wedding',
                      package: 'Platinum'
                    }
                  }"
                  >Request Date</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="has-text-centered mt2">
        <router-link class="button" tag="a" to="/weddings/gallery">View Gallery</router-link>
      </div>
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
    return {
      images: [
        {
          url: '/img/weddings/grid-03_full.jpg',
          preview: '/img/weddings/grid-03.jpg'
        },
        {
          url: '/img/weddings/grid-11_full.jpg',
          preview: '/img/weddings/grid-11.jpg'
        },
        {
          url: '/img/weddings/grid-14_full.jpg',
          preview: '/img/weddings/grid-14.jpg'
        },
        {
          url: '/img/weddings/grid-04_full.jpg',
          preview: '/img/weddings/grid-04.jpg'
        },
        {
          url: '/img/weddings/grid-06_full.jpg',
          preview: '/img/weddings/grid-06.jpg'
        },
        {
          url: '/img/weddings/grid-07_full.jpg',
          preview: '/img/weddings/grid-07.jpg'
        }
      ]
    };
  }
};
</script>

<style></style>
