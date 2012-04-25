Ext.define("LDBTest.view.Main", {
    extend: 'Ext.tab.Panel',
    requires: [
               'Ext.TitleBar', 
               'LDBTest.view.DashboardCarousel', 
               'Ext.ComponentQuery', 
               'LDBTest.view.SearchTabPanel', 
               'Ext.tab.Panel',
               'LDBTest.view.DashboardSummary',
               'LDBTest.view.ProductionAnalysisChart',
               'LDBTest.view.DBStackedBarChart',
               'LDBTest.view.PropertyInfo',
               'LDBTest.view.PseudoOrgChart'
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
        ]
    }
});