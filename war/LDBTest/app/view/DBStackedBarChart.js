Ext.define("LDBTest.view.DBStackedBarChart", {
	extend : 'Ext.chart.Chart',
	xtype : 'dbstackedbarchart',
	requires: [
	           'Ext.chart.Chart', 
	           'LDBTest.store.ChartStore', 
	           'Ext.chart.series.StackedColumn'
	           ],
    config: {
        title: 'Profitability Analysis',
        iconCls: 'column',
        cls: 'chartpanel',
        autoSize: true,
        dirty: true,
        startTime:null,
        endTime:null,
        profitType: 1,
        volumeType: 1,
//        width: '800',
//        height: '400',
        shadow: true,
        dirty: true,
        /*
        animate: {
            easing: 'bounceOut',
            duration: 750
        },
        */
        interactions: [
        {
            type: 'iteminfo',
            gesture: 'tap',
            listeners: {
            	show: function (interaction, item, panel) {
                	var storeItem = item.storeItem,
                    commify = function (nStr) {
                		console.log(nStr);
                        return(nStr).toFixed(0);
                    };
                    panel.setHtml([
//                      '<b>Units in MCFe</b>', 
//                      '<br></br>',
                      '<ul>',
                    '<li><b>Date: </b>' + storeItem.get('AnalysisDate') + '</li>',
                    '<li><b>Revenue: $</b> ' + commify(storeItem.get('Revenue')) + '</li>',
                    '<li><b>TotalExpense: $</b> ' + commify(storeItem.get('TotalExpense')) + '</li>',
                    '<li><b>CashFlow: $</b> ' + commify(storeItem.get('CashFlow')) + '</li>',
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
                fields: ['Revenue', 'TotalExpense', 'CashFlow'],
                title: 'Dollars',
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
                fields: ['AnalysisDate'],
                title: 'AnalysisDate',
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
                type: 'stackedColumn',
                highlight: false,
                showMarkers: false,
                fill: false,
                smooth: true,
                axis: 'left',
                xField: 'AnalysisDate',
                yField: ['Revenue', 'TotalExpense'],
                title: ['Total Revenue', 'Total Expense']
            },
            {
                type: 'line',
                highlight: false,
                showMarkers: false,
                fill: false,
                smooth: true,
                axis: 'left',
                xField: 'AnalysisDate',
                yField: 'CashFlow',
                title: ['Cash Flow']
            }
            
        ],
        listeners: {
            afterrender: function (me) {
                me.on('beforerefresh', function () {
                    if (me.ownerCt.getActiveItem().id !== me.id) {
                        return false;
                    }
                }, me);
            }
        }
    },
    
    reloadIfDirty: function() {
    	if (this.outOfSync()) {
    		this.parent.setMasked({xtype: 'loadmask',
    		    message: 'Loading...'});
    		this.getStore().getProxy().setUrl(LDBTest.model.JsonServicesConstants.getProfitabilityPlotUrl());
    		this.getStore().load(function(records, operation, success) {
		    	if (success) {
		    		this.syncTime();
		    		this.setDirty(false);
//		    		if (Ext.ComponentQuery.query('dbcarousel')[0].getMasked()) {
		    		this.parent.setMasked(false);
//		    		}
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
    	this.setStore(Ext.create('LDBTest.store.ChartStore'));
    	Ext.defer(function(){
    		this.reloadIfDirty();
    	}, 600, this);
    }
});