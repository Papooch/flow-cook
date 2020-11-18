<template>
<g class="gk-arrow">
    <defs>
        <marker
            :id="`arrowhead${hue}`"
            markerWidth="10"
            markerHeight="7"
            refX="3.5"
            refY="2.5"
            orient="auto"
        >
            <polygon
                :fill="colorBase"
                points="0 0, 5 2.5, 0 5, 1 2.5"
            />
        </marker>
    </defs>

    <line
        v-if="fromTo"
        :x1="fromTo.xFrom + 1"
        :y1="fromTo.yFrom + 1"
        :x2="fromTo.xTo + 1"
        :y2="fromTo.yTo + 1"
        :stroke="colorBase"
        stroke-linecap="round"
        :stroke-dasharray=" dotted ? '0,10' : ''"
        stroke-width="4" :marker-end="`url(#arrowhead${hue})`"
    />
    {{ fromBBox }}
</g>
</template>

<script>
import { BaseColor } from '../../mixins/Colors.js'

export default {
    props: ["arrow"],
    data: ()=>({
        headSize: 5,
    }),
    computed: {
        dotted(){
            return this.arrow.dotted || false;
        },
        hue(){
            return this.$store.getters.getItemHue(...this.arrow.from);
        },
        saturation(){
            return this.$store.getters.getItemSaturation(...this.arrow.from);
        },
        lightness(){
            return this.$store.getters.getItemLightness(...this.arrow.from);
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
            let vertical = Math.abs(fb.yMiddle - tb.yMiddle) > Math.abs(fb.xMiddle - tb.xMiddle);
            let inverted = vertical ? fb.bottom > tb.top : fb.right > tb.left;
            return {
                xFrom: vertical ? fb.xMiddle : (inverted ? fb.left : fb.right),
                yFrom: vertical ? (inverted ? fb.top : fb.bottom) : fb.yMiddle,
                xTo: vertical ? tb.xMiddle : (inverted ? tb.right + 5 : tb.left - 5),
                yTo: vertical ? (inverted ? tb.bottom + 5 : tb.top - 5): tb.yMiddle
            } 
        },
    },
    mixins: [
        BaseColor
    ],

}
</script>

<style>

</style>