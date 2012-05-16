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
               'Ext.field.Slider'
               ],
    
    config: {
    	direction: 'horizontal',
    	ui: 'light',
    	title : 'Production Plot',
		iconCls : 'home',
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
            {
                xtype: 'dashboardsummary'
            },
            {
                xtype: 'productionanalysischart'
            },
            {
            	xtype: 'dbstackedbarchart'
            },
            {
				xtype : 'porgchart'
            },
            {
                xtype: 'propertyinfo'
            }
        ],
        
        
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
    		show: this.onShow,
            scope: this
        });
    	this.callParent();
    },
    
    onActivate: function ( container, newActiveItem, oldActiveItem, eOpts ) {
    	
    },
    
    onDeactivate: function( container, newActiveItem, oldActiveItem, eOpts ) {
    	Ext.defer(
    		function(){
    			var carousel = Ext.ComponentQuery.query('dbcarousel')[0];
    	    	if (Ext.isDefined(carousel)) {
    	    		carousel.destroy();
    	    	}
    		}
    		, 1000, this);
    },
    
    onActiveitemchange: function(container, value, oldvalue, eopts) {
//    	alert('Carousel: onActiveitemchange');
    	if (container.isXType('dbcarousel')) {
    		var carousel = container,
    		segmented = carousel.down('segmentedbutton'),
    		activeIndex = carousel.getActiveIndex(),
    		itemcoll = segmented.getItems(),
    		item = itemcoll.get(activeIndex);
    		
    		itemcoll.each(function(thisitem, index, length){
//    			console.log(thisitem.getPressedCls());
//    			console.log(thisitem.getId());
    			thisitem.element.removeCls(thisitem.getPressedCls());
    		});
    		
    		if (item.isXType('button')) {
    			item.element.addCls(item.getPressedCls());
    		}
    		container.setTitle(value.getTitle() || "");
    		container.getActiveItem().reloadIfDirty && container.getActiveItem().reloadIfDirty();
//    		console.log(oldvalue);
    	}
    	
//		Ext.defer(function(){console.log("destroying"); oldvalue.destroy();}, 1000, this);
    },
    
    onShow: function() {
    }
    
});