Ext.define("LDBTest.view.Main", {
    extend: 'Ext.tab.Panel',
    requires: [
               'Ext.TitleBar', 
               'LDBTest.view.SearchTabPanel', 
               'LDBTest.view.DashboardSummary',
               'LDBTest.view.ProductionAnalysisChart',
               'LDBTest.view.DBStackedBarChart',
               'LDBTest.view.PropertyInfo',
               'LDBTest.view.PseudoOrgChart',
               'Ext.util.DelayedTask'
               ],
    
    config: {
        tabBarPosition: 'bottom',
        items: [
			{
				docked : 'top',
				xtype : 'titlebar',
				title : 'Well Profitability Dashboard'
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
				/*
				scrollable : {
					direction : 'vertical',
					directionLock : true
				}*/
            },
            {
                xtype: 'propertyinfo'
            },
            {
                title: 'Expense Breakdown',
                iconCls: 'action',
                
                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Unit Lease'
                    },
                    {
                        xtype: 'panel',
                        html: 'To be displayed'
                    }
                ]
            }
        ],
        listeners: {
        	activate: function (container, newActiveItem, oldActiveItem, opts) {
        		console.log("activate");
            },
            
        	activeitemchange: function(container, value, oldvalue, eopts) {
        		console.log("activate item change");
        		Ext.Viewport.setMasked({
        		    xtype: 'loadmask',
        		    message: 'Loading...'
        		});
        		
        		var task = new Ext.util.DelayedTask(function(){
        			Ext.Viewport.unmask();
        		});
        		//TODO random timeset, we need to figure out the exact rendering time... for a card
        		task.delay(3000);
        	}

        }
    }
});