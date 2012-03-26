Ext.define("LDB.view.DBBarChart", {
	extend : 'Ext.Panel',
	xtype : 'dbbarchart',
	/*
	requires : [ 'Ext.chart.series.Column', 'Ext.chart.Panel', 'Ext.chart.axis.Numeric',
			'Ext.chart.axis.Category', 'Ext.chart.series.Area', 'Ext.chart.Legend', 'Ext.chart.theme.GridStyle', 'Ext.chart.theme.OddStyle',
			'Ext.data.JsonStore', 'Ext.chart.theme.Theme', 'Ext.chart.theme.MarkerStyle', 'Ext.chart.theme.LabelStyle',
			'Ext.chart.theme.Style', 'Ext.chart.theme.Base',
			'Ext.chart.theme.Demo', 'Ext.chart.Toolbar',  'Ext.draw.Sprite',
			 'Ext.fx.Parser', 'Ext.fx.Sprite' , 'Ext.draw.Surface', 'Ext.draw.engine.Canvas', 'Ext.draw.CompositeSprite',
			'Ext.draw.engine.ImageExporter', 'Ext.chart.theme.TitleStyle', 'Ext.chart.theme.EvenStyle' ],
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
		
		var generateData = function(n, floor) {
			var data = [], i;

			floor = (!floor && floor !== 0) ? 20 : floor;

			for (i = 0; i < (n || 12); i++) {
				data.push({
					name : new Date().monthNames[i % 12],
					2003 : Math.floor(Math.max((Math.random() * 100), floor)),
					2004 : Math.floor(Math.max((Math.random() * 100), floor)),
					2005 : Math.floor(Math.max((Math.random() * 100), floor)),
					2006 : Math.floor(Math.max((Math.random() * 100), floor)),
					2007 : Math.floor(Math.max((Math.random() * 100), floor)),
					2008 : Math.floor(Math.max((Math.random() * 100), floor)),
					2009 : Math.floor(Math.max((Math.random() * 100), floor))
				});
			}
			return data;
		};
		
		var store1 = Ext.create('Ext.data.JsonStore',
				{
					fields : [ 'name', '2003', '2004', '2005', '2006', '2007', '2008',
							'2009' ],
					data : generateData(5, 20)
				});
		
		var chart = Ext.create('Ext.chart.Chart', {
			themeCls : 'bar1',
			theme : 'Demo',
			store : store1,
			width : 450,
			height : 450,
			autoSize : true,
			title : 'Bar Chart',
			animate : true,
			legend : {
				position : {
					portrait : 'right',
					landscape : 'bottom'
				},
				labelFont : '20px Arial'
			},
			axes: [{
                type: 'Numeric',
                position: 'left',
                fields: ['2003', '2004', '2005', '2006', '2007', '2008', '2009'],
                label: {
                    renderer: function(v) {
                        return v.toFixed(0);
                    }
                },
                title: 'Number of Hits',
                minimum: 0
            },
            {
                type: 'Category',
                position: 'bottom',
                fields: ['name'],
                title: 'Month of the Year'
            }],
            series: [{
                type: 'column',
                xField: 'name',
                yField: ['2003', '2004', '2005', '2006', '2007', '2008', '2009'],
                axis: 'left',
                highlight: true,
                showInLegend: true
            }]
		 
		});

		config.items = [ chart ];
		this.callParent([ config ]);
	}
})