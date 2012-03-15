	window.generateData = function(n, floor) {
            var data = [],
                i;

            floor = (!floor && floor !== 0)? 20 : floor;

            for (i = 0; i < (n || 12); i++) {
                data.push({
                    name: 'Jan',//Date.monthNames[i % 12],
                    2003: Math.floor(Math.max((Math.random() * 100), floor)),
                    2004: Math.floor(Math.max((Math.random() * 100), floor)),
                    2005: Math.floor(Math.max((Math.random() * 100), floor)),
                    2006: Math.floor(Math.max((Math.random() * 100), floor)),
                    2007: Math.floor(Math.max((Math.random() * 100), floor)),
                    2008: Math.floor(Math.max((Math.random() * 100), floor)),
                    2009: Math.floor(Math.max((Math.random() * 100), floor))
                });
            }
            return data;
        };
        window.store1 = Ext.create('Ext.data.JsonStore', {
            fields: ['name', '2003', '2004', '2005', '2006', '2007', '2008', '2009'],
            data: generateData(5, 20)
        });


Ext.define("LDB.view.DBAreaChart", {
	extend : 'Ext.chart.Panel',
	xtype: 'dbareachart',
	
	config: {
        autoSize: true,
        title: 'Area Chart tEST',
        width: 450,
        height: 450,
        items: {
            cls: 'area1',
            theme: 'Demo',
            store: store1,
            animate: true,
            
            legend: {
                position: {
                    portrait: 'bottom',
                    landscape: 'right'
                },
                labelFont: '20px Arial'
            },
            axes: [{
                type: 'Numeric',
                position: 'left',
                fields: ['2003', '2004', '2005', '2006', '2007', '2008', '2009'],
                title: 'Number of Hits',
                minimum: 0,
                adjustMinimumByMajorUnit: 0
            }, {
                type: 'Category',
                position: 'bottom',
                fields: ['name'],
                title: 'Month of the Year'
            }],
            series: [{
                type: 'area',
                highlight: false,
                axis: 'left',
                xField: 'name',
                yField: ['2003', '2004', '2005', '2006', '2007', '2008', '2009']
            }]
        }
	}
})