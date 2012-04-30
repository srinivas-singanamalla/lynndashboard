Ext.define('LDBTest.view.WellListPanel', {
	extend: 'Ext.Panel',
	xtype: 'welllistpanel',
	requires: [
	           ],
	           
	config: {
	    left: 0,
	    padding: 10,
	    items: [
				{
					xtype: 'list',
					label: 'Well Completion Name',
				    ui: 'round',
				    
				    width: 380,
					height: 250,
				
				    pinHeaders: false,
				
				    //itemTpl defines the template for each item in the list
				    itemTpl: '<div class="contact">{name} <strong>{value}</strong></div>',
				
				    //give it a link to the store instance
				    store: Ext.create('LDBTest.store.PropertySearchWellStore'),
				
				    grouped: true,
				    emptyText: '<div style="margin-top: 20px; text-align: center">No Matching Items</div>',
				    disableSelection: false     
				
				}
	            ]
	}           
});