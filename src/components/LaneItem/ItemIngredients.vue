<template>
<div ref="item"
    class="gk-lane-item gk-ingredients"
    :style="`
        background-color:${colorLighter};
        border-color:${colorBase};
        flex-direction:${vertical ? 'row': 'column'}
    `"
>
    <ingredient-badge
        v-for="ingredient of item.ingredients"
        :key="ingredient.name"
        :ingredient="ingredient"
    />
</div>
</template>

<script>
import IngredientBadge from '../IngredientBadge'

import { BaseColor, ComputedHSL, LighterColor } from '../../mixins/Colors.js';
import { ItemIndexes } from '../../mixins/LaneItemProps.js'

export default {
    name: "ItemIngredients",
    components: {
        IngredientBadge
    },
    data: ()=>({
    }),
    computed: {
        vertical(){
            return this.$store.state.columnDisplay;
        }
    },
    mixins: [
        ItemIndexes,
        ComputedHSL,
        BaseColor,
        LighterColor
    ],

}
</script>

<style>
.gk-lane-item.gk-ingredients {
    padding: 0;
    display: flex;
}
</style>
