Ext.define('LDBTest.view.DashboardSummary', {
    extend: 'Ext.Container',
    xtype: 'dashboardsummary',
    requires: [
               'LDBTest.view.ProductionAnalysisChart',
               'LDBTest.view.DBStackedBarChart',
               'LDBTest.view.PseudoOrgChart',
               'LDBTest.view.ShortPropertyInfo'
               ],
    config: {
    	layout: 'vbox',
    	startTime:null,
        endTime:null,
    	items: [
    	        { xtype: 'container', 
    	          flex: 1, 
    	          layout: 'hbox', 
    	          items:[
    	                 { xtype: 'container', id: 'prodplotinsummary', flex: 1, layout: 'fit'},
    	                 { xtype: 'container', id: 'profitplotinsummary', flex: 1, layout: 'fit'}
    	                 ]
    	        },
    	        { xtype: 'container', 
      	          flex: 1, 
      	          layout: 'hbox', 
      	          items:[
      	                 { xtype: 'container', id: 'kpiplotinsummary', flex: 1, layout: 'fit'},
      	                 { xtype: 'container', id: 'wellinfoinsummary', flex: 1, layout: 'fit'}
      	                 ]
      	        }
    	        ]
    },
    
    reloadIfDirty: function() {
    	Ext.each(this.getInnerItems(), function(item, row){
    		Ext.each(item.getInnerItems(), function(inner, column){
    			 if (inner.getAt(0) != null) {
    				 inner.getAt(0).reloadIfDirty();
		        } else {
			        inner.add(Ext.create(this.getCardPlotValueAt(row, column), {
			        	layout: 'fit'
			        }));

		        }
    		}, this);
    		
    	}, this);
    },
    
    getCardPlotValueAt: function(i, j) {
        if (i == 0) {
        	if (j == 0) {
        		return 'LDBTest.view.ProductionAnalysisChart';
        	} else {
        		return 'LDBTest.view.PseudoOrgChart';
        	}
        } else {
        	if (j == 0) {
        		return 'LDBTest.view.DBStackedBarChart';
        	} else {
        		return 'LDBTest.view.ShortPropertyInfo';
        	}
        }
    },
    
    initialize: function() {
    	console.log("summary log");
    	this.callParent();
		 this.on({
		    painted: this.onPainted,
		    scope: this
		 });
    },
    
    onPainted: function() {
        this.reloadIfDirty();
    }
});