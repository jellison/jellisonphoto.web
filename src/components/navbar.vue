<template>
  <nav class="navbar main">
    <div class="container main">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item">
          <img src="/img/logo.png" />
        </router-link>
        <a
          role="button"
          class="navbar-burger burger"
          :class="{ 'is-active': isActive }"
          data-target="navItems"
          @click.prevent="onBurgerClick"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navItems" class="navbar-menu" :class="{ 'is-active': isActive }">
        <div class="navbar-end">
          <div class="navbar-item has-dropdown is-hoverable">
            <span class="navbar-link">Sessions / Investment</span>

            <div class="navbar-dropdown">
              <router-link to="/sessions/regular" active-class="is-active" class="navbar-item">Regular Sessions</router-link>
              <router-link to="/sessions/senior" active-class="is-active" class="navbar-item">Senior Sessions</router-link>
              <router-link to="/sessions/studio" active-class="is-active" class="navbar-item">Newborn and Studio Sessions</router-link>
              <router-link to="/galleries" active-class="is-active" class="navbar-item">Galleries</router-link>
            </div>
          </div>

          <div class="navbar-item has-dropdown is-hoverable">
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
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    onBurgerClick: function () {
      this.isActive = !this.isActive;
    }
  }
};
</script>

<style lang="scss">
@import '../assets/sass/util';
@import '../assets/sass/variables';

.navbar.main {
  z-index: 1 !important;
  margin-bottom: 40px;

  @include breakpoint(sm) {
    margin-bottom: 0;
  }

  &,
  & .navbar-dropdown {
    background: #000;
  }

  .navbar-menu {
    background: unset;
  }

  .navbar-item,
  .navbar-link {
    color: #d3d3d3;
    font-size: 12px;
    font-family: $title-font;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .navbar-item {
    padding-left: 20px;
    padding-right: 20px;

    &.is-active:not(:active),
    &:hover,
    &:hover .navbar-link {
      color: #d3d3d3;
      background-color: #272727;

      @include breakpoint(md) {
        background-color: #272727;
      }

      @include breakpoint(sm) {
        &.has-dropdown > .navbar-link,
        &.has-dropdown {
          background-color: #000;
        }
      }
    }
  }

  .navbar-dropdown {
    border-top: 0;
  }

  .navbar-link:not(.is-arrowless) {
    padding-right: 2em !important;

    &::after {
      border-color: $accent-color !important;
      right: 0.5em;
    }
  }
}
</style>
