Ext.define('LDBTest.view.PropertyWellList', {
    extend: 'Ext.List',
    xtype : 'propertywelllist',
    requires: [
               'LDBTest.store.PropertySearchWellStore'
               ],

    config: {
    	store: Ext.create('LDBTest.store.PropertySearchWellStore'),
    	ui: 'normal',
    	itemTpl: '<div style="margin-right:50px;"><p style="width: 200px; float: right; text-align: right;">{value}</p><h2 style="">{WellCompletionName} </h2></div>',
    	emptyText: '<div style="margin-top: 20px; text-align: center">No Matching Items</div>',
    	onItemDisclosure: true
    },
});