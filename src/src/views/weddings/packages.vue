<template>
  <div ref="container">
    <nav-bar></nav-bar>

    <div class="container main">
      <img src="/img/weddings/portfolio-header.jpg" />
      <hr />
      <h2>Weddings</h2>
      <div class="columns">
        <div class="column">
          <div class="columns">
            <div class="column">
              <span class="subtitle">Price:</span>
              <h4>$1,100.00+</h4>
            </div>
            <div class="column">
              <span class="subtitle">Duration:</span>
              <h4>4-7 hours</h4>
            </div>
            <div class="column">
              <span class="subtitle">Delivery Time:</span>
              <h4>4-6 weeks</h4>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="column-content">
            <p>
              When the cake has been cut and the flowers have wilted, your photos will remain. Make sure you protect them by choosing a photographer you can trust to capture your wedding day memories for you to cherish for many years to come. Let my husband and I work to make sure your wedding photos are everything you've imagined.
            </p>
          </div>
        </div>
      </div>
      <hr />
    </div>

    <div class="container main">
      <masonry :images="images"></masonry>
      <div class="has-text-centered mt-20">
        <router-link to="/weddings/gallery" class="button">View Gallery</router-link>
      </div>
    </div>

    <div class="container main">
      <hr />
      <h2>Packages</h2>
      <div class="columns">
        <div class="column">
          <div class="column-content">
            <p>
              Our packages include all your edited images from the day that meet our quality control along with a print release for you to print as many images as you desire. To make sure you get a variety of images from your special day, all packages include a second shooter during the ceremony and reception. Additional wedding day hours can be added to any package, and a 30-minute travel allowance is included. A non-refundable 30% retainer is due at booking to hold your special day.
            </p>
          </div>
        </div>
      </div>

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
                <h4>$1,100.00</h4>
                <a class="button bookNow" @click.prevent="onBookNow('Basic')">Request Date</a>
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
                <h4>$1,290.00</h4>
                <a class="button bookNow" @click.prevent="onBookNow('Silver')">Request Date</a>
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
                <h4>$1,500.00</h4>
                <a class="button bookNow" @click.prevent="onBookNow('Gold')">Request Date</a>
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
                <h4>$2,000.00</h4>
                <a class="button bookNow" @click.prevent="onBookNow('Platinum')">Request Date</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <footer-nav></footer-nav>
  </div>
</template>

<script>
import Vue from "vue";

import NavBar from "../../components/navbar.vue";
import FooterNav from "../../components/footer.vue";
import Masonry from "../../components/masonry.vue";
import WeddingModal from "../../components/modals/wedding.vue";

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
          url: "/img/weddings/grid-03_full.jpg",
          preview: "/img/weddings/grid-03.jpg"
        },
        {
          url: "/img/weddings/grid-11_full.jpg",
          preview: "/img/weddings/grid-11.jpg"
        },
        {
          url: "/img/weddings/grid-14_full.jpg",
          preview: "/img/weddings/grid-14.jpg"
        },
        {
          url: "/img/weddings/grid-04_full.jpg",
          preview: "/img/weddings/grid-04.jpg"
        },
        {
          url: "/img/weddings/grid-06_full.jpg",
          preview: "/img/weddings/grid-06.jpg"
        },
        {
          url: "/img/weddings/grid-07_full.jpg",
          preview: "/img/weddings/grid-07.jpg"
        }
      ]
    };
  },
  methods: {
    onBookNow(selectedPackage) {
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
