import recipe from './sampleRecipe.js';

console.log(recipe.ingredients);
console.log(recipe.containers);
console.log(recipe.timeline);

function addVerticalArrow(fromLaneIndex, toLaneIndex, eventIndex, vArrows){
    vArrows.push({
        from: [fromLaneIndex, eventIndex],
        to: [toLaneIndex, eventIndex]
    })
}

function addHorizontalArrow(lane, laneIndex, toIndex, hArrows){
    function findLastOccupied(lane){
        for(let i = toIndex - 1; i >= 0; i--){
            if (lane.items[i].type != undefined){
                return i;
            }
        }
        return null;
    }
    let fromIndex = findLastOccupied(lane);
    if(fromIndex == undefined){
        console.error("cannot add line to " + toIndex + " in lane " + laneIndex);
    }
    hArrows.push({
        from: [laneIndex, fromIndex],
        to: [laneIndex, toIndex],
        dotted: (toIndex - fromIndex > 1)
    })
}

function parseEvent(lanes, hArrows, vArrows, recipe, laneIndex, event, eventIndex){
    switch (event.type){
        case 'start':
            lanes[laneIndex].items[eventIndex] = {
                type: 'start',
                text: recipe.containers[laneIndex-1].name
            };
            break;

        case 'add-ingredients':
            lanes[laneIndex].items[eventIndex] = {
                type: 'add'
            };
            lanes[0].items[eventIndex] = {
                type: 'ingredients',
                ingredients: event.ingredients.map(i=>recipe.ingredients[i]),
                hue: recipe.containers[laneIndex-1].hue
            }
            console.log("add ingredients");
            addHorizontalArrow(lanes[laneIndex], laneIndex, eventIndex, hArrows);
            addVerticalArrow(0, laneIndex, eventIndex, vArrows);
            break;

        case 'add-from':
            lanes[laneIndex].items[eventIndex] = {
                type: 'add',
                from: event.from
            };
            addHorizontalArrow(lanes[laneIndex], laneIndex, eventIndex, hArrows);
            addVerticalArrow(event.from, laneIndex, eventIndex, vArrows);
            break;

        case 'action':
            lanes[laneIndex].items[eventIndex] = {
                type: 'action',
                text: event.text
            };
            addHorizontalArrow(lanes[laneIndex], laneIndex, eventIndex, hArrows);
            break;

        default:
            lanes[laneIndex].items[eventIndex] = {};
            break;
    }
}

export function convertRecipe(){
    const lanes = [
        {hue: 360, saturation: 0, lightness: 50, items: []},
        ...(recipe.containers.map(c=>({
            hue: c.hue,
            saturation: c.saturation,
            lightness: c.lightness,
            items: []
        })))
    ];
    const hArrows = [];
    const vArrows = [];
    recipe.timeline.forEach((step, eventIndex)=>{
        lanes.forEach(lane=>lane.items.push({}));
        Object.entries(step).forEach(([laneIndex, event])=>{
            parseEvent(lanes, hArrows, vArrows, recipe, laneIndex, event, eventIndex);
        })
    })


    return {
        lanes, arrows: [...hArrows, ...vArrows]
    }
}
