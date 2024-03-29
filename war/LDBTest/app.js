Ext.application({
    name: 'LDBTest',

    requires: [
        'Ext.MessageBox',
        'LDBTest.model.DBSingleton'
    ],

    views: ['SearchNavigation'],
    
    models: ['JsonServicesConstants'],
    
    controllers: [
                  'WellsearchController',
                  'HierarchySearchController'
                  ],
    
    icon: {
        57: 'resources/icons/Icon.png',
        72: 'resources/icons/Icon~ipad.png',
        114: 'resources/icons/Icon@2x.png',
        144: 'resources/icons/Icon~ipad@2x.png'
    },

    phoneStartupScreen: 'resources/loading/Homescreen.jpg',
    tabletStartupScreen: 'resources/loading/Homescreen~ipad.jpg',

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        Ext.Viewport.add(Ext.create('LDBTest.view.SearchNavigation', {}));
        
        /*
        Ext.Viewport.on({
    	    // Ext.Buttons have an xtype of 'button', so we use that are a selector for our delegate
    	    delegate: 'button',

    	    tap: function(button) {
    	    	overlay.showBy(button);
    	    }
    	});*/
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
