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

</style>
<style scoped>
    .gk-recipe-container {
        position: absolute;;
        /* background-color: lightgray; */
        width: 100%;
        max-height: 100%;
        overflow: auto;
        font-size: .8em;
    }
</style>