Date.prototype.monthNames = [
    "Jan", "Feb", "Mar",
    "Apr", "May", "Jun",
    "Jul", "Aug", "Sep",
    "Oct", "Nov", "Dec"
];





Ext.define("LDB.view.DBLineChart", {
	extend : 'Ext.Panel',
	xtype : 'dblinechart',
	/*
	requires : [ 'Ext.chart.Panel', 'Ext.chart.axis.Numeric',
			'Ext.chart.axis.Category', 'Ext.chart.series.Line', 'Ext.chart.Legend', 'Ext.chart.theme.GridStyle', 'Ext.chart.theme.OddStyle',
			'Ext.data.JsonStore', 'Ext.chart.theme.Theme', 'Ext.chart.theme.MarkerStyle', 'Ext.chart.theme.LabelStyle',
			'Ext.chart.theme.Style', 'Ext.chart.theme.Base', 'Ext.chart.axis.Axis',
			'Ext.chart.theme.Demo', 'Ext.chart.Toolbar', 'Ext.fx.Sprite', 'Ext.draw.Sprite',
			'Ext.fx.Parser' , 'Ext.draw.Surface', 'Ext.draw.engine.Canvas', 'Ext.draw.CompositeSprite',
			'Ext.draw.engine.ImageExporter',
			'Ext.chart.interactions.Manager'],
			*/
	requires: ['Ext.chart.Chart'],
/*
	config : {
		autoSize : true,
		title : 'Area Chart Test',
		width : 450,
		height : 450
	},
*/
	constructor : function(config) {
		
		var generateLineData = function(n, floor) {
		    var data = [],
		        p = (Math.random() *  11) + 1,
		        i;

		    floor = 10;
		    var date = new Date();
		    for (i = 0; i < (n || 12); i++) {
		        data.push({
		            name: date.monthNames[i % 12],
		            iphone: Math.floor(Math.max((Math.random() * 100), floor)),
		            android: Math.floor(Math.max((Math.random() * 100), floor)),
		            ipad: Math.floor(Math.max((Math.random() * 100), floor))
		        });
		    }
		    return data;
		};
		
		var linestore = Ext.create('Ext.data.JsonStore', {
		    fields: ['name', 'iphone', 'android', 'ipad'],
		    data: generateLineData(5, 20)
		});
		
		var chart = Ext.create('Ext.chart.Chart', {
			title: 'Line Chart',
			/*
            dockedItems: [{
                xtype: 'button',
                iconCls: 'help',
                iconMask: true,
                ui: 'plain',
                handler: onHelpTap
            }, {
                xtype: 'button',
                iconCls: 'shuffle',
                iconMask: true,
                ui: 'plain',
                handler: onRefreshTap
            }],*/
            cls: 'line1',
            theme: 'Demo',
            store: linestore,
            animate: true,
            shadow: true,
            width : 450,
			height : 450,
            /*
            legend: {
                position: 'right'
            },*/
            /*
           interactions: [{
            type: 'panzoom',
                axes: {
                    left: {}
                }
            }, {
               type: 'iteminfo',
               listeners: {
            	   show: function(interaction, item, panel) {
                       var storeItem = item.storeItem;
                       panel.update(['<ul><li><b>Month: </b>' + storeItem.get('name') + '</li>', '<li><b>Value: </b> ' + item.value[1]+ '</li></ul>'].join(''));
                   }
               }
           }],*/
            axes: [{
                type: 'Numeric',
                minimum: 0,
                maximum: 100,
                position: 'left',
                fields: ['iphone', 'android', 'ipad'],
                title: 'Number of Hits',
                minorTickSteps: 1
            }, {
                type: 'Category',
                position: 'bottom',
                fields: ['name'],
                title: 'Month of the Year'
            }],
            series: [{
                type: 'line',
                highlight: {
                    size: 7,
                    radius: 7
                },
                smooth: true,
                axis: 'left',
                xField: 'name',
                yField: 'iphone',
                title: 'iPhone'
            }, {
                type: 'line',
                highlight: {
                    size: 7,
                    radius: 7
                },
                axis: 'left',
                smooth: true,
                xField: 'name',
                yField: 'android',
                title: 'Android'
            }, {
                type: 'line',
                highlight: {
                    size: 7,
                    radius: 7
                },
                axis: 'left',
                smooth: true,
                xField: 'name',
                yField: 'ipad',
                title: 'iPad'
            }]
		});

		config.items = [ chart ];
		this.callParent([ config ]);
	}
})