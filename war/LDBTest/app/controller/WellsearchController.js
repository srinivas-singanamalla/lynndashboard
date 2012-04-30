Ext.define('LDBTest.controller.WellsearchController', {
	extend: 'Ext.app.Controller',
	
	views: ['PropertySearch', 'WellListPanel'],
	
	requires: [
	           'LDBTest.view.PropertySearch',
	           'LDBTest.view.WellListPanel'
	           ],
	           
	config: {
		refs: {
			searchwellfield: 'searchfield[name=searchwell]',
			
			welllistpanel: {
				selector: 'welllistpanel',
				xtype: 'welllistpanel',
                autoCreate: true
			},
			
			welllist: 'welllistpanel list'
		}
	},           
	
	init: function() {
		this.control({
			'searchfield' : {
				keyup: this.onKeyup,
				
				clearicontap: this.onClearicontap
			},
			
			'selectfield' : {
				change: this.onProductionPointChange
			},
			
			'welllist': {
				select: this.onSelectWell
			}
		});
	},
	
	onSelectWell: function(view, record) {
		this.getSearchwellfield().setValue(record.get('name'));
		this.getWelllistpanel().hide();
	},
	
	onProductionPointChange: function(field, newValue, oldValue, eOpts) {
		console.log("production point type changed");
	},
	
	onSearchfieldRendered: function() {
		console.log("searchfield is rendered");
	},
	
	getStore: function() {
        return Ext.data.StoreManager.lookup('PropertySearchWellStore');
    },
    
	onKeyup: function(field) {
		console.log("onkeyup search");
		//get the store and the value of the field
        var value = field.getValue(),
            store = this.getStore();
//        console.log(value);
//        console.log(store);
      //first clear any current filters on thes tore
        
//        store.clearFilter();
        this.getWelllistpanel().hide();
        //check if a value is set first, as if it isnt we dont have to do anything
        if (value && value.length > 3) {
        	debugger;
        	this.getWelllistpanel().showBy(field, 'tc-bc?');
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
                        didMatch = record.get('name').match(search) /*|| record.get('lastName').match(search)*/;

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
	
	onClearicontap: function() {
		var store = this.getStore();
        store.clearFilter();
        this.getWelllistpanel().hide();
	}
	
});