Ext.define('LDBTest.controller.HierarchySearchController', {
	extend: 'Ext.app.Controller',
	views: [
	        'HierarchySearch'
	        ],
	requires: [
	           'LDBTest.view.HierarchySearch',
	           'LDBTest.model.JsonServicesConstants',
	           'LDBTest.view.DashboardCarousel'
	           ],
	config: {
		refs: {
			selectProd: '#hprodPoint',
			
			selectOrgType: 'selectfield[name=orgType]',
			
			selectOrgName: 'selectfield[name=orgName]',
			
			searchwell: '#searchhierarchy',
			
			hierarchylist: 'hierarchysearchlist',
			
			searchnavigation: 'searchnavigation'
		},
		
		dbcarousel: null
	},
	
	init: function(){
		this.control({
			'#hprodPoint': {
				change: this.onProductionPointChange
			},
			
			'selectfield[name=orgType]': {
				change: this.onOrgTypeChange
			},
			
			'selectfield[name=orgName]': {
				change: this.onOrgNameChange
			},
			
			'#searchhierarchy': {
				keyup: this.onSearchKeyup,
				
				clearicontap: this.onClearicontap
			},
			
			'hierarchysearchlist': {
				itemtap: this.onListItemtap
			}
		});
	},
	
	onProductionPointChange: function(field, newValue, oldValue, eOpts) {
		console.log("onProductionPointChange");
	},
	
	onOrgTypeChange: function(field, newValue, oldValue, eOpts) {
		var orgType = this.getSelectOrgType().getValue(),
		prodType = this.getSelectProd().getValue();
		var fetchOrgNamesUrl = LDBTest.model.JsonServicesConstants.getOrgNamesUrl(orgType, prodType);
		console.log("onOrgTypeChange");
		this.getSelectOrgName().getStore().getProxy().setUrl(fetchOrgNamesUrl);
		this.getSelectOrgName().getStore().load();
	},
	
	onOrgNameChange: function(field, newValue, oldValue, eOpts) {
		console.log("onOrgNameChange");
		this.loadHierarchyList();
	},
	
	
	loadHierarchyList: function() {
		var jsonData = {};
		jsonData['FilterType'] = 0;
		jsonData['NumWells'] = 15;
		jsonData['OrgLevel'] = this.getSelectOrgType().getValue() || '';
		jsonData['ProductionPointName'] = this.getSelectProd().getValue();
		jsonData['PropertyID'] = this.getSelectOrgName().getValue();
		jsonData['TopOrBottomCount'] = 'Top';
		
		this.getHierarchylist().getStore().loadpostRequest(jsonData, this.getHierarchylist());
	},
	
	onSearchKeyup: function() {
		console.log("onSearchKeyup");
	},
	
	onClearicontap: function() {
		console.log("onClearicontap");
	},
	
	onListItemtap: function( dataview, index, target, record, eventObj, eOpts ) {
		console.log("etateaeadadad" + this.getSelectProd().getRecord());
		console.log(record);
		LDBTest.model.DBSingleton.setWellrecord(record);
		LDBTest.model.DBSingleton.setProdPoint(this.getSelectProd().getRecord());
		LDBTest.model.DBSingleton.setPropertyID(this.getSelectOrgName().getValue());
		this.getSearchnavigation().push({xtype: 'dbcarousel'});
	}
	
});