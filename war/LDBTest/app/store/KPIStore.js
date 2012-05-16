Ext.define('LDBTest.store.KPIStore', {
	extend: 'Ext.data.JsonStore',
	requires: [
	           'LDBTest.model.KPI'
	           ],
	           
	config: {
		
		model: 'LDBTest.model.KPI',
        
        proxy: {
            type: 'jsonp',
            reader: {
                type: 'json'
            }
        },
        autoLoad: false
	}
});