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
        },
        
        getProductionPlotUrl: function(productionPoint, grossOrNet, uom, propID, timeUnit, stTime, endTime) {
//        	return this.baseUrl() + 'ProductionPlotList/SupplyPoint/Net/MCFe/1286215/Month/1314835200/1317340800';
        	return this.baseUrl() + 'ProductionPlotList/' + productionPoint + grossOrNet + uom + propID + timeUnit + stTime + endTime;
        }
        
        
    }
});