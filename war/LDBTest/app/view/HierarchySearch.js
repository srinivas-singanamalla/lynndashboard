Ext.define("LDBTest.view.HierarchySearch", {
	extend : 'Ext.Container',
	xtype : 'hierarchysearch',
	
	requires: [
	           'Ext.field.Select',
	           'Ext.form.FieldSet',
	           'LDBTest.model.JsonServicesConstants'
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
				    name: 'prodPoint',
				    id: 'prodPoint',
				    placeHolder: 'Select Production Point..',
				    displayField: 'DisplayName',
		            valueField: 'Name',
				    options: [
				                {DisplayName: 'Well Completion',      Name: 'WellCompletion'},
				                {DisplayName: 'Unit Lease',           Name: 'SupplyPoint'}
				            ]
				}, 
		        {
		            xtype: 'selectfield',
		            name: 'orgType',
		            id: 'orgType',
		            placeHolder: 'Select Organization Type..',
		            displayField: 'DisplayName',
		            valueField: 'Name',
		            options: [
		                      {DisplayName:"Division",Name:"Division"},
		                      {DisplayName:"Business Unit",Name:"BusinessUnit"},
		                      {DisplayName:"District",Name:"District"},
		                      {DisplayName:"Area",Name:"Area"},
		                      {DisplayName:"SubArea",Name:"SubArea"}
		                      ]
		        },
		        {
		            xtype: 'selectfield',
		            name: 'orgName',
		            id: 'orgName',
		            placeHolder: 'Select Organization Name..',
		            displayField: 'PropName',
		            valueField: 'PropName',
		            store: Ext.create('Ext.data.Store', {
		            	
		            	fields: [{
		                	name: 'PropName',
		                    type: 'String'
		                }, {
		                    name: 'PropName',
		                    type: 'String'
		                }],
		                
		                proxy: {
		                	type: 'jsonp',
		                	url: LDBTest.model.JsonServicesConstants.getOrgNamesUrl('BusinessUnit', 'WellCompletion'),
		                    reader: {
		                        type: 'json'
		                    }
		                },
		                autoLoad: true
		            })
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
	}
});