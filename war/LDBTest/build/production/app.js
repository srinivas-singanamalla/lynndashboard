/*8192ae9b2a8d5cfdaded473ac0faa8460ddb3bc0*/Ext.define("LDBTest.model.DBSingleton",{extend:"Ext.util.Observable",singleton:true,config:{startTime:1214835200,endTime:1317340800,wellrecord:null,searchType:"hierarchy",prodPoint:null,propertyID:null}});Ext.define("LDBTest.model.JsonServicesConstants",{requires:[],statics:{callback:"",baseUrl:function(){return"http://50.57.145.54:8089/Json2/WcfServices/WellProfitabilitySvc.svc/"},getOrgTypesUrl:function(){return this.baseUrl()+"OrganizationTypes"+this.callback},getOrgNamesUrl:function(b,a){return this.baseUrl()+"Org/"+b+"/"+a+this.callback},getProductionPointsUrl:function(){return this.baseUrl()+"ProductionPoints"+this.callback},getWellCompletionUrl:function(a){return this.baseUrl()+"ProdPointWells/"+a+this.callback},getPropertyWelllistUrl:function(a,b){return this.baseUrl()+"ProdPointWellsSearch/"+a+"/"+b+this.callback},getHierarchyWellListBaseUrl:function(){return"ProfitabilityWell"},getJsonPProxyPath:function(){return"linnproxy.jsonp"},getProductionPlotUrl:function(){var d=LDBTest.model.DBSingleton,a=d.getWellrecord(),f=d.getStartTime(),c=d.getEndTime(),e=d.getProdPoint()&&d.getProdPoint().get("Name"),b=a&&a.get("WellCompletionCode");if(d.getSearchType()=="hierarchy"){return this.baseUrl()+"ProductionPlotList/"+e+"/Net/MCFe/"+b+"/Month/"+f+"/"+c+this.callback}else{}return this.baseUrl()+"ProductionPlotList/SupplyPoint/Net/MCFe/1286215/Month/1314835200/1317340800"},getProfitabilityPlotUrl:function(){var f=LDBTest.model.DBSingleton,a=f.getWellrecord(),h=f.getStartTime(),d=f.getEndTime(),g=f.getProdPoint()&&f.getProdPoint().get("Name"),c=f.getPropertyID()&&f.getPropertyID(),b=a&&a.get("WellCompletionCode"),e=a&&a.get("SupplyPointID");if(f.getSearchType()=="hierarchy"){return this.baseUrl()+"ProfitabilityAnalysisList/"+g+"/Net/MCFe/"+b+"/Month/"+h+"/"+d+this.callback}else{return this.baseUrl()+"GetProfitabilityWell/"+g+"/ByID/"+c}},getKPIPlotUrl:function(){var f=LDBTest.model.DBSingleton,a=f.getWellrecord(),h=f.getStartTime(),d=f.getEndTime(),g=f.getProdPoint()&&f.getProdPoint().get("Name"),c=f.getPropertyID()&&f.getPropertyID(),b=a&&a.get("WellCompletionCode"),e=a&&a.get("SupplyPointID");if(f.getSearchType()=="hierarchy"){return this.baseUrl()+"KPIList/"+g+"/Net/MCFe/"+b+"/Month/"+h+"/"+d+this.callback}else{return this.baseUrl()+"KPIList/"+g+"/ByID/"+c}}}});Ext.define("LDBTest.view.Timesheet",{extend:"Ext.ActionSheet",xtype:"timesheet",requires:["Ext.field.Slider","Ext.Button"],config:{items:[{xtype:"toolbar",docked:"top",items:[{xtype:"button",text:"Cancel",ui:"confirm",id:"timesheetcancel"},{xtype:"spacer"},{xtype:"button",text:"Reset",id:"timesheetreset"},{xtype:"spacer"},{xtype:"button",text:"Done",ui:"decline",id:"timesheetdone"}]},{xtype:"sliderfield",name:"multiple_slider",values:[50,360],minValue:0,maxValue:365},{xtype:"container",layout:"hbox",padding:"20 0 20 0",items:[{html:"<b>Start Time:</b>",style:"color: white;",},{xtype:"spacer"},{html:"<b>End Time:</b>",style:"color: white;"}]}]}});Ext.define("LDBTest.store.PropertySearchWellStore",{extend:"Ext.data.JsonStore",requires:["LDBTest.model.JsonServicesConstants"],config:{storeId:"PropertySearchWellStore",fields:[{name:"name",mapping:"ProductionPointWellName",type:"String"},{name:"value",mapping:"PropertyID",type:"String"}],groupField:"random",proxy:{type:"jsonp",url:LDBTest.model.JsonServicesConstants.getPropertyWelllistUrl("WellCompletion","A"),reader:{type:"json"}},autoLoad:true}});Ext.define("LDBTest.controller.TimesheetController",{extend:"Ext.app.Controller",views:["Timesheet"],requires:["LDBTest.view.Timesheet"],config:{refs:{timesheet:"timesheet"}},init:function(){this.control({"#timesheetcancel":{tap:this.onCancelTap},"#timesheetreset":{tap:this.onResetTap},"#timesheetdone":{tap:this.onDoneTap}})},onCancelTap:function(){this.getTimesheet().hide()},onResetTap:function(){this.getTimesheet().hide()},onDoneTap:function(){this.getTimesheet().hide()}});Ext.define("LDBTest.view.PropertyWellList",{extend:"Ext.List",xtype:"propertywelllist",requires:["LDBTest.store.PropertySearchWellStore"],config:{store:Ext.create("LDBTest.store.PropertySearchWellStore"),ui:"normal",itemTpl:'<div style="margin-right:50px;"><p style="width: 200px; float: right; text-align: right;">{value}</p><h2 style="">{name} </h2></div>',emptyText:'<div style="margin-top: 20px; text-align: center">No Matching Items</div>',onItemDisclosure:true},});Ext.define("LDBTest.store.HierarchyListStore",{extend:"Ext.data.JsonStore",requires:["LDBTest.model.JsonServicesConstants"],config:{fields:[{name:"Area",type:"String"},{name:"BusinessUnit",type:"String"},{name:"District",type:"String"},{name:"Division",type:"String"},{name:"GrossCashFlow",type:"double"},{name:"NetCashFlow",type:"double"},{name:"Region",type:"String"},{name:"Status",type:"String"},{name:"StatusDate",type:"String"},{name:"SubArea",type:"String"},{name:"SupplyPointID",type:"String"},{name:"TotalCount",type:"String"},{name:"WellCompletionCode",type:"String"},{name:"WellCompletionName",type:"String"}],autoLoad:false},loadpostRequest:function(a,b){b.setMasked({xtype:"loadmask"});Ext.Ajax.request({url:LDBTest.model.JsonServicesConstants.getJsonPProxyPath(),jsonData:Ext.JSON.encode(a),method:"POST",scope:this,success:function(c){var d=c.responseText;this.setData(Ext.JSON.decode(d));b.unmask()}})}});Ext.define("LDBTest.view.PropertySearch",{extend:"Ext.Container",xtype:"propertysearch",requires:["Ext.field.Select","Ext.field.Search","Ext.Toolbar","LDBTest.view.PropertyWellList"],config:{autoSize:true,layout:"fit",title:"Property Search",items:[{xtype:"toolbar",docked:"top",height:70,items:[{xtype:"selectfield",name:"prodPoint",id:"pprodPoint",labelAlign:"top",label:"Production Point:",labelCls:"selectfield-label",placeHolder:"Select Production Point..",displayField:"DisplayName",valueField:"Name",options:[{DisplayName:"Well Completion",Name:"WellCompletion"},{DisplayName:"Unit Lease",Name:"SupplyPoint"}]},{xtype:"spacer"},{xtype:"searchfield",width:300,id:"searchproperty",placeHolder:"Type to see the results...",name:"searchwell",value:"A"}]},{xtype:"propertywelllist"}]}});Ext.define("LDBTest.controller.WellsearchController",{extend:"Ext.app.Controller",views:["PropertySearch","PropertyWellList"],requires:["LDBTest.view.PropertySearch","LDBTest.view.PropertyWellList"],config:{refs:{searchwellfield:"searchproperty",welllist:"propertywelllist",prodSelectField:"#pprodPoint"}},init:function(){this.control({"#searchproperty":{keyup:this.onKeyup,clearicontap:this.onClearicontap},"#pprodPoint":{change:this.onProductionPointChange},propertywelllist:{select:this.onSelectWell}})},onSelectWell:function(b,a){this.getSearchwellfield().setValue(a.get("name"))},onProductionPointChange:function(d,c,a,b){console.log("production point type changed");this.loadPropertyList("A")},onSearchfieldRendered:function(){console.log("searchfield is rendered")},loadPropertyList:function(b){var a=this.getProdSelectField().getValue();this.getStore().getProxy().setUrl(LDBTest.model.JsonServicesConstants.getPropertyWelllistUrl(a,b));this.getStore().load()},getStore:function(){return Ext.data.StoreManager.lookup("PropertySearchWellStore")},onKeyup:function(b){console.log("onkeyup search");var a=b.getValue();if(a){this.loadPropertyList(a)}},onClearicontap:function(){this.loadPropertyList("A")}});Ext.define("LDBTest.view.HierarchySearchList",{extend:"Ext.List",xtype:"hierarchysearchlist",requires:[],config:{store:Ext.create("LDBTest.store.HierarchyListStore"),itemTpl:'<div style="margin-right:50px;"><div style="width: 400px; float: right; text-align: right;"><span class="header">Status:{Status} Status Date: {StatusDate}</span><br/>{NetCashFlow}</div><div><span class="header">{WellCompletionName} ( {WellCompletionCode} )</span> <br/>{GrossCashFlow}</div></div>',onItemDisclosure:true},initialize:function(a,b){console.log("HierarchySearchList"+this);this.callParent()}});Ext.define("LDBTest.store.ChartStore",{extend:"Ext.data.JsonStore",alias:"store.ChartStore",config:{id:"ChartStore",idProperty:"AnalysisDate",fields:[{name:"AnalysisDate",},{name:"CashFlow",type:"double"},{name:"Deduct",type:"double"},{name:"GasRevenue",type:"double"},{name:"NGLRevenue",type:"double"},{name:"OilRevenue",type:"double"},{name:"Revenue",type:"double"},{name:"Tax",type:"double"},{name:"TotalExpense",type:"double"}],proxy:{type:"jsonp",reader:{type:"json",rootProperty:"items"}},autoLoad:false}});Ext.define("LDBTest.view.HierarchySearch",{extend:"Ext.Container",xtype:"hierarchysearch",requires:["Ext.field.Select","Ext.form.FieldSet","LDBTest.model.JsonServicesConstants","LDBTest.view.HierarchySearchList","Ext.field.Toggle"],config:{autoSize:true,layout:"fit",title:"Hierarchy Search",items:[{xtype:"toolbar",height:70,docked:"top",items:[{xtype:"selectfield",name:"prodPoint",id:"hprodPoint",labelAlign:"top",label:"Production Point:",labelCls:"selectfield-label",placeHolder:"Select Production Point..",displayField:"DisplayName",valueField:"Name",options:[{DisplayName:"Well Completion",Name:"WellCompletion"},{DisplayName:"Unit Lease",Name:"SupplyPoint"}]},{xtype:"selectfield",name:"orgType",id:"horgType",labelAlign:"top",label:"Org Type:",labelCls:"selectfield-label",placeHolder:"Select Organization Type..",displayField:"DisplayName",valueField:"Name",options:[{DisplayName:"Business Unit",Name:"BusinessUnit"},{DisplayName:"Division",Name:"Division"},{DisplayName:"District",Name:"District"},{DisplayName:"Area",Name:"Area"},{DisplayName:"SubArea",Name:"SubArea"}]},{xtype:"selectfield",name:"orgName",id:"horgName",labelAlign:"top",label:"Org Name:",labelCls:"selectfield-label",displayField:"PropName",valueField:"PropID",store:Ext.create("Ext.data.Store",{fields:[{name:"PropName",type:"String"},{name:"PropID",type:"String"}],proxy:{type:"jsonp",url:LDBTest.model.JsonServicesConstants.getOrgNamesUrl("BusinessUnit","WellCompletion"),reader:{type:"json"}},autoLoad:true})},{xtype:"selectfield",id:"wellPosition",labelAlign:"top",label:"Position:",labelCls:"selectfield-label",placeHolder:"Top Or Bottom..",displayField:"DisplayName",valueField:"Name",options:[{DisplayName:"Top",Name:"Top"},{DisplayName:"Bottom",Name:"Bottom"}]}]},{xtype:"hierarchysearchlist"}]}});Ext.define("LDBTest.view.SearchTabPanel",{extend:"Ext.tab.Panel",xtype:"searchTabPanel",requires:["LDBTest.view.PropertySearch","LDBTest.view.HierarchySearch",],config:{iconCls:"search",title:"Search for Wells",items:[{xtype:"propertysearch"},{xtype:"hierarchysearch"}]}});Ext.define("LDBTest.view.SearchNavigation",{extend:"Ext.navigation.View",xtype:"searchnavigation",requires:["LDBTest.view.SearchTabPanel","LDBTest.view.Timesheet"],config:{items:[{xtype:"searchTabPanel"}],autoDestroy:false,navigationBar:{ui:"sencha",items:[{xtype:"button",id:"changeTimeInterval",text:"Change Time Interval",align:"right",hidden:false,hideAnimation:Ext.os.is.Android?false:{type:"fadeOut",duration:200},showAnimation:Ext.os.is.Android?false:{type:"fadeIn",duration:200},handler:function(){if(!this.actions){this.actions=Ext.Viewport.add({xtype:"timesheet"})}this.actions.show()}}]}},initialize:function(){this.on({back:this.onBack,add:this.onAdd,scope:this});this.callParent()},onBack:function(){},onAdd:function(a,d,b,c){},});Ext.define("LDBTest.view.PropertyInfo",{extend:"Ext.form.Panel",xtype:"propertyinfo",requires:["Ext.form.Panel","Ext.form.FieldSet","Ext.field.Number","Ext.field.Spinner","Ext.field.Password","Ext.field.Email","Ext.field.Url","Ext.field.DatePicker","Ext.field.Select","Ext.field.Hidden","Ext.field.Radio","Ext.field.Slider","Ext.field.Toggle","Ext.field.Search"],config:{title:"Property Info",iconCls:"action",cls:"chartpanel",baseCls:"chartpanel",margin:"0 20 0 20",items:[{xtype:"fieldset",title:"Well Identification",defaults:{labelWidth:"35%"},items:[{xtype:"textfield",name:"api",label:"API",placeHolder:"232321313131313131321",autoCapitalize:true,},{xtype:"textfield",name:"code",label:"Code",placeHolder:"31231231312321.01",autoCapitalize:true,},{xtype:"textfield",name:"unitLease",label:"Unit Lease",placeHolder:"Lease 5467",autoCapitalize:true,}]},{xtype:"fieldset",title:"Location",defaults:{labelWidth:"35%"},items:[{xtype:"textfield",name:"county",label:"County",placeHolder:"Fairfax",autoCapitalize:true,},{xtype:"textfield",name:"state",label:"State",placeHolder:"CA",autoCapitalize:true,},{xtype:"textfield",name:"section",label:"Section",placeHolder:"Section 420",autoCapitalize:true,},{xtype:"textfield",name:"township",label:"Township",placeHolder:"Vienna",autoCapitalize:true,},{xtype:"textfield",name:"range",label:"Range",placeHolder:"345 - 670",autoCapitalize:true,},{xtype:"textfield",name:"subarea",label:"SubArea",placeHolder:"TV Area",autoCapitalize:true,},{xtype:"textfield",name:"area",label:"Area",placeHolder:"Northeast",autoCapitalize:true,},{xtype:"textfield",name:"district",label:"District",placeHolder:"District of Columbia",autoCapitalize:true,},{xtype:"textfield",name:"businessUnit",label:"Business Unit",placeHolder:"5675",autoCapitalize:true,}]},{xtype:"fieldset",title:"Other Well Info",defaults:{labelWidth:"35%"},items:[{xtype:"textfield",name:"nri",label:"NRI",placeHolder:"100%",autoCapitalize:true,},{xtype:"datepickerfield",destroyPickerOnHide:true,name:"spudDate",label:"Spud Date",value:new Date(),picker:{yearFrom:1990}},{xtype:"textfield",name:"totalDepth",label:"Total Depth",placeHolder:"8909",autoCapitalize:true,}]}]}});Ext.define("LDBTest.view.ShortPropertyInfo",{extend:"Ext.Container",xtype:"shortpropertyinfo",requires:["Ext.XTemplate"],config:{baseCls:"chartpanel",tpl:null,data:null},initialize:function(){var b=this;var a=new Ext.XTemplate('<div class="centerwellinfo">','<tpl for=".">',"<div>{title}</div>",'<table id="planetlist">','<tpl for="rows">','<tr class="{[this.listClasses(xindex, xcount)]}">','<tpl for="columns">',"<td>{html}</td>","</tpl>","</tr>","</tpl>","</table>","</tpl>","</div>",{listClasses:function(c,e){var d=[];if(c%2===0){d.push("even")}else{d.push("odd")}if(c===1){d.push("first")}if(c===e){d.push("last")}return d.join(" ")}});this.setTpl(a);this.setData([{title:'<div class="dbsectiontitle">Well Property Info</div>',rows:[{columns:[{html:"API"},{html:"232321313131313131321"},]},{columns:[{html:"Code"},{html:"31231231312321"},]},{columns:[{html:"Unit Lease"},{html:"Lease 5467"},]},{columns:[{html:"Location"},{html:"Thousand Oaks, CA"},]},{columns:[{html:"Section"},{html:"Section 420"},]},{columns:[{html:"Range"},{html:"245-560"},]},{columns:[{html:"Business Unit"},{html:"Cool Business"},]},{columns:[{html:"NRI"},{html:"100%"},]},{columns:[{html:"Spud Date"},{html:"10/12/1960"},]},{columns:[{html:"Total Depth in meters"},{html:"453"},]}]}])},});Ext.define("LDBTest.store.ProductionLineStore",{extend:"Ext.data.JsonStore",alias:"store.ProductionLineStore",config:{id:"ProductionLineStore",idProperty:"AnalysisDate",fields:[{name:"AnalysisDate",type:"String"},{name:"Gas",type:"double"},{name:"Oil",type:"double"},{name:"NGL",type:"double"},{name:"Water",type:"double"},{name:"Forecast",type:"double"},{name:"Total",type:"double"}],proxy:{type:"jsonp",url:LDBTest.model.JsonServicesConstants.getProductionPlotUrl(),reader:{type:"json"}},autoLoad:false}});Ext.define("Ext.chart.series.StackedColumn",{extend:"Ext.chart.series.Column",type:"stackedColumn",column:true,constructor:function(a){this.callParent(arguments);var b=this;b.stacked=true;b.initialStacked=b.stacked},});Ext.define("LDBTest.model.KPI",{extend:"Ext.data.Model",config:{fields:[{name:"DailyAvgVolume",type:"int"},{name:"DailyAvgVolumePct",type:"double"},{name:"DailyAvgVolumeVariance",type:"double"},{name:"Gas",type:"double"},{name:"GasPct",type:"double"},{name:"GasVariance",type:"double"},{name:"NGL",type:"double"},{name:"NGLPct",type:"double"},{name:"NGLVariance",type:"double"},{name:"Oil",type:"double"},{name:"OilPct",type:"double"},{name:"OilVariance",type:"double"}]}});Ext.define("LDBTest.view.ProductionAnalysisChart",{extend:"Ext.chart.Chart",xtype:"productionanalysischart",requires:["Ext.chart.Chart","LDBTest.store.ProductionLineStore","Ext.chart.theme.Theme","Ext.chart.theme.Energy","Ext.MessageBox"],config:{title:"Production Analysis",iconCls:"line",cls:"chartpanel",autoSize:true,shadow:true,dirty:true,interactions:[{type:"iteminfo",gesture:"tap",listeners:{show:function(b,e,a){var d=e.storeItem,c=function(f){console.log(f);return(f).toFixed(2)};a.setHtml(["<b>Units in MCFe</b>","<br></br>","<ul>","<li><b>Water: </b> "+c(d.get("Water"))+"</li>","<li><b>Oil: </b> "+c(d.get("Oil"))+"</li>","<li><b>Gas: </b> "+c(d.get("Gas"))+"</li>","<li><b>NGL: </b> "+c(d.get("NGL"))+"</li>","<li><b>Total: </b> "+c(d.get("Total"))+"</li>","<li><b>Forecast: </b> "+c(d.get("Forecast"))+"</li>","</ul>"].join(""))}}}],store:null,axes:[{type:"Numeric",position:"left",label:{},adjustMinimumByMajorUnit:0,fields:["Water","Oil","Gas","Forecast","NGL","Total"],title:"Production Rate (MCFe)",grid:{odd:{stroke:"#777"},even:{stroke:"#555"}}}],legend:{position:Ext.os.is.Phone?"left":"top"},theme:"Energy",series:[{type:"line",highlight:true,showMarkers:false,fill:false,smooth:true,axis:"left",xField:"AnalysisDate",yField:["Water"],title:["Water"]},{type:"line",highlight:false,showMarkers:false,fill:false,smooth:true,axis:"left",xField:"AnalysisDate",yField:"Oil",title:["Oil"]},{type:"line",highlight:false,showMarkers:false,fill:false,smooth:true,axis:"left",xField:"AnalysisDate",yField:"Gas",title:["Gas"]},{type:"line",highlight:true,showMarkers:false,fill:false,smooth:true,axis:"left",xField:"AnalysisDate",yField:"Total",title:["Total"]},{type:"line",highlight:false,showMarkers:false,fill:false,smooth:true,axis:"left",xField:"AnalysisDate",yField:"Forecast",title:["Forecast"]},{type:"line",highlight:false,showMarkers:false,fill:false,smooth:true,axis:"left",xField:"AnalysisDate",yField:"NGL",title:["NGL"]}]},reloadIfDirty:function(){if(this.getDirty()){Ext.ComponentQuery.query("dbcarousel")[0].setMasked({xtype:"loadmask",message:"Loading..."});Ext.Logger.warn("Production Analysis Chart reloadIfDirty");this.getStore().getProxy().setUrl(LDBTest.model.JsonServicesConstants.getProductionPlotUrl());this.getStore().load(function(b,a,c){if(c){Ext.Logger.warn("Production Analysis Chart #success");this.setDirty(false);Ext.ComponentQuery.query("dbcarousel")[0].setMasked(false)}},this)}},initialize:function(){this.on({beforerefresh:this.onBeforerefresh,scope:this});this.callParent();this.setStore(Ext.create("LDBTest.store.ProductionLineStore",{id:"ProductionLineStore"}));this.reloadIfDirty()},onBeforerefresh:function(){}});Ext.define("LDBTest.view.DBStackedBarChart",{extend:"Ext.chart.Chart",xtype:"dbstackedbarchart",requires:["Ext.chart.Chart","LDBTest.store.ChartStore","Ext.chart.series.StackedColumn"],config:{title:"Profitability Analysis",iconCls:"column",cls:"chartpanel",autoSize:true,dirty:true,shadow:true,interactions:[{type:"togglestacked",event:"doubletap"},{type:"iteminfo",gesture:"tap",listeners:{}}],store:Ext.create("LDBTest.store.ChartStore"),axes:[{type:"Numeric",position:"left",label:{},adjustMinimumByMajorUnit:0,fields:["Revenue","TotalExpense","CashFlow"],title:"Million BTUs",grid:{odd:{stroke:"#777"},even:{stroke:"#555"}}},{type:"Category",position:"bottom",fields:["AnalysisDate"],title:"AnalysisDate",label:{rotate:{degrees:45}}}],legend:{position:Ext.os.is.Phone?"left":"top"},theme:"Energy",series:[{type:"stackedColumn",highlight:false,showMarkers:false,fill:false,smooth:true,axis:"left",xField:"AnalysisDate",yField:["Revenue","TotalExpense"],title:["Total Revenue","Total Expense"]},{type:"line",highlight:false,showMarkers:false,fill:false,smooth:true,axis:"left",xField:"AnalysisDate",yField:"CashFlow",title:["Cash Flow"]}],listeners:{afterrender:function(a){a.on("beforerefresh",function(){if(a.ownerCt.getActiveItem().id!==a.id){return false}},a)}}},reloadIfDirty:function(){if(this.getDirty()){Ext.ComponentQuery.query("dbcarousel")[0].setMasked({xtype:"loadmask",message:"Loading..."});this.getStore().getProxy().setUrl(LDBTest.model.JsonServicesConstants.getProfitabilityPlotUrl());this.getStore().load(function(b,a,c){if(c){this.setDirty(false);Ext.ComponentQuery.query("dbcarousel")[0].setMasked(false)}},this)}},initialize:function(){this.callParent()}});Ext.define("LDBTest.store.KPIStore",{extend:"Ext.data.JsonStore",requires:["LDBTest.model.KPI"],config:{model:"LDBTest.model.KPI",proxy:{type:"jsonp",reader:{type:"json"}},autoLoad:false}});Ext.define("LDBTest.view.PseudoOrgChart",{extend:"Ext.draw.Component",xtype:"porgchart",requires:["LDBTest.store.KPIStore"],mixins:{theme:"Ext.chart.theme.Theme"},config:{autoSize:true,theme:"Energy",cls:"chartpanel",iconCls:"treemap",title:"Production KPI",kpirecord:null,store:null,dirty:true,gradients:[{id:"v-1",angle:0,stops:{0:{color:"rgb(212, 40, 40)"},100:{color:"rgb(117, 14, 14)"}}},{id:"v-2",angle:0,stops:{0:{color:"rgb(180, 216, 42)"},100:{color:"rgb(94, 114, 13)"}}},{id:"v-3",angle:0,stops:{0:{color:"rgb(43, 221, 115)"},100:{color:"rgb(14, 117, 56)"}}},{id:"v-4",angle:0,stops:{0:{color:"rgb(45, 117, 226)"},100:{color:"rgb(14, 56, 117)"}}},{id:"v-5",angle:0,stops:{0:{color:"rgb(187, 45, 222)"},100:{color:"rgb(85, 10, 103)"}}}]},applyStyles:function(b){var a=this;a.mixins.theme.applyStyles.call(a,b);a.colorArrayStyle=[];if(a.style&&a.style.colors){colors=a.style.colors;colorArrayStyle=a.colorArrayStyle;for(i=0,l=colors.length;i<l;++i){color=colors[i];if(Ext.isObject(color)){for(p in a.surfaces){a.surfaces[p].addGradient(color)}colorArrayStyle.push("url(#"+color.id+")")}else{colorArrayStyle.push(color)}}}},reloadIfDirty:function(){if(this.getDirty()){Ext.ComponentQuery.query("dbcarousel")[0].setMasked({xtype:"loadmask",message:"Loading..."});Ext.Logger.warn("PseudoOrgChart reloadIfDirty");this.getStore().getProxy().setUrl(LDBTest.model.JsonServicesConstants.getKPIPlotUrl());this.getStore().load(function(b,a,c){if(c){Ext.Logger.warn("PseudoOrgChart #success");this.setDirty(false);Ext.ComponentQuery.query("dbcarousel")[0].setMasked(false);this.setKpirecord(b[0]);this.onResize()}},this)}},initialize:function(){this.callParent();this.setStore(Ext.create("LDBTest.store.KPIStore",{id:"KPIStore"}));this.reloadIfDirty();var d=this,b=d.surface.getItems(),e=b.getBBox(),c=e.width,a=e.height;console.log(c+" "+a);d.surface.addGradient({id:"gradientId",angle:45,stops:{0:{color:"#555"},100:{color:"#ddd"}}});d.surface.addGradient({id:"gasGradient",angle:0,stops:{0:{color:"red"},100:{color:"rgb(155, 0, 0)"}}});d.surface.addGradient({id:"oilGradient",angle:0,stops:{0:{color:"rgb(0, 255, 0)"},100:{color:"rgb(0, 100, 0)"}}});d.surface.addGradient({id:"nglGradient",angle:0,stops:{0:{color:"purple"},100:{color:"rgb(255, 0, 255)"}}})},getTrianglePath:function(a,c,b){return"M"+a+" "+c+"L"+(a-0.5*b)+" "+(c+b)+" L"+(a+0.5*b)+" "+(c+b)+" Z"},getPsuedoOrgBoxesSpriteArray:function(c){var e=this,b=[],d=e.surface.getWidth(),a=e.surface.getHeight();var g={x:d/4,y:0,w:d/2,h:a/2};var f=10;b.push(this.getSpritesArray({x:g.x,y:g.y,w:g.w,h:g.h,topColor:"lightgray",bottomColor:"lightgray",topText:"Daily Average Volume",centerText:c.get("DailyAvgVolume")+" MCFed",bottomText:"From Forecast",forecastVal:c.get("DailyAvgVolumeVariance"),topTextFont:"bold 18px Arial",centerTextFont:"bold italic 18px Arial",bottomTextFont:"bold 12px Arial",forecastFont:"bold 12px Arial"}));b.push(this.getSpritesArray({x:g.x-0.25*g.w-f,y:g.y+g.h+2*f,w:0.5*g.w,h:0.75*g.h,topColor:"url(#gasGradient)",bottomColor:"white",topText:"Gas",centerText:c.get("Gas")+" MCFed",bottomText:"From Forecast",forecastVal:c.get("GasVariance"),topTextFont:"bold 12px Arial",centerTextFont:"bold italic 14px Arial",bottomTextFont:"bold 12px Arial",forecastFont:"bold 12px Arial"}));b.push(this.getSpritesArray({x:g.x+0.25*g.w,y:g.y+g.h+2*f,w:0.5*g.w,h:0.75*g.h,topColor:"url(#oilGradient)",bottomColor:"white",topText:"Oil",centerText:c.get("NGL")+" BbLd",bottomText:"From Forecast",forecastVal:c.get("NGLVariance"),topTextFont:"bold 12px Arial",centerTextFont:"bold italic 14px Arial",bottomTextFont:"bold 12px Arial",forecastFont:"bold 12px Arial"}));b.push(this.getSpritesArray({x:g.x+0.75*g.w+f,y:g.y+g.h+2*f,w:0.5*g.w,h:0.75*g.h,topColor:"url(#nglGradient)",bottomColor:"white",topText:"Oil",centerText:c.get("Oil")+" BbLd",bottomText:"From Forecast",forecastVal:c.get("OilVariance"),topTextFont:"bold 12px Arial",centerTextFont:"bold italic 14px Arial",bottomTextFont:"bold 12px Arial",forecastFont:"bold 12px Arial"}));return b},getSpritesArray:function(m){var r=m.x,q=m.y,s=m.w,n=m.h;var e=m.topColor,o=m.bottomColor;var t=m.topText,d=m.centerText,j=m.bottomText;var c=m.topTextFont||"",b=m.centerTextFont||"",k=m.bottomTextFont||"",a=m.forecastFont||"";var g=m.forecastVal;var f="textGroup";return[{type:"rect",width:s,height:n,fill:"white",stroke:"black",x:r,y:q},{type:"rect",width:s,height:0.25*n,stroke:"black",fill:e,x:r,y:q,},{type:"text",fill:"black",x:r+0.5*s,y:q+0.125*n,text:t,font:c,group:f,"text-anchor":"center"},{type:"text",fill:"black",x:r+0.5*s,y:q+0.5*n,text:d,font:b,group:f,"text-anchor":"center"},{type:"rect",width:s,height:0.25*n,stroke:"black",fill:"url(#gradientId)",x:r,y:q+0.75*n,},{type:"text",fill:"black",stroke:"black",x:r+0.5*s,y:q+0.833*n,text:j,font:k,group:f,"text-anchor":"center"},{type:"text",fill:g>0?"green":"red",stroke:"black",font:a,x:r+0.5*s,y:q+0.91*n,text:g,group:f,"text-anchor":"center"}]},onResize:function(){var d=this,j=d.getViewBox(),b=d.getAutoSize(),c=d.surface.getItems(),g,c,a,h,f,e;this.callParent();if(this.getKpirecord()!=null){d.surface.add(d.getPsuedoOrgBoxesSpriteArray(this.getKpirecord()));d.surface.renderFrame()}},constructor:function(a){var b=this;a=Ext.apply({},a);if(b.gradients){Ext.apply(a,{gradients:b.gradients})}if(b.background){Ext.apply(a,{background:b.background})}if(a.theme){b.applyStyles(a.theme)}b.callParent(arguments)},});Ext.define("LDBTest.view.DashboardSummary",{extend:"Ext.Container",xtype:"dashboardsummary",requires:["LDBTest.view.ProductionAnalysisChart","LDBTest.view.DBStackedBarChart","LDBTest.view.PseudoOrgChart","LDBTest.view.ShortPropertyInfo"],config:{title:"Summary",iconCls:"action",layout:{type:"vbox",},defaults:{xtype:"container",flex:1,layout:{type:"hbox",},defaults:{xtype:"panel",flex:1,margin:10}},items:[{items:[{xtype:"productionanalysischart"},{xtype:"porgchart"}]},{items:[{xtype:"dbstackedbarchart"},{xtype:"shortpropertyinfo"}]}]},reloadIfDirty:function(){Ext.each(this.getInnerItems(),function(b,a){Ext.each(b.getInnerItems(),function(c,d){c.reloadIfDirty&&c.reloadIfDirty()})})},initialize:function(){console.log("summary log")}});Ext.define("LDBTest.view.DashboardCarousel",{extend:"Ext.carousel.Carousel",xtype:"dbcarousel",requires:["Ext.TitleBar","LDBTest.view.DashboardSummary","LDBTest.view.ProductionAnalysisChart","LDBTest.view.DBStackedBarChart","LDBTest.view.PropertyInfo","LDBTest.view.PseudoOrgChart","Ext.util.DelayedTask","Ext.SegmentedButton","Ext.field.Slider"],config:{direction:"horizontal",ui:"light",title:"Production Plot",iconCls:"home",items:[{xtype:"toolbar",docked:"bottom",items:[{xtype:"segmentedbutton",itemId:"switchViewsSegment",defaults:{pressedCls:"x-button-pressed"},items:[{text:"Summary",iconCls:"layout",iconMask:true,handler:function(a){Ext.ComponentQuery.query("dbcarousel")[0].setActiveItem(0);console.log("button"+a.getText())}},{text:"Production Analysis",iconCls:"line",iconMask:true,handler:function(a){Ext.ComponentQuery.query("dbcarousel")[0].setActiveItem(1);console.log("button"+a.getText())}},{text:"Profitability Analysis",iconCls:"column",iconMask:true,handler:function(a){Ext.ComponentQuery.query("dbcarousel")[0].setActiveItem(2);console.log("button"+a.getText())}},{text:"KPI",iconCls:"treemap",iconMask:true,handler:function(a){Ext.ComponentQuery.query("dbcarousel")[0].setActiveItem(3);console.log("button"+a.getText())}},{text:"PropertyInfo",iconCls:"info_plain",iconMask:true,handler:function(a){Ext.ComponentQuery.query("dbcarousel")[0].setActiveItem(4);console.log("button"+a.getText())}}]}]},{xtype:"dashboardsummary"},{xtype:"productionanalysischart"},{xtype:"dbstackedbarchart"},{xtype:"porgchart"},{xtype:"propertyinfo"}],},initialize:function(){this.on({activeitemchange:this.onActiveitemchange,activate:this.onActivate,deactivate:this.onDeactivate,show:this.onShow,scope:this});this.callParent()},onActivate:function(b,d,a,c){},onDeactivate:function(b,d,a,c){Ext.defer(function(){var e=Ext.ComponentQuery.query("dbcarousel")[0];if(Ext.isDefined(e)){e.destroy()}},1000,this)},onActiveitemchange:function(a,f,b,c){if(a.isXType("dbcarousel")){var h=a,d=h.down("segmentedbutton"),j=h.getActiveIndex(),e=d.getItems(),g=e.get(j);e.each(function(n,k,m){n.element.removeCls(n.getPressedCls())});if(g.isXType("button")){g.element.addCls(g.getPressedCls())}a.setTitle(f.getTitle()||"");a.getActiveItem().reloadIfDirty&&a.getActiveItem().reloadIfDirty()}},onShow:function(){}});Ext.define("LDBTest.controller.HierarchySearchController",{extend:"Ext.app.Controller",views:["HierarchySearch"],requires:["LDBTest.view.HierarchySearch","LDBTest.model.JsonServicesConstants","LDBTest.view.DashboardCarousel"],config:{refs:{selectProd:"#hprodPoint",selectOrgType:"selectfield[name=orgType]",selectOrgName:"selectfield[name=orgName]",searchwell:"#searchhierarchy",hierarchylist:"hierarchysearchlist",searchnavigation:"searchnavigation"}},init:function(){this.control({"#hprodPoint":{change:this.onProductionPointChange},"selectfield[name=orgType]":{change:this.onOrgTypeChange},"selectfield[name=orgName]":{change:this.onOrgNameChange},"#searchhierarchy":{keyup:this.onSearchKeyup,clearicontap:this.onClearicontap},hierarchysearchlist:{itemtap:this.onListItemtap}})},onProductionPointChange:function(d,c,a,b){console.log("onProductionPointChange")},onOrgTypeChange:function(f,e,b,c){var d=this.getSelectOrgType().getValue(),a=this.getSelectProd().getValue();var g=LDBTest.model.JsonServicesConstants.getOrgNamesUrl(d,a);console.log("onOrgTypeChange");this.getSelectOrgName().getStore().getProxy().setUrl(g);this.getSelectOrgName().getStore().load()},onOrgNameChange:function(d,c,a,b){console.log("onOrgNameChange");this.loadHierarchyList()},loadHierarchyList:function(){var a={};a.FilterType=0;a.NumWells=15;a.OrgLevel=this.getSelectOrgType().getValue()||"";a.ProductionPointName=this.getSelectProd().getValue();a.PropertyID=this.getSelectOrgName().getValue();a.TopOrBottomCount="Top";this.getHierarchylist().getStore().loadpostRequest(a,this.getHierarchylist())},onSearchKeyup:function(){console.log("onSearchKeyup")},onClearicontap:function(){console.log("onClearicontap")},onListItemtap:function(b,c,f,a,e,d){console.log("etateaeadadad"+this.getSelectProd().getRecord());console.log(a);LDBTest.model.DBSingleton.setWellrecord(a);LDBTest.model.DBSingleton.setProdPoint(this.getSelectProd().getRecord());LDBTest.model.DBSingleton.setPropertyID(this.getSelectOrgName().getValue());this.getSearchnavigation().push({xtype:"dbcarousel"})}});Ext.application({name:"LDBTest",requires:["Ext.MessageBox","LDBTest.model.DBSingleton"],views:["SearchNavigation"],models:["JsonServicesConstants"],controllers:["WellsearchController","HierarchySearchController","TimesheetController"],icon:{57:"resources/icons/Icon.png",72:"resources/icons/Icon~ipad.png",114:"resources/icons/Icon@2x.png",144:"resources/icons/Icon~ipad@2x.png"},phoneStartupScreen:"resources/loading/Homescreen.jpg",tabletStartupScreen:"resources/loading/Homescreen~ipad.jpg",launch:function(){Ext.fly("appLoadingIndicator").destroy();Ext.Viewport.add(Ext.create("LDBTest.view.SearchNavigation",{}))},onUpdated:function(){Ext.Msg.confirm("Application Update","This application has just successfully been updated to the latest version. Reload now?",function(a){if(a==="yes"){window.location.reload()}})}});