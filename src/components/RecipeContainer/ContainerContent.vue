<template>
<div class="gk-container-content">
    <rectangle-regions/>
    <flow-arrows/>
    <table class="gk-lane-container"
        :style="gridTemplate"
    >
        <container-lane
            v-for="(lane, index) of lanes"
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
import RectangleRegions from '../RectangleRegions';

export default {
    name: 'ContainerContent',
    components: {
        ContainerLane,
        FlowArrows,
        RectangleRegions
    },
    computed: {
        lanes(){
            return this.$store.state.lanes;
        },
        gridTemplate(){
            let maxLaneLength = Math.max(...this.lanes.map(l=>l.items.length));
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
.gk-lane-container {
    z-index: 30;
    display: grid;
}

.gk-lane-container > * {
    z-index: 30;
}

/* table,
table td {
    border: solid rgba(0, 0, 0, 0.158) 1px;
} */

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

<style>
    .gk-container-content {
        /*background-color: rgb(209, 209, 209);*/
        position: relative;
        margin: auto;
        padding: 2em;
        width: fit-content;
        height: auto;
    }
</style>