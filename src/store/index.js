import { createStore } from 'vuex'
import { lanes, arrows } from '../js/recipe'

export default createStore({
    state: {
        columnDisplay: false,
        lanes: lanes,
        arrows: arrows
    },
    mutations: {
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
