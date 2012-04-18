Ext.define("LDBTest.view.WellSearchField", {
	xtype : 'wellsearchlist',
	extend: 'Ext.Panel',
	
	requires: [
	           'Ext.data.Store',
	           'Ext.List',
	           'Ext.field.Search',
	           'Ext.Toolbar',
	           'LDBTest.store.WellStore'
	       ],
	       
	       
	 initialize: function() {   
		 var listConfiguration = this.getListConfiguration();
		 var searchPanel = Ext.create('Ext.Panel', {
             //panel gets special styling when it is floating
             xtype: 'panel',

             //give it a fixed width and height
             width: 380,
             height: 420,

             // We give it a left and top property to make it floating by default
             left: 0,
             top: 0,

            

             //give it a fit layout so the list item stretches to the size of this panel
             layout: 'fit',

             //give it 1 item which is the listConfiguration
             items: [listConfiguration]
         });
		 
		 this.add(searchPanel);
	 },

	constructor : function(config) {
		this.callParent([ config ]);
	},
	
	/**
     * Returns the configuration of the list for this example, to be inserted into the viewport in the launch method.
     */
    getListConfiguration: function() {
        return {
            //give it an xtype of list
            xtype: 'list',

            ui: 'round',

            pinHeaders: false,

            //itemTpl defines the template for each item in the list
            itemTpl: '<div class="contact">{ProductionPointWellName} <strong>{PropertyID}</strong></div>',

            //give it a link to the store instance
            store: this.getStore(),


            grouped: true,
            emptyText: '<div style="margin-top: 20px; text-align: center">No Matching Items</div>',
            disableSelection: false,
            
            listeners: {
 	    	   select: function(view, record) {
 	    		   //var pageIndex = Number(record.get("pageNumber"));
 	    		  var productionStore = Ext.getStore('ProductionLineStore');
 	    		  console.log(productionStore);
 	    		 productionStore.getProxy().setExtraParams({ PropertyID: 1266415 });
 	    		productionStore.load();
 	    		   Ext.getCmp('wellsearchlistId').hide();
 	    	   }
            },      
 	       

            items: [
                {
                    xtype: 'toolbar',
                    docked: 'top',

                    items: [
                        { xtype: 'spacer' },
                        {
                            xtype: 'searchfield',
                            placeHolder: 'Search Well...',
                            listeners: {
                                scope: this,
                                clearicontap: this.onSearchClearIconTap,
                                keyup: this.onSearchKeyUp
                            }
                        },
                        { xtype: 'spacer' }
                    ]
                }
            ]
        };
    },
    
    /**
     * Returns a new store instance if one hasn't been created yet
     * @return {Ext.data.Store}
     */
    getStore: function() {
        //check if a store has already been set
        if (!this.store) {
            //if not, create one
            this.store = Ext.create('LDBTest.store.WellStore');
        }

        //return the store instance
        return this.store;
    },

    /**
     * Called when the search field has a keyup event.
     *
     * This will filter the store based on the fields content.
     */
    onSearchKeyUp: function(field) {
        //get the store and the value of the field
        var value = field.getValue(),
            store = this.getStore();

        //first clear any current filters on thes tore
        store.clearFilter();

        //check if a value is set first, as if it isnt we dont have to do anything
        if (value) {
            //the user could have entered spaces, so we must split them so we can loop through them all
            var searches = value.split(' '),
                regexps = [],
                i;

            //loop them all
            for (i = 0; i < searches.length; i++) {
                //if it is nothing, continue
                if (!searches[i]) continue;

                //if found, create a new regular expression which is case insenstive
                regexps.push(new RegExp(searches[i], 'i'));
            }

            //now filter the store by passing a method
            //the passed method will be called for each record in the store
            store.filter(function(record) {
                var matched = [];

                //loop through each of the regular expressions
                for (i = 0; i < regexps.length; i++) {
                    var search = regexps[i],
                        didMatch = record.get('ProductionPointWellName').match(search) /*|| record.get('lastName').match(search)*/;

                    //if it matched the first or last name, push it into the matches array
                    matched.push(didMatch);
                }

                //if nothing was found, return false (dont so in the store)
                if (regexps.length > 1 && matched.indexOf(false) != -1) {
                    return false;
                } else {
                    //else true true (show in the store)
                    return matched[0];
                }
            });
        }
    },

    /**
     * Called when the user taps on the clear icon in the search field.
     * It simply removes the filter form the store
     */
    onSearchClearIconTap: function() {
        //call the clearFilter method on the store instance
        this.getStore().clearFilter();
    }

});