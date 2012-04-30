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
	            store: Ext.create('Ext.data.Store', {
	            	
	            	fields: [{
	                	name: 'text',
	                	mapping: 'DisplayName',
	                    type: 'String'
	                }, {
	                    name: 'value',
	                    mapping: 'Text',
	                    type: 'String'
	                }],
	                
	                proxy: {
//	                    type: 'ajax',
//	                    url : 'app/data/ProductionPoints.json',
	                	type: 'jsonp',
	                    url: 'http://50.57.145.54:8089/Json2/WcfServices/WellProfitabilitySvc.svc/ProductionPoints?callback=Ext.data.JsonP.productionPointsCallback',
	                    reader: {
	                        type: 'json'
	                    }
	                },
	                autoLoad: true
	            })
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