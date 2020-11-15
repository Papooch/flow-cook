<template>
<div 
    ref="item"
    class="gk-lane-item gk-action"
    :style="`background-color:${colorLighter}`"
>
    {{event.text}}
</div>
</template>

<script>
import { LighterColor } from '../../mixins/colors.js'

export default {
    name: "LaneAction",
    props: ["event", "hue"],
    data: ()=>({
        //text: "Promíchat"
    }),
    mixins: [
        LighterColor,
    ]
}
</script>

<style>

</style>
