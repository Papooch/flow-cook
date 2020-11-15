import { computeColor } from '../js/common.js'

export const BaseColor = {
    computed: {
        colorBase(){
            return computeColor(this.hue, 100, 50);
        }
    }
}

export const LightColor = {
    computed: {
        colorLight(){
            return computeColor(this.hue, 100, 70);
        }
    }
}

export const LighterColor = {
    computed: {
        colorLighter(){
            return computeColor(this.hue, 100, 90);
        }
    }
}
