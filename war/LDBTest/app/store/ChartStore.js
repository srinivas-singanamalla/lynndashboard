Ext.define("LDBTest.store.ChartStore", { 
    extend: "Ext.data.JsonStore",
    alias: 'store.ChartStore',
    config: {
        id: 'ChartStore',
        idProperty: 'AnalysisDate',
        fields: [{
            name: 'AnalysisDate',
        }, {
            name: 'CashFlow',
            type: 'double'
        }, {
            name: 'Deduct',
            type: 'double'
        }, {
            name: 'GasRevenue',
            type: 'double'
        }, {
            name: 'NGLRevenue',
            type: 'double'
        }, {
            name: 'OilRevenue',
            type: 'double'
        }, {
            name: 'Revenue',
            type: 'double'
        }, {
            name: 'Tax',
            type: 'double'
        }, {
            name: 'TotalExpense',
            type: 'double'
        }],
        
        proxy: {
            type: 'jsonp',
            reader: {
                type: 'json',
                rootProperty: 'items'
            }
        },
        autoLoad: false
    }
});
