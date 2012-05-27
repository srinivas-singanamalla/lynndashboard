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
    				'<div style="width: 500px; float: right; text-align: right;">' +
    					'<span class="header">Status:<span style="color:red">{Status}</span> Status Date: <span style="color:red">{StatusDate}</span></span><br/>Net: {StrNet}' +
    				'</div>' +
    				'<div>' +
    					'<span class="header">{WellCompletionName} </span> <br/>Gross:{StrGross}' +
    				'</div>' +
    			'</div>',
    	onItemDisclosure: true
    },
    
    initialize: function(component, eopts) {
    	console.log('HierarchySearchList' + this);
    	
    	this.callParent();
    }
});