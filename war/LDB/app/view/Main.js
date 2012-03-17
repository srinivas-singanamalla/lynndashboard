Ext.define("LDB.view.Main", {
    extend: 'Ext.tab.Panel',
    requires: ['Ext.data.JsonStore', 'Ext.TitleBar', 'LDB.view.Dashboard', 
               'Ext.chart.Panel', 'LDB.view.DBAreaChart', 'LDB.view.PseudoOrgChart', 'LDB.view.DBBarChart', 'LDB.view.DBLineChart'],
    
    config: {
        tabBarPosition: 'bottom',
        
    	
        items: [
            {
            	title: 'Dashboard',
        		iconCls:'home',
            	layout: 'vbox',
                width: '100%',
                height: '100%',
                scrollable: {
            	    direction: 'vertical',
            	    directionLock: true
            	},
            	
                items: [{
	                    docked: 'top',
	                    xtype: 'titlebar',
	                    title: 'Well Profitability Dashboard'
	                },
	                {
	                	layout: 'hbox',
		                items: [{
		                		xtype: 'dbareachart',
		                		flex: 1
		                	},
		                	{
		                		xtype: 'porgchart',
		                		flex: 1
		                	}]
	                 },
	                 {
	                	layout: 'hbox', 
	 	                items: [{
	 	                		xtype: 'dbbarchart',
	 	                		flex: 1
	 	                	},
	 	                	{
	 	                		xtype: 'dblinechart',
	 	                		flex: 1
	 	                	}]
	                  }
                ]
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
                        xtype: 'dashboardpanel',
                    }
                ]
            }
        ]
    }
});