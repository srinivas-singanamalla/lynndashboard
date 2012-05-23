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
		this.getStore().getProxy().setUrl(LDBTest.model.JsonServicesConstants.getPropertyWellInfo());
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
//    	this.setData([{"Label":"API:","Value":"42-227-36278-00-"},{"Label":"Unit Lease:","Value":"BARNES 03 (RRC#40109)"},{"Label":"Operated:","Value":"Yes"},{"Label":"Location","Value":""},{"Label":"County:","Value":"Howard"},{"Label":"State:","Value":"TX"},{"Label":"Section:","Value":"3"},{"Label":"Township:","Value":"001-N"},{"Label":"Range:","Value":"UNK"},{"Label":"SubArea:","Value":"PB-FAIRVIEW"},{"Label":"Area:","Value":"PB-EAST WOLFBERRY OP"},{"Label":"District:","Value":"PB-TEXAS OP"},{"Label":"Business Unit:","Value":"PERMIAN BASIN TX"},{"Label":"Other Well Info","Value":""},{"Label":"NRI (Gas):","Value":"0.71"},{"Label":"NRI (Oil):","Value":"0.71"},{"Label":"Working Interest:","Value":"0.95"}]);
    },
    
    
});
