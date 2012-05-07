Ext.define('LDBTest.view.HierarchySearchList', {
    extend: 'Ext.DataView',
    xtype : 'hierarchysearchlist',
    requires: [
//         'LDBTest.store.HierarchyListStore'
    ],

    config: {
//        deselectOnContainerClick: false,
    
    	store: Ext.create('LDBTest.store.HierarchyListStore'),
    
    	itemTpl: '<div>' +
    				'<div style="width: 400px; float: right; text-align: right;">' +
    					'<span class="header">Status:{Status} Status Date: {StatusDate}</span><br/>{NetCashFlow}' +
    				'</div>' +
    				'<div>' +
    					'<span class="header">{WellCompletionName} ( {WellCompletionCode} )</span> <br/>{GrossCashFlow}' +
    				'</div>' +
    			'</div>',		
    	baseCls: 'my-dataview'
    }
});