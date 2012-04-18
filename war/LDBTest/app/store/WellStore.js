Ext.define("LDBTest.store.WellStore", { 
    extend: "Ext.data.JsonStore",
    alias: 'store.WellStore',
    config: {
        id: 'WellStore',
        idProperty: 'ProductionPointWellName',
        fields: [{
            name: 'ProductionPointWellName',
            type: 'String'
        }, {
            name: 'PropertyID',
            type: 'String'
        }],
        //sort the store using the lastname field
        //sorters: 'ProductionPointWellName',

        //group the store using the lastName field
        groupField: 'ProductionPointWellName',
        
        proxy: {
            type: 'ajax',
            url : 'app/data/Wells.json',
            reader: {
                type: 'json',
                rootProperty: 'items'
            }
        },
        autoLoad: true
    }
});
