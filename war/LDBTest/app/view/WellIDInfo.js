Ext.define('LDBTest.view.WellIDInfo', {
    extend: 'LDBTest.view.WellInfo',
    xtype: 'wellidinfo',
    
    getProxyUrl: function() {
    	return LDBTest.model.JsonServicesConstants.getPropertyWellInfo('id');
    }
});