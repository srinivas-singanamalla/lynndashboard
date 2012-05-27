Ext.define('LDBTest.model.DBSingleton', {
	extend: 'Ext.util.Observable',
	singleton: true,
	config: {
		startTime: 1251777600000,
		endTime: 1314849600000,
		profitType: 1,
		volumeType: 1,
		// for hierarchy search push
		wellrecord: null,
		searchType: 'hierarchy',
		prodPoint: null,
		propertyID: null,
		defaultTimeRange: [0, 11]
	},
	
	constructor: function(config) {
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
	
	convertToFmtDate: function(val, end) {
		var mts = LDBTest.model.DBSingleton.months(),
		yrs = LDBTest.model.DBSingleton.years(),
		arr = LDBTest.model.DBSingleton.toMonthYear(val),
		day = 1;
		
		if (end) {
			var date = new Date(yrs[arr[1]], arr[0]);
			day = Ext.Date.getDaysInMonth(date);
		}
		
		return day + ' ' + mts[arr[0]] + ' ' + yrs[arr[1]];
	},
	
	toMonthYear: function(val) {
		var mts = LDBTest.model.DBSingleton.months();
		var yrs = LDBTest.model.DBSingleton.years();
		var sm = 4, sy = 0, counter = 11; 
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
	
	months: function() {
		return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	},
	
	years: function() {
		var today = new Date(),
        curryear = today.getFullYear();
		return [curryear, curryear - 1, curryear- 2, curryear - 3];
	},
	
	getTimeRange: function() {
		var vals = Ext.getCmp('timesliderfield') ? Ext.getCmp('timesliderfield').getValue() : this.getDefaultTimeRange();
		var time = '<span style="color:red;"> (' + LDBTest.model.DBSingleton.convertToFmtDate(vals[0]) + ' - ' + LDBTest.model.DBSingleton.convertToFmtDate(vals[1], true) + ') </span>';
		return time;
	},
	
	netOrGrossType: function() {
		switch (this.getProfitType()) {
		case 1:
			return 'Net';
		case 2:
		default:
			return 'Gross';
		}
    },
    
    getVolumeRateType: function() {
    	switch (this.getVolumeType()) {
		case 1:
			return 'MCFe';
		case 2:	
		default:
			return 'BOe';
			break;
		}
    }
});