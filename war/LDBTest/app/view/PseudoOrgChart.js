Ext.define("LDBTest.view.PseudoOrgChart", {
	extend : 'Ext.draw.Component',
	xtype : 'porgchart',
	
	config: {
		autoSize: true,
		
		gradients: [{
            'id': 'v-1',
            'angle': 0,
            stops: {
                0: {
                    color: 'rgb(212, 40, 40)'
                },
                100: {
                    color: 'rgb(117, 14, 14)'
                }
            }
        },
        {
            'id': 'v-2',
            'angle': 0,
            stops: {
                0: {
                    color: 'rgb(180, 216, 42)'
                },
                100: {
                    color: 'rgb(94, 114, 13)'
                }
            }
        },
        {
            'id': 'v-3',
            'angle': 0,
            stops: {
                0: {
                    color: 'rgb(43, 221, 115)'
                },
                100: {
                    color: 'rgb(14, 117, 56)'
                }
            }
        },
        {
            'id': 'v-4',
            'angle': 0,
            stops: {
                0: {
                    color: 'rgb(45, 117, 226)'
                },
                100: {
                    color: 'rgb(14, 56, 117)'
                }
            }
        },
        {
            'id': 'v-5',
            'angle': 0,
            stops: {
                0: {
                    color: 'rgb(187, 45, 222)'
                },
                100: {
                    color: 'rgb(85, 10, 103)'
                }
            }
        }]

	},
	
	constructor : function(config) {
		
		
        /*
        var drawPanel = Ext.create('Ext.Panel', {
            title: 'Yellow Circle',
            width: 450,
        	height: 450,
            items: drawComponent
          });*/
                
        
        //drawComponent.surface.renderFrame();        		

		//config.items = [ drawPanel ];
		
		this.callParent([ config ]);
	},
	
	// Override an existing function
	/*
    onRender: function() {
    	LDBTest.view.PseudoOrgChart.superclass.onRender.apply(this, arguments);
        this.myNewFunction();
    },*/
    
	
	
    initialize: function() {
    	
    	var me = this,
        viewBox = me.getViewBox(),
        autoSize = me.getAutoSize(),
        bbox, items, width, height, x, y;
    	me.setWidth(1000);
    	me.setHeight(450);
    	
    	LDBTest.view.PseudoOrgChart.superclass.initialize.apply(this, arguments);
    	
    	var getTrianglePath = function(x, y, h) {
			return "M" + x + " " + y + "L" + (x-0.5*h) + " " + (y + h) + " L" + (x+0.5*h) + " " + (y+h) + " Z";
		};
		
		var getSpritesArray = function(sconfig) {
			var x = sconfig.x, y = sconfig.y, w = sconfig.w, h = sconfig.h;
			var tc = sconfig.topColor, bc = sconfig.bottomColor;
			var ttext = sconfig.topText, ctext = sconfig.centerText, btext = sconfig.bottomText;
			var tf = sconfig.topTextFont || "", cf = sconfig.centerTextFont || "", bf = sconfig.bottomTextFont || "", ff = sconfig.forecastFont || "";
			var fv = sconfig.forecastVal;
			var textGroup = 'textGroup';
			return [
			        {
			        	type: 'rect',
                        width: w,
                        height: h,
                        fill: 'white',
                        stroke: 'black',
                        x: x,
                        y: y
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
                        font: tf,
                        group: textGroup,
                        'text-anchor': 'center'
                    },
                    {
                        type: 'text',
                        fill: 'black',
                        x: x + 0.5*w,
                        y: y + 0.5*h,
                        text: ctext,
                        font: cf,
                        group: textGroup,
                        'text-anchor': 'center'
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
                        x: x + 0.5*w,
                        y: y + 0.833*h,
                        text: btext,
                        font: bf,
                        group: textGroup,
                        'text-anchor': 'center'
                    },
                    /*
                    {
                    	type: 'path',
                    	stroke: 'black',
                    	fill: fv > 0 ? 'green' : 'red',
                    	path: getTrianglePath(x+0.5*w, y + 0.91*h, 10)	
                    },*/
                    {
                    	type: 'text',
                    	fill: fv > 0 ? 'green' : 'red',
                        stroke: 'black',
                        font: ff,
                        x: x + 0.5*w,
                        y: y + 0.91*h,
                        text: fv,
                        group: textGroup,
                        'text-anchor': 'center'
                    }];
		};
		
		var getPsuedoOrgBoxesSpriteArray = function(all, gas, oil, natgas) {
			var spritesArray = [];
			var bbox = {x: 200, y: 0, w:500, h:200};
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
	        	forecastVal: 450,
	        	topTextFont: 'bold 12px Arial',
	        	centerTextFont: 'bold italic 14px Arial',
	        	bottomTextFont: 'bold 12px Arial',
	        	forecastFont: 'bold 12px Arial'
	        }));
			
			spritesArray.push(getSpritesArray({
	        	x: bbox.x - 0.25*bbox.w - pad,
	        	y: bbox.y + bbox.h + 2*pad,
	        	w: 0.5*bbox.w,
	        	h: 0.75*bbox.h,
	        	topColor: 'red',
	        	bottomColor: 'white',
	        	topText: 'Gas',
	        	centerText: '1,296 MCFed',
	        	bottomText: 'From Forecast',
	        	forecastVal: 50,
	        	topTextFont: 'bold 12px Arial',
	        	centerTextFont: 'bold italic 14px Arial',
	        	bottomTextFont: 'bold 12px Arial',
	        	forecastFont: 'bold 12px Arial'
	        }));
			
			spritesArray.push(getSpritesArray({
	        	x: bbox.x + 0.25*bbox.w,
	        	y: bbox.y + bbox.h + 2*pad,
	        	w: 0.5*bbox.w,
	        	h: 0.75*bbox.h,
	        	topColor: 'green',
	        	bottomColor: 'white',
	        	topText: 'Gas',
	        	centerText: '1,286 BbLd',
	        	bottomText: 'From Forecast',
	        	forecastVal: 50,
	        	topTextFont: 'bold 12px Arial',
	        	centerTextFont: 'bold italic 14px Arial',
	        	bottomTextFont: 'bold 12px Arial',
	        	forecastFont: 'bold 12px Arial'
	        }));
			
			spritesArray.push(getSpritesArray({
	        	x: bbox.x + 0.75*bbox.w + pad,
	        	y: bbox.y + bbox.h + 2*pad,
	        	w: 0.5*bbox.w,
	        	h: 0.75*bbox.h,
	        	topColor: 'purple',
	        	bottomColor: 'white',
	        	topText: 'NGL',
	        	centerText: '1,286 BbLd',
	        	bottomText: 'From Forecast',
	        	forecastVal: -50,
	        	topTextFont: 'bold 12px Arial',
	        	centerTextFont: 'bold italic 14px Arial',
	        	bottomTextFont: 'bold 12px Arial',
	        	forecastFont: 'bold 12px Arial'
	        }));
			
			return spritesArray;
		};
		
		/*var drawComponent = Ext.create('Ext.draw.Component', {
			width: 450,
        	height: 450
        });*/
        
		
        me.surface.add(getPsuedoOrgBoxesSpriteArray({}, {}, {}, {}));
        /*
        var spriteGroup = me.surface.getGroup('textGroup');
        spriteGroup.each(function(sprite){
        	me.surface.setStyle(sprite, {
        	     'text-anchor': 'center'
        	 });
        });*/
        me.surface.renderFrame();
    }
})