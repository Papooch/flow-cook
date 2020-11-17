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

export default {
    name: 'App',
    components: {
        RecipeContainer
    },
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
