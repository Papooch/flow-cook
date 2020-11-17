const containers = [
    {
        name: "Mísa",
        hue: 240
    },
    {
        name: "Pánev",
        hue: 360
    }
]

const timeline = [
    {
        '1': {
            type: "start"
        },
        '2': {
            type: "start"
        }
    },
    {
        '1': {
            type: "action",
            text: "pokus"
        }
    },
    {
        '1': {
            type: "add-ingredients"
        }
    },
    {
        '2': {
            type: "add-ingredients"
        }
    },
]

export default {
    containers,
    timeline,
}