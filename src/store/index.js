import { createStore } from 'vuex'
import recipe from '../js/recipe'

export default createStore({
    state: {
        recipe: recipe,
        arrows: [
            // mísa
            {
                from: [0,0],
                to: [0,1]
            },
            {
                from: [0,1],
                to: [0,2]
            },
            {
                from: [0,2],
                to: [0,3]
            },
            {
                from: [0,3],
                to: [0,4]
            },
            {
                from: [0,4],
                to: [0,7],
                dotted: true,
            },
            // mísa -> pánev
            {
                from: [0,7],
                to: [1,7],
                vertical: true,
            },
            // pánev
            {
                from: [1,0],
                to: [1,5],
                dotted: true
            },
            {
                from: [1,5],
                to: [1,6],
            },
            {
                from: [1,6],
                to: [1,7],
            },
            {
                from: [1,7],
                to: [1,8],
            },
            {
                from: [1,8],
                to: [1,9],
            },
            {
                from: [1,9],
                to: [1,10],
            },
            {
                from: [1,10],
                to: [1,11],
            },
            // pánev -> talíř
            {
                from: [1,11],
                to: [2,11],
                vertical: true
            },
            // talíř
            {
                from: [2,0],
                to: [2,11],
                dotted: true
            },
            {
                from: [2,11],
                to: [2,12],
            },

        ]
    },
    mutations: {
        setBBox(state, payload){
            // console.log(payload);
            state.recipe.lanes[payload.laneIndex].events[payload.eventIndex].bBox = payload.bBox;
        }
    },
    actions: {
    },
    getters: {
        getLaneHue: (state) => (laneIndex) => {
            return state.recipe.lanes[laneIndex].hue;
        },
    },
    modules: {
    }
})
