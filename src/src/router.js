import Vue from "vue";
import Router from "vue-router";

import Home from "./views/home.vue";
import Regular from "./views/sessions/regular.vue";
import Studio from "./views/sessions/studio.vue";
import Senior from "./views/sessions/senior.vue";
import Weddings from "./views/weddings/packages.vue";
import WeddingsGallery from "./views/weddings/gallery.vue";
import About from "./views/about.vue";
import Contact from "./views/contact.vue";

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        { path: "/", name: "home", component: Home },
        { path: "/sessions/regular", name: "regular", component: Regular },
        { path: "/sessions/studio", name: "studio", component: Studio },
        { path: "/sessions/senior", name: "senior", component: Senior },
        { path: "/weddings", name: "weddings", component: Weddings },
        {
            path: "/weddings/gallery",
            name: "weddings gallery",
            component: WeddingsGallery,
        },
        { path: "/about", name: "about", component: About },
        { path: "/contact", name: "contact", component: Contact },
    ],
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 };
    },
});
