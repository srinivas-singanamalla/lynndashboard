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
	},
	
	convertToFmtDate: function(val) {
		var mts = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
		var yrs = [2011, 2010, 2009];
		
		var arr = LDBTest.model.DBSingleton.toMonthYear(val);
		return mts[arr[0]] + ', ' + yrs[arr[1]];
	},
	
	toMonthYear: function(val) {
		var mts = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
		var yrs = [2011, 2010, 2009];
		var sm = 8, sy = 0, counter = 24; 
		for (var yi = 0; yi < yrs.length; yi++) {
			for (var mi = (yi == 0 ? sm : 11); mi >= 0; mi--) {
				if (counter == val) {
					return [mi, yi];
				}
				counter--;
			}
		}
		return [-1, -1];
	},
	
	getTimeRange: function() {
		var vals = Ext.getCmp('timesliderfield') ? Ext.getCmp('timesliderfield').getValue() : [0, 24];
		var time = '<span style="color:red;"> (' + LDBTest.model.DBSingleton.convertToFmtDate(vals[0]) + ' - ' + LDBTest.model.DBSingleton.convertToFmtDate(vals[1]) + ') </span>';
		return time;
	}
});