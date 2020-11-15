<template>
<div ref="item"
    class="gk-lane-item gk-add"
    :style="`
        background-color:${colorFrom || colorLighter};
        border-color:${colorBase}
    `"
>
    +
</div>
</template>

<script>
import { BaseColor, LighterColor } from '../../mixins/colors.js'
import { computeColor } from '../../js/common.js'

export default {
    name: "LaneAdd",
    props: ["event", "hue"],
    data: ()=>({
        colorFrom: null
    }),
    mixins: [
        BaseColor,
        LighterColor
    ],
    created(){
        if (this.event?.from != undefined) {
            // console.log("IS FROM " + this.event.from);
            this.colorFrom = computeColor(
                this.$store.getters.getLaneHue(this.event.from),
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
    text-align: center;
    border: solid 3px;
}

</style>
