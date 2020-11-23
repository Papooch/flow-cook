function addVerticalArrow(fromLaneIndex, toLaneIndex, eventIndex, vArrows){
    vArrows.push({
        from: [fromLaneIndex, eventIndex],
        to: [toLaneIndex, eventIndex]
    })
}

function getEventIndex(lanes){
    return lanes[0].items.length - 1;
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

function parseEvent(lanes, hArrows, vArrows, recipe, laneIndex, event){
    let eventIndex = getEventIndex(lanes);
    switch (event.type){
        case 'start':
            lanes[laneIndex].items[eventIndex] = {
                type: 'start',
                text: recipe.containers[laneIndex-1].name
            };
            break;

        case 'add-ingredients':
            if(event.prepare && !lanes[0].items[eventIndex - 1].type){
                eventIndex -= 1;
            }
            lanes[0].items[eventIndex] = {
                type: 'ingredients',
                ingredients: event.ingredients.map(i=>recipe.ingredients[i]),
                hue: recipe.containers[laneIndex-1].hue,
                saturation: recipe.containers[laneIndex-1].saturation || 100,
                lightness: recipe.containers[laneIndex-1].lightness || 50
            }
            if(event.prepare){
                eventIndex += 1;
                lanes.forEach(lane=>lane.items.push({}));
                lanes[0].items[eventIndex] = {
                    type: 'action',
                    text: event.prepare,
                    hue: recipe.containers[laneIndex-1].hue,
                    saturation: recipe.containers[laneIndex-1].saturation || 100,
                    lightness: recipe.containers[laneIndex-1].lightness || 50
                }
                addHorizontalArrow(lanes[0], 0, eventIndex, hArrows);
            }
            lanes[laneIndex].items[eventIndex] = {
                type: 'add'
            };
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

export function convertRecipe(recipe){
    const lanes = [
        {hue: 100, saturation: 1, lightness: 50, items: []},
        ...(recipe.containers.map(c=>({
            hue: c.hue,
            saturation: c.saturation,
            lightness: c.lightness,
            items: []
        })))
    ];
    const hArrows = [];
    const vArrows = [];
    const namedRegions = {};
    recipe.timeline.forEach((step)=>{
        lanes.forEach(lane=>lane.items.push({}));
        let eventIndex = getEventIndex(lanes);
        Object.entries(step).forEach(([key, event])=>{
            // if key is number
            let laneIndex = Number.parseInt(key);
            if(laneIndex >= 0){ 
                parseEvent(lanes, hArrows, vArrows, recipe, laneIndex, event);
            }
            if (key == 'enter'){
                namedRegions[key.name] = {
                    type: event.type,
                    header: event.header,
                    topLeft: [Math.min(...event.containers), eventIndex],
                    bottomRight: [Math.max(...event.containers), eventIndex]
                }
            } else if (key == 'exit'){
                namedRegions[key.name].bottomRight[1] = eventIndex;
            }
        })
    })


    return {
        lanes,
        arrows: [...hArrows, ...vArrows],
        regions: Object.values(namedRegions),
        portions: recipe.portions
    }
}
