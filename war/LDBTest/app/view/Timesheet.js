Ext.define('LDBTest.view.Timesheet', {
	extend: 'Ext.ActionSheet',
	xtype: 'timesheet',
	requires: [
	           'Ext.field.Slider',
	           'Ext.Button'
	           ],
	config: {
		items: [
                
				{
				    xtype: 'toolbar',
				    docked: 'top',
				    // Insert some buttons and space them out
				    items: [ 
							{
								xtype: 'button',
							    text: 'Cancel'
							},
							{
								xtype: 'spacer'
							},
							{
								xtype: 'button',
							    text: 'Reset'
							},
							{
								xtype: 'spacer'
							},
							{
								xtype: 'button',
							    text: 'Done',
							    ui: 'decline'
							}
							
				            ]
				            
				},
				{
                    xtype: 'sliderfield',
                    name: 'multiple_slider',
                    values: [40, 90]
                },
                {
                    xtype: 'container',
                    layout: 'hbox',
                    padding: '20 0 20 0',
                    items: [
                            {
                                html: '<b>Start Time:</b>',
                                style: 'color: white;',
//                                flex: 1
                            },
                            {
                            	xtype: 'spacer'
                            },
                            {
                                html: '<b>End Time:</b>',
                                style: 'color: white;'
//                                flex: 1
                            }
                        ]
                }
                ]
	}           
});