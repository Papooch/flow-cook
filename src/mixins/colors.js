import { computeColor } from '../js/common.js'

export const ComputedHSL =  {
    computed: {
        /**
         * Returns hue associated with this item in store
         */
        hue() {
            return this.$store.getters.getItemHue(this.laneIndex, this.itemIndex);
        },
        /**
         * Returns saturation associated with this item in store
         */
        saturation() {
            return this.$store.getters.getItemSaturation(this.laneIndex, this.itemIndex);
        },
        /**
         * Returns lightness associated with this item in store
         */
        lightness() {
            return this.$store.getters.getItemLightness(this.laneIndex, this.itemIndex);
        }
    }
}

export const BaseColor = {
    computed: {
        /**
         * Returns the color (hsl) associated with this item in store
         */
        colorBase(){
            return computeColor(this.hue, this.saturation, this.lightness);
        }
    }
}

export const LightColor = {
    computed: {
        /**
         * Returns the color associated with this item in store with lightness of 70
         */
        colorLight(){
            return computeColor(this.hue, this.saturation, 70);
        }
    }
}

export const LighterColor = {
    computed: {
        /**
         * Returns the color associated with this item in store with lightness of 92
         */
        colorLighter(){
            return computeColor(this.hue, this.saturation, 92);
        }
    }
}
