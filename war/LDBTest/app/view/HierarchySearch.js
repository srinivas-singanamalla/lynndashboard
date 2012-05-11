Ext.define("LDBTest.view.HierarchySearch", {
	extend : 'Ext.Container',
	xtype : 'hierarchysearch',
	
	requires: [
	           'Ext.field.Select',
	           'Ext.form.FieldSet',
	           'LDBTest.model.JsonServicesConstants',
	           'LDBTest.view.HierarchySearchList',
	           'Ext.field.Toggle'
	           ],
	           
	config: {
		autoSize: true,
		
		layout: 'fit',
		
		title : 'Hierarchy Search',
		
        items: [
        
		{
		    xtype: 'toolbar',
		    height: 70,
		    docked: 'top',
		    items: [
				{
				    xtype: 'selectfield',
				    name: 'prodPoint',
				    id: 'hprodPoint',
				    labelAlign: 'top',
				    label: 'Production Point:',
				    labelCls: 'selectfield-label',
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
		            labelAlign: 'top',
				    label: 'Org Type:',
				    labelCls: 'selectfield-label',
		            placeHolder: 'Select Organization Type..',
		            displayField: 'DisplayName',
		            valueField: 'Name',
		            options: [
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
		            labelAlign: 'top',
				    label: 'Org Name:',
				    labelCls: 'selectfield-label',
//		            placeHolder: 'Select Organization Name..',
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
		                autoLoad: true
		            })
		        },
		        {
				    xtype: 'selectfield',
				    id: 'wellPosition',
				    labelAlign: 'top',
				    label: 'Position:',
				    labelCls: 'selectfield-label',
				    placeHolder: 'Top Or Bottom..',
				    displayField: 'DisplayName',
		            valueField: 'Name',
				    options: [
				                {DisplayName: 'Top',      Name: 'Top'},
				                {DisplayName: 'Bottom',   Name: 'Bottom'}
				            ]
				}
		    ]
		},
		{
			xtype: 'hierarchysearchlist'
		}
        ]
	}
});