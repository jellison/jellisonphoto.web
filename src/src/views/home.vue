<template>
    <div ref="container">
        <nav-bar></nav-bar>

        <glide :images="images"></glide>

        <div class="banner">
            <div class="container main">
                <div class="banner-content">
                    <div class="level-item has-text-centered is-mobile">
                        <p>Don't just smile for the picture, smile for the memories.</p>
                        <p><a id="getStarted" class="button is-on-black" @click.prevent="onGetStarted">Get Started</a></p>
                    </div>
                </div>                
            </div>
        </div>

        <div class="page-layout">
            <div class="container main">
                <div class="page-head">
                    <h2 class="has-text-centered">10 Years of Expertise</h2>
                    <p>
                        We are a photography company based in Strawberry Plains, Tennessee
                        and serving Knoxville and the surrounding areas. We work hard to capture life's little moments in a
                        way
                        that truly expresses your personality. Welcome to J. Ellison Photography.
                    </p>
                </div>
                <div class="category-box columns">
                    <div class="column">
                         <div class="column-media">
                            <img src="img/general/category-detail.jpg">
                         </div>
                        <div class="column-content">
                            <h3>General Sessions</h3>
                            <p>
                                Special events, engagements, or just some pics of the family, these 1-hour session are a
                                flexible way to capture your moments.
                            </p>
                            <p class="is-flex-mobile">
                                <router-link to="/sessions/general" class="button is-centered-mobile">Explore</router-link>
                            </p>                            
                        </div>
                    </div>
                    <div class="column is-hidden-mobile">
                        <img src="img/general/category-full.jpg">
                    </div>
                </div>
                <hr class="squiggles">
                <div class="category-box columns">
                    <div class="column is-hidden-mobile">
                        <img src="img/senior/category-full.jpg">
                    </div>
                    <div class="column">
                         <div class="column-media">
                            <img src="img/senior/category-detail.jpg">
                         </div>
                        <div class="column-content">
                            <h3>Senior Sessions</h3>
                            <p>
                                These sessions are a great way to get away from the stiff school pictures and give you something
                                worth sharing.
                            </p>
                            <p class="is-flex-mobile">
                                <router-link to="/sessions/senior" class="button is-centered-mobile">Explore</router-link>
                            </p>
                        </div>
                    </div>
                </div>
                <hr class="squiggles">
                <div class="category-box columns">
                    <div class="column">
                         <div class="column-media">
                            <img src="img/newborn/category-detail.jpg">
                         </div>
                        <div class="column-content">
                            <h3>Newborn Sessions</h3>
                            <p>
                                Taken within the first 2 weeks, these posed, sleepy shots will capture those innocent moments
                                you'll cherish forever.
                            </p>
                            <p class="is-flex-mobile">
                                <router-link to="/sessions/newborn" class="button is-centered-mobile">Explore</router-link>
                            </p>
                        </div>
                    </div>
                    <div class="column is-hidden-mobile">
                        <img src="img/newborn/category-full.jpg">
                    </div>
                </div>
                <hr class="squiggles">
                <div class="category-box columns">
                    <div class="column is-hidden-mobile">
                        <img src="img/mini/category-full.jpg">
                    </div>
                    <div class="column">
                         <div class="column-media">
                            <img src="img/mini/category-detail.jpg">
                         </div>
                        <div class="column-content">
                            <h3>Mini Sessions</h3>
                            <p>
                                Offered 3-4 times a year, these 15 sessions are a good way get pictures without breaking the
                                bank.
                            </p>
                            <p class="is-flex-mobile">
                                <router-link to="/sessions/mini" class="button is-centered-mobile">Explore</router-link>
                            </p>
                        </div>
                    </div>
                </div>
                <hr class="squiggles">
                <div class="category-box columns">
                    <div class="column">
                        <div class="column-media">
                            <img src="img/weddings/category-detail.jpg">
                        </div>
                        <div class="column-content">
                            <h3>Weddings</h3>
                            <p>Remember every minute of your special day by inviting us to capture each one.</p>
                            <p class="is-flex-mobile">
                                <router-link to="/weddings" class="button is-centered-mobile">Explore</router-link>
                            </p>
                        </div>
                    </div>
                    <div class="column is-hidden-mobile">
                        <img src="img/weddings/category-full.jpg">
                    </div>
                </div>
            </div>
            
            <footer-nav></footer-nav>
        </div>

    </div>
</template>

<script>
import Vue from 'vue';

import NavBar from '../components/navbar.vue';
import Glide from '../components/glide.vue';
import GeneralModal from '../components/modals/general.vue';
import FooterNav from '../components/footer.vue';

export default {
    data() {
        return {
            images: [
                '/img/cover/fav_01.jpg',
                '/img/cover/fav_02.jpg',
                '/img/cover/fav_03.jpg',
                '/img/cover/fav_04.jpg',
                '/img/cover/fav_05.jpg',
                '/img/cover/fav_06.jpg',
                '/img/cover/fav_07.jpg',
                '/img/cover/fav_08.jpg'
            ]
        };
    },
    methods: {
        onGetStarted(){
            var modalClass = Vue.extend(GeneralModal);
            var modal = new modalClass();

            modal.$mount();
            document.body.insertBefore(modal.$el, document.body.firstChild);
        }
    },
    components: {
        NavBar, Glide, GeneralModal, FooterNav
    }
};
</script>

<style lang="scss" scoped>
.navbar.main {
    margin-bottom: 0 !important;
}
</style>
