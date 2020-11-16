<template>
    <tr class="gk-lane">
        <lane-event
            v-for="(event, index) of lane.events"
            :key="event"
            :event="event"
            :eventIndex="index"
            :laneIndex="laneIndex"
            :hue="lane.hue"
            :ref="'gk-event-ref-' + index"
        />
        <button
            @click="recomputeBoundingBoxes"
        >
            recalc
        </button>
    </tr>
</template>

<script>
import LaneEvent from '../LaneEvent'

export default {
    props: ["lane", "laneIndex"],
    name: "ContainerLane",
    components: {
        LaneEvent
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

.gk-lane-item {
    display: inline-block;
    background-color: var(--color-default);
    border-radius: 100px;
    padding: .5em 1em;
    filter: drop-shadow(2px 2px 0px rgba(0, 0, 0, .4));
}
</style>
