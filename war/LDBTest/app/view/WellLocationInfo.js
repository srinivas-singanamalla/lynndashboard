Ext.define('LDBTest.view.WellLocationInfo', {
    extend: 'LDBTest.view.WellInfo',
    xtype: 'welllocationinfo',
    
    getProxyUrl: function() {
    	return LDBTest.model.JsonServicesConstants.getPropertyWellInfo('loc');
    }
});
