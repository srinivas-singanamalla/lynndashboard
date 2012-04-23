/**
 * Demonstrates a tabbed form panel. This uses a tab panel with 3 tabs - Basic, Sliders and Toolbars - each of which is
 * defined below.
 *
 * See this in action at http://dev.sencha.com/deploy/sencha-touch-2-b3/examples/kitchensink/index.html#demo/forms
 */
Ext.define('LDBTest.view.SearchTabPanel', {
	extend: 'Ext.tab.Panel',
    xtype: 'searchTabPanel',
    requires: [
               'LDBTest.view.PropertySearch',
               'LDBTest.view.HierarchySearch',
               'LDBTest.view.EnergyLineChart'
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
