Ext.define("LDBTest.store.PropertyInfoStore", { 
    extend: "Ext.data.ArrayStore",
    requires: [
               'LDBTest.model.JsonServicesConstants'
               ],
         
    config: {
        proxy: {
        	type: 'jsonp',
            url: LDBTest.model.JsonServicesConstants.getPropertyWellInfo(),
            reader: {
                type: 'json'
            }
        },
        
        fields: [
                 {name:'Value',mapping:'Value', type: 'String'},
                 {name:'Label',mapping:'Label', type: 'String'}
             ],
        
        autoLoad: false
    }
});
