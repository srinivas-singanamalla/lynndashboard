Ext.util.Format.si = function(number) {
    var number = parseFloat(number),
        suffix = ['', 'k', 'm', 'b', 't'],
        len = Math.round(Math.abs(number)).toString().length - 1;
    if (len < 15) {
        return (Math.round(number / Math.pow(10, len-2)) / Math.pow(10, 2-(len%3))) + suffix[Math.floor(len/3)];
    }
    return number.toString();
}

wd.views.home = {};

wd.views.home.list = new Ext.List({
    store: null,
    itemTpl: '{alias}',
    listeners: {
        selectionchange: function (selectionModel, records) {
            if (records[0]) {
                wd.currentCountryIndicator = records[0];
                wd.views.cards.setActiveItem(
                    wd.views.data.card
                ).getActiveItem().update(wd.views.home.card, 'Home');
            }
        }
    }
});

wd.views.home.card = new Ext.Panel({
    id: 'homeCard',
    dockedItems: [{
        xtype: 'toolbar',
        title: 'World Data',
        items: [{xtype:'spacer'}, {
            iconCls:'info',
            iconMask: true,
            ui: 'plain',
            listeners: {
                tap: function () {
                    Ext.Msg.alert("Attribution", "The datasets displayed in this application come from <a href='worldbank.org'>The World Bank</a>, via its JSONP API.");
                }
            }
        }]
    }, {
        xtype: 'toolbar',
        dock: 'bottom',
        layout: 'fit',
        items: [{
            xtype: 'button',
            text: 'Data by region',
            flex:1,
            listeners: {
                tap: function () {
                    wd.resetSelections();
                    wd.views.cards.setActiveItem(
                        wd.views.regions.card.update(wd.views.home.card, 'Home')
                    );
                }
            }
        }, {
            xtype: 'button',
            text: 'Data by indicator',
            flex:1,
            listeners: {
                tap: function () {
                    wd.resetSelections();
                    wd.views.cards.setActiveItem(
                        wd.views.topics.card.update(wd.views.home.card, 'Home')
                    );
                }
            }
        }]
    }],
    layout:'fit',
    items: [wd.views.home.list]
});

//----------------------

wd.views.regions = {};
wd.views.regions.backButton = new Ext.Button({
    ui:'back',
    text: 'Home',
    backTo: 'homeCard',
    listeners: {tap: function () {
        wd.resetCountry();
        wd.views.cards.setActiveItem(this.backTo, {type:'slide', direction:'right'});
    }}
});
wd.views.regions.toolbar = new Ext.Toolbar({
    title: "Regions",
    items: [wd.views.regions.backButton]
});
wd.views.regions.list = new Ext.List({
    store: null,
    itemTpl: '{name}',
    listeners: {
        selectionchange: function (selectionModel, records) {
            if (records[0]) {
                wd.views.cards
                    .setActiveItem('regionCard')
                    .getActiveItem().update(records[0]);
            }
        }
    }
});

wd.views.regions.card = new Ext.Panel({
    id: 'regionsCard',
    dockedItems: [wd.views.regions.toolbar],
    items: [wd.views.regions.list],
    update: function(backTo, text) {
        wd.views.regions.backButton.setText(text).backTo = backTo;
        return this;
    }
});

//----------------------

wd.views.region = {};
wd.views.region.toolbar = new Ext.Toolbar({
    title: 'Region',
    items: [{
        ui:'back',
        text: 'Regions',
        listeners: {tap: function () {
            wd.views.cards.setActiveItem('regionsCard', {type:'slide', direction:'right'});
        }}
    }]
});
wd.views.region.card = new Ext.Panel({
    id: 'regionCard',
    layout: 'fit',
    dockedItems: [wd.views.region.toolbar],
    items: [
        (wd.views.region.list = new Ext.List({
            store: null,
            itemTpl: '{name}',
            listeners: {
                selectionchange: function (selectionModel, records) {
                    if (records[0]) {
                        wd.currentCountry = records[0];
                        if (!wd.currentIndicator) {
                            wd.views.cards.setActiveItem(
                                wd.views.topics.card.update(wd.views.region.card, 'Region')
                            );
                        } else {
                            wd.views.cards.setActiveItem(
                                wd.views.data.card
                            ).getActiveItem().update(wd.views.region.card, 'Region');
                        }
                    }
                }
            }
        }))
    ],
    update: function(region) {
        wd.views.region.toolbar.setTitle(region.get('name'));
        wd.views.region.list.bindStore(region.getCountries());
    }
});

//----------------------

wd.views.topics = {};
wd.views.topics.backButton = new Ext.Button({
    ui:'back',
    text: 'Home',
    backTo: 'homeCard',
    listeners: {tap: function () {
        wd.resetIndicator();
        wd.views.cards.setActiveItem(this.backTo, {type:'slide', direction:'right'});
    }}
});
wd.views.topics.toolbar = new Ext.Toolbar({
    title: "Topics",
    items: [wd.views.topics.backButton]
});
wd.views.topics.list = new Ext.List({
    store: null,
    itemTpl: '{value}',
    listeners: {
        selectionchange: function (selectionModel, records) {
            if (records[0]) {
                wd.views.cards
                    .setActiveItem('topicCard')
                    .getActiveItem().update(records[0]);
            }
        }
    }
});
wd.views.topics.card = new Ext.Panel({
    id: 'topicsCard',
    layout: 'fit',
    dockedItems: [wd.views.topics.toolbar],
    items: [wd.views.topics.list],
    update: function(backTo, text) {
        wd.views.topics.backButton.setText(text).backTo = backTo;
        return this;
    }
});

//----------------------

wd.views.topic = {};
wd.views.topic.toolbar = new Ext.Toolbar({
    title: 'Topic',
    items: [{
        ui:'back',
        text: 'Topics',
        listeners: {tap: function () {
            wd.views.cards.setActiveItem('topicsCard', {type:'slide', direction:'right'});
        }}
    }]
});
wd.views.topic.list = new Ext.List({
    store: null,
    itemTpl: '{name}',
    listeners: {
        selectionchange: function (selectionModel, records) {
            if (records[0]) {
                wd.currentIndicator = records[0];
                if (!wd.currentCountry) {
                    wd.views.cards.setActiveItem(
                        wd.views.regions.card.update(wd.views.topic.card, 'Topic')
                    );
                } else {
                    wd.views.cards.setActiveItem(
                        wd.views.data.card
                    ).getActiveItem().update(wd.views.topic.card, 'Topic');
                }
            }
        }
    }
});
wd.views.topic.card = new Ext.Panel({
    id: 'topicCard',
    layout: 'fit',
    dockedItems: [wd.views.topic.toolbar],
    items: [wd.views.topic.list],
    update: function(topic) {
        wd.views.topic.toolbar.setTitle(topic.get('value'));
        wd.views.topic.list.bindStore(topic.getIndicators());
    }
});


//----------------------

wd.views.data = {};
wd.views.data.backButton = new Ext.Button({
    ui:'back',
    text: 'Home',
    backTo: 'homeCard',
    listeners: {tap: function () {
        wd.currentCountryIndicator = null;
        wd.views.cards.setActiveItem(this.backTo, {type:'slide', direction:'right'});
    }}
});

wd.views.data.study = new Ext.Button({
    text: 'Add to workbench',
    listeners: {tap: function () {
        alert('doing stuff with ' + this.countryIndicator.get('name'));
    }}
});

wd.views.data.toolbar = new Ext.Toolbar({
    title: 'Indicator',
    items: [
        wd.views.data.backButton,
        //{xtype:'spacer'},
        //wd.views.data.study
    ]
});

wd.views.data.chart = new Ext.chart.Chart({
    store: null,
    theme: 'WorldData',
    interactions: [{
        type: 'reset'
    }, {
        type: 'panzoom'
    }, {
        type: 'iteminfo',
        gesture: 'taphold',
        listeners: {
            show: function(interaction, item, panel) {
                var record = item.storeItem;
                panel.getDockedItems()[0].setTitle(record.get('date').getFullYear());
                panel.update(record.data);
            }
        }
    }, {
        type: 'itemcompare',
        listeners: {
            show: function(interaction) {
                var record1 = interaction.item1.storeItem,
                    record2 = interaction.item2.storeItem,
                    panel = interaction.infoPanel,
                    y1 = record1.get('date').getFullYear(),
                    y2 = record2.get('date').getFullYear();

                panel.getDockedItems()[0].setTitle(
                    y1 < y2 ?
                    y1 + ' to ' + y2 :
                    y2 + ' to ' + y1
                );
                panel.show('pop');
                var data = (
                    y1 < y2 ?
                    {i1:record1.data, i2:record2.data} :
                    {i1:record2.data, i2:record1.data}
                );
                data.d = {
                    value: Math.abs(Math.round(100 * (data.i2.value - data.i1.value) / data.i1.value)),
                    direction: data.i2.value > data.i1.value ? 'rose' : 'fell'
                };
                panel.update(data);
            }
        },
        infoPanel: new Ext.Panel({
            floating: true,
            modal: true,
            centered: true,
            width: 250,
            styleHtmlContent: true,
            scroll: 'vertical',
            dockedItems: [{
                dock: 'top',
                xtype: 'toolbar',
                title: 'Item Detail'
            }],
            stopMaskTapEvent: false,
            listeners: {
                hide: function() {
                    wd.views.data.chart.interactions.get('itemcompare').reset();
                }
            }
        })
    }],
    axes: [{
        type: 'Numeric',
        grid: true,
        position: 'left',
        fields: ['value'],
        title: 'Value',
        label: {
            renderer: Ext.util.Format.si
        }
    }, {
        type: 'Time',
        dateFormat: 'Y',
        grid: true,
        position: 'bottom',
        fields: ['date'],
        title: 'Date'
    }],
    series: [{
        type: 'line',
        lineWidth: 1,
        showMarkers: true,
        fill: true,
        axis: 'left',
        xField: 'date',
        yField: 'value'
    }]
});

wd.views.data.card = new Ext.Panel({
    id: 'dataCard',
    layout: 'fit',
    dockedItems: [wd.views.data.toolbar],
    items: [
        wd.views.data.chart
    ],
    update: function(backTo, text) {
        wd.views.data.backButton.setText(text).backTo = backTo;

        if (!wd.currentCountryIndicator) {
            wd.currentCountryIndicator = wd.currentCountry.getCountryIndicator(wd.currentIndicator);
        }

        var title = wd.currentCountryIndicator.get('alias') || wd.currentCountryIndicator.get('name');
        var unit = wd.currentCountryIndicator.get('unit') || ""

        wd.views.data.toolbar.setTitle(title);
        var chart = wd.views.data.chart;

        chart.bindStore(wd.currentCountryIndicator.getData());
        chart.axes.items[0].title = unit;
        chart.interactions.get('iteminfo').getPanel().tpl = new Ext.XTemplate(
            '<b>' + title + ':</b>',
            '<br />{value:si} ' + unit
        );

        var itemcompare = chart.interactions.get('itemcompare');
        itemcompare.reset();
        itemcompare.infoPanel.tpl = new Ext.XTemplate(
            '<b>' + title + '</b> {d.direction} {d.value}% ',
            'from {i1.value:si} to {i2.value:si} ',
            unit
        );
        return this;
    }

});

wd.resetSelections = function() {
    wd.resetCountry();
    wd.resetIndicator();
    wd.currentCountryIndicator = null;
    wd.views.home.list.selModel.deselectAll();
}
wd.resetCountry = function() {
    wd.currentCountry = null;
    wd.views.regions.list.selModel.deselectAll();
    wd.views.region.list.selModel.deselectAll();
}
wd.resetIndicator = function() {
    wd.currentIndicator = null;
    wd.views.topics.list.selModel.deselectAll();
    wd.views.topic.list.selModel.deselectAll();
}

