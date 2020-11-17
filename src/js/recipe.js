export default {
    lanes: [
        {
            hue: 300,
            items: [
                {},
                {
                    type: "action",
                    text: "Sypký věci",
                    bBox: null,
                    hue: 360
                },
                {
                    type: "action",
                    text: "Mokrý věci",
                    bBox: null,
                    hue: 360
                },
                {},
                {},
                {
                    type: "action",
                    text: "Olej",
                    bBox: null,
                    hue: 200
                },
            ]
        },
        {
            hue: 360,
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
            hue: 200,
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
            hue: 100,
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
}