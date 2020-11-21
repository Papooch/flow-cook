const ingredients = [
    {
        name: "Mouka polohrubá"
    },
    {
        name: "Mouka hladká"
    },
    {
        name: "Mlíko"
    },
    {
        name: "Vajíčko"
    },
    {
        name: "Olej"
    },
]


const containers = [
    {
        name: "Mísa",
        hue: 240
    },
    {
        name: "Pánev",
        hue: 360
    },
    {
        name: "Talíř",
        hue: 125,
        lightness: 40
    }
    
]

const timeline = [
    {
        '1': {
            type: "start"
        },
    },
    {
        '1': {
            type: "add-ingredients",
            ingredients: [0, 1]
        }
    },
    {
        '1': {
            type: "add-ingredients",
            ingredients: [2, 3]
        }
    },
    {
        '1': {
            type: "action",
            text: "promíchat"
        }
    },
    {
        '1': {
            type: "action",
            text: "nechat odležet"
        },
        '2': {
            type: "start"
        },
        '3': {
            type: "start"
        }
    },
    {
        '2': {
            type: "add-ingredients",
            ingredients: [4]
        }
    },
    {
        '2': {
            type: "action",
            text: "rozehřát"
        }
    },
    {
        '1': {
            type: "action",
            text: "nalít část těsta na pánev"
        },
        '2': {
            type: "add-from",
            from: 1
        },
        'enter': {
            name: "loop1",
            type: "repeat",
            containers: [1, 2, 3]
        }
    },
    {
        '2': {
            type: "action",
            text: "osmažit z jedné a z druhé strany"
        }
    },
    {
        '2': {
            type: "action",
            text: "přendat na talíř"
        },
        '3': {
            type: "add-from",
            from: 2
        },
        'exit': {
            name: "loop1"
        }
    },
    {
        '3': {
            type: "action",
            text: "servírovat"
        }
    }

]

export default {
    ingredients,
    containers,
    timeline,
}