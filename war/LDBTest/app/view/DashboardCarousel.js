Ext.define("LDBTest.view.DashboardCarousel", {
    extend: 'Ext.carousel.Carousel',
    xtype: 'dbcarousel',
    requires: ['LDBTest.view.PseudoOrgChart', 'LDBTest.view.DBAreaChart', 'LDBTest.view.DBLineChart', 'LDBTest.view.DBBarChart'],
    
    config: {
    	defaults: {
//            styleHtmlContent: true
    		margin: '50 100 100 150'
        },

        items: [
            {
                xtype: 'porgchart'
            },
            {
                xtype: 'dbareachart'
            },
            {
                xtype: 'dblinechart'	
            },
            {
            	xtype: 'dbbarchart'
            }
        ]
    }//config
});