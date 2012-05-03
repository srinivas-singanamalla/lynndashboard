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
        	name: 'SupplyPointID',
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

        /*proxy: {
            type: 'ajax',
            url: '../linnproxy',
            jsonData: {"FilterType":0,"NumWells":15,"OrgLevel":"Division","ProductionPointName":"WellCompletion","PropertyID":"1317094","TopOrBottomCount":"Top"},
            
            reader: {
                type: 'json'
            }
        },*/
        autoLoad: false
    },
    
    loadpostRequest: function(thejsondata, ui) {
    	ui.setMasked({xtype: 'loadmask'})
    	Ext.Ajax.request({
    	    url: '../linnproxy',
    	    jsonData: Ext.JSON.encode(thejsondata),
    	    method: 'POST',
    	    scope: this,
    	    success: function(response){
    	        var text = response.responseText;
//    	        this.setData(eval('(' + text + ')'));
    	        this.setData(Ext.JSON.decode(text));
    	        ui.unmask();
    	    }
    	});
    }
});