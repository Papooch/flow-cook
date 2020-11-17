<template>
<div ref="item"
    class="gk-lane-item gk-ingredients"
    :style="`
        background-color:${colorLighter};
        border-color:${colorBase}
    `"
>
    ingredients:<br>
    {{ item.ingredients }}
</div>
</template>

<script>
import { BaseColor, ComputedHSL, LighterColor } from '../../mixins/Colors.js';
import { ItemIndexes } from '../../mixins/LaneItemProps.js'

export default {
    name: "ItemIngredients",
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

</style>
