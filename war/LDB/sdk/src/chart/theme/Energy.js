Ext.define('Ext.chart.theme.Energy', {
    singleton: true,
    selectors: [
    {
        "selector": "chart",
        "style": {
            "colors": [
                "rgba(17, 95, 166, 0.85)",
                "rgba(148, 174, 10, 0.85)",
                "rgba(166, 17, 32, 0.85)",
                "rgba(255, 136, 9, 0.85)",
                "rgba(255, 209, 62, 0.85)",
                "rgba(166, 17, 135, 0.85)",
                "rgba(36, 173, 154, 0.85)",
                "rgba(124, 116, 116, 0.85)",
                "rgba(166, 97, 17, 0.85)"
            ]
        },
        "specificity": [
            0,
            0,
            1
        ]
    },
    {
        "selector": "chart series",
        "style": {
            "stroke-width": 2
        },
        "specificity": [
            0,
            0,
            2
        ]
    },
    {
        "selector": "chart series grid odd",
        "style": {
            "stroke": "#333333"
        },
        "specificity": [
            0,
            0,
            4
        ]
    },
    {
        "selector": "chart series grid even",
        "style": {
            "stroke": "#222222"
        },
        "specificity": [
            0,
            0,
            4
        ]
    },
    {
        "selector": "chart axis",
        "style": {
            "stroke": "#555555",
            "fill": "#555555"
        },
        "specificity": [
            0,
            0,
            2
        ]
    },
    {
        "selector": "chart axis label",
        "style": {
            "fill": "#666666"
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
            "fill": "#cccccc"
        },
        "specificity": [
            0,
            0,
            3
        ]
    },
    {
        "selector": "chart axis[position=\"radial\"]",
        "style": {
            "fill": "none"
        },
        "specificity": [
            0,
            1,
            2
        ]
    },
    {
        "selector": "chart axis[position=\"radial\"] label",
        "style": {
            "fill": "#ffffff",
            "text-anchor": "center",
            "translate": {
                "x": 0,
                "y": -10
            }
        },
        "specificity": [
            0,
            1,
            3
        ]
    },
    {
        "selector": "chart[themeCls=\"radar\"]",
        "style": {
            "padding": 40
        },
        "specificity": [
            0,
            1,
            1
        ]
    },
    {
        "selector": "chart[themeCls=\"radar\"] series",
        "style": {
            "opacity": 0.4
        },
        "specificity": [
            0,
            1,
            2
        ]
    }
]
});
