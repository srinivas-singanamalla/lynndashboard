Ext.define('LDBTest.model.JsonServicesConstants', {
	
	requires: [
	           
	           ],
    statics: {
//    	callback: '?callback=Ext.data.JsonP.someCallback',
    	
    	callback: '',
    	
        baseUrl: function() {
            // 'this' in static methods refer to the class itself
            return 'http://50.57.145.54:8089/Json2/WcfServices/WellProfitabilitySvc.svc/';
        },
        
        getOrgTypesUrl: function() {
        	return this.baseUrl() + 'OrganizationTypes' + this.callback;
        },
        
        getOrgNamesUrl: function(orgType, productionPoint) {
        	return this.baseUrl() + 'Org/' + orgType + '/' + productionPoint + this.callback; 
        },
        
        getProductionPointsUrl: function() {
        	return this.baseUrl() + 'ProductionPoints' + this.callback;
        },
        
        getWellCompletionUrl: function(productionPoint) {
        	return this.baseUrl() + 'ProdPointWells/' + productionPoint + this.callback;
        },
        
        getPropertyWelllistUrl: function(productionPoint, searchkey) {
        	return this.baseUrl() + 'ProdPointWellsSearch/' + productionPoint + '/' + searchkey + this.callback;
        },
        
        getHierarchyWellListBaseUrl: function(){
        	return 'ProfitabilityWell';
        },
        
        getJsonPProxyPath: function() {
        	return 'linnproxy.jsonp';
        },
        
        getProductionPlotUrl: function() {
        	var singleton = LDBTest.model.DBSingleton,
        	record = singleton.getWellrecord(),
        	sttime = singleton.getStartTime(),
        	endtime = singleton.getEndTime(),
        	prodpoint = singleton.getProdPoint() && singleton.getProdPoint().get('Name'),
        	wellcompletionId = record && record.get('WellCompletionCode');
        	
        	if (singleton.getSearchType() == 'hierarchy') {
        		return this.baseUrl() + 'ProductionPlotList/' + prodpoint + '/' + 'Net' + '/' + 'MCFe' + '/' + wellcompletionId + '/' + 'Month' + '/' + sttime + '/' + endtime + this.callback;
        	} else {
        		
        	}
        	return this.baseUrl() + 'ProductionPlotList/SupplyPoint/Net/MCFe/1286215/Month/1314835200/1317340800';
        },
        
        getProfitabilityPlotUrl: function() {
        	var singleton = LDBTest.model.DBSingleton,
        	record = singleton.getWellrecord(),
        	sttime = singleton.getStartTime(),
        	endtime = singleton.getEndTime(),
        	prodpoint = singleton.getProdPoint() && singleton.getProdPoint().get('Name'),
        	propId = singleton.getPropertyID() && singleton.getPropertyID(),
        	wellcompletionId = record && record.get('WellCompletionCode'),
        	supplypointId = record && record.get('SupplyPointID');
        	
        	if (singleton.getSearchType() == 'hierarchy') {
//        		http://50.57.145.54:8089/Json2/WcfServices/WellProfitabilitySvc.svc/ProfitabilityAnalysisList/WellCompletion/Net/MCFe/20201/Month/1283299200/1317340800
//        		return this.baseUrl() + 'GetProfitabilityWell/' + prodpoint + '/ByID/' + supplypointId;
        		return this.baseUrl() + 'ProfitabilityAnalysisList/' + prodpoint + '/' + 'Net' + '/' + 'MCFe' + '/' + wellcompletionId + '/' + 'Month' + '/' + sttime + '/' + endtime + this.callback;
        	} else {
        		return this.baseUrl() + 'GetProfitabilityWell/' + prodpoint + '/ByID/' + propId;
        	}
        },
        
        getKPIPlotUrl: function() {
    		var singleton = LDBTest.model.DBSingleton,
        	record = singleton.getWellrecord(),
        	sttime = singleton.getStartTime(),
        	endtime = singleton.getEndTime(),
        	prodpoint = singleton.getProdPoint() && singleton.getProdPoint().get('Name'),
        	propId = singleton.getPropertyID() && singleton.getPropertyID(),
        	wellcompletionId = record && record.get('WellCompletionCode'),
        	supplypointId = record && record.get('SupplyPointID');
	        if (singleton.getSearchType() == 'hierarchy') {
	    		return this.baseUrl() + 'KPIList/' + prodpoint + '/' + 'Net' + '/' + 'MCFe' + '/' + wellcompletionId + '/' + 'Month' + '/' + sttime + '/' + endtime + this.callback;
	    	} else {
	    		return this.baseUrl() + 'KPIList/' + prodpoint + '/ByID/' + propId;
	    	}
        }
    }
});