import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/home.vue';
import General from './views/sessions/general.vue';
import Mini from './views/sessions/mini.vue';
import Newborn from './views/sessions/newborn.vue';
import Senior from './views/sessions/senior.vue';
import Weddings from './views/weddings/packages.vue';
import WeddingsGallery from './views/weddings/gallery.vue';
import Faq from './views/faq.vue';
import About from './views/about.vue';
import Contact from './views/contact.vue';
import Form from './views/form.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        { path: '/', name: 'home', component: Home },
        { path: '/sessions/general', name: 'general', component: General },
        { path: '/sessions/mini', name: 'mini', component: Mini },
        { path: '/sessions/newborn', name: 'newborn', component: Newborn },
        { path: '/sessions/senior', name: 'senior', component: Senior },
        { path: '/weddings', name: 'weddings', component: Weddings },
        { path: '/weddings/gallery', name: 'weddings gallery', component: WeddingsGallery },
        { path: '/faq', name: 'faq', component: Faq },
        { path: '/about', name: 'about', component: About },
        { path: '/contact', name: 'contact', component: Contact },
        { path: '/form/:id', name: 'form', component: Form, props: true }
    ]
})
