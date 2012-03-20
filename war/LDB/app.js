//<debug>
Ext.Loader.setPath({
    'Ext': 'sdk/src'
});
Ext.Loader.setConfig({
	enabled: true
});
//</debug>

Ext.application({
    name: 'LDB',

    requires: [
        'Ext.MessageBox'
    ],

    views: ['Main', 'Dashboard', 'DBAreaChart', 'PseudoOrgChart', 'DBBarChart', 'DBLineChart', 'DashboardCarousal'],

    icon: {
        57: 'resources/icons/Icon.png',
        72: 'resources/icons/Icon~ipad.png',
        114: 'resources/icons/Icon@2x.png',
        144: 'resources/icons/Icon~ipad@2x.png'
    },
    
    phoneStartupScreen: 'resources/loading/Homescreen.jpg',
    tabletStartupScreen: 'resources/loading/Homescreen~ipad.jpg',
/*
    viewport: {
    	layout: {
			   type:'vbox',
			   align: 'center'
			}
    },
*/   
    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        Ext.Viewport.add(Ext.create('LDB.view.DashboardCarousal', {}));
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function() {
                window.location.reload();
            }
        );
    }
});
