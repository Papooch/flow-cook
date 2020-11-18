<template>
<div ref="item"
    class="gk-lane-item gk-start"
    :style="`
        background-color:${colorBase};
    `"
>
    {{ item.text }}
</div>
</template>

<script>
import { BaseColor, ComputedHSL, LighterColor } from '../../mixins/Colors.js';
import { ItemIndexes } from '../../mixins/LaneItemProps.js';

export default {
    name: "ItemStart",
    data: ()=>({
    }),
    mixins: [
        ItemIndexes,
        ComputedHSL,
        BaseColor,
        LighterColor
    ],
}
</script>

<style>
.gk-lane-item.gk-start {
    font-size: 1.2em;
    padding: .8em 2em;
    color: white;
}
</style>
