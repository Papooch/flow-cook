<template>
<div ref="item"
    class="gk-lane-item gk-start"
    :style="`background-color:${colorBase}`"
>
    {{ event.text }}
</div>
</template>

<script>
import { BaseColor } from '../../mixins/colors.js'

export default {
    name: "EventStart",
    props: ["event", "hue"],
    data: ()=>({
    }),
    mixins: [
        BaseColor, 
    ]
}
</script>

<style>
.gk-start {
    font-size: 1.2em;
    padding: .8em 2em;
    color: white;
}
</style>
