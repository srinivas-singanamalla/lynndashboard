Ext.define("LDBTest.store.PropertySearchWellStore", { 
    extend: "Ext.data.JsonStore",
    requires: [
               'LDBTest.model.JsonServicesConstants'
               ],
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

        //group the store using the lastName field
        groupField: 'random',
        
        filters: [
                  {
                      property: 'name',
                      value   : /^.*?Moo.*$/i
                  }
              ],
              
        proxy: {
//            type: 'ajax',
//            url : 'app/data/WellCompletion.json',
        	type: 'jsonp',
            url: LDBTest.model.JsonServicesConstants.getWellCompletionUrl('WellCompletion'),
            reader: {
                type: 'json'
            }
        },
        autoLoad: true
    }
});
