Ext.define("LDBTest.store.PropertySearchWellStore", { 
    extend: "Ext.data.JsonStore",
    config: {
        storeId: 'PropertySearchWellStore',
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
        groupField: 'random',
        
        filters: [
                  {
                      property: 'name',
                      value   : /^.*?Moo.*$/i
                  }
              ],
              
        proxy: {
            type: 'ajax',
            url : 'app/data/WellCompletion.json',
//        	type: 'jsonp',
//            url: 'http://50.57.145.54:8089/Json1/WcfServices/WellProfitabilitySvc.svc/ProdPointWells/WellCompletion',
            reader: {
                type: 'json'
            }
        },
        autoLoad: true
    }
});
