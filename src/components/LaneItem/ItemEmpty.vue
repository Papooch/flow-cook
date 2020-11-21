<template>
<div 
    ref="item"
    class="gk-lane-item gk-empty"
>
</div>
</template>

<script>
import { ItemIndexes } from '../../mixins/LaneItemProps.js'

export default {
    name: "ItemEmpty",
    data: ()=>({
    }),
    mixins: [
        ItemIndexes,
    ],
}
</script>

<style>
.gk-empty {
}
</style>
