import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/home.vue';
import Galleries from './views/galleries.vue';
import Regular from './views/regular/packages.vue';
import RegularGallery from './views/regular/gallery.vue';
import Studio from './views/studio/packages.vue';
import StudioGallery from './views/studio/gallery.vue';
import Senior from './views/senior/packages.vue';
import SeniorGallery from './views/senior/gallery.vue';
import Weddings from './views/weddings/packages.vue';
import WeddingsGallery from './views/weddings/gallery.vue';
import About from './views/about.vue';
import Contact from './views/contact.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/galleries', name: 'galleries', component: Galleries },
    { path: '/sessions/regular', name: 'regular', component: Regular },
    { path: '/sessions/regular/gallery', name: 'regular gallery', component: RegularGallery },
    { path: '/sessions/studio', name: 'studio', component: Studio },
    { path: '/sessions/studio/gallery', name: 'studio gallery', component: StudioGallery },
    { path: '/sessions/senior', name: 'senior', component: Senior },
    { path: '/sessions/senior/gallery', name: 'senior gallery', component: SeniorGallery },
    { path: '/weddings', name: 'weddings', component: Weddings },
    { path: '/weddings/gallery', name: 'weddings gallery', component: WeddingsGallery },
    { path: '/about', name: 'about', component: About },
    { path: '/contact', name: 'contact', component: Contact }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});
