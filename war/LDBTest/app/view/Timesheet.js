Ext.define('LDBTest.view.Timesheet', {
	extend: 'Ext.ActionSheet',
	xtype: 'timesheet',
	requires: [
	           'Ext.field.Slider',
	           'Ext.Button'
	           ],
	config: {
		startVal: LDBTest.model.DBSingleton.getDefaultTimeRange()[0],
		endVal: LDBTest.model.DBSingleton.getDefaultTimeRange()[1],
		items: [
                
				{
				    xtype: 'toolbar',
				    docked: 'top',
				    // Insert some buttons and space them out
				    items: [ 
							{
								xtype: 'button',
							    text: 'Cancel',
							    ui: 'confirm',
							    id: 'timesheetcancel'
							},
							{
								xtype: 'spacer'
							},
							{
								xtype: 'button',
							    text: 'Reset',
							    id: 'timesheetreset'
							},
							{
								xtype: 'spacer'
							},
							{
								xtype: 'button',
							    text: 'Done',
							    ui: 'decline',
							    id: 'timesheetdone'
							}
							
				            ]
				            
				},
				{
                    xtype: 'sliderfield',
                    id: 'timesliderfield',
                    name: 'multiple_slider',
                    values: LDBTest.model.DBSingleton.getDefaultTimeRange(),
                    minValue: LDBTest.model.DBSingleton.getDefaultTimeRange()[0],
                    maxValue: LDBTest.model.DBSingleton.getDefaultTimeRange()[1]
//                    increment: 86 
                },
                {
                    xtype: 'container',
                    layout: 'hbox',
                    id: 'timefieldcontainer',
                    padding: '20 0 20 0',
                    items: [
                            {
                                html: '<b>Start Time:</b>',
                                style: 'color: white;',
                                xtype: 'label',
                                id: 'startTimeLabel'
//                                flex: 1
                            },
                            {
                            	xtype: 'spacer'
                            },
                            {
                                html: '<b>End Time:</b>',
                                style: 'color: white;',
                                xtype: 'label',
                                id: 'endTimeLabel'
//                                flex: 1
                            }
                        ]
                }
                ]
	},
	
	initialize: function() {
		this.callParent();
		Ext.getCmp('timesliderfield').getComponent().on({
	        drag: this.onDrag,
	        dragend: this.onDragend,
	        scope: this
	    });
		
		Ext.getCmp('timesheetcancel').on({
			tap: this.onCancelTap,
			scope: this
		});
		
		Ext.getCmp('timesheetreset').on({
			tap: this.onResetTap,
			scope: this
		});
		
		Ext.getCmp('timesheetdone').on({
			tap: this.onDoneTap,
			scope: this
		});
		this.onResetTap();
	},
	
	
	
	setUIValue: function(values) {
		Ext.getCmp('startTimeLabel').setHtml('<b>Start Time:</b>  ' + '<span style="color:red;">' + LDBTest.model.DBSingleton.convertToFmtDate(values[0]) + '</span>');
        Ext.getCmp('endTimeLabel').setHtml('<b>End Time:</b>  ' + '<span style="color:red;">' + LDBTest.model.DBSingleton.convertToFmtDate(values[1], true) + '</span>');
	},
	
	onCancelTap: function() {
		this.hide();
	},
	
	onResetTap: function() {
		Ext.getCmp('timesliderfield').reset();
		this.setUIValue(LDBTest.model.DBSingleton.getDefaultTimeRange());
	},
	
	onDoneTap: function() {
		var mts = LDBTest.model.DBSingleton.months();
		var yrs = LDBTest.model.DBSingleton.years();
		var singleton = LDBTest.model.DBSingleton,
		vals = Ext.getCmp('timesliderfield').getValue(),
		stmtyear = LDBTest.model.DBSingleton.toMonthYear(vals[0]),
		endmtyear = LDBTest.model.DBSingleton.toMonthYear(vals[1]),
		startDate = new Date(yrs[stmtyear[1]], stmtyear[0], 1),
		endDate = new Date(yrs[endmtyear[1]], endmtyear[0], 1);
		singleton.setStartTime(startDate.getTime()),
    	singleton.setEndTime(endDate.getTime());
		console.log(startDate.getTime());
		console.log(endDate.getTime());
		var carousel = Ext.ComponentQuery.query('dbcarousel')[0];
		carousel.getActiveItem().getAt(0).reloadIfDirty();
		carousel.setBarTitle(true);
		this.hide();
	},
	
	toDateInMillisecs: function(mth, year) {
		var dte = new Date(year, mth);
	},
	
	onDrag: function(sliderfield, slider, thumb, value, evtObj, eOpts) {
        console.log(thumb);
        this.setUIValue(thumb);
    },
    
    onDragend: function(sliderfield, slider, thumb, value, evtObj, eOpts) {
        console.log('dragend ' + value + thumb);
    }
});