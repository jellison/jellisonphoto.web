<template>
    <div ref="container">
        <nav-bar></nav-bar>

        <div class="container main">
            <img src="/img/general/portfolio-header.jpg">
            <hr>
            <h2>General Sessions</h2>
            <div class="columns">
                <div class="column">
                    <div class="columns">
                        <div class="column">
                            <span class="subtitle">Price:</span>
                            <h4>$150.00</h4>
                        </div>
                        <div class="column">
                            <span class="subtitle">Duration:</span>
                            <h4>1 hour</h4>
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
                            General Sessions apply to child/family, special event, or bridal/engagement photography sessions.
                            All edited images delivered to you electronically with a print release.
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
                { url: '/img/general/grid-04_full.jpg', preview: '/img/general/grid-04.jpg', orientation: 'horizontal'},
                { url: '/img/general/grid-01_full.jpg', preview: '/img/general/grid-01.jpg', orientation: 'horizontal'},
                { url: '/img/general/grid-03_full.jpg', preview: '/img/general/grid-03.jpg', orientation: 'horizontal'},
                { url: '/img/general/grid-02_full.jpg', preview: '/img/general/grid-02.jpg', orientation: 'horizontal'},
                { url: '/img/general/grid-06_full.jpg', preview: '/img/general/grid-06.jpg', orientation: 'horizontal'},
                { url: '/img/general/grid-08_full.jpg', preview: '/img/general/grid-08.jpg', orientation: 'horizontal'},
                { url: '/img/general/grid-07_full.jpg', preview: '/img/general/grid-07.jpg', orientation: 'horizontal'},
                { url: '/img/general/grid-05_full.jpg', preview: '/img/general/grid-05.jpg', orientation: 'horizontal'},
                { url: '/img/general/grid-09_full.jpg', preview: '/img/general/grid-09.jpg', orientation: 'horizontal'},
            ]
        }
    }
};
</script>

<style>
</style>
