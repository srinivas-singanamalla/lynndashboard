Ext.define("LDBTest.view.DBBarChart", {
	extend : 'Ext.Panel',
	xtype : 'dbbarchart',
	requires: ['Ext.chart.Panel',
	           'Ext.chart.axis.Numeric',
	           'Ext.chart.axis.Category',
	           'Ext.chart.series.Column'],

	   initialize: function() {
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
				width : 800,
				height : 450,
				autoSize : true,
				title : 'Bar Chart',
				animate : true,
	            shadow: true,
	            /*
	            legend: {
	                position: {
	                    portrait: 'bottom',
	                    landscape: 'right'
	                },
	                labelFont: '17px Arial'
	            },
	            interactions: [
	                {
	                    type: 'reset'
	                },
	                {
	                    type: 'togglestacked'
	                },
	                {
	                    type: 'panzoom',
	                    axes: {
	                        left: {}
	                    }
	                },
	                'itemhighlight',
	                {
	                    type: 'iteminfo',
	                    gesture: 'longpress',
	                    panel: {
	                        items: [
	                            {
	                                docked: 'top',
	                                xtype: 'toolbar',
	                                title: 'Details'
	                            }
	                        ]
	                    },
	                    listeners: {
	                        'show': function (me, item, panel) {
	                            panel.setHtml('<ul><li><b>Month:</b> ' + item.value[0] + '</li><li><b>Value: </b> ' + item.value[1] + '</li></ul>');
	                        }
	                    }
	                },
	                {
	                    type: 'itemcompare',
	                    offset: {
	                        x: -10
	                    },
	                    listeners: {
	                        'show': function (interaction) {
	                            var val1 = interaction.item1.value,
	                                val2 = interaction.item2.value;

	                            chartPanel.descriptionPanel.setTitle(val1[0] + ' to ' + val2[0] + ' : ' + Math.round((val2[1] - val1[1]) / val1[1] * 100) + '%');
	                            chartPanel.headerPanel.getLayout().setAnimation('slide');
	                            chartPanel.headerPanel.setActiveItem(1);
	                        },
	                        'hide': function () {
	                            var animation = chartPanel.headerPanel.getLayout().getAnimation();
	                            if (animation) {
	                                animation.setReverse(true);
	                            }
	                            chartPanel.headerPanel.setActiveItem(0);
	                        }
	                    }
	                }
	            ],
*/
				
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
			this.add(chart);
	   },
	   
	   constructor : function(config) {
		this.callParent([ config ]);
	}
});