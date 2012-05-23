Ext.define('LDBTest.view.WellInfo', {
    extend: 'Ext.Panel',
    xtype: 'wellinfo',
    requires: [
      'Ext.XTemplate'
    ],

    config: {
    	startTime:null,
        endTime:null,
//    	baseCls: 'chartpanel',
    	dirty: true,
    	store: null,
    	tpl: null,
        data: null,
        store: null,
    },
    
    reloadIfDirty: function() {
		this.setMasked({xtype: 'loadmask',
		    message: 'Loading...'});
		this.getStore().getProxy().setUrl(this.getProxyUrl());
		this.getStore().load(function(records, operation, success) {
	    	if (success) {
	    		this.setData(operation.getResponse());
	    		Ext.Logger.warn('Property Info  #success');
	    		this.setDirty(false);
	    		this.setMasked(false);
	    	}
	    }, this);
    },
    
    getProxyUrl: function() {
    	return LDBTest.model.JsonServicesConstants.getPropertyWellInfo();
    },
    
    outOfSync: function() {
    	var singleton = LDBTest.model.DBSingleton,
    	sttime = singleton.getStartTime(),
    	endtime = singleton.getEndTime();
    	return this.getDirty() || (this.getStartTime() !== sttime || this.getEndTime() !== endtime);
    },
    
    syncTime: function() {
    	var singleton = LDBTest.model.DBSingleton,
    	sttime = singleton.getStartTime(),
    	endtime = singleton.getEndTime();
    	this.setStartTime(sttime);
    	this.setEndTime(endtime);
    },
    
    getTemplate: function() {
    	var template = new Ext.XTemplate(
    			'<div class="centerwellinfo">',
                    '<table id="planetlist">',
                        '<tpl for=".">',
                        '<tr class="{[this.listClasses(xindex, xcount)]}">',
                            '<td>{Label}</td>',
                            '<td>{Value}</td>',
                        '</tr>',
                        '</tpl>',
                    '</table>',
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
    	return template;
    },
    				
    initialize: function() {
    	var me = this;
    	
    	this.setTpl(this.getTemplate());
    	this.setStore(Ext.create('LDBTest.store.PropertyInfoStore', {id: 'PropertyInfoStore'}));
    	this.reloadIfDirty();
    }
    
});
