export const lanes = [
    {
        hue: 300,
        items: [
            {},
            {
                type: "ingredients",
                ingredients: [ {name: "Sypký věci"}],
                bBox: null,
                hue: 240
            },
            {
                type: "ingredients",
                ingredients: [ {name: "Mokrý věci" }],
                bBox: null,
                hue: 240
            },
            {},
            {},
            {
                type: "ingredients",
                ingredients: [ {name: "Olej" }],
                bBox: null,
                hue: 360
            },
        ]
    },
    {
        hue: 240,
        items: [
            {
                type: "start",
                text: "Mísa",
                bBox: null,
            },
            {
                type: "add",
                text: "Add",
                bBox: null
            },
            {
                type: "add",
                text: "Add",
                bBox: null
            },
            {
                type: "action",
                text: "Promíchat",
                bBox: null,
            },
            {
                type: "action",
                text: "Nechat odležet",
                bBox: null
            },
            {},
            {},
            {
                type: "action",
                text: "Nalít část těsta na pánev",
                bBox: null,
            }
        ]
    },
    {
        hue: 360,
        items: [
            {
                type: "start",
                text: "Pánev",
                bBox: null
            },
            {},
            {},
            {},
            {},
            {
                type: "add",
                text: "Add",
                bBox: null
            },
            {
                type: "action",
                text: "Rozehřát",
                bBox: null
            },
            {
                type: "add",
                from: 1,
                text: "Add",
                bBox: null
            },
            {
                type: "action",
                text: "Osmažit z jedné strany",
                bBox: null
            },
            {
                type: "action",
                text: "Otočit",
                bBox: null
            },
            {
                type: "action",
                text: "Osmažit z druhé strany",
                bBox: null
            },
            {
                type: "action",
                text: "Přendat na talíř",
                bBox: null
            },
        ]
    },
    {
        hue: 125,
        lightness: 35,
        items: [
            {
                type: "start",
                text: "Talíř",
                bBox: null
            },
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {
                type: "add",
                from: 2,
                text: "Add",
                bBox: null
            },
            {
                type: "action",
                text: "Servírujeme",
                bBox: null
            },
        ]
    },
]

export const regions = [
    {
        topLeft: [1, 7],
        bottomRight: [3, 11],
        type: "repeat"
    },
    {
        topLeft: [1, 1],
        bottomRight: [1, 4],
        type: "těsto",
        header: "bottom"
    }
]

export const arrows = [
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
    },
    // talíř
    {
        from: [3,0],
        to: [3,11],
    },
    {
        from: [3,11],
        to: [3,12],
    },
    // ingredience
    {
        from: [0,1],
        to: [1,1],
    },
    {
        from: [0,2],
        to: [1,2],
    },
    {
        from: [0,5],
        to: [2,5],
    },
]