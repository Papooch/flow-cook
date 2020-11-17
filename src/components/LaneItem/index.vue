<template>
<td
    class="gk-lane-item-cell"
>
    <item-start
        ref="item"
        v-if="item.type == 'start'"
        :item="item"
        :hue="item.hue || hue"
        :itemIndex="itemIndex"
    />
    <item-action
        ref="item"
        v-if="item.type == 'action'"
        :item="item"
        :hue="item.hue || hue"
        :itemIndex="itemIndex"
    />
    <item-add
        ref="item"
        v-if="item.type == 'add'"
        :item="item"
        :hue="item.hue || hue"
        :itemIndex="itemIndex"
    />
</td>
</template>

<script>
import { computeColor } from '../../js/common.js'
import { BoundingBox } from '../../mixins/coordinates.js'
import ItemStart from './ItemStart.vue';
import ItemAction from './ItemAction'
import ItemAdd from './ItemAdd'

export default {
    name: "LaneItem",
    props: ["item", "itemIndex", "laneIndex", "hue"],
    components: {
        ItemStart,
        ItemAction,
        ItemAdd
    },
    mixins: [
        BoundingBox
    ],
}
</script>

<style>
.gk-lane-item-cell {
    padding: .5em 1em;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.gk-lane-item {
    display: inline-block;
    background-color: var(--color-default);
    border-radius: 10px;
    padding: .7em 1em;
    filter: drop-shadow(2px 2px 0px rgba(0, 0, 0, .4));
}
</style>
