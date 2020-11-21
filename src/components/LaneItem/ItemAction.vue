<template>
<div 
    ref="item"
    class="gk-lane-item gk-action"
    :style="`background-color:${colorLighter}`"
>
 {{ item.text }}
</div>
</template>

<script>
import { BaseColor, ComputedHSL, LighterColor } from '../../mixins/Colors.js';
import { ItemIndexes } from '../../mixins/LaneItemProps.js'

export default {
    name: "ItemAction",
    data: ()=>({
        //text: "Promíchat"
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
.gk-action {
    /* white-space: nowrap; */
}
</style>
