Ext.define("LDBTest.view.HierarchySearch", {
	extend : 'Ext.Container',
	xtype : 'hierarchysearch',
	
	requires: [
	           'Ext.field.Select',
	           'Ext.form.FieldSet'
	           ],
	           
	config: {
		autoSize: true,
		
		title : 'Hierarchy Search',
		
        items: [
        
		{
		    xtype: 'toolbar',
		    docked: 'top',
		    items: (Ext.os.deviceType === 'Phone') ? [
		        { xtype: 'searchfield', flex: 1 }
		    ] : [
		        {
		            xtype: 'selectfield',
		            name: 'gender',
		            id: 'gender',
		            placeHolder: 'Select Gender..',
		            displayField: 'text',
		            valueField: 'value'/*,
		            //do this, when u have placeHolder and that should work
		            
		            options: [
		                {text: 'Both', value: 'both'},
		                {text: 'Male', value: 'male'},
		                {text: 'Female', value: 'female'}
		            ]*/
		        },
		        {
		            xtype: 'selectfield',
		            name: 'sector',
		            prependText: 'Sector:',
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
		        // { xtype: 'spacer' },
		        {
		            xtype: 'selectfield',
		            name: 'sort_by',
		            prependText: 'Sort by:',
		            options: [
		                {text: 'Newest',           value: 'newest'},
		                {text: 'Oldest',           value: 'oldest'},
		                {text: 'Expiring',         value: 'expiration'},
		                {text: 'Amount Remaining', value: 'amount_remaining'},
		                {text: 'Popularity',       value: 'popularity'},
		                {text: 'Loan Amount',      value: 'loan_amount'}
		            ]
		        },
		
		        {xtype: 'spacer'},
		
		        { 
		        	xtype: 'searchfield',
	                placeHolder: 'Search Well...',
	                name: 'searchwell'
		        }
		    ]
		}
        ]
	},
	/*
	init: function() {
		this.callParent();
		Ext.getCmp('gender').setOptions(
				[   {text: 'First Option',  value: 'first'},
				    {text: 'Second Option', value: 'second'},
				    {text: 'Third Option',  value: 'third'}
				]);
	}*/
});