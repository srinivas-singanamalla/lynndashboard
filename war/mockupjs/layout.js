Ext.setup({
    tabletStartupScreen: 'tablet_startup.jpg',
    phoneStartupScreen: 'phone_startup.jpg',
    tabletIcon: 'icon-ipad.png',
    phoneIcon: 'icon-iphone.png',
    glossOnIcon: false,
    onReady: function() {
    	
    	new Ext.Container({
		    fullscreen: false,
		    renderTo: 'dockingContainer',
		    layout: 'hbox',
		    items: [
		        {
		            id: 'dockingTimeSlider',		            
		            style: 'background-color: #759E60;',
		            width: '100%',
		            height: 100
		            
		        }
		    ]
		});
    	
		new Ext.Container({
		    fullscreen: false,
		    renderTo: 'container',
		    layout: 'hbox',
		    items: [
		        {
		            id: 'orgchart',
		            style: 'background-color: #759E60;',
		            width: 450
		            
		        },
		        {
		        	id: 'linechart',
		            style: 'background-color: #5E99CC;',
		            width: 550
		        }
		    ]
		});
		
		new Ext.Container({
		    fullscreen: false,
		    renderTo: 'container2',
		    layout: 'hbox',
		    items: [
				{
				    id: 'tablechart',
				    style: 'background-color: #759E60;',
				    flex: 1
				},
				
		        {
		            id: 'barchart',
		            style: 'background-color: #759E60;',
		            flex: 1
		        }
		    ]
		});
    }
});