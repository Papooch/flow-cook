<template>
<div
    v-if="amount"
    class="gk-ingredient-amount gk-drop-shadow"    
>
    {{ amountText }}
</div>
</template>

<script>
import { normaliseAmount } from '../../js/unitConverter.js'

export default {
    name: "IngredientAmount",
    props: [
        "amount",
        "unit"
    ],
    computed: {
        portionsMultiplier(){
            return this.$store.getters.getPortionsMultiplier;
        },
        amountText(){
            if (!this.unit) return this.amount
            let na = normaliseAmount(this.amount, this.unit, this.portionsMultiplier);
            return na.amount + "\u00a0" + na.unit;
        }
    }
}
</script>

<style>
.gk-ingredient-amount {
    position: absolute;
    background-color: gold;
    white-space: nowrap;
    border-radius: 1em;
    padding: .3em .5em;
    right: -.8em;
    top: -.7em;
}
</style>