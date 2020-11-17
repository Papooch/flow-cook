<template>
<div class="gk-container-content">
    <flow-arrows/>
    <table
        :style="gridTemplate"
    >
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
        },
        gridTemplate(){
            let maxLaneLength = Math.max(...this.recipe.lanes.map(l=>l.items.length));
            let columns = this.$store.state.columnDisplay;
            let gt = `
                grid-template-${columns ? 'rows' : 'columns'}: repeat(${maxLaneLength + 1}, auto);
                ${columns ? 'grid-auto-flow: column;' : ''}
            `;
            return gt;
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

table{
    display: grid;
}
/* table {
	display: table;
}
table tr {
	display: table-cell;
}
table tr td {
	display: block;
} */
</style>

<style scoped>
    .gk-container-content {
        /*background-color: rgb(209, 209, 209);*/
        position: relative;
        margin: auto;
        padding: 2em;
        width: fit-content;
    }
</style>