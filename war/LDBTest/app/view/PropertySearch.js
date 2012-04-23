Ext.define("LDBTest.view.PropertySearch", {
	extend : 'Ext.form.Panel',
	xtype : 'propertysearch',
	
	requires: [
	           'Ext.field.Select',
	           'Ext.field.Search',
	           'Ext.form.FieldSet',
	           'Ext.Panel',
	           'Ext.Toolbar',
	           'LDBTest.view.WellSearchField',
	           'LDBTest.store.WellStore',
	           'Ext.List'
	           ],
	config: {
//		autoSize: true,
		
//		height: 400,
//		width: 600,
		
		title : 'Property Search',
		
//		layout: 'fit',
		
		items: [{
			xtype: 'fieldset',
			instructions: 'Please enter the information above.',
			items: [{
	            xtype: 'selectfield',
	            label: 'Production Point Type:',
	            name: 'productionPointType',
	            prependText: 'Production Point Type:',
	            options: [
	                {text: 'All',            value: ''},
	                {text: 'Agriculture',    value: 'agriculture'},
	                {text: 'Transportation', value: 'transportation'},
	                {text: 'Services',       value: 'services'},
	                {text: 'Clothing',       value: 'clothing'},
	                {text: 'Health',         value: 'health'},
	                {text: 'Retail',         value: 'retail'},
	                {text: 'Manufacturing',  value: 'manufacturing'},
	                {text: 'Arts',           value: 'arts'},
	                {text: 'Housing',        value: 'housing'},
	                {text: 'Food',           value: 'food'},
	                {text: 'Wholesale',      value: 'wholesale'},
	                {text: 'Construction',   value: 'construction'},
	                {text: 'Education',      value: 'education'},
	                {text: 'Personal Use',   value: 'personal'},
	                {text: 'Entertainment',  value: 'entertainment'},
	                {text: 'Green',          value: 'green'}
	            ]
	        },
	        {
	        	xtype: 'list',
	        	label: 'Well Completion Name',
	            ui: 'round',
	            
	            width: 380,
	        	height: 420,

	            pinHeaders: false,

	            //itemTpl defines the template for each item in the list
	            itemTpl: '<div class="contact">{ProductionPointWellName} <strong>{PropertyID}</strong></div>',

	            //give it a link to the store instance
	            store: Ext.create('LDBTest.store.PropertySearchWellStore'),

	            grouped: true,
	            emptyText: '<div style="margin-top: 20px; text-align: center">No Matching Items</div>',
	            disableSelection: false,
	            
	            listeners: {
	 	    	   select: function(view, record) {
	 	    		   
	 	    	   }
	            },      

	            items: [
	                {
	                    xtype: 'toolbar',
	                    docked: 'top',

	                    items: [
	                        { xtype: 'spacer' },
	                        {
	                            xtype: 'searchfield',
	                            placeHolder: 'Search Well...'
	                        },
	                        { xtype: 'spacer' }
	                    ]
	                }
	            ]
            }
	        ]
		}]
	}
});