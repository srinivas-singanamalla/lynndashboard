Ext.define('LDBTest.model.DBSingleton', {
	extend: 'Ext.util.Observable',
	singleton: true,
	config: {
		startTime: 1214835200,
		endTime: 1317340800,
		// for hierarchy search push
		wellrecord: null,
		searchType: 'hierarchy',
		prodPoint: null,
		propertyID: null
		
	}
});