/**
 * Demonstrates a tabbed form panel. This uses a tab panel with 3 tabs - Basic, Sliders and Toolbars - each of which is
 * defined below.
 *
 * See this in action at http://dev.sencha.com/deploy/sencha-touch-2-b3/examples/kitchensink/index.html#demo/forms
 */
Ext.define('LDBTest.view.PropertyInfo', {
	extend: 'Ext.List',
	xtype : 'wellinfolist',
	
	
	requires: [
	           'LDBTest.store.PropertyInfoStore'
	           ],

	config: {
		store: Ext.create('LDBTest.store.PropertyInfoStore'),
		ui: 'normal',
		title: 'Well Meta Data',
		dirty: true,
		itemTpl: '<div style="margin-right:0px;"><p style="width: 400px; float: right; text-align: right;">{Value}</p><h2 style="">{Label} </h2></div>',
		emptyText: '<div style="margin-top: 20px; text-align: center">No Matching Items</div>',
		grouped: true,
		scrollable: {
		    direction: 'vertical',
		    directionLock: true
		}
	},
	
	reloadIfDirty: function() {
		this.setMasked({xtype: 'loadmask',
		    message: 'Loading...'});
		this.getStore().getProxy().setUrl(LDBTest.model.JsonServicesConstants.getPropertyWellInfo());
		this.getStore().load(function(records, operation, success) {
	    	if (success) {
	    		Ext.Logger.warn('Property Info  #success');
	    		this.setDirty(false);
	    		this.setMasked(false);
	    	}
	    }, this);
    },
    
    initialize: function() {
    	this.callParent();
    	this.reloadIfDirty();
    }
});

