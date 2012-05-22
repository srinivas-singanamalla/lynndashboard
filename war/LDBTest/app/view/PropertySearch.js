Ext.define("LDBTest.view.PropertySearch", {
	extend : 'Ext.Container',
	xtype : 'propertysearch',
	
	requires: [
	           'Ext.field.Select',
	           'Ext.field.Search',
	           'Ext.Toolbar',
	           'LDBTest.view.PropertyWellList'
	           ],
	           
	config: {
		autoSize: true,
		
		layout: 'fit',
		
		title : 'Property Search',
		
        items: [
        
		{
		    xtype: 'toolbar',
		    docked: 'top',
		    height: 70,
		    items: [
				{
			    xtype: 'selectfield',
			    name: 'prodPoint',
			    id: 'pprodPoint',
			    labelAlign: 'top',
			    label: 'Production Point:',
			    labelCls: 'selectfield-label',
			    placeHolder: 'Select Production Point..',
			    displayField: 'DisplayName',
			    valueField: 'Name',
			    options: [
			                {DisplayName: 'Well Completion',      Name: 'WellCompletion'},
			                {DisplayName: 'Unit Lease',           Name: 'UnitLease'}
			            ]
			},
			{
				xtype: 'spacer'
			},
	        {
	        	xtype: 'searchfield',
	        	width: 300,
	        	id: 'searchproperty',
                placeHolder: 'Type to see the results...',
                name: 'searchwell',
                value: ''
	        }
		    ]
		},
		{
			xtype: 'propertywelllist'
		}
        ]
	}
});