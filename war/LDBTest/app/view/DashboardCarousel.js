Ext.define("LDBTest.view.DashboardCarousel", {
    extend: 'Ext.carousel.Carousel',
    xtype: 'dbcarousel',
    requires: [
               'Ext.TitleBar', 
//               'LDBTest.view.SearchTabPanel', 
               'LDBTest.view.DashboardSummary',
               'LDBTest.view.ProductionAnalysisChart',
               'LDBTest.view.DBStackedBarChart',
               'LDBTest.view.PropertyInfo',
               'LDBTest.view.PseudoOrgChart',
               'Ext.util.DelayedTask',
               'Ext.SegmentedButton',
               'Ext.field.Slider',
               'LDBTest.model.DBSingleton'
               ],
    
    config: {
    	direction: 'horizontal',
    	ui: 'light',
    	title : 'Production Plot',
		iconCls : 'home',
		productionplot: null,
		profitabilityplot: null,
		kpiplot: null,
		shortpropertyinfo: null,
		
        items: [
			/*{
				docked : 'top',
				xtype : 'titlebar',
				id: 'titleBarId',
				title : 'Search for Wells ',
				items:  {
		        	xtype: 'button',
	                text: 'Change Time Interval',
	                hidden: false,
	                align : 'right',
	                ui    : 'action',
//	                action: 'viewSource',
	                handler: function() {
	                    if (!this.actions) {
	                        this.actions = Ext.Viewport.add({
	                            xtype: 'timesheet'
	                        });
	                    }
	                    this.actions.show();
	                }
	            }
			}, */
			{
                xtype: 'toolbar',
                docked: 'bottom',
                // Insert some buttons and space them out
                items: [
                  {
                    xtype: 'segmentedbutton',
                    itemId: 'switchViewsSegment',
                    defaults: {
                    	pressedCls: 'x-button-pressed'
                    },
                    items: 
                    	[
		                    { text:'Summary', iconCls: 'layout', iconMask:true, handler: function(button) {
		                    	Ext.ComponentQuery.query('dbcarousel')[0].setActiveItem(0);
		                    	console.log("button" + button.getText());
		                    } },
		                    { text:'Production Analysis', iconCls: 'line', iconMask:true, handler: function(button) {
		                    	Ext.ComponentQuery.query('dbcarousel')[0].setActiveItem(1);
		                    	console.log("button" + button.getText());
		                    } },
		                    { text:'Profitability Analysis', iconCls: 'column', iconMask:true, handler: function(button) {
		                    	Ext.ComponentQuery.query('dbcarousel')[0].setActiveItem(2);
		                    	console.log("button" + button.getText());
		                    } },
		                    { text:'KPI', iconCls: 'treemap', iconMask:true, handler: function(button) {
		                    	Ext.ComponentQuery.query('dbcarousel')[0].setActiveItem(3);
		                    	console.log("button" + button.getText());
		                    } },
		                    { text:'PropertyInfo', iconCls: 'info_plain', iconMask:true, handler: function(button) {
		                    	Ext.ComponentQuery.query('dbcarousel')[0].setActiveItem(4);
		                    	console.log("button" + button.getText());
		                    } }
		               ]
                  }
                ]
            },
            
        ]
        
        /*,

        listeners: {
            
        	activeitemchange: function(container, value, oldvalue, eopts) {
        		
        	}
        }*/
    },
    
    initialize: function() {
    	this.on({
    		activeitemchange: this.onActiveitemchange,
    		activate: this.onActivate,
    		deactivate: this.onDeactivate,
            scope: this
        });
    	this.callParent();
    	this.add([{
            xtype: 'container',
            id: 'dashboardsummary',
            layout: 'fit'
        },
        {
            xtype: 'container',
            layout: 'fit',
            id: 'productionplot'
        },
        {
        	xtype: 'container',
        	layout: 'fit',
        	id: 'profitablityplot'
        },
        {
			xtype : 'container',
			layout: 'fit',
            id: 'kpiplot'
        },
        {
            xtype: 'container',
            layout: 'fit',
            id: 'wellinfo'
        }]);
    },
    
    onActivate: function ( container, value, oldActiveItem, eOpts ) {
    	Ext.defer(function(){
    		var carousel = container,
    		newactiveItem = carousel.getActiveItem(),
    		time = LDBTest.model.DBSingleton.getTimeRange(),
    		activeIndex = carousel.getActiveIndex();
    		this.reloadOrCreateCard(container, value, oldActiveItem, eOpts);
    		if (container.isXType('dbcarousel')) {
    	    	if (newactiveItem.getAt(0) == null) {
    	    		newactiveItem.add(Ext.create(this.getCardPlotValueAt(activeIndex)));
    			} else {
    				newactiveItem.getAt(0).reloadIfDirty && newactiveItem.getAt(0).reloadIfDirty();
    			}
    	    	this.setTitle(newactiveItem.getAt(0).getTitle() + ' - ' + LDBTest.model.DBSingleton.getWellrecord().get('WellCompletionName') + ' ' + time);
        	}
    		
    		Ext.get('changeTimeInterval').show();
    	}, 600, this);
    	
//    	this.reloadOrCreateCard(container, newActiveItem, oldActiveItem, eOpts);
    	
    },
    
    onDeactivate: function( container, newActiveItem, oldActiveItem, eOpts ) {
    	/**
    	Ext.defer(
    		function(){
    			Ext.Logger.warn('removing all components');
    			this.removeAll(true, true);
    		}
    		, 1000, this);
    		
    	**/	
    },
    
    setDirty: function() {
    	Ext.each(this.getInnerItems(), function(item, index){
    		Ext.each(item.getInnerItems(), function(inner, index){
    			inner.setDirty && inner.setDirty(true);
    		});
    		
    	});
    },
    
    
    getCardPlotValueAt: function(index) {
    	switch (index) {
    	case 0:
			return 'LDBTest.view.DashboardSummary';
			break;
		case 1:
			return 'LDBTest.view.ProductionAnalysisChart';
			break;

		case 2:
			return 'LDBTest.view.DBStackedBarChart';
			break;
			
		case 3:
			return 'LDBTest.view.PseudoOrgChart';
			break;
		case 4:
			return 'LDBTest.view.PropertyInfo';
			break;	
		default:
			return '';
			break;
		}
    },
    
    reloadOrCreateCard: function(container, value, oldvalue, eopts) {
    	//container.setTitle(value.getTitle() || "");
    	if (container.isXType('dbcarousel')) {
    		var carousel = container,
    		segmented = carousel.down('segmentedbutton'),
    		activeIndex = carousel.getActiveIndex(),
    		itemcoll = segmented.getItems(),
    		item = itemcoll.get(activeIndex);
    		
    		itemcoll.each(function(thisitem, index, length){
    			thisitem.element.removeCls(thisitem.getPressedCls());
    		});
    		
    		if (item.isXType('button')) {
    			item.element.addCls(item.getPressedCls());
    		}
    	}
    },
    
    
    setTitle: function(title) {
    	//Hack: to dynamically change the title
    	var bar = Ext.getCmp('navigationBar');
    	if (bar.titleComponent.element) bar.titleComponent.element.setWidth('auto');
    	bar.titleComponent.setTitle(title);
    	bar.refreshProxy();
    },
    
    onActiveitemchange: function(container, value, oldvalue, eopts) {
    	var carousel = container,
    	fulltitle = '',
    	time = LDBTest.model.DBSingleton.getTimeRange(),
		activeIndex = carousel.getActiveIndex();
    	
    	this.reloadOrCreateCard(container, value, oldvalue, eopts, false);
    	if (container.isXType('dbcarousel')) {
	    	if (value.getAt(0) == null) {
				value.add(Ext.create(this.getCardPlotValueAt(activeIndex)));
			} else {
				value.getAt(0).reloadIfDirty && value.getAt(0).reloadIfDirty();
			}
	    	fulltitle = value.getAt(0).getTitle() + ' - ' + LDBTest.model.DBSingleton.getWellrecord().get('WellCompletionName');
	    	if (value.getAt(0).isXType('wellinfolist')) {
	    		Ext.get('changeTimeInterval').hide();
	    	} else {
	    		fulltitle = fulltitle + ' ' + time;
	    		Ext.get('changeTimeInterval').show();
	    	}
	    	this.setTitle(fulltitle);
    	}
    }
});