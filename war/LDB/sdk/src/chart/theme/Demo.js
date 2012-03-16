Ext.define('Ext.chart.theme.Demo', {
    singleton: true,
    selectors: [
    {
        "selector": "chart[themeCls=\"area1\"] axis[position=\"left\"] grid even",
        "style": {
            "opacity": 1,
            "fill": "#dddddd",
            "stroke": "#bbbbbb",
            "stroke-width": 1
        },
        "specificity": [
            0,
            2,
            4
        ]
    },
    {
        "selector": "chart[themeCls=\"area1\"] axis[position=\"bottom\"] label",
        "style": {
            "rotate": {
                "degrees": 45
            }
        },
        "specificity": [
            0,
            2,
            3
        ]
    },
    {
        "selector": "chart[themeCls=\"area1\"] series",
        "style": {
            "opaciy": "0.93"
        },
        "specificity": [
            0,
            1,
            2
        ]
    },
    {
        "selector": "chart[themeCls=\"bar1\"] axis[position=\"bottom\"] grid",
        "style": {
            "stroke": "#cccccc"
        },
        "specificity": [
            0,
            2,
            3
        ]
    },
    {
        "selector": "chart[themeCls=\"column1\"]",
        "style": {
            "background": "#111111"
        },
        "specificity": [
            0,
            1,
            1
        ]
    },
    {
        "selector": "chart[themeCls=\"column1\"] axis",
        "style": {
            "stroke": "#eeeeee",
            "fill": "#eeeeee"
        },
        "specificity": [
            0,
            1,
            2
        ]
    },
    {
        "selector": "chart[themeCls=\"column1\"] axis label",
        "style": {
            "fill": "#ffffff"
        },
        "specificity": [
            0,
            1,
            3
        ]
    },
    {
        "selector": "chart[themeCls=\"column1\"] axis title",
        "style": {
            "fill": "#ffffff"
        },
        "specificity": [
            0,
            1,
            3
        ]
    },
    {
        "selector": "chart[themeCls=\"column1\"] axis[position=\"left\"] grid odd",
        "style": {
            "stroke": "#555555"
        },
        "specificity": [
            0,
            2,
            4
        ]
    },
    {
        "selector": "chart[themeCls=\"column1\"] axis[position=\"left\"] grid even",
        "style": {
            "stroke": "#555555"
        },
        "specificity": [
            0,
            2,
            4
        ]
    },
    {
        "selector": "chart[themeCls=\"column1\"] series label",
        "style": {
            "fill": "#ffffff",
            "font": "17px Arial",
            "display": "insideEnd",
            "text-anchor": "middle",
            "orientation": "horizontal"
        },
        "specificity": [
            0,
            1,
            3
        ]
    },
    {
        "selector": "chart[themeCls=\"barcombo1\"] axis[position=\"bottom\"] grid",
        "style": {
            "stroke": "#cccccc"
        },
        "specificity": [
            0,
            2,
            3
        ]
    },
    {
        "selector": "chart[themeCls=\"piecombo1\"]",
        "style": {
            "padding": 20
        },
        "specificity": [
            0,
            1,
            1
        ]
    },
    {
        "selector": "chart[themeCls=\"piecombo1\"] series label",
        "style": {
            "display": "rotate",
            "contrast": true,
            "font": "14px Arial"
        },
        "specificity": [
            0,
            1,
            3
        ]
    },
    {
        "selector": "chart[themeCls=\"gaugecombo1\"]",
        "style": {
            "padding": 30
        },
        "specificity": [
            0,
            1,
            1
        ]
    },
    {
        "selector": "chart[themeCls=\"gaugecombo1\"] axis",
        "style": {
            "stroke": "#cccccc"
        },
        "specificity": [
            0,
            1,
            2
        ]
    },
    {
        "selector": "chart[themeCls=\"gaugecombo1\"] axis label",
        "style": {
            "font": "15px Arial"
        },
        "specificity": [
            0,
            1,
            3
        ]
    },
    {
        "selector": "chart[themeCls=\"radarcombo1\"]",
        "style": {
            "padding": 20
        },
        "specificity": [
            0,
            1,
            1
        ]
    },
    {
        "selector": "chart[themeCls=\"radarcombo1\"] axis",
        "style": {
            "stroke": "#cccccc",
            "fill": "none"
        },
        "specificity": [
            0,
            1,
            2
        ]
    },
    {
        "selector": "chart[themeCls=\"radarcombo1\"] axis label",
        "style": {
            "font": "11px Arial",
            "text-anchor": "middle"
        },
        "specificity": [
            0,
            1,
            3
        ]
    },
    {
        "selector": "chart[themeCls=\"radarcombo1\"] series",
        "style": {
            "opacity": 0.4
        },
        "specificity": [
            0,
            1,
            2
        ]
    },
    {
        "selector": "chart[themeCls=\"line1\"] axis[position=\"left\"] grid odd",
        "style": {
            "opacity": 1,
            "fill": "#dddddd",
            "stroke": "#bbbbbb",
            "stroke-width": 0.5
        },
        "specificity": [
            0,
            2,
            4
        ]
    },
    {
        "selector": "chart[themeCls=\"line1\"] marker",
        "style": {
            "size": 4,
            "radius": 4,
            "stroke-width": 0
        },
        "specificity": [
            0,
            1,
            2
        ]
    },
    {
        "selector": "chart[themeCls=\"line1\"] series:nth-child(1) marker",
        "style": {
            "type": "image",
            "height": "46",
            "width": "46",
            "src": "\"../resources/shared/img/iphone.png\""
        },
        "specificity": [
            0,
            2,
            3
        ]
    },
    {
        "selector": "chart[themeCls=\"line1\"] series:nth-child(2) marker",
        "style": {
            "type": "image",
            "height": "46",
            "width": "46",
            "src": "\"../resources/shared/img/android.png\""
        },
        "specificity": [
            0,
            2,
            3
        ]
    },
    {
        "selector": "chart[themeCls=\"line1\"] series:nth-child(3) marker",
        "style": {
            "type": "image",
            "height": "46",
            "width": "46",
            "src": "\"../resources/shared/img/ipad.png\""
        },
        "specificity": [
            0,
            2,
            3
        ]
    },
    {
        "selector": "chart[themeCls=\"pie1\"]",
        "style": {
            "padding": 10
        },
        "specificity": [
            0,
            1,
            1
        ]
    },
    {
        "selector": "chart[themeCls=\"pie1\"] series label",
        "style": {
            "display": "rotate",
            "contrast": true,
            "font": "18px Helvetica, Arial, sans-serif"
        },
        "specificity": [
            0,
            1,
            3
        ]
    },
    {
        "selector": "chart[themeCls=\"radar1\"]",
        "style": {
            "padding": 20
        },
        "specificity": [
            0,
            1,
            1
        ]
    },
    {
        "selector": "chart[themeCls=\"radar1\"] axis",
        "style": {
            "stroke": "#cccccc",
            "fill": "none"
        },
        "specificity": [
            0,
            1,
            2
        ]
    },
    {
        "selector": "chart[themeCls=\"radar1\"] axis label",
        "style": {
            "font": "11px Arial",
            "text-anchor": "middle"
        },
        "specificity": [
            0,
            1,
            3
        ]
    },
    {
        "selector": "chart[themeCls=\"radar1\"] series",
        "style": {
            "opacity": 0.4
        },
        "specificity": [
            0,
            1,
            2
        ]
    },
    {
        "selector": "chart[themeCls=\"scatter1\"]",
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
        "selector": "chart[themeCls=\"scatter1\"] axis[position=\"left\"] grid odd",
        "style": {
            "opacity": 1,
            "fill": "#dddddd",
            "stroke": "#bbbbbb",
            "stroke-width": 0.5
        },
        "specificity": [
            0,
            2,
            4
        ]
    },
    {
        "selector": "chart[themeCls=\"scatter1\"] marker",
        "style": {
            "size": 8,
            "radius": 8
        },
        "specificity": [
            0,
            1,
            2
        ]
    },
    {
        "selector": "chart[themeCls=\"stock1\"] axis label",
        "style": {
            "font": "12px Arial"
        },
        "specificity": [
            0,
            1,
            3
        ]
    },
    {
        "selector": "chart[themeCls=\"stock1\"] axis[position=\"left\"] grid",
        "style": {
            "stroke": "#cccccc"
        },
        "specificity": [
            0,
            2,
            3
        ]
    }
]
});