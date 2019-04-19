<template>
    <div>
        <nav-bar></nav-bar>

        <div class="container main">
            <img src="/img/general/portfolio-header-03.jpg">
            <hr>
            <h2>Who is Behind All This</h2>
            <hr>
            <div class="columns is-6 is-variable">
                <div class="column is-one-third">
                    <div class="column-media">
                        <img src="/img/jobrina2.jpg">
                    </div>
                </div>
                <div class="column">
                    <div class="column-content">
                        <div class="blockquote">
                            <div class="quote">A camera is a save button for the mind's eye.</div>
                            <div class="signature">Roger Kingston</div>
                        </div>
                        <p>
                            I'm Jobrina, and I would love to be your photographer. I enjoy capturing life, not pictures.
                            Memories fade quickly so capturing and storing those memories is something I value in my own
                            life and strive to help my clients capture as well.
                        </p>
                        <p>
                            I enjoy meeting new people and enjoy being a part of storing their memories, if only for an hour
                            at a time. I aim to make every session a relaxing, comfortable, affordable experience for all
                            involved and my goal is to create images that illuminate important times in your and your
                            family's lives that can be looked back on for years to come.
                        </p>
                        <p>Thank you for considering me to help capture your life.</p>
                    </div>
                </div>
            </div>
        </div>

        <footer-nav></footer-nav>
    </div>
</template>

<script>
import NavBar from "../components/navbar.vue";
import FooterNav from "../components/footer.vue";

export default {
    components: {
        NavBar,
        FooterNav
    }
}
</script>

<style>
</style>
