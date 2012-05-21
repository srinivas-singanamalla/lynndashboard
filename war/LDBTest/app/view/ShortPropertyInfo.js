Ext.define('LDBTest.view.ShortPropertyInfo', {
    extend: 'Ext.Container',
    xtype: 'shortpropertyinfo',
    requires: [
      'Ext.XTemplate'
    ],

    config: {
    	startTime:null,
        endTime:null,
    	baseCls: 'chartpanel',
    	tpl: null,
        data: null,
        store: null,
    },
    
    
    reloadIfDirty: function() {
    	/*
    	if (this.outOfSync()) {
    		Ext.ComponentQuery.query('dbcarousel')[0].setMasked({xtype: 'loadmask',
    		    message: 'Loading...'});
    		Ext.Logger.warn('Property Info reloadIfDirty');
    		this.getStore().getProxy().setUrl(LDBTest.model.JsonServicesConstants.getKPIPlotUrl());
    		this.getStore().load(function(records, operation, success) {
		    	if (success) {
		    		this.syncTime();
		    		Ext.Logger.warn('Property Info  #success');
		    		this.setDirty(false);
		    		Ext.ComponentQuery.query('dbcarousel')[0].setMasked(false);
		    		this.onResize();
		    	}
		    }, this);
		    
    	}
    	*/
    },
    
    outOfSync: function() {
    	var singleton = LDBTest.model.DBSingleton,
    	sttime = singleton.getStartTime(),
    	endtime = singleton.getEndTime();
    	return this.getStartTime() !== sttime || this.getEndTime() !== endtime;
    },
    
    syncTime: function() {
    	var singleton = LDBTest.model.DBSingleton,
    	sttime = singleton.getStartTime(),
    	endtime = singleton.getEndTime();
    	this.setStartTime(sttime);
    	this.setEndTime(endtime);
    },
    
    initialize: function() {
    	var me = this;
    	var template = new Ext.XTemplate(
    			'<div class="centerwellinfo">',
                '<tpl for=".">',
                    '<div>{title}</div>',
                    '<table id="planetlist">',
                        '<tpl for="rows">',
                        '<tr class="{[this.listClasses(xindex, xcount)]}">',
                            '<tpl for="columns">',
                            '<td>{html}</td>',
                            '</tpl>',
                        '</tr>',
                        '</tpl>',
                    '</table>',
                '</tpl>',
                '</div>',
                {
                	
                listClasses: function(position, size) {
                  	 var classes = [];
                  	 if (position%2 === 0) {
                  		 classes.push("even");
                  	 } else {
                  		 classes.push("odd");
                  	 }
                  	 if (position === 1) {
                  		 classes.push("first");
                  	 }
                  	 if (position === size) {
                  		 classes.push("last");
                  	 }
                  	 return classes.join(" ");
                   }
                }
                   
            );
    	this.setTpl(template);
    	
    	this.setData([
                   {
                       title: '<div class="dbsectiontitle">Well Property Info</div>',
                       rows: [
                           {
                               columns: [
                                   { html: 'API' },
                                   { html: '232321313131313131321' },
                               ]
                           },
                           {
                               columns: [
                                   { html: 'Code' },
                                   { html: '31231231312321' },
                               ]
                           },
                           {
                               columns: [
                                   { html: 'Unit Lease' },
                                   { html: 'Lease 5467' },
                               ]
                           },
                           {
                               columns: [
                                   { html: 'Location' },
                                   { html: 'Thousand Oaks, CA' },
                               ]
                           },
                           {
                               columns: [
                                   { html: 'Section' },
                                   { html: 'Section 420' },
                               ]
                           },
                           {
                               columns: [
                                   { html: 'Range' },
                                   { html: '245-560' },
                               ]
                           },
                           {
                               columns: [
                                   { html: 'Business Unit' },
                                   { html: 'Cool Business' },
                               ]
                           },
                           {
                               columns: [
                                   { html: 'NRI' },
                                   { html: '100%' },
                               ]
                           },
                           {
                               columns: [
                                   { html: 'Spud Date' },
                                   { html: '10/12/1960' },
                               ]
                           },
                           {
                               columns: [
                                   { html: 'Total Depth in meters' },
                                   { html: '453' },
                               ]
                           }
                       ]
                   }
               ]);
    },
    
    
});
