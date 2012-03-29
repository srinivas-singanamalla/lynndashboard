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
                position: 'right',
                minimum: -64000,
                label: {
                    //renderer: EnergyApp.commify
                },
                //adjustMinimumByMajorUnit: 0,
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
                axis: 'right',
                xField: 'year',
                stacked: true,
                yField: ['coal', 'crude-oil'],
                title: ['Coal']
            },
            /*{
                type: 'line',
                highlight: false,
                showMarkers: false,
                fill: false,
                smooth: true,
                axis: 'right',
                xField: 'year',
                yField: 'crude-oil',
                title: ['Oil']
            },*/
            {
                type: 'line',
                highlight: false,
                showMarkers: false,
                fill: false,
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
                fill: false,
//                smooth: true,
                axis: 'right',
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

/*
Ext.define("LDBTest.view.DBStackedBarChart", {
	extend : 'Ext.chart.Chart',
	xtype : 'dbstackedbarchart',
	chart: null,
	config: {
		
	   initialize: function() {
		   
		   var store = Ext.create('Ext.data.JsonStore', {
		        fields: ['year', 'comedy', 'action', 'drama', 'thriller'],
		        data: [
		                {year: 2005, comedy: 34000000, action: 23890000, drama: 18450000, thriller: 20060000},
		                {year: 2006, comedy: 56703000, action: 38900000, drama: 12650000, thriller: 21000000},
		                {year: 2007, comedy: 42100000, action: 50410000, drama: 25780000, thriller: 23040000},
		                {year: 2008, comedy: 38910000, action: 56070000, drama: 24810000, thriller: 26940000}
		              ]
		    });

		    var panel1 = Ext.create('widget.panel', {
		        width: 800,
		        height: 400,
		        title: 'Stacked Bar Chart - Movies by Genre',
		        layout: 'fit',
		        items: {
		            xtype: 'chart',
		            animate: true,
		            shadow: true,
		            store: store,
		            
//		            legend: {
//		                position: 'right'
//		            },
		            
		            axes: [{
		                type: 'Numeric',
		                position: 'bottom',
		                fields: ['comedy', 'action', 'drama', 'thriller'],
		                title: false,
		                grid: true,
		                
//		                label: {
//		                    renderer: function(v) {
//		                        return String(v).replace(/000000$/, 'M');
//		                    }
//		                },
		                roundToDecimal: false
		            }, {
		                type: 'Category',
		                position: 'left',
		                fields: ['year'],
		                title: false
		            }],
		            series: [{
		                type: 'bar',
		                axis: 'bottom',
		                gutter: 80,
		                xField: 'year',
		                yField: ['comedy', 'action', 'drama', 'thriller'],
		                stacked: true,
		                tips: {
		                    trackMouse: true,
		                    width: 65,
		                    height: 28,
		                    renderer: function(storeItem, item) {
		                        this.setTitle(String(item.value[1] / 1000000) + 'M');
		                    }
		                }
		            }]
		        }
		    });
			
			this.add(panel1);
	   },
	   
	   constructor : function(config) {
		this.callParent([ config ]);
	}
});

*/