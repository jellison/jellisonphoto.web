<template>
    <div ref="container">
        <nav-bar></nav-bar>

        <div class="container main">
            <img src="/img/general/portfolio-header.jpg">
            <hr>
            <h2>General Sessions</h2>
            <p>
                When you look at your walls, do you realize your family pictures need a little updating? If you're looking for a family photographer in Knoxville, Strawberry Plains, Sevierville, Jefferson City, or the surrounding area. I would love to help you update your memories! Time moves so quickly. You will never regret capturing those moments in time, but you will regret missing out. Invest in your memories, and you won't be disappointed.
            </p>
            <div class="mt-6">
                <div class="columns">
                    <div class="column is-two-fifths">
                        <img src="/img/general/temp.jpg" />
                    </div>
                    <div class="column is-three-fifths">
                        <nav class="level is-full-height">
                            <div class="level-full">
                                <div class="level-item">
                                    <div>
                                        <h3>Limited Edition Minis</h3>
                                        <h5>$75-100</h5>
                                        <p>
                                            Limited edition minis are only offered 3-4 times a year on set days and times. Usually offered for Spring, Fall, and Christmas. Spots fill up quickly. Don't miss your chance to get into one of these sessions. Join our mailing list today and be the first to know about upcoming limited-edition minis.
                                        </p>
                                        <p class="has-text-centered"><button class="button">Join Mailing List</button></p>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>                
            </div>
            <div class="mt-6">
                <div class="columns is-desktop">
                    <div class="column is-three-fifths">
                        <nav class="level is-full-height">
                            <div class="level-full">
                                <div class="level-item">
                                    <div>
                                        <h3>Half Sessions</h3>
                                        <h5>$120</h5>
                                        <p>
                                            Half sessions are offered year around by appointment. They're great for small families that need just a few updated pictures.
                                        </p>
                                        <p class="has-text-centered"><button class="button">More Information</button></p>


                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div class="column is-two-fifths is-hidden-touch">
                        <img src="/img/general/temp.jpg" />
                    </div>                    
                </div>
            </div>
            <div class="mt-6">
                <div class="columns">
                    <div class="column is-two-fifths is-hidden-touch">
                        <img src="/img/general/temp.jpg" />
                    </div>
                    <div class="column is-three-fifths">
                        <nav class="level is-full-height">
                            <div class="level-full">
                                <div class="level-item">
                                    <div>
                                        <h3>Full Sessions</h3>
                                        <h5>$200</h5>
                                        <p>
                                            Full sessions are offered year around by appointment. Wanting a variety of images to capture your family milestones? This is your package!
                                        </p>
                                        <p class="has-text-centered"><button class="button">More Information</button></p>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>            
                <p class="has-text-centered is-italic is-size-7 mt-3">
                    All session fees include a sitting fee and digital images. Additional digital images and prints are available to purchase from your online gallery.
                </p>
            </div>
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
