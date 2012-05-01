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
	           'Ext.List',
	           'LDBTest.model.JsonServicesConstants'
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
			items: [
		    {
			    xtype: 'selectfield',
			    name: 'prodPoint',
			    id: 'prodPoint',
			    label: 'Production Point',
			    placeHolder: 'Select Production Point..',
			    displayField: 'DisplayName',
			    valueField: 'Name',
			    options: [
			                {DisplayName: 'Well Completion',      Name: 'WellCompletion'},
			                {DisplayName: 'Unit Lease',           Name: 'SupplyPoint'}
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