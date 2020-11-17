<template>
    <button
        @click="$store.commit('toggleDisplayStyle')"
    >
        FLIP
    </button>
    <recipe-container/>
</template>

<script>
import RecipeContainer from './components/RecipeContainer'

import { convertRecipe } from './js/recipeConverter' 

export default {
    name: 'App',
    components: {
        RecipeContainer
    },
    created(){
        let recipe = convertRecipe();
        console.log(recipe);
        this.$store.commit('setRecipe', {recipe})
    }
}
</script>

<style>
@import url('./assets/css/variables.css');
@import url('./assets/css/common.css');


#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    /*-webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px; */
    text-align: center;
    width: 100%;
    height: 100%;
}

#app * {
    box-sizing: border-box;
}
</style>
