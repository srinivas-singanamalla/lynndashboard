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
			
			prodSelectField: '#pprodPoint',
			
			searchnavigation: 'searchnavigation'
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
				itemtap: this.onListItemtap
			}
			
		});
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
	},
	
	onListItemtap: function( dataview, index, target, record, eventObj, eOpts ) {
		console.log(record);
		console.log('propId' + record.get('value'));
		LDBTest.model.DBSingleton.setWellrecord(record);
		
		LDBTest.model.DBSingleton.setProdPoint(this.getProdSelectField().getRecord());
		LDBTest.model.DBSingleton.setPropertyID(record.get('value'));
		this.getSearchnavigation().push({xtype: 'dbcarousel', title: 'Summary for ' + record.get('name')});
	}
	
});