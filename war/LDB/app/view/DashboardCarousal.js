Ext.define("LDB.view.DashboardCarousal", {
    extend: 'Ext.carousel.Carousel',
    requires: ['Ext.data.JsonStore', 'Ext.TitleBar', 'LDB.view.Dashboard', 'Ext.carousel.Carousel',
               'Ext.chart.Panel', 'LDB.view.DBAreaChart', 'LDB.view.PseudoOrgChart', 'LDB.view.DBBarChart', 'LDB.view.DBLineChart'],
    xtype: 'dbcarousel',
    
    config: {
    	defaults: {
            styleHtmlContent: true
        },

        items: [
            {
                xtype: 'dbareachart'
            },
            {
                xtype: 'porgchart'
            },
            {
                xtype: 'dbbarchart'	
            },
            {
            	xtype: 'dblinechart'
            }
        ]
    }//config
});