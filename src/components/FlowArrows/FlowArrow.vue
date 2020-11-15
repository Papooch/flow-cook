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
    </defs>¨

    <line
        v-if="from && to"
        :x1="xFrom"
        :y1="yFrom"
        :x2="xTo"
        :y2="yTo"
        :stroke="colorBase"
        stroke-linecap="round"
        :stroke-dasharray=" dotted ? '0,6' : ''"
        stroke-width="3" :marker-end="`url(#arrowhead${hue})`"
        @click="recomputeCoordinates"
    />
</g>
</template>

<script>
import { BaseColor } from '../../mixins/colors.js'

export default {
    props: ["arrow"],
    data: ()=>({
        dotted: false,
        hue: 0,
        headSize: 5,
        vertical: false,
        x1: 0,
        x2: 1,
        y1: 0,
        y2: 1,
    }),
    computed: {
        from(){return this.$store.getters.getBBox(...this.arrow.from)},
        to(){return this.$store.getters.getBBox(...this.arrow.to)},
        xFrom(){return this.x1},
        yFrom(){return this.y1},
        xTo(){return this.x2 - this.headSize * !this.vertical},
        yTo(){return this.y2 - this.headSize * this.vertical},
    },
    methods: {
        recomputeCoordinates(){
            // console.log("arrow recomputing");
            if (!this.from?.bBox || !this.to?.bBox) return;
            // console.log(this.from);
            this.hue = this.from.hue;
            if(this.vertical){
                this.x1 = this.from.bBox?.xMiddle;
                this.x2 = this.to.bBox?.xMiddle;
                this.y1 = this.from.bBox?.bottom;
                this.y2 = this.to.bBox?.top;
            }else{
                this.x1 = this.from.bBox?.right;
                this.x2 = this.to.bBox?.left;
                this.y1 = this.from.bBox?.yMiddle;
                this.y2 = this.to.bBox?.yMiddle;
            }
        }
    },
    mixins: [ BaseColor ],
    created(){
        this.dotted = this.arrow.dotted || false;
        this.vertical = this.arrow.vertical || false;
        this.$nextTick(
            this.recomputeCoordinates
        )
    }
}
</script>

<style>

</style>