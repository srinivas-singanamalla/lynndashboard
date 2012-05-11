Ext.define('LDBTest.controller.WellsearchController', {
	extend: 'Ext.app.Controller',
	
	views: ['PropertySearch', 'PropertyWellList'],
	
	requires: [
	           'LDBTest.view.PropertySearch',
	           'LDBTest.view.PropertyWellList'
	           ],
	           
	config: {
		refs: {
			searchwellfield: 'searchproperty',
			
			welllist: 'propertywelllist',
			
			prodSelectField: '#pprodPoint'
				
				
		}
	},           
	
	init: function() {
		this.control({
			'#searchproperty' : {
				keyup: this.onKeyup,
				
				clearicontap: this.onClearicontap
			},
			
			'#pprodPoint' : {
				change: this.onProductionPointChange
			},
			
			'propertywelllist': {
				select: this.onSelectWell
			}
		});
	},
	
	onSelectWell: function(view, record) {
		this.getSearchwellfield().setValue(record.get('name'));
	},
	
	onProductionPointChange: function(field, newValue, oldValue, eOpts) {
		console.log("production point type changed");
		this.loadPropertyList('A');
	},
	
	onSearchfieldRendered: function() {
		console.log("searchfield is rendered");
	},
	
	loadPropertyList: function(searchkey) {
		var prod = this.getProdSelectField().getValue();
		this.getStore().getProxy().setUrl(LDBTest.model.JsonServicesConstants.getPropertyWelllistUrl(prod, searchkey));
		this.getStore().load();
	},
	
	getStore: function() {
        return Ext.data.StoreManager.lookup('PropertySearchWellStore');
    },
    
	onKeyup: function(field) {
		console.log("onkeyup search");
		//get the store and the value of the field
        var value = field.getValue();
        if (value) {
        	this.loadPropertyList(value);
        }
        
	},
	
	onClearicontap: function() {
		this.loadPropertyList('A');
	}
	
});