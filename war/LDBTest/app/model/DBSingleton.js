Ext.define('LDBTest.model.DBSingleton', {
	extend: 'Ext.util.Observable',
	singleton: true,
	config: {
		startTime: 1251777600000,
		endTime: 1314849600000,
		// for hierarchy search push
		wellrecord: null,
		searchType: 'hierarchy',
		prodPoint: null,
		propertyID: null
		
	},
	
	getStartTimeInSecs: function() {
		return LDBTest.model.DBSingleton.getStartTime()/1000;
	},
	
	getEndTimeInSecs: function() {
		return LDBTest.model.DBSingleton.getEndTime()/1000;
	}
});