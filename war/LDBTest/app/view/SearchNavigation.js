Ext.define('LDBTest.view.SearchNavigation', {
	extend: 'Ext.navigation.View',
    xtype: 'searchnavigation',
    requires: [
               'LDBTest.view.SearchTabPanel',
               'LDBTest.view.Timesheet',
               'LDBTest.view.DashboardCarousel'
               ],
    config: {
        items: [
			{
				xtype: 'searchTabPanel'
			}
        ],
        dashboard: null,
        autoDestroy: false,
        navigationBar: {
//            ui: 'sencha',
        	id: 'navigationBar',
            items: [
                {
                    xtype: 'button',
                    id: 'changeTimeInterval',
                    text: 'Change Time Interval',
                    align: 'right',
                    hidden: true,
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
	                            xtype: 'timesheet',
	                            id: 'timesheet'
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
    	});
    	
    	this.callParent();
    },
    
    pushDashboard: function(config) {
    	if (this.getDashboard() == null) {
    		this.setDashboard(
    			Ext.create('LDBTest.view.DashboardCarousel', {
    				title: config.title
    			})
    		);
    	}
    	this.getDashboard().setActiveItem(this.getDashboard().getInnerItems()[0]);
    	this.getDashboard().setDirty();
    	this.push(this.getDashboard());
    },
    
    onBack: function() {
    	/*
    	Ext.defer(
        		function(){
        			Ext.Logger.warn('removing all components');
        			var carousel = Ext.ComponentQuery.query('dbcarousel')[0];
            		if (this.getDashboard()) {
            			this.getDashboard().removeAll(true, true);
//            			this.remove(carousel, true);
            		}
        		}
        		, 600, this);
        		*/
    	Ext.get('changeTimeInterval').hide();
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
