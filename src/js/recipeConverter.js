import recipe from './sampleRecipe.js';

console.log(recipe.containers);
console.log(recipe.timeline);

function getItemFromEvent(containers, lane, event){
    switch (event.type){
        case 'start':
            return {
                type: 'start',
                text: containers[lane-1].name
            };

        case 'add-ingredients':
            return {
                type: 'add'
            };

        case 'action':
            return {
                type: 'action',
                text: event.text
            };

        default:
            return {}
    }
}

export function convertRecipe(){
    const lanes = [
        {hue: 360, saturation: 0, lightness: 90, items: []},
        ...(recipe.containers.map(c=>({
            hue: c.hue,
            saturation: c.saturation,
            lightness: c.lightness,
            items: []
        })))
    ];
    const arrows = [];
    recipe.timeline.forEach((step, index)=>{
        lanes.forEach(lane=>lane.items.push({}));
        Object.entries(step).forEach(([lane, event])=>{
            lanes[lane].items[index] = getItemFromEvent(recipe.containers, lane, event);
        })
    })


    return {
        lanes, arrows
    }
}
