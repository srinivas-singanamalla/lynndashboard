Ext.define('LDBTest.controller.HierarchySearchController', {
	extend: 'Ext.app.Controller',
	views: [
	        'HierarchySearch'
	        ],
	requires: [
	           'LDBTest.view.HierarchySearch',
	           'LDBTest.model.JsonServicesConstants'
	           ],
	config: {
		refs: {
			selectProd: '#hprodPoint',
			
			selectOrgType: 'selectfield[name=orgType]',
			
			selectOrgName: 'selectfield[name=orgName]',
			
			searchwell: '#searchhierarchy',
			
			hierarchylist: 'hierarchysearchlist'
		}
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
	}
});