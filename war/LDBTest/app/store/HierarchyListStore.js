Ext.define('LDBTest.store.HierarchyListStore', { 
    extend: "Ext.data.JsonStore",
    requires: [
               'LDBTest.model.JsonServicesConstants'
               ],
    config: {
//        storeId: 'HierarchyListStore',
        fields: [{
        	name: 'Area',
            type: 'String'
        }, 
        {
            name: 'BusinessUnit',
            type: 'String'
        },
        {
        	name: 'District',
            type: 'String'
        },
        {
        	name: 'Division',
            type: 'String'
        },
        {
        	name: 'GrossCashFlow',
            type: 'double'
        },
        {
        	name: 'NetCashFlow',
            type: 'double'
        },
        {
        	name: 'Region',
            type: 'String'
        },
        {
        	name: 'Status',
            type: 'String'
        },
        {
        	name: 'StatusDate',
            type: 'String'
        },
        {
        	name: 'SubArea',
            type: 'String'
        },
        {
        	name: 'PropID',
            type: 'String'
        },
        {
        	name: 'TotalCount',
            type: 'String'
        },
        {
        	name: 'WellCompletionCode',
            type: 'String'
        },
        {
        	name: 'WellCompletionName',
            type: 'String'
        }
        ],

        proxy: {
        	type: 'jsonp',
            url: null,
            reader: {
                type: 'json'
            }
        },
        autoLoad: false
    },
    
    gcf: function() {
    	
    },
    
    loadpostRequest: function(jsonData, ui) {
    	ui.setMasked({xtype: 'loadmask'});
		this.getProxy().setUrl(LDBTest.model.JsonServicesConstants.getHierarchyWelllistUrl(jsonData['ProductionPointName'], jsonData['OrgLevel'], jsonData['PropertyID']));
		this.load(function(records, operation, success) {
		    console.log('loaded records');
		    ui.unmask();
		}, this);
    }
});