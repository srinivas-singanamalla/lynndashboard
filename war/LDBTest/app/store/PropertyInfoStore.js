Ext.define("LDBTest.store.PropertyInfoStore", { 
    extend: "Ext.data.Store",
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
                 {name:'Label',mapping:'Label', type: 'String'},
                 {name:'Group', type: 'String'}
             ],
        
        autoLoad: false,
        
        grouper: {
            groupFn: function(record) {
            	var x = record.get('Group');
                return x;
            },
            sortProperty: 'Label'
        }
    }
});
