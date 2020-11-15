<template>
<td
    @click="recomputeBoundingBox"
>
    <event-start
        ref="item"
        v-if="event.type == 'start'"
        :event="event"
        :hue="hue"
    />
    <event-action
        ref="item"
        v-if="event.type == 'action'"
        :event="event"
        :hue="hue"
    />
    <event-add
        ref="item"
        v-if="event.type == 'add'"
        :event="event"
        :hue="hue"
    />
</td>
</template>

<script>
import { computeColor } from '../../js/common.js'
import { BoundingBox } from '../../mixins/coordinates.js'
import EventStart from './EventStart.vue';
import EventAction from './EventAction'
import EventAdd from './EventAdd'

export default {
    name: "LaneEvent",
    props: ["event", "eventIndex", "laneIndex", "hue"],
    components: {
        EventStart,
        EventAction,
        EventAdd
    },
    mixins: [
        BoundingBox
    ],
    data: ()=>({
        bBox: {}
    }),
}
</script>

<style>

</style>
