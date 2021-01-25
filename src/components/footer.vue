<template>
  <footer class="main">
    <div class="container main">
      <hr class="slim" />
      <div class="navbar is-hidden-touch">
        <div id="navItems" class="navbar-menu">
          <div class="navbar-start">
            <div class="navbar-item has-dropdown has-dropdown-up is-hoverable">
              <span class="navbar-link">Sessions / Investment</span>

              <div class="navbar-dropdown">
                <router-link to="/sessions/regular" active-class="is-active" class="navbar-item">Regular Sessions</router-link>
                <router-link to="/sessions/senior" active-class="is-active" class="navbar-item">Senior Sessions</router-link>
                <router-link to="/sessions/studio" active-class="is-active" class="navbar-item">Newborn and Studio Sessions</router-link>
                <router-link to="/galleries" active-class="is-active" class="navbar-item">Galleries</router-link>
              </div>
            </div>
            <div class="navbar-item has-dropdown has-dropdown-up is-hoverable">
              <span class="navbar-link">Weddings</span>

              <div class="navbar-dropdown">
                <router-link to="/weddings" active-class="is-active" class="navbar-item" exact>Information</router-link>
                <router-link to="/weddings/gallery" active-class="is-active" class="navbar-item" exact>Gallery</router-link>
              </div>
            </div>
            <router-link to="/about" active-class="is-active" class="navbar-item">About</router-link>
            <router-link to="/contact" active-class="is-active" class="navbar-item">Contact</router-link>
            <a href="https://www.facebook.com/jellisonphotography" class="navbar-item">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/j.ellisonphotography" class="navbar-item">
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <p class="has-text-muted">Copyright &copy; 2019 Jobrina Ellison. All Rights Reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import '../assets/sass/variables';
@import '../assets/sass/util';

footer.main {
  font-family: $title-font;
  font-size: 90%;
  margin-top: 40px;
  padding: 30px 0;

  @include breakpoint(sm) {
    margin-top: 0;
    padding: 15px 0;
  }

  p {
    @include breakpoint(sm) {
      padding: 15px;
    }
  }

  .navbar-item,
  .navbar-link {
    background: transparent;
    color: #000;
    font-size: 12px;
    font-family: $title-font;
    letter-spacing: 0.05em;
    margin-left: 20px;
    padding: 0;
    text-transform: uppercase;
  }

  .navbar-item:hover,
  .navbar-item:hover .navbar-link {
    background: transparent;
  }

  .navbar-start {
    margin-left: -20px;
  }

  .navbar-dropdown {
    padding: 0 20px;

    .navbar-item {
      margin: 10px 0;
    }
  }

  .has-text-muted {
    color: #555;
    font-size: 80%;
  }

  .navbar-link:not(.is-arrowless) {
    padding-right: 2em !important;

    &::after {
      border-color: $accent-color !important;
      margin-top: -0.575em;
      right: 0.5em;
    }
  }
}
</style>
