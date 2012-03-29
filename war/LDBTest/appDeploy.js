//<debug>
/*
Ext.Loader.setConfig({
	enabled: true
});
Ext.Loader.setPath({
    'Ext': 'sdk/src'
    
});
*/	
//</debug>

//Ext.require("LDBTest.view.PseudoOrgChart");
Ext.application({
    name: 'LDBTest',

    requires: [
        'Ext.MessageBox'
    ],

    views: ['Main', 'DashboardCarousel'],

    stores: ['ChartStore'],
    
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

        Ext.ComponentQuery.query('viewport')[0];

        Ext.Ajax.request({
            url: 'app/data/' + 'CONS' + "_" + "AZ" + ".json",
            success: function (response, opts) {
                try {
                    // decode responseText in order to create json object
                    var data = Ext.decode(response.responseText);
                    // load it into the charts store: this will update the area series
                    Ext.getStore('ChartStore').setData(data.items);
                    
                    Ext.Viewport.add(Ext.create('LDBTest.view.Main', {}));
//                  Ext.Viewport.add(Ext.create('LDBTest.view.DashboardCarousel', {}));
                    // This should only run once? Doesn't seem to be a problem at the moment.
                } finally {
                    //mainView.setMasked(false);
                }
            },
            failure: function (response) {
                mainView.setMasked({
                    msg: 'Failed loading!'
                });
            }
        });
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
