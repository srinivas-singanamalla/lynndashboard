Ext.define('LDBTest.view.SearchNavigation', {
	extend: 'Ext.navigation.View',
    xtype: 'searchnavigation',
    requires: [
               'LDBTest.view.SearchTabPanel',
               'LDBTest.view.Timesheet'
               ],
    config: {
        items: [
			{
				xtype: 'searchTabPanel'
			}
        ],
        
        autoDestroy: false,
        navigationBar: {
            ui: 'sencha',
            items: [
                {
                    xtype: 'button',
                    id: 'changeTimeInterval',
                    text: 'Change Time Interval',
                    align: 'right',
                    hidden: false,
                    hideAnimation: Ext.os.is.Android ? false : {
                        type: 'fadeOut',
                        duration: 200
                    },
                    showAnimation: Ext.os.is.Android ? false : {
                        type: 'fadeIn',
                        duration: 200
                    },
                    handler: function() {
	                    if (!this.actions) {
	                        this.actions = Ext.Viewport.add({
	                            xtype: 'timesheet'
	                        });
	                    }
	                    this.actions.show();
	                }
                }
            ]
        }
    },
    
    initialize: function() {
    	this.on({
    		back: this.onBack,
    		add: this.onAdd,
    		scope: this
    	})
    	
    	this.callParent();
    },
    
    onBack: function() {
    	/*
    	Ext.defer(function(){Ext.Logger.warn("destroying"); 
    		var carousel = Ext.ComponentQuery.query('dbcarousel')[0];
    		if (carousel) {
    			Ext.Logger.warn('destroying carousel');
    			alert('SearchNavigation:destroying carousel');
    			Ext.ComponentQuery.query('dbcarousel')[0].destroy();
    			alert('SearchNavigation:destroyed carousel???');
    		}
    	}, 1000, this);
    	*/
    },
    
    onAdd: function( container, item, index, eOpts ) {
    	/*Ext.defer(function(){Ext.Logger.warn("SearchNavigation#add " + index); 
		var carousel = Ext.ComponentQuery.query('dbcarousel')[0];
		if (carousel) {
			carousel.getAt(0).reloadIfDirty && carousel.getAt(0).reloadIfDirty();
		}
	}, 1000, this);*/
    },
});
