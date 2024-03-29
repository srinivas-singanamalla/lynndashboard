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
    	dirty: true,
    	store: null,
    	tpl: null,
        data: null,
        store: null,
    },
    
    reloadIfDirty: function() {
		this.setMasked({xtype: 'loadmask',
		    message: 'Loading...'});
		this.getStore().getProxy().setUrl(LDBTest.model.JsonServicesConstants.getPropertyWellInfo('loc'));
		this.getStore().load(function(records, operation, success) {
	    	if (success) {
	    		this.setData(operation.getResponse());
	    		Ext.Logger.warn('Property Info  #success');
	    		this.setDirty(false);
	    		this.setMasked(false);
	    	}
	    }, this);
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
    
    initialize: function() {
    	var me = this;
    	var template = new Ext.XTemplate(
    			'<div class="centerwellinfo">',
    				'<div><h2 style="color:white; font-weight: bold; text-decoration: underline; margin:bottom:5px;">Well Location Data:</h2></div>',
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
    	this.setTpl(template);
    	this.setStore(Ext.create('LDBTest.store.PropertyInfoStore', {id: 'PropertyInfoStore'}));
    	this.reloadIfDirty();
    }
});
