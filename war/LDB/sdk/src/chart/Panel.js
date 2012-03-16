/**
 * @ignore
 */
Ext.define('Ext.chart.Panel', {

    extend: 'Ext.Container',
    requires: ['Ext.chart.Chart'],

    config: {
        chart: null,

        buttons: [],

        defaultType: 'chart',

        layout: 'fit',

        title: ''
    },

    constructor: function (config) {
    	console.log("u are here in the constructor");
        var ui = config.ui || 'dark',
            toolbar = {
            xtype: 'panel',
            height: '2.6em',
            docked: 'top',
            layout: {
                type: 'card',
                align: 'stretch'
            },
            activeItem: 0,
            ui: ui,
            items: [
                {
                    xtype: 'toolbar',
                    ui: ui,
                    title: '',
                    items: {
                        xtype: 'spacer'
                    }
                },
                {
                    xtype: 'toolbar',
                    ui: ui,
                    title: ''
                }
            ]
        };
        config.items = [toolbar];
        this.callParent([config]);
    },

    initialize: function (config) {
    	console.log("initialize in the chartpanel");
        var me = this,
            headerPanel;
        me.callParent(arguments);

        headerPanel = me.headerPanel = me.getItems().get(0);
        me.descriptionPanel = headerPanel.getItems().get(1);

    },

    updateTitle: function (title) {
    	console.log("title chart is " + title);
        this.getItems().get(0).getItems().get(0).setTitle(title);
    },

    applyButtons: function (buttons) {
        return this.getItems().get(0).getItems().get(0).add(buttons);
    },

    applyChart: function (chart, currentChart) {
        if (chart !== currentChart) {
        	console.log("u are here chart not current chart");
            chart = Ext.factory(chart, 'Ext.chart.Chart', currentChart);
        }
        
        if (!currentChart) {
        	console.log("adding chart");
            this.add(chart);
        }
        return chart;
    }
});
