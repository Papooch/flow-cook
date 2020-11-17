<template>
    <tr class="gk-lane">
        <lane-item
            v-for="(item, index) of lane.items"
            :key="item"
            :item="item"
            :itemIndex="index"
            :laneIndex="laneIndex"
            :hue="lane.hue"
            :ref="'gk-item-ref-' + index"
        />
    </tr>
</template>

<script>
import LaneItem from '../LaneItem'

export default {
    props: ["lane", "laneIndex"],
    name: "ContainerLane",
    components: {
        LaneItem
    },
    methods: {
        recomputeBoundingBoxes(){
            Object.keys(this.$refs).forEach(key=>{
                this.$refs[key].recomputeBoundingBox();
            });
        }
    }
}
</script>

<style>
td {
    padding: .5em;
}
</style>
