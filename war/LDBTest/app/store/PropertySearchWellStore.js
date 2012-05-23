Ext.define("LDBTest.store.PropertySearchWellStore", { 
    extend: "Ext.data.JsonStore",
    requires: [
               'LDBTest.model.JsonServicesConstants'
               ],
    config: {
        storeId: 'PropertySearchWellStore',
        fields: [{
        	name: 'WellCompletionName',
        	mapping: 'Name',
            type: 'String'
        }, {
            name: 'value',
            mapping: 'PropID',
            type: 'String'
        }],

        //group the store using the lastName field
        groupField: 'random',
        /*
        filters: [
                  {
                      property: 'name',
                      value   : /^.*?Moo.*$/i
                  }
              ],
          */    
        proxy: {
        	type: 'jsonp',
            url: LDBTest.model.JsonServicesConstants.getPropertyWelllistUrl('WellCompletion', ''),
            reader: {
                type: 'json'
            }
        },
        
        autoLoad: true
    }
});
