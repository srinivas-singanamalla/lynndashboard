Ext.define('LDBTest.view.HierarchySearchList', {
    extend: 'Ext.DataView',
    xtype : 'hierarchysearchlist',
    requires: [
//         'LDBTest.store.HierarchyListStore'
    ],

    config: {
//        deselectOnContainerClick: false,
    
    	store: Ext.create('LDBTest.store.HierarchyListStore'),
    
    	itemTpl: '<div>' +
    				'<table border="0px">' +
	    				'<tr>' +
	    					'<td width="500px" class="header">{WellCompletionName} ( {WellCompletionCode} )</td>' +
	    					'<td width="500px" class="header" style="text-align: right;">Status:{Status} Status Date: {StatusDate}</td>' +
	    				'</tr>' + 
	    				'<tr>' +
	    					'<td class="normal">{NetCashFlow}</td>'+
    						'<td class="normal" style="text-align: right;">{GrossCashFlow}</td>' +
    					'</tr>' +
    				'</table>' +
    			'</div>',
    			/*	
    				'<span width="300px">{WellCompletionName} ( {WellCompletionCode} )</span>'
    				'<h2><div class="leftsec">{WellCompletionName} ( {WellCompletionCode} )</div> <div class="rtsec">{TotalCount} </div></h2>' + 
    			 	'<div class="leftsec">Cash Flow:{GrossCashFlow}</div> <div class="rtsec">Status:{Status} Status Date: {StatusDate}</div>' + 
    			 '</div>',
    			 */
    	baseCls: 'my-dataview'
    },
    /**
     * Used so the "sorry something went wrong" message doesn't appear on first load
     * @private
     */
    /*
     * 
     * 
     * fields: [{
        	name: 'Area',
            type: 'String'
        }, 
        {
            name: 'BusinessUnit',
            type: 'String'
        },
        {
        	name: 'District',
            type: 'String'
        },		
        {
        	name: 'Division',
            type: 'String'
        },
        {
        	name: 'GrossCashFlow',
            type: 'double'
        },
        {
        	name: 'NetCashFlow',
            type: 'double'
        },
        {
        	name: 'Region',
            type: 'String'
        },
        {
        	name: 'Status',
            type: 'String'
        },
        {
        	name: 'StatusDate',
            type: 'String'
        },
        {
        	name: 'SubArea',
            type: 'String'
        },
        {
        	name: 'SupplyPointID',
            type: 'String'
        },
        {
        	name: 'TotalCount',
            type: 'String'
        },
        {
        	name: 'WellCompletionCode',
            type: 'String'
        },
        {
        	name: 'WellCompletionName',
            type: 'String'
        }
    refreshed: false,

    onLoad: function() {
        var me = this,
            store = me.getStore();

        me.callParent(arguments);

        if (store.getCount() === 0 && store.isLoaded()) {
            me.setMasked({
                xtype: 'loadmask',
                indicator: false,
                message: 'Sorry, Dashboard is having issues right now.'
            });

            me.getScrollable().getScroller().setDisabled(true);
        }
    }*/
});