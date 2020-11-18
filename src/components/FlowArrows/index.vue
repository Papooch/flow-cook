<template>
<svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
>
    <flow-arrow
        v-for="(arrow, index) of arrows"
        :key="arrow"
        :arrow="arrow"
        :ref="'arrow-ref-' + index"
    />
</svg>
</template>

<script>
import FlowArrow from './FlowArrow'

export default {
    name: "FlowArrows",
    components: {
        FlowArrow
    },
    computed: {
        arrows(){
            return this.$store.state.arrows;
        }
    },
    methods: {

    }
}
</script>

<style>
svg {
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
    filter: drop-shadow(1px 1px 0px rgba(0, 0, 0, .4));
    /* background-color: rgba(0, 0, 0, .4); */
    z-index: 1;
    pointer-events: none;
}

</style>