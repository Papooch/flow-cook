<template>
    <div
        style="color:white;"
    >
        <button
            @click="$store.commit('toggleDisplayStyle')"
        >
            FLIP
        </button>
        <select
            @change="getRecipe($event.target.value)"
        >
            <option value="palacinky">Palačinky</option>
            <option value="spagety">Špagety</option>
            <option value="lasagne" selected>Lasagne</option>
        </select>
        <label>
            Portions:
            <input ref="portions" type="number" value="0" min="1" @change="setPortions"/>
        </label>
    </div>
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
        getRecipe(rec){
            this.$store.dispatch('fetchRecipe', rec);
            setTimeout(() => {
                this.$refs.portions && (this.$refs.portions.value = this.$store.state.basePortions);
            }, 1000);
        },
        setPortions(){
            this.$store.commit("setPortions", this.$refs.portions.value)
        },
        prt(){
            console.log(this.$refs.ifr);
        }
    },
    created() {
        this.getRecipe('lasagne');
        setTimeout(() => {
            this.$refs.portions && (this.$refs.portions.value = this.$store.state.basePortions);
        }, 1000);
    }

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

.gk-drop-shadow {
    filter: drop-shadow(2px 2px 0px rgba(0, 0, 0, .4));
}
</style>
