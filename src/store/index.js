import { createStore } from 'vuex'
import recipe from '../js/recipe'

export default createStore({
    state: {
        columnDisplay: false,
        recipe: recipe,
        arrows: [
            // mísa
            {
                from: [1,0],
                to: [1,1]
            },
            {
                from: [1,1],
                to: [1,2]
            },
            {
                from: [1,2],
                to: [1,3]
            },
            {
                from: [1,3],
                to: [1,4]
            },
            {
                from: [1,4],
                to: [1,7],
                dotted: true,
            },
            // mísa -> pánev
            {
                from: [1,7],
                to: [2,7],
                vertical: true,
            },
            // pánev
            {
                from: [2,0],
                to: [2,5],
                dotted: true
            },
            {
                from: [2,5],
                to: [2,6],
            },
            {
                from: [2,6],
                to: [2,7],
            },
            {
                from: [2,7],
                to: [2,8],
            },
            {
                from: [2,8],
                to: [2,9],
            },
            {
                from: [2,9],
                to: [2,10],
            },
            {
                from: [2,10],
                to: [2,11],
            },
            // pánev -> talíř
            {
                from: [2,11],
                to: [3,11],
                vertical: true
            },
            // talíř
            {
                from: [3,0],
                to: [3,11],
                dotted: true
            },
            {
                from: [3,11],
                to: [3,12],
            },
            // ingredience
            {
                from: [0,1],
                to: [1,1],
                vertical: true
            },
            {
                from: [0,2],
                to: [1,2],
                vertical: true
            },
            {
                from: [0,5],
                to: [2,5],
                vertical: true
            },
        ]
    },
    mutations: {
        setBBox(state, payload){
            // console.log(payload);
            state.recipe.lanes[payload.laneIndex].items[payload.itemIndex].bBox = payload.bBox;
        },
        toggleDisplayStyle(state){
            state.columnDisplay = !state.columnDisplay
        }
    },
    actions: {
    },
    getters: {
        getLaneHue: (state) => (laneIndex) => {
            return state.recipe.lanes[laneIndex].hue;
        },
        getItemHue: (state) => (laneIndex, itemIndex) => {
            return (
                state.recipe.lanes[laneIndex].items[itemIndex].hue ||
                state.recipe.lanes[laneIndex].hue
            )
        },
        getItemBBox: (state) => (laneIndex, itemIndex) => {
            return state.recipe.lanes[laneIndex].items[itemIndex]?.bBox;

        }
    },
    modules: {
    }
})
