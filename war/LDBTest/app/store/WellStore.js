Ext.define("LDBTest.store.WellStore", { 
    extend: "Ext.data.JsonStore",
    alias: 'store.WellStore',
    config: {
        storeId: 'WellStore',
//        idProperty: 'ProductionPointWellName',
        fields: [{
        	name: 'name',
        	mapping: 'ProductionPointWellName',
            type: 'String'
        }, {
            name: 'value',
            mapping: 'PropertyID',
            type: 'String'
        }],
        //sort the store using the lastname field
        //sorters: 'ProductionPointWellName',

        //group the store using the lastName field
        groupField: 'ProductionPointWellName',
        
        filters: [
                  {
                      property: 'ProductionPointWellName',
                      value   : /Ed/
                  }
              ],
              
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
