Ext.define('LDBTest.view.SearchNavigation', {
	extend: 'Ext.navigation.View',
    xtype: 'searchnavigation',
    requires: [
               'LDBTest.view.SearchTabPanel',
               ],
    config: {
        items: [
			{
				xtype: 'searchTabPanel'
			}
        ]
    }
});
