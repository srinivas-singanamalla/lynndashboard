
Ext.define('Ext.chart.theme.Base', {
    singleton: true,
    selectors: [
    {
        "selector": "chart",
        "style": {
            "padding": 10,
            "colors": [
                "#115fa6",
                "#94ae0a",
                "#a61120",
                "#ff8809",
                "#ffd13e",
                "#a61187",
                "#24ad9a",
                "#7c7474",
                "#a66111"
            ]
        },
        "specificity": [
            0,
            0,
            1
        ]
    },
    {
        "selector": "chart axis",
        "style": {
            "color": "#354f6e",
            "fill": "#354f6e",
            "stroke": "#cccccc",
            "stroke-width": 1
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
            "color": "#354f6e",
            "fill": "#354f6e",
            "font": "12px \"Helvetica\", \"Arial\", \"sans-serif\"",
            "font-weight": "bold",
            "spacing": 2,
            "padding": 5
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
            "font": "18px \"Helvetica\", \"Arial\", \"sans-serif\"",
            "color": "#354f6e",
            "fill": "#354f6e",
            "padding": 5
        },
        "specificity": [
            0,
            0,
            3
        ]
    },
    {
        "selector": "chart axis[position=\"left\"] title",
        "style": {
            "rotate": {
                "x": 0,
                "y": 0,
                "degrees": 270
            }
        },
        "specificity": [
            0,
            1,
            3
        ]
    },
    {
        "selector": "chart axis[position=\"right\"] title",
        "style": {
            "rotate": {
                "x": 0,
                "y": 0,
                "degrees": 270
            }
        },
        "specificity": [
            0,
            1,
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
            "font": "10px \"Helvetica\", \"Arial\", \"sans-serif\"",
            "text-anchor": "middle"
        },
        "specificity": [
            0,
            1,
            3
        ]
    },
    {
        "selector": "chart axis[position=\"gauge\"]",
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
        "selector": "chart axis[position=\"gauge\"] label",
        "style": {
            "font": "10px \"Helvetica\", \"Arial\", \"sans-serif\"",
            "text-anchor": "middle"
        },
        "specificity": [
            0,
            1,
            3
        ]
    },
    {
        "selector": "chart series",
        "style": {
            "stroke-width": 1
        },
        "specificity": [
            0,
            0,
            2
        ]
    },
    {
        "selector": "chart series label",
        "style": {
            "font": "12px \"Helvetica\", \"Arial\", \"sans-serif\"",
            "fill": "#333333",
            "display": "none",
            "field": "name",
            "minMargin": "50",
            "orientation": "horizontal"
        },
        "specificity": [
            0,
            0,
            3
        ]
    },
    {
        "selector": "chart series:nth-child(1)",
        "style": {
            "fill": "#115fa6"
        },
        "specificity": [
            0,
            1,
            2
        ]
    },
    {
        "selector": "chart series:nth-child(2)",
        "style": {
            "fill": "#94ae0a"
        },
        "specificity": [
            0,
            1,
            2
        ]
    },
    {
        "selector": "chart series:nth-child(3)",
        "style": {
            "fill": "#a61120"
        },
        "specificity": [
            0,
            1,
            2
        ]
    },
    {
        "selector": "chart series:nth-child(4)",
        "style": {
            "fill": "#ff8809"
        },
        "specificity": [
            0,
            1,
            2
        ]
    },
    {
        "selector": "chart series:nth-child(5)",
        "style": {
            "fill": "#ffd13e"
        },
        "specificity": [
            0,
            1,
            2
        ]
    },
    {
        "selector": "chart series:nth-child(6)",
        "style": {
            "fill": "#a61187"
        },
        "specificity": [
            0,
            1,
            2
        ]
    },
    {
        "selector": "chart series:nth-child(7)",
        "style": {
            "fill": "#24ad9a"
        },
        "specificity": [
            0,
            1,
            2
        ]
    },
    {
        "selector": "chart series:nth-child(8)",
        "style": {
            "fill": "#7c7474"
        },
        "specificity": [
            0,
            1,
            2
        ]
    },
    {
        "selector": "chart series:nth-child(9)",
        "style": {
            "fill": "#a66111"
        },
        "specificity": [
            0,
            1,
            2
        ]
    },
    {
        "selector": "chart series:highlight",
        "style": {
            "radius": 20,
            "stroke-width": 5,
            "stroke": "#ff5555",
            "zIndex": "100"
        },
        "specificity": [
            0,
            1,
            2
        ]
    },
    {
        "selector": "chart series[type=\"line\"]:highlight",
        "style": {
            "stroke-width": 3
        },
        "specificity": [
            0,
            2,
            2
        ]
    },
    {
        "selector": "chart series[type=\"bar\"]:highlight",
        "style": {
            "stroke-width": 3,
            "stroke": "#5555cc",
            "opacity": 0.8
        },
        "specificity": [
            0,
            2,
            2
        ]
    },
    {
        "selector": "chart series[type=\"area\"]:highlight",
        "style": {
            "stroke-width": 3,
            "stroke": "#111111"
        },
        "specificity": [
            0,
            2,
            2
        ]
    },
    {
        "selector": "chart series[type=\"pie\"]:highlight",
        "style": {
            "stroke": "none",
            "stroke-width": 0
        },
        "specificity": [
            0,
            2,
            2
        ]
    },
    {
        "selector": "chart series[type=\"scatter\"]:highlight",
        "style": {
            "stroke": "none",
            "stroke-width": 0
        },
        "specificity": [
            0,
            2,
            2
        ]
    },
    {
        "selector": "chart marker",
        "style": {
            "stroke": "#ffffff",
            "stroke-width": 1,
            "type": "circle",
            "fill": "#000000",
            "radius": 5,
            "size": 5
        },
        "specificity": [
            0,
            0,
            2
        ]
    },
    {
        "selector": "chart marker:nth-child(1)",
        "style": {
            "fill": "#115fa6",
            "type": "circle"
        },
        "specificity": [
            0,
            1,
            2
        ]
    },
    {
        "selector": "chart marker:nth-child(2)",
        "style": {
            "fill": "#94ae0a"
        },
        "specificity": [
            0,
            1,
            2
        ]
    },
    {
        "selector": "chart marker:nth-child(3)",
        "style": {
            "fill": "#a61120"
        },
        "specificity": [
            0,
            1,
            2
        ]
    },
    {
        "selector": "chart marker:nth-child(3)",
        "style": {
            "fill": "#a61120"
        },
        "specificity": [
            0,
            1,
            2
        ]
    },
    {
        "selector": "chart marker:nth-child(4)",
        "style": {
            "fill": "#ff8809"
        },
        "specificity": [
            0,
            1,
            2
        ]
    },
    {
        "selector": "chart marker:nth-child(5)",
        "style": {
            "fill": "#ffd13e"
        },
        "specificity": [
            0,
            1,
            2
        ]
    },
    {
        "selector": "chart marker:nth-child(6)",
        "style": {
            "fill": "#a61187"
        },
        "specificity": [
            0,
            1,
            2
        ]
    },
    {
        "selector": "chart marker:nth-child(7)",
        "style": {
            "fill": "#24ad9a"
        },
        "specificity": [
            0,
            1,
            2
        ]
    },
    {
        "selector": "chart marker:nth-child(8)",
        "style": {
            "fill": "#7c7474"
        },
        "specificity": [
            0,
            1,
            2
        ]
    },
    {
        "selector": "chart marker:nth-child(9)",
        "style": {
            "fill": "#a66111"
        },
        "specificity": [
            0,
            1,
            2
        ]
    },
    {
        "selector": "chart interaction[type=\"itemcompare\"] circle",
        "style": {
            "fill": "rgba(0, 0, 0, 0)",
            "stroke": "#0d75f2",
            "radius": 5
        },
        "specificity": [
            0,
            1,
            3
        ]
    },
    {
        "selector": "chart interaction[type=\"itemcompare\"] line",
        "style": {
            "stroke": "#0d75f2",
            "stroke-width": 3
        },
        "specificity": [
            0,
            1,
            3
        ]
    },
    {
        "selector": "chart interaction[type=\"itemcompare\"] arrow",
        "style": {
            "fill": "#0d75f2",
            "radius": 8
        },
        "specificity": [
            0,
            1,
            3
        ]
    },
    {
        "selector": "chart interaction[type=\"piegrouping\"] slice",
        "style": {
            "stroke": "#0d75f2",
            "stroke-width": 2,
            "fill": "#0d75f2",
            "opacity": 0.5
        },
        "specificity": [
            0,
            1,
            3
        ]
    },
    {
        "selector": "chart interaction[type=\"piegrouping\"] handle",
        "style": {
            "stroke": "#0d75f2",
            "stroke-width": 2,
            "fill": "#0d75f2"
        },
        "specificity": [
            0,
            1,
            3
        ]
    }
]
});