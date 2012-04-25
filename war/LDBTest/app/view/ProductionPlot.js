Ext.define('LDBTest.view.ProductionPlot', {
	extend: 'Ext.Container',
	xtype: 'productionplot',
	requires: [
	           'LDBTest.view.ProductionAnalysisChart'
	           ],
	           
	config: {
		title: 'ProductionPlot',
        iconCls: 'action',
        
        items: [
            {
                docked: 'top',
                xtype: 'titlebar',
                title: 'ProductionPlot'
            },
            {
            	xtype: 'productionanalysischart'
            }
        ]
	}           
});