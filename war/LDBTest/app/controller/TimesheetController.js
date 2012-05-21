Ext.define('LDBTest.controller.TimesheetController', {
	extend: 'Ext.app.Controller',
	views: [
	   'Timesheet'     
	        ],
	requires:[
	          'LDBTest.view.Timesheet'
	          ],
	config: {
		refs: {
			timesheet: 'timesheet',
			timeslider: '#timesliderfield'
		}
	},
	
	init: function() {
		this.control({
			'#timesheetcancel' : {
				tap: this.onCancelTap
			},
			
			'#timesheetreset' : {
				tap: this.onResetTap
			},
			
			'#timesheetdone': {
				tap: this.onDoneTap
			},
			
			'sliderfield': {
				//dragend: this.onSliderDragEnd,
				//drag: this.onSliderDrag,
				change: this.onSliderDragStart
			}
		});
		
	},
	
	onCancelTap: function() {
		this.getTimesheet().hide();
	},
	
	onResetTap: function() {
		this.getTimesheet().hide();
	},
	
	onDoneTap: function() {
		this.getTimesheet().hide();
	}
});