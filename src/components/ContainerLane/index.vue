<template>
    <td
        class="gk-lane-start"
        :style="style"
    ></td>
    <lane-item
        v-for="(item, index) of lane.items"
        :key="item"
        :item="item"
        :itemIndex="index"
        :laneIndex="laneIndex"
        :ref="'gk-item-ref-' + index"
    />
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
                this.$refs[key]?.recomputeBoundingBox();
            });
            setTimeout(
                this.recomputeBoundingBoxes,
                500
            )
        }
    },
    computed: {
        style() {
            let columns = this.$store.state.columnDisplay;
            return `grid-${columns ? 'row' : 'column'}-start: 1;`
        }
    },
    updated(){
            this.recomputeBoundingBoxes()
    },
    mounted(){
        window.addEventListener('resize', this.recomputeBoundingBoxes, true);
    },
    unmounted(){
        window.removeEventListener('resize', this.recomputeBoundingBoxes, true);
    }
}
</script>

<style>

.gk-lane-start {
    width: 0;
    padding: 0;
    height: 0;
}
</style>
