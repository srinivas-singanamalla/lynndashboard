Ext.define('LDBTest.view.StackedColumn', { 
 
    extend: 'Ext.chart.series.Column',

    type: 'stackedColumn',
    /**
     * @private
     */
    column: true,
   
    
    constructor: function(config) {
        this.callParent(arguments);
        
        var me = this;
        me.stacked = true;
        me.initialStacked = me.stacked;
    },

});