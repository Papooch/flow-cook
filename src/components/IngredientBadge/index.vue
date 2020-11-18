<template>
    <div class="gk-ingredient-badge">
        {{ ingredient.name }}
    </div>
</template>

<script>
export default {
    name: "IngredientBadge",
    props: {
        ingredient: Object
    }
}
</script>

<style>
.gk-ingredient-badge {
    font-size: .9em;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: .5em;
    border-radius: 100px;
    background-color: hsl(0, 0%, 95%);
    width: 5em;
    height: 5em;
    filter: drop-shadow(2px 2px 0px rgba(0, 0, 0, .4));
}

</style>