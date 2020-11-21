<template>
    <div class="gk-ingredient-badge gk-drop-shadow">
        {{ ingredient.name }}
        <ingredient-amount
            :amount="ingredient.amount"
            :unit="ingredient.unit"
        />
    </div>
</template>

<script>
import IngredientAmount from './IngredientAmount'

export default {
    name: "IngredientBadge",
    props: {
        ingredient: Object
    },
    components: {
        IngredientAmount
    }
}
</script>

<style>
.gk-ingredient-badge {
    font-size: .9em;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: .5em;
    border-radius: 100px;
    background-color: hsl(0, 0%, 95%);
    width: 5em;
    height: 5em;
}

</style>