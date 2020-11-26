<template>
<div
    class="gk-lane-item-cell"
>
    <component
        v-if="itemComponent"
        :is="itemComponent"
        ref="item"
        :item="item"
        :itemIndex="itemIndex"
        :laneIndex="laneIndex"
        class="gk-drop-shadow"
    />
</div>
</template>

<script>
import { ItemIndexes } from '../../mixins/LaneItemProps.js';
import { BoundingBox } from '../../mixins/Coordinates.js';

import { computeColor } from '../../js/common.js';

import ItemStart from './ItemStart.vue';
import ItemAction from './ItemAction';
import ItemAdd from './ItemAdd';
import ItemIngredients from './ItemIngredients';
import ItemEmpty from './ItemEmpty';

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
                    return ItemEmpty;
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
    position: relative;
    padding: 1em 1em;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.gk-lane-item {
    display: inline-block;
    border-radius: 100px;
    padding: 1.2em 1.2em;
    z-index: 10;
}
</style>
