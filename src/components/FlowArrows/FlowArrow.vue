<template>
<g class="gk-arrow">
    <defs>
        <marker
            :id="`arrowhead${hue}`"
            markerWidth="10"
            markerHeight="7"
            refX="3"
            refY="2.5"
            orient="auto"
        >
            <polygon
                :fill="colorBase"
                points="0 0, 5 2.5, 0 5"
            />
        </marker>
    </defs>

    <line
        v-if="fromTo"
        :x1="fromTo.xFrom"
        :y1="fromTo.yFrom"
        :x2="fromTo.xTo"
        :y2="fromTo.yTo"
        :stroke="colorBase"
        stroke-linecap="round"
        :stroke-dasharray=" dotted ? '0,6' : ''"
        stroke-width="3" :marker-end="`url(#arrowhead${hue})`"
    />
    {{ fromBBox }}
</g>
</template>

<script>
import { BaseColor } from '../../mixins/colors.js'

export default {
    props: ["arrow"],
    data: ()=>({
        headSize: 5,
        x1: 0,
        x2: 1,
        y1: 0,
        y2: 1,
    }),
    computed: {
        dotted(){
            return this.arrow.dotted || false;
        },
        vertical(){
            return this.arrow.vertical || false;
        },
        hue(){
            return this.$store.getters.getItemHue(...this.arrow.from);
        },
        fromBBox(){
            return this.$store.getters.getItemBBox(...this.arrow.from);
        },
        toBBox(){
             return this.$store.getters.getItemBBox(...this.arrow.to);
        },
        fromTo(){
            const fb = this.fromBBox;
            const tb = this.toBBox;
            if (!fb || !tb) {
                return false
            }
            let vertical = this.vertical ^ this.$store.state.columnDisplay
            return {
                xFrom: vertical ? fb.xMiddle : fb.right,
                yFrom: vertical ? fb.bottom : fb.yMiddle,
                xTo: vertical ? tb.xMiddle : tb.left - 5,
                yTo: vertical ? tb.top - 5: tb.yMiddle
            } 
        },
    },
    mixins: [ BaseColor ],

}
</script>

<style>

</style>