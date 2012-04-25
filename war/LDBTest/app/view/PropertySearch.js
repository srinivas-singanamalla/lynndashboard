Ext.define("LDBTest.view.PropertySearch", {
	extend : 'Ext.Container',
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
			title: 'Property Search',
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
	        	xtype: 'searchfield',
	        	label: 'Well Completion Name',
                placeHolder: 'Search Well...',
                name: 'searchwell'
	        }
	        ]
		},
		{
			xtype: 'button',
			margin: 10,
			ui: 'decline-round',
			text: 'Submit'
		}
		]
	}
});