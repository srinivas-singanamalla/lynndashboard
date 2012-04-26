Ext.define('LDBTest.view.DashboardSummary', {
    extend: 'Ext.Container',
    xtype: 'dashboardsummary',
    requires: [
               'LDBTest.view.ProductionAnalysisChart',
               'LDBTest.view.DBStackedBarChart',
               'LDBTest.view.PseudoOrgChart',
               'LDBTest.view.ShortPropertyInfo'
               ],
    config: {
    	title: 'Summary',
        iconCls: 'action',
        layout: {
            type : 'vbox',
//            pack : 'center',
//            align: 'stretch'
        },
//        cls   : 'card1',
        defaults: {
            xtype: 'container',
            flex : 1,
            layout: {
                type : 'hbox',
//                align: 'middle'
            },
            defaults: {
                xtype : 'panel',
                flex  : 1,
                margin: 10
            }
        },
        items: [
            {
                items: [
                    {xtype: 'productionanalysischart'},
                    {xtype: 'porgchart'}
                ]
            },
            {
            	items: [
                        {xtype: 'dbstackedbarchart'},
            	        {xtype: 'shortpropertyinfo'}
                    ]
            }
        ]
    }
});
