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
//        width: '800',
//        height: '400',
        shadow: true,
        /*
        animate: {
            easing: 'bounceOut',
            duration: 750
        },
        */
        interactions: [{
        	type: 'togglestacked',
        	event: 'doubletap'
        },
        {
            type: 'iteminfo',
            gesture: 'tap',
            listeners: {
            	/*
                show: function (interaction, item, panel) {
                    //EnergyApp.popup(item, panel);
                }
                */
            }
        }],
        
        store: Ext.create('LDBTest.store.ChartStore'),
        axes: [
            {
                type: 'Numeric',
                position: 'left',
                label: {
                    //renderer: EnergyApp.commify
                },
                adjustMinimumByMajorUnit: 0,
                fields: ['Revenue', 'TotalExpense', 'CashFlow'],
                title: 'Million BTUs',
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
    	if (this.getDirty()) {
    		Ext.ComponentQuery.query('dbcarousel')[0].setMasked({xtype: 'loadmask',
    		    message: 'Loading...'});
    		this.getStore().getProxy().setUrl(LDBTest.model.JsonServicesConstants.getProfitabilityPlotUrl());
    		this.getStore().load(function(records, operation, success) {
		    	if (success) {
		    		this.setDirty(false);
//		    		if (Ext.ComponentQuery.query('dbcarousel')[0].getMasked()) {
		    			Ext.ComponentQuery.query('dbcarousel')[0].setMasked(false);
//		    		}
		    	}
		    }, this);
    	}
    },
    
    initialize: function() {
    	this.callParent();
    }
});