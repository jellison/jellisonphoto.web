<template>
    <div class="masonry-container">
        <div class="masonry">
            <div class="masonry-item" :class="{ 'horizontal': image.orientation == 'horizontal', 'vertical': image.orientation == 'vertical' }" :key="image.url" v-for="image in images">
                <a :href="image.url" @click.prevent="onImageClick(image.url)">
                    <img :src="image.preview">
                    <span class="view-image">
                        <sup></sup>
                    </span>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['images'],
    methods: {
        onImageClick(url) {
            console.log(this.fancyImages);
            $.fancybox.open(this.fancyImages, {
                index: this.fancyImages.findIndex(i => i.src === url),
                loop: true
            });
        }
    },
    mounted() {
        var grid = $(".masonry").masonry({
            itemSelector: ".masonry-item",
            percentPosition: true
        });

        grid.imagesLoaded().progress(function() {
            grid.masonry("layout");
        });
    },
    computed: {
        fancyImages: function() {
          return this.images.map(i => ({src: i.url}));
        }
    }
};
</script>

<style lang="scss">
@import '../assets/sass/util';

.masonry-container {
    @include breakpoint(sm) {
        padding-left: 15px;
        padding-right: 15px;
    }
}

.masonry {
    margin: -15px;

    .masonry-item {
        padding: 15px;
        width: 33.33333%;

        & > a {
            display: block;
            position: relative;

            &:hover .view-image {
                display: block;
            }

            & > img {
                display: block;
            }
        }
    }
}
.view-image {
    background: rgba(0, 0, 0, 0.5);
    display: none;
    height: 100%;
    width: 100%;
    top: 0;
    position: absolute;

    sup {
        border-radius: 60px;
        background: #fff url("/img/view-image.png") no-repeat 50% 50%;
        position: absolute;
        margin-left: -30px;
        margin-top: -30px;
        top: 50%;
        left: 50%;
        height: 60px;
        width: 60px;
    }
}
</style>
