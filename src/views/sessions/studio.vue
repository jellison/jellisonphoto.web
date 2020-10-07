<template>
    <div ref="container">
        <nav-bar></nav-bar>

        <div class="container main">
            <img src="/img/studio/portfolio-header.jpg" />
            <hr />
            <h2>Newborn and Studio Sessions</h2>
            <p>
                With a private studio in Strawberry Plains, Tennessee located
                close to Knoxville, Sevierville, and Jefferson City, we are the
                one stop you will need for all your photos! From newborn,
                milestone, boudoir, and headshots to everything in-between, our
                large private studio can take care of you no matter your photo
                needs.
            </p>
            <div class="mt-6">
                <div class="columns">
                    <div class="column is-two-fifths">
                        <img src="/img/studio/focal-01.jpg" />
                    </div>
                    <div class="column is-three-fifths">
                        <div class="level is-full-height">
                            <div class="level-full">
                                <div class="level-item">
                                    <div>
                                        <h3>Newborn Sessions</h3>
                                        <h5>Starting at $185</h5>
                                        <p>
                                            Newborn photos can never be redone!
                                            Trust these memories (and your
                                            precious newborn) with us. All
                                            props, outfits, and wraps are
                                            provided. You just need to arrive at
                                            our clean, spacious studio and enjoy
                                            the memories. With two packages to
                                            choose from, we will have something
                                            to fit your needs and budget!
                                            Newborn photos need to be captured
                                            in the first 10-12 days so don't
                                            wait!
                                        </p>
                                        <p class="has-text-centered">
                                            <router-link
                                                class="button"
                                                tag="button"
                                                :to="{
                                                    path: '/contact',
                                                    query: {
                                                        formOnly: 'true',
                                                        sessionType:
                                                            'Newborn Session',
                                                    },
                                                }"
                                                >Request a Date</router-link
                                            >
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr class="mt-6" />
            <h2>Studio and Milestone Sessions</h2>
            <p>
                My large studio in Strawberry Plains can be a host to any of
                your photography needs. With a large variety of backdrops, I'll
                be able to capture the pictures you're after, no matter the
                occassion. Gather the family for posed studio portraits, bring
                your infant in for their 3, 6, 9, and 12 month milestone
                sessions, or anything in between. Inquire about our special
                prices for headshots and private boudoir sessions!
            </p>
            <div class="mt-6">
                <div class="columns">
                    <div class="column is-two-fifths">
                        <img src="/img/studio/focal-02.jpg" />
                    </div>
                    <div class="column is-three-fifths">
                        <div class="level is-full-height">
                            <div class="level-full">
                                <div class="level-item">
                                    <div>
                                        <h3>Petite Session</h3>
                                        <h5>$100</h5>
                                        <p>
                                            Our petite studio session offers a
                                            short session time and a package of
                                            digital images to meet every budget.
                                            This package can be used for any
                                            age!
                                        </p>
                                        <p class="has-text-centered">
                                            <router-link
                                                class="button"
                                                tag="button"
                                                :to="{
                                                    path: '/contact',
                                                    query: {
                                                        formOnly: 'true',
                                                        sessionType:
                                                            'Studio - Petite Session',
                                                    },
                                                }"
                                                >Request a Date</router-link
                                            >
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                                        <h3>Keepsake Session</h3>
                                        <h5>$140</h5>
                                        <p>
                                            With a longer session time and a
                                            larger digital image package, this
                                            package is wonderful for a few
                                            children from the same family. It
                                            offers a variety of shots to capture
                                            great memories!
                                        </p>
                                        <p class="has-text-centered">
                                            <router-link
                                                class="button"
                                                tag="button"
                                                :to="{
                                                    path: '/contact',
                                                    query: {
                                                        formOnly: 'true',
                                                        sessionType:
                                                            'Studio - Keepsake Session',
                                                    },
                                                }"
                                                >Request a Date</router-link
                                            >
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div class="column is-two-fifths is-hidden-touch">
                        <img src="/img/studio/focal-03.jpg" />
                    </div>
                </div>
            </div>
            <div class="mt-6">
                <div class="columns">
                    <div class="column is-two-fifths">
                        <img src="/img/regular/temp.jpg" />
                    </div>
                    <div class="column is-three-fifths">
                        <div class="level is-full-height">
                            <div class="level-full">
                                <div class="level-item">
                                    <div>
                                        <h3>Heirloom Session</h3>
                                        <h5>$180</h5>
                                        <p>
                                            The heirloom session is perfect for
                                            those that want to truly capture all
                                            those milestones in life. With a
                                            variety of sets, more time, and our
                                            largest digital package, the
                                            heirloom session is wonderful for
                                            those looking for a photo package to
                                            meet all their needs.
                                        </p>
                                        <p class="has-text-centered">
                                            <router-link
                                                class="button"
                                                tag="button"
                                                :to="{
                                                    path: '/contact',
                                                    query: {
                                                        formOnly: 'true',
                                                        sessionType:
                                                            'Studio - Heirloom Session',
                                                    },
                                                }"
                                                >Request a Date</router-link
                                            >
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <package-disclaimer></package-disclaimer>
            </div>
        </div>

        <footer-nav></footer-nav>
    </div>
</template>

<script>
import NavBar from "../../components/navbar.vue";
import FooterNav from "../../components/footer.vue";
import Masonry from "../../components/masonry.vue";
import PackageDisclaimer from "../../components/package-disclaimer.vue";

export default {
    components: {
        NavBar,
        FooterNav,
        Masonry,
        PackageDisclaimer,
    },
    data() {
        return {
            images: [
                {
                    url: "/img/studio/grid-07_full.jpg",
                    preview: "/img/studio/grid-07.jpg",
                    orientation: "horizontal",
                },
                {
                    url: "/img/studio/grid-05_full.jpg",
                    preview: "/img/studio/grid-05.jpg",
                    orientation: "horizontal",
                },
                {
                    url: "/img/studio/grid-01_full.jpg",
                    preview: "/img/studio/grid-01.jpg",
                    orientation: "horizontal",
                },
                {
                    url: "/img/studio/grid-02_full.jpg",
                    preview: "/img/studio/grid-02.jpg",
                    orientation: "horizontal",
                },
                {
                    url: "/img/studio/grid-04_full.jpg",
                    preview: "/img/studio/grid-04.jpg",
                    orientation: "horizontal",
                },
                {
                    url: "/img/studio/grid-03_full.jpg",
                    preview: "/img/studio/grid-03.jpg",
                    orientation: "horizontal",
                },
            ],
        };
    },
};
</script>

<style></style>
