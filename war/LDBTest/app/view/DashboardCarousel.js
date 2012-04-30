Ext.define("LDBTest.view.DashboardCarousel", {
    extend: 'Ext.carousel.Carousel',
    xtype: 'dbcarousel',
    requires: [
               'Ext.TitleBar', 
               'LDBTest.view.SearchTabPanel', 
               'LDBTest.view.DashboardSummary',
               'LDBTest.view.ProductionAnalysisChart',
               'LDBTest.view.DBStackedBarChart',
               'LDBTest.view.PropertyInfo',
               'LDBTest.view.PseudoOrgChart',
               'Ext.util.DelayedTask',
               'Ext.SegmentedButton'
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
                  {
                    xtype: 'segmentedbutton',
                    items: 
                    	[
		                    { text:'Search', pressed: true, handler: function(button) {
		                    	console.log("button" + button.getText());
		                    } },
		                    { text:'Summary', handler: function(button) {
		                    	console.log("button" + button.getText());
		                    } },
		                    { text:'Production Analysis', handler: function(button) {
		                    	console.log("button" + button.getText());
		                    } },
		                    { text:'Profitability Analysis', handler: function(button) {
		                    	console.log("button" + button.getText());
		                    } },
		                    { text:'KPI', handler: function(button) {
		                    	console.log("button" + button.getText());
		                    } },
		                    { text:'PropertyInfo', handler: function(button) {
		                    	console.log("button" + button.getText());
		                    } }
		               ]
                  }
                ]
            },
            {
                xtype: 'searchTabPanel'
            },
            {
                xtype: 'dashboardsummary'
            },
            {
                xtype: 'productionanalysischart'
            },
            {
            	xtype: 'dbstackedbarchart'
            },
            {
    			
				xtype : 'porgchart'
            },
            {
                xtype: 'propertyinfo'
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