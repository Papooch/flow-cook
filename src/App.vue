<template>
    <button
        @click="getRecipe"
    >
        Get recipe
    </button>
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
    methods: {
        getRecipe(){
            let recipe = convertRecipe();
            console.log(recipe);
            this.$store.commit('setRecipe', {recipe})
        }
    },

}
</script>

<style>
@import url('./assets/css/variables.css');
@import url('./assets/css/common.css');


#app {
    position: relative;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    text-align: center;
    width: 100%;
    height: 100%;
    padding: 2em;
    color: hsl(0, 0%, 15%);
    background-color: hsl(0, 0%, 15%);
}

html, body {
    position: relative;
    width: 100%;
    height: 100%;
}

* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
</style>
