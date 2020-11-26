
export const BoundingBox = {
    data: () => ({
        bBox: {}
    }),
    methods: {
        /**
         * Recomputes the bounding box of the item and saves it in store
         * 
         * the bounding box has these properties:
         * left, right, top, bottom, cLeft, cRight, cTop, cBottom, xMiddle, yMiddle
         * 
         * All values are relative to ContainerContent
         */
        recomputeBoundingBox(){
            const item = this.$refs.item?.$refs?.item;
            if (!item) return;
            
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
                    if(elem.classList.contains('gk-container-content')) break;
                }
                return { 
                    x, y, w, h
                };
            }
            
            let itemBBox = offset(item);
            let cellBBox = offset(item.offsetParent);
            // TODO: add left right top bottom of parent as well 
            this.bBox = {
                left: itemBBox.x,
                right: itemBBox.x + itemBBox.w,
                top: itemBBox.y,
                bottom: itemBBox.y + itemBBox.h,
                cLeft: cellBBox.x,
                cRight: cellBBox.x + cellBBox.w,
                cTop: cellBBox.y,
                cBottom: cellBBox.y + cellBBox.h,
                xMiddle: cellBBox.x + cellBBox.w/2,
                yMiddle: cellBBox.y + cellBBox.h/2
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