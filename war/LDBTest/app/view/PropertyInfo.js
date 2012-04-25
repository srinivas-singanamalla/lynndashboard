/**
 * Demonstrates a tabbed form panel. This uses a tab panel with 3 tabs - Basic, Sliders and Toolbars - each of which is
 * defined below.
 *
 * See this in action at http://dev.sencha.com/deploy/sencha-touch-2-b3/examples/kitchensink/index.html#demo/forms
 */
Ext.define('LDBTest.view.PropertyInfo', {
    extend: 'Ext.form.Panel',
    xtype: 'propertyinfo',
    requires: [
        'Ext.form.Panel',
        'Ext.form.FieldSet',
        'Ext.field.Number',
        'Ext.field.Spinner',
        'Ext.field.Password',
        'Ext.field.Email',
        'Ext.field.Url',
        'Ext.field.DatePicker',
        'Ext.field.Select',
        'Ext.field.Hidden',
        'Ext.field.Radio',
        'Ext.field.Slider',
        'Ext.field.Toggle',
        'Ext.field.Search'
    ],

    config: {
    	/*
        activeItem: 0,
        tabBar: {
            // docked: 'bottom',
            ui: 'neutral',
            layout: {
                pack: 'center'
            }
        },*/
    	
    	title: 'Property Info',
    	iconCls: 'action',
    	cls: 'chartpanel',
    	
                items: [
                        
					{
					    xtype: 'fieldset',
					    title: 'Well Identification',
					    defaults: {
					        labelWidth: '35%'
					    },
					    items: [
							{
							    xtype         : 'textfield',
							    name          : 'api',
							    label         : 'API',
							    placeHolder   : '232321313131313131321',
							    autoCapitalize: true,
//							    clearIcon     : true
							},  
							{
							    xtype         : 'textfield',
							    name          : 'code',
							    label         : 'Code',
							    placeHolder   : '31231231312321.01',
							    autoCapitalize: true,
							},  
							{
							    xtype         : 'textfield',
							    name          : 'unitLease',
							    label         : 'Unit Lease',
							    placeHolder   : 'Lease 5467',
							    autoCapitalize: true,
							}   
					    ]
					    
					},
					
					{
					    xtype: 'fieldset',
					    title: 'Location',
					    defaults: {
					        labelWidth: '35%'
					    },
					    items: [
							{
							    xtype         : 'textfield',
							    name          : 'county',
							    label         : 'County',
							    placeHolder   : 'Fairfax',
							    autoCapitalize: true,
							},  
							{
							    xtype         : 'textfield',
							    name          : 'state',
							    label         : 'State',
							    placeHolder   : 'CA',
							    autoCapitalize: true,
							},  
							{
							    xtype         : 'textfield',
							    name          : 'section',
							    label         : 'Section',
							    placeHolder   : 'Section 420',
							    autoCapitalize: true,
							},
							{
							    xtype         : 'textfield',
							    name          : 'township',
							    label         : 'Township',
							    placeHolder   : 'Vienna',
							    autoCapitalize: true,
							},
							{
							    xtype         : 'textfield',
							    name          : 'range',
							    label         : 'Range',
							    placeHolder   : '345 - 670',
							    autoCapitalize: true,
							},
							{
							    xtype         : 'textfield',
							    name          : 'subarea',
							    label         : 'SubArea',
							    placeHolder   : 'TV Area',
							    autoCapitalize: true,
							},
							{
							    xtype         : 'textfield',
							    name          : 'area',
							    label         : 'Area',
							    placeHolder   : 'Northeast',
							    autoCapitalize: true,
							},
							{
							    xtype         : 'textfield',
							    name          : 'district',
							    label         : 'District',
							    placeHolder   : 'District of Columbia',
							    autoCapitalize: true,
							},
							{
							    xtype         : 'textfield',
							    name          : 'businessUnit',
							    label         : 'Business Unit',
							    placeHolder   : '5675',
							    autoCapitalize: true,
							}
					    ]
					    
					},
					
					{
					    xtype: 'fieldset',
					    title: 'Other Well Info',
					    defaults: {
					        labelWidth: '35%'
					    },
					    items: [
							{
							    xtype         : 'textfield',
							    name          : 'nri',
							    label         : 'NRI',
							    placeHolder   : '100%',
							    autoCapitalize: true,
							},  
							{
								xtype: 'datepickerfield',
                                destroyPickerOnHide: true,
                                name : 'spudDate',
                                label: 'Spud Date',
                                value: new Date(),
                                picker: {
                                    yearFrom: 1990
                                }
							},  
							{
							    xtype         : 'textfield',
							    name          : 'totalDepth',
							    label         : 'Total Depth',
							    placeHolder   : '8909',
							    autoCapitalize: true,
							}   
					    ]
					    
					}
                ]
    }
});
