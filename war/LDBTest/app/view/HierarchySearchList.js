Ext.define('LDBTest.view.HierarchySearchList', {
    extend: 'Ext.List',
    xtype : 'hierarchysearchlist',
    requires: [
//         'LDBTest.store.HierarchyListStore'
    ],

    config: {
//        deselectOnContainerClick: false,
    
    	store: Ext.create('LDBTest.store.HierarchyListStore'),
    
    	itemTpl: '<div style="margin-right:50px;">' +
    				'<div style="width: 400px; float: right; text-align: right;">' +
    					'<span class="header">Status:{Status} Status Date: {StatusDate}</span><br/>{NetCashFlow}' +
    				'</div>' +
    				'<div>' +
    					'<span class="header">{WellCompletionName} ( {WellCompletionCode} )</span> <br/>{GrossCashFlow}' +
    				'</div>' +
    			'</div>',
    	onItemDisclosure: true
    },
    
    initialize: function(component, eopts) {
    	console.log('HierarchySearchList' + this);
    	
    	this.callParent();
    }
});