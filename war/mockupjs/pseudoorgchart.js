/*var drawComponent = Ext.create('Ext.draw.Component', {
    viewBox: false,
    items: [{
        type: 'circle',
        fill: '#79BB3F',
        radius: 100,
        x: 100,
        y: 100
    }]
});
*/
/*
Ext.define('Ext.draw.PseudoOrgChart', {
    extend: 'Ext.draw.Component',

    config: {
        viewBox: false,
        items: [{
            type: 'circle',
            fill: '#79BB3F',
            radius: 100,
            x: 100,
            y: 100
        }]
    }
});
*/



/*
var drawComponent = new Ext.draw.Component({
	viewBox: true,
	renderTo: 'orgchart',
	width: 450,
	height: 450,
    items: [{
        type: 'circle',
        fill: '#79BB3F',
        radius: 100,
        x: 100,
        y: 100
    }]
});
*/
/*
Ext.create('Ext.Window', {
    width: 215,
    height: 235,
    layout: 'fit',
    items: [drawComponent]
}).show();
*/

   Ext.setup({
	    tabletStartupScreen: 'tablet_startup.jpg',
	    phoneStartupScreen: 'phone_startup.jpg',
	    tabletIcon: 'icon-ipad.png',
	    phoneIcon: 'icon-iphone.png',
	    glossOnIcon: false,
	    onReady: function() {
	        var onRefreshTap = function() {
	            console.log("refreshtapped");
	        };
	        var onHelpTap = function() {
				new Ext.Panel({
	 		          floating: true,
			           modal: true,
			           centered: true,
			           width: 300,
			           height: 250,
			           styleHtmlContent: true,
			           scroll: 'vertical',
			           dockedItems: [{
			               dock: 'top',
			               xtype: 'toolbar',
			               title: 'Bar Chart'
			           }],
			           stopMaskTapEvent: false,
			           fullscreen: false,
					   html: "This example's uses many interactions.<br><ul>" +
								"<li>A horizontal swipe will change between a grouped and stacked bar chart.</li>" +
								"<li>Tapping two items will overlay an arrow and show a comparison in the Title area.</li>" +
								"<li>The chart can be zoomed vertically with a pinch gesture, and the panned by dragging.  For devices which do not support multi-touch, an extra toggle button is made available to switch between pan and zoom.  When zoomed in, arrow indicators will be overlayed on the chart to show that more data is available</li>" +
								"<li>Double-Tap will reset the chart back to the initial state</li>"
			       }).show('pop');
			};
			
			var getTrianglePath = function(x, y, h) {
				return "M" + x + " " + y + "L" + (x-0.5*h) + " " + (y + h) + " L" + (x+0.5*h) + " " + (y+h) + " Z";
			};
			
			var getSpritesArray = function(sconfig) {
				var x = sconfig.x, y = sconfig.y, w = sconfig.w, h = sconfig.h;
				var tc = sconfig.topColor, bc = sconfig.bottomColor;
				var ttext = sconfig.topText, ctext = sconfig.centerText, btext = sconfig.bottomText;
				var fv = sconfig.forecastVal;
				return [
				        {
				        	type: 'rect',
                            width: w,
                            height: h,
                            fill: 'white',
                            stroke: 'black',
                            x: x,
                            y: y,
				        },
				        
				        {
				        	type: 'rect',
                            width: w,
                            height: 0.25*h,
                            stroke: 'black',
                            fill: tc,
                            x: x,
                            y: y,
				        },
				        
				        {
                            type: 'text',
                            fill: 'black',
                            x: x + 0.5*w,
                            y: y + 0.125*h,
                            text: ttext,
                        },
                        
                        {
                            type: 'text',
                            fill: 'black',
                            x: x + 10,
                            y: y + 0.5*h,
                            text: ctext,
                        },
                        
                        {
				        	type: 'rect',
                            width: w,
                            height: 0.25*h,
                            stroke: 'black',
                            fill: bc,
                            x: x,
                            y: y + 0.75*h,
				        },
				        
				        {
                            type: 'text',
                            fill: 'black',
                            stroke: 'black',
                            x: x + 10,
                            y: y + 0.833*h,
                            text: btext
                        }, 
                        
                        {
                        	type: 'path',
                        	stroke: 'black',
                        	fill: fv > 0 ? 'green' : 'red',
                        	path: getTrianglePath(x+10, y + 0.91*h, 10)	
                        },
                        
                        {
                        	type: 'text',
                        	fill: fv > 0 ? 'green' : 'red',
                            stroke: 'black',
                            x: x + 10 + 20,
                            y: y + 0.91*h,
                            text: fv
                        }
				        
				        ];
			};
			
			var getPsuedoOrgBoxesSpriteArray = function(all, gas, oil, natgas) {
				var spritesArray = [];
				var bbox = {x: 50, y: 50, w:300, h:200};
				var pad = 10;
				spritesArray.push(getSpritesArray({
		        	x: bbox.x,
		        	y: bbox.y,
		        	w: bbox.w,
		        	h: bbox.h,
		        	topColor: 'lightgray',
		        	bottomColor: 'lightgray',
		        	topText: 'Daily Average Volume',
		        	centerText: '2,253 MCFed',
		        	bottomText: 'From Forecast',
		        	forecastVal: 450
		        }));
				
				spritesArray.push(getSpritesArray({
		        	x: bbox.x - 0.25*bbox.w - pad,
		        	y: bbox.y + bbox.h + pad,
		        	w: 0.5*bbox.w,
		        	h: 0.5*bbox.h,
		        	topColor: 'red',
		        	bottomColor: 'white',
		        	topText: 'Gas',
		        	centerText: '1,296 MCFed',
		        	bottomText: 'From Forecast',
		        	forecastVal: 50
		        }));
				
				spritesArray.push(getSpritesArray({
		        	x: bbox.x + 0.25*bbox.w,
		        	y: bbox.y + bbox.h + pad,
		        	w: 0.5*bbox.w,
		        	h: 0.5*bbox.h,
		        	topColor: 'green',
		        	bottomColor: 'white',
		        	topText: 'Gas',
		        	centerText: '1,286 BbLd',
		        	bottomText: 'From Forecast',
		        	forecastVal: 50
		        }));
				
				spritesArray.push(getSpritesArray({
		        	x: bbox.x + 0.75*bbox.w + pad,
		        	y: bbox.y + bbox.h + pad,
		        	w: 0.5*bbox.w,
		        	h: 0.5*bbox.h,
		        	topColor: 'purple',
		        	bottomColor: 'white',
		        	topText: 'NGL',
		        	centerText: '1,286 BbLd',
		        	bottomText: 'From Forecast',
		        	forecastVal: -50
		        }));
				
				return spritesArray;
			};
	        
	        var drawComponent = new Ext.draw.Component({
	        	width: 450,
	        	height: 450
	        });
	        
	        new Ext.Panel({
	            fullscreen: false,
	            renderTo: 'orgchart',
	            title: 'Yellow Circle',
	            items: drawComponent
	          });
	        
	        
	        drawComponent.surface.setStyle('text-align', 'center');
	        drawComponent.surface.setStyle('border', '1px solid blue');	        
	        drawComponent.surface.add(getPsuedoOrgBoxesSpriteArray({}, {}, {}, {}));


	         /*  // Animate the circles down
	           circles.animate({
	               duration: 1000,
	               translate: {
	                   y: 200
	               }
	           });
	
	           // Animate the rectangles across
	           rectangles.animate({
	               duration: 1000,
	               translate: {
	                   x: 200
	               }
	           });*/
	           
	           drawComponent.surface.renderFrame();

	    }
	});
