Ext.define("LDB.view.Dashboard", {
	extend: "Ext.Panel",
	xtype: 'dashboardpanel',
	
	config: {
		
//		styleHtmlContent: true,		
//        scrollable: true,
//		html: "test",
		id: 'test',
//        width: 300,
//        height: 150,
//        layout:'fit',
        layout: 'hbox',
        items: [
            {
                xtype: 'panel',
                html: 'message list',
                flex: 1
            },
            {
                xtype: 'panel',
                html: 'message preview',
                flex: 2
            }
        ]
        
        
        
        
	}
});



