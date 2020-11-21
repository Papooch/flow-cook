let pluralCategories = {
    "none": [0],
    "one": [1],
    "few": [2,3,4],
    "many": 'more'
}

let pluralizedUnits = {
    "tsp": {
        none: "lžiček",
        one: "lžička",
        few: "lžičky",
        many: "lžiček",
    },
    "g": {
        none: "gramů",
        one: "gram",
        few: "gramy",
        many: "gramů",
    }
}

let UnitsSI = {
    'volume': ['ml', 'l'],
    'mass': ['g', 'kg']
}

function getPlural(amount, unit){
    if (!pluralizedUnits[unit]) return unit;
    let category = 'many';
    for (let [category, matches] of Object.entries(pluralCategories)){
        if(matches.includes(amount)){
            return pluralizedUnits[unit][category]
        }
    }
    return pluralizedUnits[unit][category];
}


export function normaliseAmount(amount, unit, multiplier){
    let unitType = null;
    let originalIndex = 0;
    let newUnit = unit;
    for (let [type, units] of Object.entries(UnitsSI)){
        let index = units.indexOf(unit)
        if (index != -1) {
            unitType = type;
            originalIndex = index;
            break;
        }
    }
    let newAmount = amount * multiplier;
    // unit is SI unit and can be converted to bigger or smaller
    if (unitType){
        const maxIndex = UnitsSI[unitType].length - 1;
        const minIndex = 0;
        let newIndex = originalIndex;
        while (newAmount >= 1000 && newIndex <= maxIndex){
            newAmount /= 1000;
            newIndex += 1;
        }
        while (newAmount < 1 && newIndex >= minIndex){
            newAmount *= 1000;
            newIndex -= 1;
        }
        if (newIndex == 0){
            newAmount = Math.round(newAmount) || 1;
        } else {
            newAmount = Math.round(newAmount*100)/100 || 1;
        }
        newUnit = UnitsSI[unitType][newIndex];
    // unit is sometnig else, test if it is in database
    } else {
        newAmount = Math.round(newAmount) || 1;
        newUnit = getPlural(newAmount, unit);
    }

    return {
        amount: newAmount,
        unit: newUnit,
    }
}
