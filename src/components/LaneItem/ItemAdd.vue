<template>
<div ref="item"
    class="gk-lane-item gk-add"
    :style="`
        background-color:${colorFrom || colorLighter};
        border-color:${colorBase}
    `"
>
    <b>+</b>
</div>
</template>

<script>
import { BaseColor, ComputedHSL, LighterColor } from '../../mixins/Colors.js';
import { ItemIndexes } from '../../mixins/LaneItemProps.js'

import { computeColor } from '../../js/common.js'

export default {
    name: "ItemAdd",
    data: ()=>({
        colorFrom: null
    }),
    mixins: [
        ItemIndexes,
        ComputedHSL,
        BaseColor,
        LighterColor
    ],
    created(){
        if (this.item?.from != undefined) {
            // console.log("IS FROM " + this.item.from);
            this.colorFrom = computeColor(
                this.$store.getters.getItemHue(this.item.from, this.itemIndex),
                100,
                90
            )
        }
    }
}
</script>

<style>
.gk-lane-item.gk-add {
    padding: 0em;
    height: 1.5em;
    width: 1.5em;
    border-radius: 100px;
    text-align: center;
    border: solid 3px;
}

</style>
