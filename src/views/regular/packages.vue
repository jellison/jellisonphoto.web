<template>
  <div ref="container">
    <nav-bar></nav-bar>

    <div class="container main">
      <img src="/img/regular/portfolio-header.jpg" />
      <hr />
      <h2>Regular Sessions</h2>
      <p>
        When you look at your walls, do you realize your family pictures need a little updating? If you're looking for a family photographer
        in Knoxville, Strawberry Plains, Sevierville, Jefferson City, or the surrounding area. I would love to help you update your
        memories! Time moves so quickly. You will never regret capturing those moments in time, but you will regret missing out. Invest in
        your memories, and you won't be disappointed.
      </p>
      <div class="mt-6">
        <div class="columns is-desktop">
          <div class="column is-two-fifths is-hidden-touch">
            <img src="/img/regular/focal-01.jpg" />
          </div>
          <div class="column is-three-fifths">
            <nav class="level is-full-height">
              <div class="level-full">
                <div class="level-item">
                  <div>
                    <h3>Regular Sessions</h3>
                    <h5>starting at $150</h5>
                    <p class="is-hidden-desktop">
                      <img src="/img/regular/focal-01.jpg" />
                    </p>
                    <p>
                      Half and Full sessions are offered year around by appointment. They're great for families who want to pick their
                      location and get some updated pictures.
                    </p>
                    <p class="has-text-centered">
                      <router-link class="button is-light" tag="button" to="/sessions/regular/gallery">View Gallery</router-link>
                      <router-link
                        class="button"
                        tag="button"
                        :to="{
                          path: '/contact',
                          query: {
                            formOnly: 'true',
                            sessionType: 'Regular Session'
                          }
                        }"
                        >Request a Date</router-link
                      >
                    </p>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div class="mt-6">
        <div class="columns">
          <div class="column is-three-fifths">
            <nav class="level is-full-height">
              <div class="level-full">
                <div class="level-item">
                  <div>
                    <h3>Limited Edition Minis</h3>
                    <h5>$75-100</h5>
                    <p class="is-hidden-desktop">
                      <img src="/img/regular/focal-03.jpg" />
                    </p>
                    <p>
                      Limited edition minis are only offered 3-4 times a year on set days and times. Usually offered for Spring, Fall, and
                      Christmas. Spots fill up quickly. Don't miss your chance to get into one of these sessions. Join our mailing list
                      today and be the first to know about upcoming limited-edition minis.
                    </p>
                    <p class="has-text-centered">
                      <router-link
                        class="button"
                        tag="button"
                        :to="{
                          path: '/contact',
                          query: {
                            formOnly: 'true',
                            list: 'mini'
                          }
                        }"
                        >Join Mailing List</router-link
                      >
                    </p>
                  </div>
                </div>
              </div>
            </nav>
          </div>
          <div class="column is-two-fifths is-hidden-touch">
            <img src="/img/regular/focal-03.jpg" />
          </div>
        </div>
      </div>
    </div>

    <footer-nav></footer-nav>
  </div>
</template>

<script>
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
  }
};
</script>

<style></style>
