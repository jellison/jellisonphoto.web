<template>
    <nav class="navbar main">
        <div class="container main">
            <div class="navbar-brand">
                <router-link to="/" class="navbar-item">
                    <img src="/img/logo-140.png">
                </router-link>
                <a role="button" class="navbar-burger burger" :class="{ 'is-active': isActive }" data-target="navItems" @click.prevent="onBurgerClick">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navItems" class="navbar-menu" :class="{ 'is-active': isActive }">
                <div class="navbar-end">
                    <div class="navbar-item has-dropdown is-hoverable">
                        <span class="navbar-link">Sessions</span>

                        <div class="navbar-dropdown">
                            <router-link to="/sessions/general" active-class="is-active" class="navbar-item">General Sessions</router-link>
                            <router-link to="/sessions/senior" active-class="is-active" class="navbar-item">Senior Sessions</router-link>
                            <router-link to="/sessions/newborn" active-class="is-active" class="navbar-item">Newborn Sessions</router-link>
                            <router-link to="/sessions/mini" active-class="is-active" class="navbar-item">Mini Sessions</router-link>
                        </div>
                    </div>
                    <router-link to="/weddings" active-class="is-active" class="navbar-item">Weddings</router-link>
                    <router-link to="/faq" active-class="is-active" class="navbar-item">Tips / FAQ</router-link>
                    <router-link to="/about" active-class="is-active" class="navbar-item">About</router-link>
                    <router-link to="/contact" active-class="is-active" class="navbar-item">Contact</router-link>
                    <a href="https://www.facebook.com/jellisonphotography" class="navbar-item">
                        <i class="fab fa-facebook"></i>
                    </a>
                    <a href="https://www.instagram.com/jobrina.ellison" class="navbar-item">
                        <i class="fab fa-instagram"></i>
                    </a>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    data(){
        return {
            isActive: false
        };
    },
    methods: {
        onBurgerClick: function(){
            this.isActive = !this.isActive;
        }
    }
};
</script>

<style lang="scss">
@import '../assets/sass/util';

.navbar.main {
    z-index: 1 !important;
    margin-bottom: 40px;

    @include breakpoint(sm) {
        margin-bottom: 0;
    }    

    &, & .navbar-dropdown {
        background: #000;
    }

    .navbar-item,
    .navbar-link {
        color: #d3d3d3;
        font-size: 15px;
        font-weight: 600;
        text-transform: uppercase;
    }

    .navbar-item {
        padding-left: 20px;
        padding-right: 20px;

        &.is-active,
        &:hover,
        &:hover .navbar-link {
            color: #d3d3d3;
            background-color: #272727;

            @include breakpoint(sm) {
                &.has-dropdown > .navbar-link, &.has-dropdown {
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
            border-color: #7498bc !important;
            right: 0.5em;
        }
    }
}
</style>
