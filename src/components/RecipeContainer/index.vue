<template>
<div class="gk-recipe-container"
    ref="elem"
    @click="scr"
>
    <container-content/>
</div>
</template>

<script>
import ContainerContent from './ContainerContent'

import { scrollToDuration } from '../../js/common.js';

export default {
    name: 'RecipeContainer',
    components: {
        ContainerContent,
    },
    methods: {
        scr(){
            console.log("scrolling");
            scrollToDuration(this.$refs.elem, 200, 1000)
        }
    }
}
</script>

<style>
@import url('../../assets/css/variables.css');
@import url('../../assets/css/common.css');

/** debug */
</style>
<style scoped>
    .gk-recipe-container {
        width: 100%;
        overflow-x: scroll;
    }
</style>