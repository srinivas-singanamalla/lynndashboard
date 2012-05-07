Ext.define('LDBTest.view.PropertyWellList', {
    extend: 'Ext.DataView',
    xtype : 'propertywelllist',
    requires: [
               'LDBTest.store.PropertySearchWellStore'
               ],

    config: {
    	store: Ext.create('LDBTest.store.PropertySearchWellStore'),
    
    	itemTpl: '<div><p style="width: 200px; float: right; text-align: right;">{value}</p><h2 style="">{name} </h2></div>',
    	baseCls: 'my-dataview',
    	emptyText: '<div style="margin-top: 20px; text-align: center">No Matching Items</div>'
    },
});