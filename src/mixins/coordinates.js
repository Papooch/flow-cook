
export const BoundingBox = {
    data: () => ({
        bBox: {}
    }),
    methods: {
        /**
         * Recomputes the bounding box of the item and saves it in store
         * 
         * the bounding box has these properties:
         * left, right, top, bottom, xMiddle, yMiddle
         * 
         * All values are relative to ContainerContent
         */
        recomputeBoundingBox(){
            const root = this.$refs.item?.$refs?.item;
            if (!root) return;
            
            /**
             * 
             * 
             * @param {Node} elem the DOM element
             * @return {Object} the offset object with properties
             * {
             *   x: x coordinate of left edge
             *   y: y coordinate of top edge
             *   w: width
             *   h: height
             * }
             */
            function offset(elem) {
                let x = elem.offsetLeft;
                let y = elem.offsetTop;
                let w = elem.offsetWidth;
                let h = elem.offsetHeight;
                while (elem.offsetParent) {
                    elem = elem.offsetParent
                    x += elem.offsetLeft;
                    y += elem.offsetTop;
                    if(elem.nodeName == 'TABLE') break;
                }
                return { 
                    x, y, w, h
                };
            }
            
            let ro = offset(root);
            let po = offset(root.offsetParent);
            this.bBox = {
                left: ro.x,
                right: ro.x + ro.w,
                top: ro.y,
                bottom: ro.y + ro.h,
                xMiddle: po.x + po.w/2,
                yMiddle: po.y + po.h/2

            }

            this.$store.commit('setBBox', {
                laneIndex: this.laneIndex,
                itemIndex: this.itemIndex,
                bBox: this.bBox
            })
        }
    },
    mounted() {
        this.recomputeBoundingBox();
    }
}