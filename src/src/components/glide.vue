<template>
    <div id="glide" class="glide">
        <div class="glide__track" data-glide-el="track">
            <ul class="glide__slides">
                <li
                    class="glide__slide"
                    :key="image"
                    v-for="image in images"
                    :data-cover="image"
                ></li>
            </ul>
        </div>
        <div class="glide__arrows" data-glide-el="controls">
            <button class="glide__arrow glide__arrow--left" data-glide-dir="<">
                prev
            </button>
            <button class="glide__arrow glide__arrow--right" data-glide-dir=">">
                next
            </button>
        </div>
        <div class="glide__bullets" data-glide-el="controls[nav]">
            <button
                class="glide__bullet"
                :key="index"
                v-for="(image, index) in images"
                :data-glide-dir="`=${index}`"
            ></button>
        </div>
    </div>
</template>

<script>
export default {
    props: ["images"],
    methods: {
        onResize() {
            var idealRatio = 1.7 / 1;

            var glide = document.getElementById("glide");
            var glideRatio = glide.offsetWidth / 600;

            if (glideRatio > idealRatio) {
                // very wide screen
                glide.style.height = glide.offsetWidth / idealRatio + "px";
            }
        },
    },
    mounted() {
        window.addEventListener("resize", this.onResize);

        // Get all "navbar-burger" elements
        const $navbarBurgers = Array.prototype.slice.call(
            document.querySelectorAll(".navbar-burger"),
            0
        );

        // Check if there are any navbar burgers
        if ($navbarBurgers.length > 0) {
            // Add a click event on each of them
            $navbarBurgers.forEach((el) => {
                el.addEventListener("click", () => {
                    // Get the target from the "data-target" attribute
                    const target = el.dataset.target;
                    const $target = document.getElementById(target);

                    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                    el.classList.toggle("is-active");
                    $target.classList.toggle("is-active");
                });
            });
        }

        const slides = document.querySelectorAll(".glide__slide");

        slides.forEach((el) => {
            const cover = el.dataset.cover;
            if (cover) {
                el.style.background =
                    "url('" + cover + "') center center no-repeat";
                el.style.backgroundSize = "cover";
            }
        });

        new Glide("#glide", {
            type: "carousel",
            startAt: 0,
            perView: 1,
            // autoplay: 5000
        }).mount();

        window.dispatchEvent(new Event("resize"));
    },
    beforeDestroy() {
        window.removeEventListener("resize", this.onResize);
    },
};
</script>

<style <style lang="scss">
.glide {
    height: 600px;
}

.glide__track,
.glide__slides,
.glide__slide,
.glide__slide > .level {
    height: 100%;
}
</style>
