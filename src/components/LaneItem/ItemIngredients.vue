<template>
<div ref="item"
    class="gk-lane-item gk-ingredients"
    :style="`
        background-color:${colorLighter};
        border-color:${colorBase};
        ${gridTemplate}
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
        gridTemplate(){
            let columns = this.$store.state.columnDisplay;
            let gt = `
                grid-template-${columns ? 'columns' :'rows' }: repeat(${3}, auto);
                grid-auto-flow: ${columns ? 'row' : 'column'};
            `;
            return gt;
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
    border-radius: 2.6em;
    padding: 0;
    display: grid;
}
</style>
