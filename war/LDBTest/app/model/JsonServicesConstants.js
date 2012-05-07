Ext.define('LDBTest.model.JsonServicesConstants', {
    statics: {
        baseUrl: function() {
            // 'this' in static methods refer to the class itself
            return 'http://50.57.145.54:8089/Json2/WcfServices/WellProfitabilitySvc.svc/';
        },
        
        getOrgTypesUrl: function() {
        	return this.baseUrl() + 'OrganizationTypes?callback=Ext.data.JsonP.someCallback';
        },
        
        getOrgNamesUrl: function(orgType, productionPoint) {
        	return this.baseUrl() + 'Org/' + orgType + '/' + productionPoint + '?callback=Ext.data.JsonP.someCallback'; 
        },
        
        getProductionPointsUrl: function() {
        	return this.baseUrl() + 'ProductionPoints?callback=Ext.data.JsonP.productionPointsCallback';
        },
        
        getWellCompletionUrl: function(productionPoint) {
        	return this.baseUrl() + 'ProdPointWells/' + productionPoint + '?callback=Ext.data.JsonP.someCallback';
        },
        
        getHierarchyWellListBaseUrl: function(){
        	return 'ProfitabilityWell';
        },
        
        getJsonPProxyPath: function() {
        	return 'linnproxy.jsonp';
        }
        
        
    }
});