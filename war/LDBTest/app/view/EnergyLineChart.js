Ext.define("LDBTest.view.EnergyLineChart", {
    xtype: 'elinechart',
    extend: 'Ext.chart.Chart',
    config: {
        title: 'Line',
        iconCls: 'line',
        cls: 'chartpanel',
        width: '800',
        height: '400',
        interactions: ['reset', {
            type: 'panzoom'
        }, {
            type: 'iteminfo',
            gesture: 'tap',
            listeners: {
                show: function (interaction, item, panel) {
                    //EnergyApp.popup(item, panel);
                }
            }
        }],
        animate: false,
        store: 'ChartStore',
        axes: [
            {
                type: 'Numeric',
                position: 'right',
                minimum: 0,
                label: {
                    //renderer: EnergyApp.commify
                },
                adjustMinimumByMajorUnit: 0,
                fields: ['coal', 'nuclear', 'crude-oil', 'gas', 'renewable'],
                title: 'Million BTUs',
                grid: {
                    odd: {
                        stroke: '#777'
                    },
                    even: {
                        stroke: '#555'
                    }
                }
            },
            {
                type: 'Category',
                position: 'bottom',
                fields: ['year'],
                title: 'Year',
                label: {
                    rotate: {
                        degrees: 45
                    }
                }
            }
        ],
        legend: {
            position: Ext.os.is.Phone ? 'left' : 'top'
        },
        theme: 'Energy',
        series: [
            {
                type: 'line',
                highlight: false,
                showMarkers: false,
                fill: true,
                smooth: true,
                axis: 'right',
                xField: 'year',
                yField: 'coal',
                title: ['Coal']
            },
            {
                type: 'line',
                highlight: false,
                showMarkers: false,
                fill: true,
                smooth: true,
                axis: 'right',
                xField: 'year',
                yField: 'crude-oil',
                title: ['Oil']
            },
            {
                type: 'line',
                highlight: false,
                showMarkers: false,
                fill: true,
                smooth: true,
                axis: 'right',
                xField: 'year',
                yField: 'gas',
                title: ['Natural Gas']
            },
            {
                type: 'line',
                highlight: false,
                showMarkers: false,
                fill: true,
                smooth: true,
                axis: 'right',
                xField: 'year',
                yField: 'nuclear',
                title: ['Nuclear']
            },
            {
                type: 'line',
                highlight: false,
                showMarkers: false,
                fill: true,
                smooth: true,
                axis: 'right',
                xField: 'year',
                yField: 'renewable',
                title: ['Renewable']
            }
        ],
        listeners: {
            afterrender: function (me) {
                me.on('beforerefresh', function () {
                    if (me.ownerCt.getActiveItem().id !== me.id) {
                        return false;
                    }
                }, me);
            }
        }
    }
});