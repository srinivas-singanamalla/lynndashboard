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
	
	constructor: function(config) {
		debugger;
        this.initConfig(config);  // We need to initialize the config options when the class is instantiated
        var today = new Date(),
        monthDate = new Date(today.getFullYear(), today.getMonth()),
		milliseconds = monthDate.getTime();
		
		this.setEndTime(milliseconds);
		this.setStartTime(milliseconds - 31536000000);
    },
	
	getStartTimeInSecs: function() {
		return LDBTest.model.DBSingleton.getStartTime()/1000;
	},
	
	getEndTimeInSecs: function() {
		return LDBTest.model.DBSingleton.getEndTime()/1000;
	},
	
	convertToFmtDate: function(val) {
		var mts = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
		var yrs = [2012, 2011, 2010];
		
		var arr = LDBTest.model.DBSingleton.toMonthYear(val);
		return mts[arr[0]] + ', ' + yrs[arr[1]];
	},
	
	toMonthYear: function(val) {
		var mts = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
		var yrs = [2012, 2011, 2010];
		var sm = 5, sy = 0, counter = 12; 
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
		var vals = Ext.getCmp('timesliderfield') ? Ext.getCmp('timesliderfield').getValue() : [0, 12];
		var time = '<span style="color:red;"> (' + LDBTest.model.DBSingleton.convertToFmtDate(vals[0]) + ' - ' + LDBTest.model.DBSingleton.convertToFmtDate(vals[1]) + ') </span>';
		return time;
	}
});