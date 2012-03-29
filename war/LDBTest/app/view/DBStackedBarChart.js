Ext.define("LDBTest.view.DBStackedBarChart", {
	extend : 'Ext.chart.Chart',
	xtype : 'dbstackedbarchart',
	requires: ['Ext.chart.Chart'],
    config: {
        title: 'Stacked Bar',
        iconCls: 'line',
        cls: 'chartpanel',
        width: '800',
        height: '400',
        stacked: 'true',
        interactions: [{
        	type: 'togglestacked',
        	event: 'doubletap'
        }/*,
        {
            type: 'iteminfo',
            gesture: 'tap',
            listeners: {
                show: function (interaction, item, panel) {
                    //EnergyApp.popup(item, panel);
                }
            }
        }*/],
        animate: false,
        store: 'ChartStore',
        axes: [
            {
                type: 'Numeric',
                position: 'left',
                //minimum: -60000,
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
                type: 'column',
                highlight: false,
                showMarkers: false,
                fill: false,
                smooth: true,
                axis: 'left',
                xField: 'year',
                stacked: true,
                disjointStacked: false,
                yField: ['coal', 'crude-oil'],
                title: ['Coal']
            },
            {
                type: 'line',
                highlight: false,
                showMarkers: false,
                fill: false,
                smooth: true,
                axis: 'left',
                xField: 'year',
                yField: 'crude-oil',
                title: ['Oil']
            },
            {
                type: 'line',
                highlight: false,
                showMarkers: false,
                fill: false,
                smooth: true,
                axis: 'left',
                xField: 'year',
                yField: 'gas',
                title: ['Natural Gas']
            },
            {
                type: 'line',
                highlight: false,
                showMarkers: false,
                fill: false,
//                smooth: true,
                axis: 'left',
                stacked: true,
                xField: 'year',
                yField: 'nuclear',
                title: ['Nuclear']
            },
            {
                type: 'line',
                highlight: false,
                showMarkers: false,
                fill: false,
//                smooth: true,
                axis: 'left',
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