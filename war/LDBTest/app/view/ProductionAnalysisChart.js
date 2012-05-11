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
        autoSize: true,
//        width: '400',
//        height: '200',
        shadow: true,
        dirty: true,
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
                      '<b>Units in MCFe</b>', 
                      '<br></br>',
                      '<ul>',
                    //'<li><b>Year: </b>' + storeItem.get('year') + '</li>',
                    '<li><b>Water: </b> ' + commify(storeItem.get('Water')) + '</li>',
                    '<li><b>Oil: </b> ' + commify(storeItem.get('Oil')) + '</li>',
                    '<li><b>Gas: </b> ' + commify(storeItem.get('Gas')) + '</li>',
                    '<li><b>NGL: </b> ' + commify(storeItem.get('NGL')) + '</li>',
                    '<li><b>Total: </b> ' + commify(storeItem.get('Total')) + '</li>',
                    '<li><b>Forecast: </b> ' + commify(storeItem.get('Forecast')) + '</li>',
                    '</ul>'
                ].join(''));

                }
            }
        }],
        store: Ext.create('LDBTest.store.ProductionLineStore', {id: 'ProductionLineStore'}),
        axes: [
            {
                type: 'Numeric',
                position: 'left',
                label: {
                    //renderer: EnergyApp.commify
                },
                adjustMinimumByMajorUnit: 0,
                fields: ['Water', 'Oil', 'Gas', 'Forecast', 'NGL', 'Total'],
                title: 'Production Rate (MCFe)',
                grid: {
                    odd: {
                        stroke: '#777'
                    },
                    even: {
                        stroke: '#555'
                    }
                }
            }/*,
            {
                type: 'Category',
                position: 'bottom',
                fields: ['AnalysisDate'],
                title: 'Analysis Date',
                label: {
                    rotate: {
                        degrees: 45
                    }
                }
            }*/
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
            
        ],
        
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
            
        }
    },
    
    reloadIfDirty: function() {
    	if (this.getDirty()) {
    		this.getStore().getProxy().setUrl(LDBTest.model.JsonServicesConstants.getProductionPlotUrl());
    		this.getStore().load(function(records, operation, success) {
		    	if (success) {
		    		this.setDirty(false);
		    	}
		    }, this);
    	}
    },
    
    onLoad: function() {
    	alert('loaded');
    }
    
});