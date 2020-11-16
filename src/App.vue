<template>
    <flow-arrows/>
    <table>
        <container-lane
            v-for="(lane, index) of recipe.lanes"
            :key="lane.name"
            :lane="lane"
            :laneIndex="index"
        />
    </table>
</template>

<script>
import ContainerLane from './components/ContainerLane'
import FlowArrows from './components/FlowArrows'

export default {
    name: 'App',
    components: {
        ContainerLane,
        FlowArrows
    },
    computed: {
        recipe(){
            return this.$store.state.recipe
        }
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

/** debug */
table {
    z-index: 100;
}

table,
table td {
    border: solid black 1px;
}
</style>
