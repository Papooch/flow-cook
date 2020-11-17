<template>
<td
    class="gk-lane-item-cell"
>
    <component
        v-if="itemComponent"
        :is="itemComponent"
        ref="item"
        :item="item"
        :itemIndex="itemIndex"
        :laneIndex="laneIndex"
    />
</td>
</template>

<script>
import { ItemIndexes } from '../../mixins/LaneItemProps.js';
import { BoundingBox } from '../../mixins/Coordinates.js';

import { computeColor } from '../../js/common.js';

import ItemStart from './ItemStart.vue';
import ItemAction from './ItemAction';
import ItemAdd from './ItemAdd';
import ItemIngredients from './ItemIngredients';

export default {
    name: "LaneItem",
    components: {
    },
    computed: {
        itemComponent(){
            switch (this.item.type) {
                case 'start':
                    return ItemStart;
                case 'add':
                    return ItemAdd;
                case 'action':    
                    return ItemAction;
                case 'ingredients':
                    return ItemIngredients;
            
                default:
                    return null;
            }
        }
    },
    mixins: [
        BoundingBox,
        ItemIndexes
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
    border-radius: 100px;
    padding: .7em 1em;
    filter: drop-shadow(2px 2px 0px rgba(0, 0, 0, .4));
}
</style>
