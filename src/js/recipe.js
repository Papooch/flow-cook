export default {
    lanes: [
        {
            hue: 0,
            events: [
                {
                    type: "start",
                    text: "Mísa",
                    bBox: null
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
                    bBox: null
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
                    bBox: null
                }
            ]
        },
        {
            hue: 200,
            events: [
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
                    from: 0,
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
            hue: 100,
            events: [
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
}