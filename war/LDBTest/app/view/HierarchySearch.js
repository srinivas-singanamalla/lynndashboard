Ext.define("LDBTest.view.HierarchySearch", {
	extend : 'Ext.Container',
	xtype : 'hierarchysearch',
	
	requires: [
	           'Ext.field.Select',
	           'Ext.form.FieldSet',
	           'LDBTest.model.JsonServicesConstants',
	           'LDBTest.view.HierarchySearchList'
	           ],
	           
	config: {
		autoSize: true,
		
		layout: 'fit',
		
		title : 'Hierarchy Search',
		
        items: [
        
		{
		    xtype: 'toolbar',
		    docked: 'top',
		    items: [
				{
				    xtype: 'selectfield',
				    name: 'prodPoint',
				    id: 'hprodPoint',
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
		            id: 'horgType',
		            placeHolder: 'Select Organization Type..',
		            displayField: 'DisplayName',
		            valueField: 'Name',
		            options: [
		                      {DisplayName:"",Name:""},
		                      {DisplayName:"Business Unit",Name:"BusinessUnit"},
		                      {DisplayName:"Division",Name:"Division"},
		                      {DisplayName:"District",Name:"District"},
		                      {DisplayName:"Area",Name:"Area"},
		                      {DisplayName:"SubArea",Name:"SubArea"}
		                      ]
		        },
		        {
		            xtype: 'selectfield',
		            name: 'orgName',
		            id: 'horgName',
		            placeHolder: 'Select Organization Name..',
		            displayField: 'PropName',
		            valueField: 'PropID',
		            store: Ext.create('Ext.data.Store', {
		            	
		            	fields: [{
		                	name: 'PropName',
		                    type: 'String'
		                }, {
		                    name: 'PropID',
		                    type: 'String'
		                }],
		                
		                proxy: {
		                	type: 'jsonp',
		                	url: LDBTest.model.JsonServicesConstants.getOrgNamesUrl('BusinessUnit', 'WellCompletion'),
		                    reader: {
		                        type: 'json'
		                    }
		                },
		                autoLoad: false
		            })
		        },
		
		       /* {xtype: 'spacer'},
		        {xtype: 'button', text:'Submit' handler: function(){
		        	
		        }},*/
		        {xtype: 'spacer'},
		        { 
		        	xtype: 'searchfield',
	                placeHolder: 'Search Well...',
	                name: 'searchwell'
		        }
		    ]
		},
		{
			xtype: 'hierarchysearchlist'
		}
        ]
	}
});