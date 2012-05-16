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
			timesheet: 'timesheet'
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