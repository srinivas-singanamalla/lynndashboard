Ext.define('LDBTest.view.HierarchySearchList', {
    extend: 'Ext.DataView',
    xtype : 'hierarchysearchlist',
    requires: [
//         'LDBTest.store.HierarchyListStore'
    ],

    config: {
//        deselectOnContainerClick: false,
    
    	store: Ext.create('LDBTest.store.HierarchyListStore'),
    
    	itemTpl: '<h2>{BusinessUnit}</h2><p>{District}</p>',
    	baseCls: 'my-dataview'
    },
    /**
     * Used so the "sorry something went wrong" message doesn't appear on first load
     * @private
     */
    /*
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