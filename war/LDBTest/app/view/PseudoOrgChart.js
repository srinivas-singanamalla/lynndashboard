Ext.define("LDBTest.view.PseudoOrgChart", {
	extend : 'Ext.draw.Component',
	xtype : 'porgchart',
	
	config: {
		autoSize: true
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
    	
    	LDBTest.view.PseudoOrgChart.superclass.initialize.apply(this, arguments);
    	
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
			var bbox = {x: 100, y: 50, w:250, h:200};
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
		
		/*var drawComponent = Ext.create('Ext.draw.Component', {
			width: 450,
        	height: 450
        });*/
        
        me.surface.setStyle('text-align', 'center');
        me.surface.setStyle('border', '1px solid blue');	        
        me.surface.add(getPsuedoOrgBoxesSpriteArray({}, {}, {}, {}));
    }
})