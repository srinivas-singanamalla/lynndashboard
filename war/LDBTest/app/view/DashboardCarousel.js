Ext.define("LDBTest.view.DashboardCarousel", {
    extend: 'Ext.carousel.Carousel',
    xtype: 'dbcarousel',
    requires: [
               'LDBTest.view.PseudoOrgChart', 
//               'LDBTest.view.DBAreaChart', 
//               'LDBTest.view.DBLineChart', 
//               'LDBTest.view.DBBarChart', 
               'LDBTest.view.DBStackedBarChart', 
//               'LDBTest.view.EnergyLineChart', 
//               'LDBTest.view.DBStackedBarChart2', 
               'LDBTest.view.ProductionAnalysisChart', 
               'LDBTest.view.Forms',
               'LDBTest.view.WellSearchField'
               ],
    
    config: {
    	direction: 'horizontal',
    	ui: 'light',
    	title : 'Well Completion',
		iconCls : 'home',
        items: [
			{
				docked : 'top',
				xtype : 'titlebar',
				id: 'titleBarId',
				title : 'Net Production KPI <span style ="color:red">(KNOTT-TUBB 42-K)</span>'
			}, 
			{
                xtype: 'toolbar',
                docked: 'bottom',
                itemId: 'toolbarId',
                // Insert some buttons and space them out
                items: [
                    { flex:1, xtype: 'component' },
                    { text:'Choose Well', handler: function(button) {
                    	console.log("button" + button.getText());
                    	Ext.getCmp('wellsearchlistId').showBy(button)
                    } }
                ]
            },
            {
                xtype: 'porgchart'
            },
            {
                xtype: 'productionanalysischart'	
            },
            {
                xtype: 'dbstackedbarchart'	
            },
            {
            	xtype: 'forms'
            }
        ],
        
        listeners: {
        	afterrender: function (me) {
        		console.log("afterrender");
        		me.on('add', function(){
            		console.log('do the switch, baby');
            		});
        		
        		me.on('activeitemchange', function(){
            		console.log('do the switch, baby');
            		});
            },
            
        	activeitemchange: function(container, value, oldvalue, eopts) {
        		Ext.getCmp('titleBarId').setTitle(value.getTitle() || "");
        	}

        }
    },
    
    
    
    initialize: function() {
    	//TODO fix this
    	
    }
});