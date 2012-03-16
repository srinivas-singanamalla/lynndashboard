Ext.define("LDB.view.Main", {
    extend: 'Ext.tab.Panel',
    requires: ['Ext.data.JsonStore', 'Ext.TitleBar', 'LDB.view.Dashboard', 'Ext.chart.Panel', 'LDB.view.DBAreaChart', 'LDB.view.PseudoOrgChart'],
    
    config: {
        tabBarPosition: 'bottom',
        
        items: [
            {
            	title: 'Dashboard',
        		iconCls:'home',
            	xtype: 'panel',
            	layout: 'hbox',
                items: [{
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Welcome to Sencha Touch 2'
                }, {
                	xtype: 'dbareachart',
                	flex: 1
                },
                {
                	xtype: 'porgchart',
                	flex: 2
                }
                ]
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