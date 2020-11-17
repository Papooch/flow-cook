<template>
<div ref="item"
    class="gk-lane-item gk-start"
    :style="`background-color:${colorBase}`"
>
    {{ item.text }}
</div>
</template>

<script>
import { BaseColor } from '../../mixins/colors.js'

export default {
    name: "ItemStart",
    props: ["item", "hue"],
    data: ()=>({
    }),
    mixins: [
        BaseColor, 
    ]
}
</script>

<style>
.gk-lane-item.gk-start {
    font-size: 1.2em;
    padding: .8em 2em;
    color: white;
}
</style>
