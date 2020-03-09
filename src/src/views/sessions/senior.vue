<template>
  <div ref="container">
    <nav-bar></nav-bar>

    <div class="container main">
      <img src="/img/senior/portfolio-header.jpg" />
      <hr />
      <h2>Senior Sessions</h2>
      <div class="columns">
        <div class="column">
          <div class="columns">
            <div class="column">
              <span class="subtitle">Price:</span>
              <h4>$165-265.00</h4>
            </div>
            <div class="column">
              <span class="subtitle">Duration:</span>
              <h4>1-2 hours</h4>
            </div>
            <div class="column">
              <span class="subtitle">Delivery Time:</span>
              <h4>2 weeks</h4>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="column-content">
            <p>
              These sessions are offered in different packages and are a great way to get away from the stiff
              school senior pictures.
            </p>
          </div>
        </div>
      </div>

      <div class="container main">
        <masonry :images="images"></masonry>
      </div>

      <hr />

      <div class="columns packages">
        <div class="column">
          <div class="column-content">
            <div class="package">
              <div class="package-body">
                <h2>Basic</h2>
                <ul>
                  <li>1 hour session</li>
                  <li>Online preview</li>
                  <li>30+ edited images</li>
                  <li>At least 2 outfit changes</li>
                  <li>1 location</li>
                </ul>
              </div>
              <div class="package-footer">
                <h4>$165.00</h4>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="column-content">
            <div class="package">
              <div class="package-body">
                <h2>Deluxe</h2>
                <ul>
                  <li>1.5 hour session</li>
                  <li>Online preview</li>
                  <li>45+ edited images</li>
                  <li>2-3 outfit changes</li>
                  <li>
                    1-2 location
                    <sup>*</sup>
                  </li>
                </ul>
              </div>
              <div class="package-footer">
                <h4>$215.00</h4>
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
                  <li>2 hour session</li>
                  <li>Online preview</li>
                  <li>60+ edited images</li>
                  <li>3-4 outfit changes</li>
                  <li>
                    2 location
                    <sup>*</sup>
                  </li>
                </ul>
              </div>
              <div class="package-footer">
                <h4>$265.00</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p>All images will be sent to you with a download link. All sessions include a travel allowance of 30 minutes. Additional travl time requires a travel fee based on the distance traveled. Session fee is required at or before the session. A $25 non-refundable deposit is required at booking to reserve your session time.</p>
    </div>

    <footer-nav></footer-nav>
  </div>
</template>

<script>
import Vue from "vue";

import NavBar from "../../components/navbar.vue";
import FooterNav from "../../components/footer.vue";
import Masonry from "../../components/masonry.vue";

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
          url: "/img/senior/grid-02_full.jpg",
          preview: "/img/senior/grid-02.jpg",
          orientation: "horizontal"
        },
        {
          url: "/img/senior/grid-05_full.jpg",
          preview: "/img/senior/grid-05.jpg",
          orientation: "horizontal"
        },
        {
          url: "/img/senior/grid-03_full.jpg",
          preview: "/img/senior/grid-03.jpg",
          orientation: "horizontal"
        },
        {
          url: "/img/senior/grid-04_full.jpg",
          preview: "/img/senior/grid-04.jpg",
          orientation: "horizontal"
        },
        {
          url: "/img/senior/grid-01_full.jpg",
          preview: "/img/senior/grid-01.jpg",
          orientation: "horizontal"
        },
        {
          url: "/img/senior/grid-06_full.jpg",
          preview: "/img/senior/grid-06.jpg",
          orientation: "horizontal"
        },
        {
          url: "/img/senior/grid-09_full.jpg",
          preview: "/img/senior/grid-09.jpg",
          orientation: "horizontal"
        },
        {
          url: "/img/senior/grid-08_full.jpg",
          preview: "/img/senior/grid-08.jpg",
          orientation: "horizontal"
        }
      ]
    };
  },
  methods: {}
};
</script>

<style>
</style>
