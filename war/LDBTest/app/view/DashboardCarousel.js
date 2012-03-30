Ext.define("LDBTest.view.DashboardCarousel", {
    extend: 'Ext.carousel.Carousel',
    xtype: 'dbcarousel',
    requires: ['LDBTest.view.PseudoOrgChart', 'LDBTest.view.DBAreaChart', 'LDBTest.view.DBLineChart', 'LDBTest.view.DBBarChart', 
               'LDBTest.view.DBStackedBarChart', 'LDBTest.view.EnergyLineChart', 'LDBTest.view.DBStackedBarChart2'],
    
    config: {
    	defaults: {
//            styleHtmlContent: true
//    		margin: '50 100 100 150'
        },

        items: [
            {
                xtype: 'porgchart'
            },
            /*{
                xtype: 'dbbarchart'
            },
            {
                xtype: 'dblinechart'	
            },*/	
            {
                xtype: 'dbstackedbarchart'	
            },
            {
            	xtype: 'dbstackedbarchart2'
            },
            {
            	xtype: 'forms'
            }
        ]
    }//config
});