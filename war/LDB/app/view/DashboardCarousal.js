Ext.define("LDB.view.DashboardCarousal", {
    extend: 'Ext.carousel.Carousel',
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