Ext.define("LDBTest.store.ProductionLineStore", { 
    extend: "Ext.data.JsonStore",
    alias: 'store.ProductionLineStore',
    config: {
        id: 'ProductionLineStore',
//        rootProperty: 'items',
        idProperty: 'AnalysisDate',
        fields: [{
            name: 'AnalysisDate',
            type: 'String'
        }, {
            name: 'StrDT',
            type: 'String'
        },{
            name: 'Gas',
            type: 'double'
        }, {
            name: 'Oil',
            type: 'double'
        }, {
            name: 'NGL',
            type: 'double'
        }, {
            name: 'Water',
            type: 'double'
        }, {
            name: 'Forecast',
            type: 'double'
        },{
            name: 'Total',
            type: 'double'
        }],
        proxy: {
        	type: 'jsonp',
            url: LDBTest.model.JsonServicesConstants.getProductionPlotUrl(),
            reader: {
                type: 'json'
            }
        },
        autoLoad: false
    }
});
