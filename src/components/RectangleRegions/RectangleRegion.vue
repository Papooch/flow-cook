<template>
<div
    v-if="style"
    class="gk-region gk-drop-shadow"
    :style="style"
>
    <div
        class="gk-region-header gk-drop-shadow"
        :style="headerStyle"
    >
        {{ region.type }}
    </div>
</div>
  
</template>

<script>
export default {
    name: "RectangleRegion",
    props: ["region"],
    computed: {
        topLeftBBox(){
            return this.$store.getters.getItemBBox(...this.region.topLeft);
        },
        bottomRightBBox(){
             return this.$store.getters.getItemBBox(...this.region.bottomRight);
        },
        vertical(){
            return this.$store.state.columnDisplay;
        },
        style(){
            const tl = this.topLeftBBox;
            const br = this.bottomRightBBox;
            if (!tl || !br) {
                return false;
            }
            let cb = {
                top: this.topLeftBBox.cTop,
                left: this.topLeftBBox.cLeft,
                right: this.bottomRightBBox.cRight,
                bottom: this.bottomRightBBox.cBottom
            }
            let style =`
                left: ${cb.left}px;
                top: ${cb.top}px;
                width: ${cb.right - cb.left}px;
                height: ${cb.bottom - cb.top}px;
                flex-direction: ${this.vertical ? 'row' : 'column'};
                `
            return style
        },
        isHeaderOnBottom(){
            return this.region?.header == 'bottom';
        },
        headerStyle(){
            if(this.vertical){
                return `
                ${this.isHeaderOnBottom ? 'right' : 'left'}: 0;
                transform: translateX(${this.isHeaderOnBottom ? '' : '-'}50%) rotate(-90deg);
                filter: drop-shadow(-2px 2px 0px rgba(0, 0, 0, .4));
                `
            }
            return `
                ${this.isHeaderOnBottom ? 'bottom' : 'top'}: 0;
                transform: translateY(${this.isHeaderOnBottom ? '' : '-'}50%);
            `
        }
    }
}
</script>

<style>
.gk-region {
    position: absolute;
    display: flex;
    align-items: center;
    border-radius: 2.5em;
    background-color: hsl(0, 0%, 30%);
    padding: 0;
}

.gk-region-header {
    padding: .5em 1em;
    position: absolute;
    background-color:  hsl(0, 0%, 40%);
    max-width: 80%;
    color: white;
    border-radius: 2.5em;
}

</style>