Ext.define("LDBTest.view.Main", {
    extend: 'Ext.tab.Panel',
    requires: ['Ext.TitleBar', 'LDBTest.view.DashboardCarousel', 'Ext.ComponentQuery'],
    
    config: {
        tabBarPosition: 'bottom',
        items: [
			{
				docked : 'top',
				xtype : 'titlebar',
				title : 'Well Profitability Dashboard1'
			},    
            {
			title : 'Dashboard',
			iconCls : 'home',
			xtype : 'dbcarousel',
			scrollable : {
				direction : 'vertical',
				directionLock : true
			}
		},
            {
                title: 'Get Started',
                iconCls: 'action',
                
                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Getting Started'
                    },
                    {
                        xtype: 'video',
                        url: 'http://av.vimeo.com/64284/137/87347327.mp4?token=1330978144_f9b698fea38cd408d52a2393240c896c',
                        posterUrl: 'http://b.vimeocdn.com/ts/261/062/261062119_640.jpg'
                    }
                ]
            }
        ]
    }
});