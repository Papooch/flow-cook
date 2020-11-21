import { createStore } from 'vuex'
import { lanes, arrows, regions, portions } from '../js/sampleConvertedRecipe'

export default createStore({
    state: {
        columnDisplay: false,
        lanes: lanes,
        arrows: arrows,
        regions: regions,
        basePortions: 1,
        portions: 8,
    },
    mutations: {
        setPortions: (state, payload) => {
            state.portions = payload;
        },
        setRecipe(state, payload){
            state.lanes = payload.recipe.lanes;
            state.arrows = payload.recipe.arrows;
            state.regions = payload.recipe.regions;
            state.portions = payload.recipe.portions;
            state.basePortions = payload.recipe.portions;
            console.log("portions:" + state.portions);
        },
        setBBox(state, payload){
            state.lanes[payload.laneIndex].items[payload.itemIndex].bBox = payload.bBox;
        },
        toggleDisplayStyle(state){
            state.columnDisplay = !state.columnDisplay
        }
    },
    actions: {
    },
    getters: {
        getPortions: (state) =>{
            return state.portions
        },
        getPortionsMultiplier: (state) => {
            return state.portions / state.basePortions;
        },
        getItemHue: (state) => (laneIndex, itemIndex) => {
            return (
                state.lanes[laneIndex].items[itemIndex]?.hue ||
                state.lanes[laneIndex].hue
            )
        },
        getItemSaturation: (state) => (laneIndex, itemIndex) => {
            return (
                state.lanes[laneIndex].items[itemIndex]?.saturation ||
                state.lanes[laneIndex]?.saturation ||
                100
            )
        },
        getItemLightness: (state) => (laneIndex, itemIndex) => {
            return (
                state.lanes[laneIndex].items[itemIndex]?.lightness ||
                state.lanes[laneIndex]?.lightness ||
                50
            )
        },
        getItemBBox: (state) => (laneIndex, itemIndex) => {
            return state.lanes[laneIndex].items[itemIndex]?.bBox;

        }
    },
    modules: {
    }
})
