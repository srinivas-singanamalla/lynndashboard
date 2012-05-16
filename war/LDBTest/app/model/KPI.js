Ext.define('LDBTest.model.KPI', {
	extend: 'Ext.data.Model',
	
	config: {
		fields: [{
            name: 'DailyAvgVolume',
            type: 'int'
        }, {
            name: 'DailyAvgVolumePct',
            type: 'double'
        }, {
            name: 'DailyAvgVolumeVariance',
            type: 'double'
        }, {
            name: 'Gas',
            type: 'double'
        }, {
            name: 'GasPct',
            type: 'double'
        }, {
            name: 'GasVariance',
            type: 'double'
        }, {
            name: 'NGL',
            type: 'double'
        }, {
            name: 'NGLPct',
            type: 'double'
        },{
            name: 'NGLVariance',
            type: 'double'
        }, {
            name: 'Oil',
            type: 'double'
        }, {
            name: 'OilPct',
            type: 'double'
        },{
            name: 'OilVariance',
            type: 'double'
        }]
	}
});