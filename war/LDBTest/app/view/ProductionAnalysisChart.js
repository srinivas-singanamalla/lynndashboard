Ext.define("LDBTest.view.ProductionAnalysisChart", {
	extend : 'Ext.chart.Chart',
	xtype : 'productionanalysischart',
//	id: 'productionanalysischart',
	requires: [
	           'Ext.chart.Chart',
	           'LDBTest.store.ProductionLineStore',
	           'Ext.chart.theme.Theme',
	           'Ext.chart.theme.Energy',
	           'Ext.MessageBox'
	           ],
    config: {
    	
        title: 'Production Analysis',
        iconCls: 'line',
        cls: 'chartpanel',
        startTime:null,
        endTime:null,
        profitType: 1,
        volumeType: 1,
        autoSize: true,
//        width: '400',
//        height: '200',
        shadow: true,
        dirty: true,
        reload: true,
        /*animate: {
            easing: 'bounceOut',
            duration: 750
        },*/
        interactions: [{
            type: 'iteminfo',
            gesture: 'tap',
            listeners: {
                show: function (interaction, item, panel) {
                	var storeItem = item.storeItem,
                    commify = function (nStr) {
                		console.log(nStr);
                        return(nStr).toFixed(2);
                    };
                    panel.setHtml([
                      '<ul>',
	                    '<li><b>Date: </b>' + storeItem.get('StrDT') + '</li>',
	                    '<li><b>Water: </b> ' + commify(storeItem.get('Water')) + ' BBL</li>',
	                    '<li><b>Oil: </b> ' + commify(storeItem.get('Oil')) + ' BBL</li>',
	                    '<li><b>Gas: </b> ' + commify(storeItem.get('Gas')) + ' MCFe</li>',
	                    '<li><b>NGL: </b> ' + commify(storeItem.get('NGL')) + ' BBL</li>',
	                    '<li><b>Total: </b> ' + commify(storeItem.get('Total')) + ' MCFe</li>',
	                    '<li><b>Forecast: </b> ' + commify(storeItem.get('Forecast')) + ' MCFe</li>',
                     '</ul>'
                    ].join(''));
                }
            }
        }],
        store: null,
        axes: [
            {
                type: 'Numeric',
                position: 'left',
                label: {
                    //renderer: EnergyApp.commify
                },
                adjustMinimumByMajorUnit: 0,
                fields: ['Water', 'Oil', 'Gas', 'Forecast', 'NGL', 'Total'],
                title: 'Volume',
                grid: {
                    odd: {
                        stroke: '#777'
                    },
                    even: {
                        stroke: '#555'
                    }
                }
            },
            {
                type: 'Category',
                position: 'bottom',
                fields: ['StrDT'],
                title: 'Analysis Date',
                label: {
                    rotate: {
                        degrees: 45
                    }
                }
            }
        ],
        legend: {
            position: Ext.os.is.Phone ? 'left' : 'top'
        },
        theme: 'Energy',
        
        series: [
                 
            {
                type: 'line',
                highlight: true,
                showMarkers: false,
                fill: false,
                smooth: true,
                axis: 'left',
                xField: 'AnalysisDate',
                yField: ['Water'],
                title: ['Water']
            },
            {
                type: 'line',
                highlight: false,
                showMarkers: false,
                fill: false,
                smooth: true,
                axis: 'left',
                xField: 'AnalysisDate',
                yField: 'Oil',
                title: ['Oil']
            },
            {
                type: 'line',
                highlight: false,
                showMarkers: false,
                fill: false,
                smooth: true,
                axis: 'left',
                xField: 'AnalysisDate',
                yField: 'Gas',
                title: ['Gas']
            },
            {
                type: 'line',
                highlight: true,
                showMarkers: false,
                fill: false,
                smooth: true,
                axis: 'left',
                xField: 'AnalysisDate',
                yField: 'Total',
                title: ['Total']
            },
            {
                type: 'line',
                highlight: false,
                showMarkers: false,
                fill: false,
                smooth: true,
                axis: 'left',
                xField: 'AnalysisDate',
                yField: 'Forecast',
                title: ['Forecast']
            },
            {
                type: 'line',
                highlight: false,
                showMarkers: false,
                fill: false,
                smooth: true,
                axis: 'left',
                xField: 'AnalysisDate',
                yField: 'NGL',
                title: ['NGL']
            }
            
        ]/*,
        
        listeners: {
            afterrender: function (me) {
                me.on('beforerefresh', function () {
                    if (me.ownerCt.getActiveItem().id !== me.id) {
                        return false;
                    }
                }, me);
                
                console.log("afterrenderanalysischasrt");
//                Ext.Viewport.unmask();
            }
            
        }*/
    },
    
    reloadIfDirty: function() {
    	
    	if (this.outOfSync()) {
    		this.parent.setMasked({xtype: 'loadmask',
    		    message: 'Loading...'});
    		Ext.Logger.warn('Production Analysis Chart reloadIfDirty');
    		this.getStore().getProxy().setUrl(LDBTest.model.JsonServicesConstants.getProductionPlotUrl());
    		this.getStore().load(function(records, operation, success) {
    			this.syncTime();
    			
		    	if (success) {
		    		this.parent.unmask();
		    		Ext.Logger.warn('Production Analysis Chart #success');
		    		this.setDirty(false);
		    		
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
    	this.on({
    		beforerefresh: this.onBeforerefresh,
    		refresh: this.onRefresh,
            scope: this
        });
    	this.callParent();
    	this.setStore(Ext.create('LDBTest.store.ProductionLineStore', {id: 'ProductionLineStore'}));
    	Ext.defer(function(){
    		this.reloadIfDirty();
    	}, 500, this);
    	
    },
    
    onRefresh: function (me) {
        Ext.ComponentQuery.query('dbcarousel')[0].setMasked(false);
    },
    
    onBeforerefresh: function() {
//    	alert('onBeforerefresh');
    }
    
});