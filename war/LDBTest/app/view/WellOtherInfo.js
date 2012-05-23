Ext.define('LDBTest.view.WellOtherInfo', {
    extend: 'LDBTest.view.WellInfo',
    xtype: 'wellotherinfo',
    
    getProxyUrl: function() {
    	return LDBTest.model.JsonServicesConstants.getPropertyWellInfo('other');
    }
});