<template>
    <div>
        <nav-bar></nav-bar>

        <div class="container main">
            <img src="/img/newborn/portfolio-header.jpg">
            <hr>
            <h2>Newborn Sessions</h2>
            <div class="columns">
                <div class="column">
                    <div class="columns">
                        <div class="column">
                            <span class="subtitle">Price:</span>
                            <h4>$200.00</h4>
                        </div>
                        <div class="column">
                            <span class="subtitle">Duration:</span>
                            <h4>&frac12;-2 hours</h4>
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
                            Sleepy newborn sessions on our site in Strawberry Plains. These are the
                            posed, sleepy shots capturing the innocent moments of those first weeks. Must be shot within the
                            first 2 weeks. Lifestyle newborn sessions ($220) are offered in your home and offer more laid back
                            lifestyle pictures of the newborn in their natural environment with their family.
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
                { url: '/img/newborn/grid-07_full.jpg', preview: '/img/newborn/grid-07.jpg', orientation: 'horizontal'},
                { url: '/img/newborn/grid-05_full.jpg', preview: '/img/newborn/grid-05.jpg', orientation: 'horizontal'},
                { url: '/img/newborn/grid-01_full.jpg', preview: '/img/newborn/grid-01.jpg', orientation: 'horizontal'},
                { url: '/img/newborn/grid-02_full.jpg', preview: '/img/newborn/grid-02.jpg', orientation: 'horizontal'},
                { url: '/img/newborn/grid-04_full.jpg', preview: '/img/newborn/grid-04.jpg', orientation: 'horizontal'},
                { url: '/img/newborn/grid-03_full.jpg', preview: '/img/newborn/grid-03.jpg', orientation: 'horizontal'}
            ]
        }
    }
};
</script>

<style>
</style>
