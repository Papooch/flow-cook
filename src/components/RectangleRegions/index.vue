<template>
    <div
        class="gk-rectangle-regions"    
    >
        <rectangle-region
            v-for="region of regions"
            :key="region"
            :region="region"
        />
    </div>
</template>

<script>
import RectangleRegion from './RectangleRegion'

export default {
    name: "RectangleRegions",
    components: {
        RectangleRegion
    },
    computed: {
        regions(){
            console.log(this.$store.state.regions)
            return this.$store.state.regions;
        }
    },
}
</script>

<style>
.gk-rectangle-regions {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    pointer-events: none;
}
</style>