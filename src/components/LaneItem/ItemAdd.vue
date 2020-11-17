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
    name: "ItemAdd",
    props: ["item", "itemIndex", "hue"],
    data: ()=>({
        colorFrom: null
    }),
    mixins: [
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
    text-align: center;
    border: solid 3px;
}

</style>
