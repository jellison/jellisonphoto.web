<template>
  <div ref="container">
    <nav-bar></nav-bar>

    <div class="container main">
      <img src="/img/senior/portfolio-header.jpg" />
      <hr />
      <h2>Senior Sessions</h2>
      <p>
        Senior year only comes around once in a lifetime and it's a year they will never forget &mdash; and one you can never get back.
        Seniors are my favorite thing to shoot because every senior is different and excited and so full of life! We serve Knox, Jefferson,
        Blount, Sevier, Union, and surrounding counties to give seniors an exciting senior session experience. I love to see the excitement
        on their faces and how happy they are to be in front of my camera. We always have a great time and get to know each other and truly
        make the session memorable and personalized for them. Whether you're from Koxville, Sevierville, Jefferson City, Strawberry Plains,
        or surrounding areas, we have a package that will fit your needs! Let us be your photographer!
      </p>

      <p></p>
      <div class="mt-6">
        <div class="columns">
          <div class="column is-two-fifths is-hidden-touch">
            <img src="/img/senior/focal-01.jpg" />
          </div>
          <div class="column is-three-fifths">
            <div class="level is-full-height">
              <div class="level-full">
                <div class="level-item">
                  <div>
                    <h3>Basic Session</h3>
                    <h5>$190</h5>
                    <p class="is-hidden-desktop">
                      <img src="/img/senior/focal-01.jpg" />
                    </p>
                    <p>
                      The basic session offers a veriety of shots at one location to give your senior a memorable senior experience and
                      pictures they will love.
                    </p>
                    <p class="has-text-centered">
                      <router-link class="button is-light" tag="button" to="/sessions/senior/gallery">View Gallery</router-link>
                      <router-link
                        class="button"
                        tag="button"
                        :to="{
                          path: '/contact',
                          query: {
                            formOnly: 'true',
                            sessionType: 'Senior - Basic Session'
                          }
                        }"
                        >Request a Date</router-link
                      >
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-6">
        <div class="columns is-desktop">
          <div class="column is-three-fifths">
            <div class="level is-full-height">
              <div class="level-full">
                <div class="level-item">
                  <div>
                    <h3>Deluxe Session</h3>
                    <h5>$240</h5>
                    <p class="is-hidden-desktop">
                      <img src="/img/senior/focal-02.jpg" />
                    </p>
                    <p>
                      The dexluse session offers a larger variety of shots with theh option of two locations. With more digitals included in
                      the package, this session gives seniors the specialized feel that they're looking for.
                    </p>
                    <p class="has-text-centered">
                      <router-link class="button is-light" tag="button" to="/sessions/senior/gallery">View Gallery</router-link>
                      <router-link
                        class="button"
                        tag="button"
                        :to="{
                          path: '/contact',
                          query: {
                            formOnly: 'true',
                            sessionType: 'Senior - Deluxe Session'
                          }
                        }"
                        >Request a Date</router-link
                      >
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-two-fifths is-hidden-touch">
            <img src="/img/senior/focal-02.jpg" />
          </div>
        </div>
      </div>
      <div class="mt-6">
        <div class="columns">
          <div class="column is-two-fifths is-hidden-touch">
            <img src="/img/senior/focal-03.jpg" />
          </div>
          <div class="column is-three-fifths">
            <div class="level is-full-height">
              <div class="level-full">
                <div class="level-item">
                  <div>
                    <h3>Platinum Session</h3>
                    <h5>$290</h5>
                    <p class="is-hidden-desktop">
                      <img src="/img/senior/focal-03.jpg" />
                    </p>
                    <p>
                      Senior year only comes around once. Give your senior the ultimate senior session with our platinum session. This
                      session features two locations and the largest digital package.
                    </p>
                    <p class="has-text-centered">
                      <router-link class="button is-light" tag="button" to="/sessions/senior/gallery">View Gallery</router-link>
                      <router-link
                        class="button"
                        tag="button"
                        :to="{
                          path: '/contact',
                          query: {
                            formOnly: 'true',
                            sessionType: 'Senior - Platinum Session'
                          }
                        }"
                        >Request a Date</router-link
                      >
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <package-disclaimer></package-disclaimer>
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
import PackageDisclaimer from '../../components/package-disclaimer.vue';

export default {
  components: {
    NavBar,
    FooterNav,
    Masonry,
    PackageDisclaimer
  },
  methods: {}
};
</script>

<style></style>
