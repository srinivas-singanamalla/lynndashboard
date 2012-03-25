Ext.define("LDBTest.view.PseudoOrgChart", {
	extend : 'Ext.draw.Component',
	xtype : 'porgchart',
	
	config: {
		autoSize: true
	},
	
	constructor : function(config) {
		
		
        /*
        var drawPanel = Ext.create('Ext.Panel', {
            title: 'Yellow Circle',
            width: 450,
        	height: 450,
            items: drawComponent
          });*/
                
        
        //drawComponent.surface.renderFrame();        		

		//config.items = [ drawPanel ];
		
		this.callParent([ config ]);
	},
	
	// Override an existing function
	/*
    onRender: function() {
    	LDBTest.view.PseudoOrgChart.superclass.onRender.apply(this, arguments);
        this.myNewFunction();
    },*/
    
    initialize: function() {
    	
    	var me = this,
        viewBox = me.getViewBox(),
        autoSize = me.getAutoSize(),
        bbox, items, width, height, x, y;
    	
    	LDBTest.view.PseudoOrgChart.superclass.initialize.apply(this, arguments);
    	
    	var getTrianglePath = function(x, y, h) {
			return "M" + x + " " + y + "L" + (x-0.5*h) + " " + (y + h) + " L" + (x+0.5*h) + " " + (y+h) + " Z";
		};
		
		var getSpritesArray = function(sconfig) {
			var x = sconfig.x, y = sconfig.y, w = sconfig.w, h = sconfig.h;
			var tc = sconfig.topColor, bc = sconfig.bottomColor;
			var ttext = sconfig.topText, ctext = sconfig.centerText, btext = sconfig.bottomText;
			var fv = sconfig.forecastVal;
			return [
			        {
			        	type: 'rect',
                        width: w,
                        height: h,
                        fill: 'white',
                        stroke: 'black',
                        x: x,
                        y: y,
			        },
			        
			        {
			        	type: 'rect',
                        width: w,
                        height: 0.25*h,
                        stroke: 'black',
                        fill: tc,
                        x: x,
                        y: y,
			        },
			        
			        {
                        type: 'text',
                        fill: 'black',
                        x: x + 0.5*w,
                        y: y + 0.125*h,
                        text: ttext,
                    },
                    
                    {
                        type: 'text',
                        fill: 'black',
                        x: x + 10,
                        y: y + 0.5*h,
                        text: ctext,
                    },
                    
                    {
			        	type: 'rect',
                        width: w,
                        height: 0.25*h,
                        stroke: 'black',
                        fill: bc,
                        x: x,
                        y: y + 0.75*h,
			        },
			        
			        {
                        type: 'text',
                        fill: 'black',
                        stroke: 'black',
                        x: x + 10,
                        y: y + 0.833*h,
                        text: btext
                    }, 
                    
                    {
                    	type: 'path',
                    	stroke: 'black',
                    	fill: fv > 0 ? 'green' : 'red',
                    	path: getTrianglePath(x+10, y + 0.91*h, 10)	
                    },
                    
                    {
                    	type: 'text',
                    	fill: fv > 0 ? 'green' : 'red',
                        stroke: 'black',
                        x: x + 10 + 20,
                        y: y + 0.91*h,
                        text: fv
                    }
			        
			        ];
		};
		
		var getPsuedoOrgBoxesSpriteArray = function(all, gas, oil, natgas) {
			var spritesArray = [];
			var bbox = {x: 100, y: 50, w:250, h:200};
			var pad = 10;
			spritesArray.push(getSpritesArray({
	        	x: bbox.x,
	        	y: bbox.y,
	        	w: bbox.w,
	        	h: bbox.h,
	        	topColor: 'lightgray',
	        	bottomColor: 'lightgray',
	        	topText: 'Daily Average Volume',
	        	centerText: '2,253 MCFed',
	        	bottomText: 'From Forecast',
	        	forecastVal: 450
	        }));
			
			spritesArray.push(getSpritesArray({
	        	x: bbox.x - 0.25*bbox.w - pad,
	        	y: bbox.y + bbox.h + pad,
	        	w: 0.5*bbox.w,
	        	h: 0.5*bbox.h,
	        	topColor: 'red',
	        	bottomColor: 'white',
	        	topText: 'Gas',
	        	centerText: '1,296 MCFed',
	        	bottomText: 'From Forecast',
	        	forecastVal: 50
	        }));
			
			spritesArray.push(getSpritesArray({
	        	x: bbox.x + 0.25*bbox.w,
	        	y: bbox.y + bbox.h + pad,
	        	w: 0.5*bbox.w,
	        	h: 0.5*bbox.h,
	        	topColor: 'green',
	        	bottomColor: 'white',
	        	topText: 'Gas',
	        	centerText: '1,286 BbLd',
	        	bottomText: 'From Forecast',
	        	forecastVal: 50
	        }));
			
			spritesArray.push(getSpritesArray({
	        	x: bbox.x + 0.75*bbox.w + pad,
	        	y: bbox.y + bbox.h + pad,
	        	w: 0.5*bbox.w,
	        	h: 0.5*bbox.h,
	        	topColor: 'purple',
	        	bottomColor: 'white',
	        	topText: 'NGL',
	        	centerText: '1,286 BbLd',
	        	bottomText: 'From Forecast',
	        	forecastVal: -50
	        }));
			
			return spritesArray;
		};
		
		/*var drawComponent = Ext.create('Ext.draw.Component', {
			width: 450,
        	height: 450
        });*/
        
        me.surface.setStyle('text-align', 'center');
        me.surface.setStyle('border', '1px solid blue');	        
        me.surface.add(getPsuedoOrgBoxesSpriteArray({}, {}, {}, {}));
    }
});

Date.prototype.monthNames = [
    "Jan", "Feb", "Mar",
    "Apr", "May", "Jun",
    "Jul", "Aug", "Sep",
    "Oct", "Nov", "Dec"
];

Ext.define("LDBTest.view.DBLineChart", {
	extend : 'Ext.Panel',
	xtype : 'dblinechart',
	requires: ['Ext.chart.Panel',
	           'Ext.chart.axis.Numeric',
	           'Ext.chart.axis.Category',
	           'Ext.chart.series.Line'],

	initialize: function() {
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
            width : 800,
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
		this.add(chart);
	},
	
	constructor : function(config) {
		this.callParent([ config ]);
	}
});

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
				/*
	            shadow: false,
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

Date.prototype.monthNames = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
		"Aug", "Sep", "Oct", "Nov", "Dec" ];

Ext.define("LDBTest.view.DBAreaChart", {
	extend : 'Ext.Panel',
	xtype : 'dbareachart',
	requires: ['Ext.chart.Panel',
	           'Ext.chart.axis.Numeric',
	           'Ext.chart.axis.Category',
	           'Ext.chart.series.Area',
	           'Ext.draw.engine.ImageExporter'],

	constructor : function(config) {
		this.callParent([ config ]);
	},
	
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

		var store1 = Ext.create('Ext.data.JsonStore', {
			fields : [ 'name', '2003', '2004', '2005', '2006', '2007', '2008',
					'2009' ],
			data : generateData(5, 20)
		});

		var chart = Ext.create('Ext.chart.Chart', {
			cls : 'area1',
			theme : 'Demo',
			store : store1,
			width : 800,
			height : 450,
			autoSize : true,
			title : 'Area Chart Test',
			animate : true,
			legend : {
				position : {
					portrait : 'right',
					landscape : 'bottom'
				},
				labelFont : '20px Arial'
			},
			axes : [
					{
						type : 'Numeric',
						position : 'left',
						fields : [ '2003', '2004', '2005', '2006', '2007',
								'2008', '2009' ],
						title : 'Number of Hits',
						minimum : 0,
						adjustMinimumByMajorUnit : 0
					}, {
						type : 'Category',
						position : 'bottom',
						fields : [ 'name' ],
						title : 'Month of the Year'
					} ]

			,
			series : [ {
				type : 'area',
				highlight : false,
				axis : 'left',
				xField : 'name',
				yField : [ '2003', '2004', '2005', '2006', '2007', '2008',
						'2009' ]
			} ]

		});

		this.add(chart);
	}
});

Ext.define("LDBTest.view.DashboardCarousel", {
    extend: 'Ext.carousel.Carousel',
    xtype: 'dbcarousel',
    requires: ['LDBTest.view.PseudoOrgChart', 'LDBTest.view.DBAreaChart', 'LDBTest.view.DBLineChart', 'LDBTest.view.DBBarChart'],
    
    config: {
    	defaults: {
            styleHtmlContent: true
        },

        items: [
            {
                xtype: 'porgchart'
            },
            {
                xtype: 'dbareachart'
            },
            {
                xtype: 'dblinechart'	
            },
            {
            	xtype: 'dbbarchart'
            }
        ]
    }//config
});

Ext.define("LDBTest.view.Main", {
    extend: 'Ext.tab.Panel',
    requires: ['Ext.TitleBar', 'LDBTest.view.DashboardCarousel', 'Ext.ComponentQuery'],
    
    config: {
        tabBarPosition: 'bottom',
        
        items: [
			{
				docked : 'top',
				xtype : 'titlebar',
				title : 'Well Profitability Dashboard'
			},    
            {
			title : 'Dashboard',
			iconCls : 'home',
			width : '100%',
			height : '450',
			xtype : 'dbcarousel',
			scrollable : {
				direction : 'vertical',
				directionLock : true
			},
/*
			layout : 'vbox',
			items : [ {
				docked : 'top',
				xtype : 'titlebar',
				title : 'Well Profitability Dashboard'
			}, {
				xtype : 'porgchart'
			} ]
			*/
		},
            {
                title: 'Get Started',
                iconCls: 'action',
                
                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Getting Started'
                    },
                    {
                        xtype: 'video',
                        url: 'http://av.vimeo.com/64284/137/87347327.mp4?token=1330978144_f9b698fea38cd408d52a2393240c896c',
                        posterUrl: 'http://b.vimeocdn.com/ts/261/062/261062119_640.jpg'
                    }
                ]
            }
        ]
    }
});