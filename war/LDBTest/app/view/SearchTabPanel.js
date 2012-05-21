Ext.define('LDBTest.view.SearchTabPanel', {
	extend: 'Ext.tab.Panel',
    xtype: 'searchTabPanel',
    requires: [
               'LDBTest.view.PropertySearch',
               'LDBTest.view.HierarchySearch',
               ],
    config: {
//    	iconCls: 'search',
    	title: 'Select a Well',
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
