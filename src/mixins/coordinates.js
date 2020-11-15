import { reactive } from 'vue'

export const BoundingBox = {
    data: () => ({
        bBox: {}
    }),
    methods: {
        recomputeBoundingBox(){
            console.log("recomputing");
            // console.log("created " + this.event.text);
            const root = this.$refs.item?.$refs?.item;
            if (!root) return;
            //console.log(root);

            const bRect = root.getBoundingClientRect();
            console.log("left: " + document.body.scrollLeft);
            this.bBox = {
                left: bRect.left - document.body.scrollLeft,
                right: bRect.right,
                top: bRect.top - document.body.scrollTop,
                bottom: bRect.bottom,
                xMiddle: bRect.left + (bRect.right - bRect.left) / 2,
                yMiddle: bRect.top + (bRect.bottom - bRect.top) / 2
            }
            //console.log(this.bBox);
            this.$store.commit('setBBox', {
                laneIndex: this.laneIndex,
                eventIndex: this.eventIndex,
                bBox: this.bBox
            })
        }
    },
    mounted() {
        this.recomputeBoundingBox()
    }
}