<template>
    <div>
        <nav-bar></nav-bar>

        <div class="container main">
            <img src="/img/mini/portfolio-header.jpg">
            <hr>
            <h2>Mini Sessions</h2>
            <div class="columns">
                <div class="column">
                    <div class="columns">
                        <div class="column">
                            <span class="subtitle">Price:</span>
                            <h4>$75-100.00</h4>
                        </div>
                        <div class="column">
                            <span class="subtitle">Duration:</span>
                            <h4>15 minutes</h4>
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
                            Mini sessions are offered 3-4 times a year on a set day at a set location. Follow us on
                            <a href="https://www.facebook.com/jellisonphotography">Facebook</a>
                            or
                            <a href="https://www.instagram.com/jobrina.ellison">Instagram</a> to be the first to find out about upcoming sessions. These usually
                            fill up within the first 24 hours.
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
                { url: '/img/mini/grid-04_full.jpg', preview: '/img/mini/grid-04.jpg', orientation: 'horizontal'},
                { url: '/img/mini/grid-01_full.jpg', preview: '/img/mini/grid-01.jpg', orientation: 'horizontal'},
                { url: '/img/mini/grid-03_full.jpg', preview: '/img/mini/grid-03.jpg', orientation: 'vertical'},
                { url: '/img/mini/grid-02_full.jpg', preview: '/img/mini/grid-02.jpg', orientation: 'horizontal'},
                { url: '/img/mini/grid-06_full.jpg', preview: '/img/mini/grid-06.jpg', orientation: 'vertical'},
                { url: '/img/mini/grid-08_full.jpg', preview: '/img/mini/grid-08.jpg', orientation: 'horizontal'},
                { url: '/img/mini/grid-07_full.jpg', preview: '/img/mini/grid-07.jpg', orientation: 'horizontal'},
                { url: '/img/mini/grid-05_full.jpg', preview: '/img/mini/grid-05.jpg', orientation: 'horizontal'},
                { url: '/img/mini/grid-09_full.jpg', preview: '/img/mini/grid-09.jpg', orientation: 'horizontal'},
            ]
        }
    }
};
</script>

<style>
</style>
