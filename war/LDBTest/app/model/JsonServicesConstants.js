Ext.define('LDBTest.model.JsonServicesConstants', {
	
	requires: [
	           
	           ],
    statics: {
//    	callback: '?callback=Ext.data.JsonP.someCallback',
    	
    	callback: '',
    	
        baseUrl: function() {
            return 'http://50.57.145.54:8087/Json2/JsonServices/WellProfitabilitySvc.svc/';
//            return 'http://dev.dw.linnenergy.com:8087/JsonWellProfitability/JsonServices/WellProfitabilitySvc.svc/';
        },
        
        getOrgTypesUrl: function() {
        	return this.baseUrl() + 'OrganizationTypes' + this.callback;
        },
        
        getOrgNamesUrl: function(orgType, productionPoint) {
        	return this.baseUrl() + 'Org/' + orgType + this.callback; 
        },
        
        getProductionPointsUrl: function() {
        	return this.baseUrl() + 'ProductionPoints' + this.callback;
        },
        
        getWellCompletionUrl: function(productionPoint) {
        	return this.baseUrl() + 'ProdPointWells/' + productionPoint + this.callback;
        },
        
        getPropertyWelllistUrl: function(productionPoint, searchkey) {
        	if (searchkey == '') {
        		return this.baseUrl() + 'ProdPointWells/' + productionPoint + '/20' + this.callback;
        	}
        	return this.baseUrl() + 'ProdPointWellsSearch/' + productionPoint + '/' + searchkey + this.callback;
        },
        
        getHierarchyWelllistUrl: function(productionPoint, orgLevel, propId) {
        	return this.baseUrl() + 'GetProfitabilityWell/' + productionPoint + '/' + orgLevel + '/' + propId + this.callback;
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
        	sttime = singleton.getStartTimeInSecs(),
        	endtime = singleton.getEndTimeInSecs(),
        	propId = singleton.getPropertyID() && singleton.getPropertyID(),
        	prodpoint = singleton.getProdPoint() && singleton.getProdPoint().get('Name'),
        	wellcompletionId = record && record.get('WellCompletionCode'),
        	volType = singleton.getVolumeRateType(),
        	profType = singleton.netOrGrossType(),
        	supplypointId = record && record.get('SupplyPointID');
        	
        	return this.baseUrl() + 'ProductionPlotList/' + prodpoint + '/' + profType + '/' + volType + '/' + propId + '/' + 'Month' + '/' + sttime + '/' + endtime + this.callback;
        },
        
        getProfitabilityPlotUrl: function() {
        	var singleton = LDBTest.model.DBSingleton,
        	record = singleton.getWellrecord(),
        	sttime = singleton.getStartTimeInSecs(),
        	endtime = singleton.getEndTimeInSecs(),
        	volType = singleton.getVolumeRateType(),
        	profType = singleton.netOrGrossType(),
        	prodpoint = singleton.getProdPoint() && singleton.getProdPoint().get('Name'),
        	propId = singleton.getPropertyID() && singleton.getPropertyID(),
        	wellcompletionId = record && record.get('WellCompletionCode'),
        	supplypointId = record && record.get('SupplyPointID');
        	
        	return this.baseUrl() + 'ProfitabilityAnalysisList/' + prodpoint + '/' + profType + '/' + volType + '/' + propId + '/' + 'Month' + '/' + sttime + '/' + endtime + this.callback;
        },
        
        getKPIPlotUrl: function() {
    		var singleton = LDBTest.model.DBSingleton,
        	record = singleton.getWellrecord(),
        	sttime = singleton.getStartTimeInSecs(),
        	endtime = singleton.getEndTimeInSecs(),
        	volType = singleton.getVolumeRateType(),
        	profType = singleton.netOrGrossType(),
        	prodpoint = singleton.getProdPoint() && singleton.getProdPoint().get('Name'),
        	propId = singleton.getPropertyID() && singleton.getPropertyID(),
        	wellcompletionId = record && record.get('WellCompletionCode'),
        	supplypointId = record && record.get('SupplyPointID');
	    	return this.baseUrl() + 'KPIList/' + prodpoint + '/' + profType + '/' + volType + '/' + propId + '/' + 'Month' + '/' + sttime + '/' + endtime + this.callback;
        },
        
        getExpenseBreakdownUrl: function() {
    		var singleton = LDBTest.model.DBSingleton,
        	record = singleton.getWellrecord(),
        	sttime = singleton.getStartTimeInSecs(),
        	endtime = singleton.getEndTimeInSecs(),
        	volType = singleton.getVolumeRateType(),
        	profType = singleton.netOrGrossType(),
        	prodpoint = singleton.getProdPoint() && singleton.getProdPoint().get('Name'),
        	propId = singleton.getPropertyID() && singleton.getPropertyID(),
        	wellcompletionId = record && record.get('WellCompletionCode'),
        	supplypointId = record && record.get('SupplyPointID');
	    	return this.baseUrl() + 'ExpenseBreakDown/' + prodpoint + '/' + profType + '/' + volType + '/' + propId + '/' + 'Month' + '/' + sttime + '/' + endtime + this.callback;
        },
        
        getPropertyWellInfo: function(input) {
        	var singleton = LDBTest.model.DBSingleton,
        	record = singleton.getWellrecord(),
        	sttime = singleton.getStartTimeInSecs(),
        	endtime = singleton.getEndTimeInSecs(),
        	volType = singleton.getVolumeRateType(),
        	profType = singleton.netOrGrossType(),
        	propId = singleton.getPropertyID() && singleton.getPropertyID(),
        	infotype = 'WellCombinedData';
        	
        	if (input == 'id') {
        		infotype = 'WellIDData';
        	} else if (input == 'other') {
        		infotype = 'WellOtherData';
        	} else if (input == 'loc') {
        		infotype = 'WellLocData';
        	}
        	
	    	return this.baseUrl() + infotype + '/' + propId + this.callback;
        }
    }
});