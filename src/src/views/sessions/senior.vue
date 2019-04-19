<template>
    <div re="container">
        <nav-bar></nav-bar>

        <div class="container main">
            <img src="/img/senior/portfolio-header.jpg">
            <hr>
            <h2>Senior Sessions</h2>
            <div class="columns">
                <div class="column">
                    <div class="columns">
                        <div class="column">
                            <span class="subtitle">Price:</span>
                            <h4>$150-220.00</h4>
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
            <hr>
        </div>

        <div class="container main">
            <masonry :images="images"></masonry>
        </div>

        <footer-nav></footer-nav>
    </div>
</template>

<script>
import NavBar from '../../components/navbar.vue';
import FooterNav from '../../components/footer.vue';
import Masonry from '../../components/masonry.vue';

export default {
    components: {
        NavBar, FooterNav, Masonry
    },
    data() {
        return {
            images: [
                { url: '/img/senior/grid-02_full.jpg', preview: '/img/senior/grid-02.jpg', orientation: 'horizontal'},
                { url: '/img/senior/grid-05_full.jpg', preview: '/img/senior/grid-05.jpg', orientation: 'horizontal'},
                { url: '/img/senior/grid-03_full.jpg', preview: '/img/senior/grid-03.jpg', orientation: 'horizontal'},
                { url: '/img/senior/grid-04_full.jpg', preview: '/img/senior/grid-04.jpg', orientation: 'horizontal'},
                { url: '/img/senior/grid-01_full.jpg', preview: '/img/senior/grid-01.jpg', orientation: 'horizontal'},
                { url: '/img/senior/grid-06_full.jpg', preview: '/img/senior/grid-06.jpg', orientation: 'horizontal'},
                { url: '/img/senior/grid-09_full.jpg', preview: '/img/senior/grid-09.jpg', orientation: 'horizontal'},
                { url: '/img/senior/grid-08_full.jpg', preview: '/img/senior/grid-08.jpg', orientation: 'horizontal'}
            ]
        }
    }
};
</script>

<style>
</style>
