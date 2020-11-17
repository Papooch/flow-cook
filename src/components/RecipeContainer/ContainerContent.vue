<template>
<div class="gk-container-content">
    <flow-arrows/>
    <table>
        <container-lane
            v-for="(lane, index) of recipe.lanes"
            :key="lane.name"
            :lane="lane"
            :laneIndex="index"
        />
    </table>
</div>
</template>

<script>
import ContainerLane from '../ContainerLane';
import FlowArrows from '../FlowArrows';

export default {
    name: 'ContainerContent',
    components: {
        ContainerLane,
        FlowArrows
    },
    computed: {
        recipe(){
            return this.$store.state.recipe;
        }
    },
}
</script>

<style>
@import url('../../assets/css/variables.css');
@import url('../../assets/css/common.css');

/** debug */
table {
    z-index: 100;
}

table,
table td {
    border: solid rgba(0, 0, 0, 0.158) 1px;
}
</style>

<style scoped>
    .gk-container-content {
        position: relative;
        margin: 0;
        margin-top: 5em;
        padding: 2em;
        width: fit-content;
    }
</style>