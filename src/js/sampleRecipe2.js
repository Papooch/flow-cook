const ingredients = [
    {
        name: "Voda"
    },
    {
        name: "Špagety"
    },
    {
        name: "Protlak"
    },
    {
        name: "Cukr"
    },
    {
        name: "Sůl"
    },
    {
        name: "Bylinky"
    },
    {
        name: "Sýr"
    },

]


const containers = [
    {
        name: "Hrnec",
        hue: 30,
    },
    {
        name: "Pánev",
        hue: 360
    },
    {
        name: "Prkýnko",
        hue: 200,
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
        '2': {
            type: "start"
        },
        '3': {
            type: "start"
        },
        '4': {
            type: "start"
        },
    },
    {
        '1': {
            type: "add-ingredients",
            ingredients: [0] 
        }
    },
    {
        '1': {
            type: "action",
            text: "Přivést k varu" 
        }
    },
    {
        '1': {
            type: "add-ingredients",
            ingredients: [1] 
        }
    },
    {
        '1': {
            type: "action",
            text: "Ztlumit plamen a nechat vařit" 
        }
    },
    {
        '2': {
            type: "add-ingredients",
            ingredients: [2] 
        }
    },
    {
        '2': {
            type: "add-ingredients",
            ingredients: [3, 4, 5] 
        }
    },
    {
        '2': {
            type: "action",
            text: "Rozehřát a promíchat" 
        }
    },
    {
        '3': {
            type: "add-ingredients",
            ingredients: [6] 
        }
    },
    {
        '3': {
            type: "action",
            text: "Nastrouhat na jemno" 
        }
    },
    {
        '3': {
            type: "action",
            text: "Vmíchat do protlaku" 
        },
        '2': {
            type: "add-from",
            from: 3 
        }
    },
    {
        '2': {
            type: "action",
            text: "Vypnout plamen" 
        }
    },
    {
        '1': {
            type: "action",
            text: "Slít špagety a přendat na talíř" 
        },
        '4': {
            type: "add-from",
            from: 1
        }
    },
    {
        '2': {
            type: "action",
            text: "Přendat na talíř" 
        },
        '4': {
            type: "add-from",
            from: 2
        }
    },
    {
        '4': {
            type: "action",
            text: "Servírovat" 
        }
    },

]

export default {
    ingredients,
    containers,
    timeline,
}