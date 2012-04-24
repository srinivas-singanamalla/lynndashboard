Ext.define('LDBTest.view.SearchTabPanel', {
	extend: 'Ext.tab.Panel',
    xtype: 'searchTabPanel',
    requires: [
               'LDBTest.view.PropertySearch',
               'LDBTest.view.HierarchySearch',
               ],
    config: {
    	iconCls: 'search',
    	title: 'Search',
    	/*
        activeItem: 0,
        tabBar: {
            // docked: 'bottom',
            ui: 'neutral',
            layout: {
                pack: 'center'
            }
        },
        */
        items: [
			{
				xtype: 'propertysearch'
			},
			
			{
				xtype: 'hierarchysearch'
			}
        ]
    }
});
