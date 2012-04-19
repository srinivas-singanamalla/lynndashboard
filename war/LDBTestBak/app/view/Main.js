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
			title : 'Well Completion',
			iconCls : 'home',
			xtype : 'dbcarousel',
			/*
			scrollable : {
				direction : 'vertical',
				directionLock : true
			}*/
		},
            {
                title: 'Product Options',
                iconCls: 'action',
                
                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Getting Started'
                    },
                    {
                        xtype: 'panel',
                        html: 'To be displayed'
                    }
                ]
            },
            {
                title: 'Unit Lease',
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