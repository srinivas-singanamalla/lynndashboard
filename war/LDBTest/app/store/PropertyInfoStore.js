Ext.define("LDBTest.store.PropertyInfoStore", { 
    extend: "Ext.data.JsonStore",
    requires: [
               'LDBTest.model.JsonServicesConstants'
               ],
    config: {
        storeId: 'PropertyInfoStore',
        fields: [{
        	name: 'name',
        	mapping: 'ProductionPointWellName',
            type: 'String'
        }, {
            name: 'value',
            mapping: 'PropertyID',
            type: 'String'
        }],

        groupField: 'random',
        proxy: {
        	type: 'jsonp',
            url: LDBTest.model.JsonServicesConstants.getPropertyWelllistUrl('WellCompletion', 'A'),
            reader: {
                type: 'json'
            }
        },
        
        autoLoad: true
    }
});
