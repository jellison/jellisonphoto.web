<template>
    <div class="flat-select">
        <a
            :key="item.value"
            v-for="item of values"
            :class="{ 'is-selected': value != null && value == item }"
            @click.prevent="selectItem(item)"
            >{{ item }}</a
        >
    </div>
</template>

<script>
export default {
    props: ["values", "value"],
    methods: {
        selectItem(item) {
            this.$emit("input", item);
        },
    },
};
</script>

<style lang="scss">
@import "../../assets/sass/base";
@import "../../assets/sass/util";

.flat-select {
    align-content: stretch;
    display: flex;

    a {
        background: #fff;
        border-top: 1px solid #eaeaea;
        border-bottom: 1px solid #eaeaea;
        border-left: 1px solid #eaeaea;
        color: #b2b2b2;
        display: block;
        font-size: 14px;
        flex-grow: 1;
        padding-left: 16px;
        padding-right: 16px;
        padding-top: 0.375em;
        padding-bottom: 0.375em;
        text-align: center;

        &:first-child {
            border-bottom-left-radius: 4px;
            border-top-left-radius: 4px;
        }

        &:last-child {
            border-bottom-right-radius: 4px;
            border-top-right-radius: 4px;
            border-right: 1px solid #eaeaea;
        }

        &.is-selected {
            color: #000;
            border: 2px solid $accent-color;
            padding-left: 15px;
            padding-right: 15px;
        }
    }

    @include breakpoint(xs) {
        flex-wrap: wrap;

        a {
            border: 1px solid #eaeaea;
            border-radius: 4px;
            margin: 5px 0;
            width: 100%;
            flex-basis: 100%;
        }
    }
}
</style>
