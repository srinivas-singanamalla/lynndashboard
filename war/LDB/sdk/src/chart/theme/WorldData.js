Ext.define('Ext.chart.theme.WorldData', {
    singleton: true,
    selectors: [
    {
        "selector": "chart",
        "style": {
            "colors": [
                "#49080e",
                "#49080e",
                "#d7a400"
            ],
            "background": "#dbddd8"
        },
        "specificity": [
            0,
            0,
            1
        ]
    },
    {
        "selector": "chart series:highlight",
        "style": {
            "radius": 5,
            "stroke-width": 3,
            "stroke": "#ffffff"
        },
        "specificity": [
            0,
            1,
            2
        ]
    },
    {
        "selector": "chart axis",
        "style": {
            "stroke": "#c2c4be",
            "fill": "#c2c4be"
        },
        "specificity": [
            0,
            0,
            2
        ]
    },
    {
        "selector": "chart axis grid",
        "style": {
            "stroke": "#c2c4be"
        },
        "specificity": [
            0,
            0,
            3
        ]
    },
    {
        "selector": "chart axis label",
        "style": {
            "fill": "#909488"
        },
        "specificity": [
            0,
            0,
            3
        ]
    },
    {
        "selector": "chart axis title",
        "style": {
            "fill": "#43453e"
        },
        "specificity": [
            0,
            0,
            3
        ]
    }
]
});