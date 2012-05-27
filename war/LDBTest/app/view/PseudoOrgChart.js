Ext.define("LDBTest.view.PseudoOrgChart", {
	extend : 'Ext.draw.Component',
	xtype : 'porgchart',
	requires: [
	           'LDBTest.store.KPIStore'
	           ],
	
	mixins: {
        theme: 'Ext.chart.theme.Theme'
    },
    
	config: {
		autoSize: true,
		
		theme: 'Energy',
		
		cls: 'chartpanel',
		
		iconCls: 'treemap',
		
		title : 'Production KPI',
		
		kpirecord: null,
		
		startTime: null,
		
		endTime: null,
		profitType: 1,
        volumeType: 1,
		
		store: null,
		
		dirty: true,
		
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
	
	applyStyles: function (theme) {
        var me = this;
        me.mixins.theme.applyStyles.call(me, theme);
        me.colorArrayStyle = [];
        if (me.style && me.style.colors) {
            colors = me.style.colors;
            colorArrayStyle = me.colorArrayStyle;
            for (i = 0, l = colors.length; i < l; ++i) {
                color = colors[i];
                if (Ext.isObject(color)) {
                    for (p in me.surfaces) {
                        me.surfaces[p].addGradient(color);
                    }
                    colorArrayStyle.push('url(#' + color.id + ')');
                } else {
                    colorArrayStyle.push(color);
                }
            }
        }
    },
	
    reloadIfDirty: function() {
    	if (this.outOfSync()) {
    		Ext.ComponentQuery.query('dbcarousel')[0].setMasked({xtype: 'loadmask',
    		    message: 'Loading...'});
    		Ext.Logger.warn('PseudoOrgChart reloadIfDirty');
    		this.getStore().getProxy().setUrl(LDBTest.model.JsonServicesConstants.getKPIPlotUrl());
    		this.getStore().load(function(records, operation, success) {
    			this.syncTime();
		    	if (success) {
		    		Ext.Logger.warn('PseudoOrgChart #success');
		    		this.setDirty(false);
		    		Ext.ComponentQuery.query('dbcarousel')[0].setMasked(false);
		    		this.setKpirecord(records[0]);
		    		this.onResize();
		    	}
		    }, this);
    	}
    },
    
    outOfSync: function() {
    	var singleton = LDBTest.model.DBSingleton,
    	sttime = singleton.getStartTime(),
    	endtime = singleton.getEndTime(),
    	volType = singleton.getVolumeType(),
    	profType = singleton.getProfitType();
    	return this.getDirty() || (this.getStartTime() !== sttime || this.getEndTime() !== endtime) || 
    	(this.getVolumeType() !== volType) || (this.getProfitType() !== profType);
    },
    
    syncTime: function() {
    	var singleton = LDBTest.model.DBSingleton,
    	sttime = singleton.getStartTime(),
    	endtime = singleton.getEndTime(),
    	volType = singleton.getVolumeType(),
    	profType = singleton.getProfitType();
    	this.setStartTime(sttime);
    	this.setEndTime(endtime);
    	this.setVolumeType(volType);
    	this.setProfitType(profType);
    },
    
    initialize: function() {
    	
    	this.callParent();
    	this.setStore(Ext.create('LDBTest.store.KPIStore', {id: 'KPIStore'}));
    	this.reloadIfDirty();
    	//me.setHeight(450);
    	var me = this,
        items = me.surface.getItems(),
        bbox = items.getBBox(),
        width = bbox.width,
        height = bbox.height;
    	
        me.surface.addGradient({
            id: 'gradientId',
            angle: 45,
            stops: {
                0: {
                    color: '#555'
                },
                100: {
                    color: '#ddd'
                }
            }
        });
        
        me.surface.addGradient(
        	{
                'id': 'gasGradient',
                'angle': 0,
                stops: {
                    0: {
                        color: 'red'
                    },
                    100: {
                        color: 'rgb(155, 0, 0)'
                    }
                }
            }
        );
        
        me.surface.addGradient(
        	{
                'id': 'oilGradient',
                'angle': 0,
                stops: {
                    0: {
                        color: 'rgb(0, 255, 0)'
                    },
                    100: {
                        color: 'rgb(0, 100, 0)'
                    }
                }
            }
        );
        
        me.surface.addGradient(
        	{
                'id': 'nglGradient',
                'angle': 0,
                stops: {
                    0: {
                        color: 'purple'
                    },
                    100: {
                        color: 'rgb(255, 0, 255)'
                    }
                }
            }
        );
        
    },
    
    getTrianglePath: function(x, y, h) {
		return "M" + x + " " + y + "L" + (x-0.5*h) + " " + (y + h) + " L" + (x+0.5*h) + " " + (y+h) + " Z";
	},
	
	
    getPsuedoOrgBoxesSpriteArray: function(record) {
    	var me = this, 
		spritesArray = [],
		width = me.surface.getWidth(),
		height = me.surface.getHeight();
//		var bbox = {x: 0, y: 0, w:500, h:200};
		var bbox = {x: width/4, y: 10, w:width/2, h:height/2};
		var pad = 10;
		spritesArray.push(this.getSpritesArray({
        	x: bbox.x,
        	y: bbox.y,
        	w: bbox.w,
        	h: bbox.h,
        	topColor: 'lightgray',
        	bottomColor: 'lightgray',
        	topText: 'Daily Average Volume',
        	centerText: record.get('DailyAvgVolume') + ' MCFed',
        	bottomText: 'From Forecast',
        	forecastVal: record.get('DailyAvgVolumeVariance'),
        	topTextFont: 'bold 18px Arial',
        	centerTextFont: 'bold italic 18px Arial',
        	bottomTextFont: 'bold 0.6em Arial',
        	forecastFont: '0.6em Arial'
        }));
		
		spritesArray.push(this.getSpritesArray({
        	x: bbox.x - 0.25*bbox.w - pad,
        	y: bbox.y + bbox.h + 2*pad,
        	w: 0.5*bbox.w,
        	h: 0.75*bbox.h,
        	topColor: 'url(#gasGradient)',
        	bottomColor: 'white',
        	topText: 'Gas',
        	centerText: record.get('Gas') + ' MCFed',
        	bottomText: 'From Forecast',
        	forecastVal: record.get('GasVariance'),
        	topTextFont: 'bold 1em Arial',
        	centerTextFont: 'bold italic 14px Arial',
        	bottomTextFont: 'bold 0.6em Arial',
        	forecastFont: '0.6em Arial'
        }));
		
		spritesArray.push(this.getSpritesArray({
        	x: bbox.x + 0.25*bbox.w,
        	y: bbox.y + bbox.h + 2*pad,
        	w: 0.5*bbox.w,
        	h: 0.75*bbox.h,
        	topColor: 'url(#oilGradient)',
        	bottomColor: 'white',
        	topText: 'Oil',
        	centerText: record.get('NGL') + ' BbLd',
        	bottomText: 'From Forecast',
        	forecastVal: record.get('NGLVariance'),
        	topTextFont: 'bold 1em Arial',
        	centerTextFont: 'bold italic 14px Arial',
        	bottomTextFont: 'bold 0.6em Arial',
        	forecastFont: '0.6em Arial'
        }));
		
		spritesArray.push(this.getSpritesArray({
        	x: bbox.x + 0.75*bbox.w + pad,
        	y: bbox.y + bbox.h + 2*pad,
        	w: 0.5*bbox.w,
        	h: 0.75*bbox.h,
        	topColor: 'url(#nglGradient)',
        	bottomColor: 'white',
        	topText: 'NGL',
        	centerText: record.get('Oil') + ' BbLd',
        	bottomText: 'From Forecast',
        	forecastVal: record.get('OilVariance'),
        	topTextFont: 'bold 1em Arial',
        	centerTextFont: 'bold italic 14px Arial',
        	bottomTextFont: 'bold 0.6em Arial',
    	forecastFont: '0.6em Arial'
        }));
		
		return spritesArray;
	},
	
	
	getSpritesArray: function(sconfig) {
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
                    fill: "url(#gradientId)",
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
                    y: y + 0.93*h,
                    text: fv,
                    group: textGroup,
                    'text-anchor': 'center'
                }];
	},
	
    onResize: function () {
        var me = this,
            viewBox = me.getViewBox(),
            autoSize = me.getAutoSize(),
            items = me.surface.getItems(),
            bbox, items, width, height, x, y;
        this.callParent();
        if (this.getKpirecord() != null) {
        	me.surface.removeAll(true);
        	me.surface.add(me.getPsuedoOrgBoxesSpriteArray(this.getKpirecord()));
        	me.surface.renderFrame();
        }
    },
    
    constructor: function(config) {
        var me = this;

        config = Ext.apply({}, config);
        if (me.gradients) {
            Ext.apply(config, { gradients: me.gradients });
        }
        if (me.background) {
            Ext.apply(config, { background: me.background });
        }
        if (config.theme) {
            me.applyStyles(config.theme);
        }

        me.callParent(arguments);
    },
});