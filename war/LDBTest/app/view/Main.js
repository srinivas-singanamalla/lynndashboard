Ext.define("LDBTest.view.Main", {
    extend: 'Ext.tab.Panel',
    requires: ['Ext.TitleBar', 'LDBTest.view.DashboardCarousel', 'Ext.ComponentQuery', 'LDBTest.view.SearchTabPanel', 'Ext.tab.Panel'],
    
    config: {
        tabBarPosition: 'bottom',
        items: [
			{
				docked : 'top',
				xtype : 'titlebar',
				title : 'Well Profitability Dashboard'
			},    
            {
			
			xtype : 'dbcarousel'
			/*
			scrollable : {
				direction : 'vertical',
				directionLock : true
			}*/
		},
            {
                xtype: 'searchTabPanel'
                
            },
            {
                title: 'Summary',
                iconCls: 'action',
                
                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Summary'
                    },
                    {
                        xtype: 'panel',
                        html: 'To be displayed'
                    }
                ]
            },
            {
                title: 'Production Plot',
                iconCls: 'action',
                
                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Production Plot'
                    },
                    {
                        xtype: 'panel',
                        html: 'To be displayed'
                    }
                ]
            },
            {
                title: 'Property Info',
                iconCls: 'action',
                
                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Property Info'
                    },
                    {
                        xtype: 'panel',
                        html: 'To be displayed'
                    }
                ]
            },
            {
                title: 'Profitability Analysis',
                iconCls: 'action',
                
                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Profitability Analysis'
                    },
                    {
                        xtype: 'panel',
                        html: 'To be displayed'
                    }
                ]
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