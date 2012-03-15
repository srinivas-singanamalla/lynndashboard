Ext.create('Ext.slider.Multi', {
        renderTo: 'dockingTimeSlider',
        hideLabel: true,
        width: 214,
        minValue: 0,
        maxValue: 100,
        values: [10, 50, 90]
    });

Ext.setup({
    tabletStartupScreen: 'tablet_startup.jpg',
    phoneStartupScreen: 'phone_startup.jpg',
    tabletIcon: 'icon-ipad.png',
    phoneIcon: 'icon-iphone.png',
    glossOnIcon: false,
    onReady: function() {
    	new Ext.slider.Multi({
            renderTo: 'multi-slider-horizontal',
            hideLabel: true,
            width: 214,
            minValue: 0,
            maxValue: 100,
            values: [10, 90]
        });
    }
});
