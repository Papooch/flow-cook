<template>
<div 
    ref="item"
    class="gk-lane-item gk-action"
    :style="`background-color:${colorLighter}`"
>
    {{item.text}}
</div>
</template>

<script>
import { LighterColor } from '../../mixins/colors.js'

export default {
    name: "ItemAction",
    props: ["item", "hue"],
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
