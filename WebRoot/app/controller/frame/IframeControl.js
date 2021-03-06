/*******************************************************************************
 * 定义 IframeControl AP 为在app.js里定义的命名空间
 * 
 * @argument views： 改控制器里使用的view 为frame.IframeView
 * @cfg refs： 通过别名来引用 改view iframeView init：初始化改控制器 渲染iframeViewd 的时候，
 *      配置一个itemclick 事件
 */
Ext.define('AP.controller.frame.IframeControl', {
			extend : 'Ext.app.Controller',
			views : ['frame.IframeView'],
			refs : [{
						ref : 'iframeView',
						selector : 'iframeView'
					}],
			init : function() {
				this.control({
							'iframeView' : {
//								itemclick : extTreeItemsClk,
								selectionchange:extTreeItemsSelectedChange,
								afterrender : function() {
									Ext.fly('loading_div_id').remove(); 
								}
							}
						})
			}
		});
/*******************************************************************************
 * 点击左侧组织树时，调用该方法。向后台传入一个组织的ID值orgId
 ******************************************************************************/
function extTreeItemsSelectedChange(view, selected, o) {
	if (selected.length > 0) {
		var rec=selected[0];
		selectresult=[];
		var org_Id = selectEachTreeFn(rec);// 获取到当前点击的组织ID
		selectReeTextRsult = [];
		var org_Name=selectEachTreeText(rec);
		if(!(org_Id.indexOf(userOrg_Ids)>0)){
			Ext.getCmp("leftOrg_Id").setValue("");// 将org_Id的值赋值给IframeView里的组织隐藏域
			Ext.getCmp("leftOrg_Id").setValue(org_Id);// 将org_Id的值赋值给IframeView里的组织隐藏域
		}
		if(!(org_Name.indexOf(userOrg_Names)>0)){
			Ext.getCmp("leftOrg_Name").setValue("");// 将org_Id的值赋值给IframeView里的组织隐藏域
			Ext.getCmp("leftOrg_Name").setValue(org_Name);// 将org_Id的值赋值给IframeView里的组织隐藏域
		}
		Ext.getCmp("orgTreeSelectedCoordX_Id").setValue(rec.data.orgCoordX);// 将组织X坐标的值赋值给IframeView里的组织隐藏域
		Ext.getCmp("orgTreeSelectedCoordY_Id").setValue(rec.data.orgCoordY);// 将组织Y坐标的值赋值给IframeView里的组织隐藏域
		Ext.getCmp("orgTreeSelectedShowLevel_Id").setValue(rec.data.orgShowLevel);// 将组织显示级别的值赋值给IframeView里的组织隐藏域
		var module_Code = Ext.getCmp("topModule_Id").getValue();// 拿到IframeView
		var secondTab_Code=getSecondTapCode(module_Code);
		refreshPanel(org_Id,secondTab_Code,rec);
	}
	
	// Ext.getCmp("frame_west").collapse(Ext.Component.DIRECTION_LEFT,true);
	return false;
};

/*******************************************************************************
 * 
 * 功能模块公用的方法，每次点击上部的功能模块时，调用该方法
 * 
 * @argument o：为对应模块view的URL
 * @argument mdCode：为当前模块的编码 例如monitor_MonitorPumpingUnit
 * @argument tab_url:动态创建底部的tab的url 传入改参数来动态的拼接出action的URL MonitorOutAllText
 *           MonitorPumpingUnit 诸如此类的变量全是是 vary.js文件定义的全局变量
 ******************************************************************************/
function addPanelEps(o, mdCode, tab_url) {

	var leftOrg_Id = Ext.getCmp("leftOrg_Id");
	
	if (!Ext.isEmpty(leftOrg_Id)) {
		leftOrg_Id = leftOrg_Id.getValue();
	}
	
	var secondTab_Code=getSecondTapCode(mdCode);
	
	refreshPanel(leftOrg_Id,secondTab_Code);
	return false;
}


getSecondTapCode=function(mdCode){
	var secondTab_Code="";
	var secondBottomTab_Id=Ext.getCmp("secondBottomTab_Id");
	if(isNotVal(secondBottomTab_Id)){
		secondBottomTab_Id=secondBottomTab_Id.getValue();
		}
	var productBottomTab_Id=Ext.getCmp("productBottomTab_Id");
	if(isNotVal(productBottomTab_Id)){
		productBottomTab_Id=productBottomTab_Id.getValue();
		}
	var imageBottomTab_Id=Ext.getCmp("imageBottomTab_Id");
	if(isNotVal(imageBottomTab_Id)){
		imageBottomTab_Id=imageBottomTab_Id.getValue();
		}
	
	try {
		//var org_Id = selectEachTreeFn(rec);// 获取到当前点击的组织ID
		
		var modules = mdCode.split("_");
		
		if (modules.length > 0) {
		
				Ext.getCmp("topModule_Id").setValue("");// 给IframeView里的模块隐藏域赋值
				Ext.getCmp("bottomTab_Id").setValue("");// 给IframeView里的模块隐藏域赋值
				//Ext.getCmp("secondBottomTab_Id").setValue("");// 给IframeView里的第二个tab的模块隐藏域赋值
				Ext.getCmp("topModule_Id").setValue(mdCode);// 给IframeView里的模块隐藏域赋值
				Ext.getCmp("bottomTab_Id").setValue(modules[1]);// 给IframeView里的模块隐藏域赋值
				if (modules.length > 2) {
					var aa=modules[1].indexOf("Diagnosis");
					if(modules[1].indexOf("Diagnosis")>-1){
						if(secondBottomTab_Id==(modules[2])){
							Ext.getCmp("secondBottomTab_Id").setValue("");// 给IframeView里的第二个tab的模块隐藏域赋值
							Ext.getCmp("secondBottomTab_Id").setValue(modules[2]);// 给IframeView里的第二个tab的模块隐藏域赋值
						}
						secondTab_Code=secondBottomTab_Id;
					}
					if(modules[1].indexOf("Compute")>-1){
						if(productBottomTab_Id==(modules[2])){
							Ext.getCmp("productBottomTab_Id").setValue("");// 给IframeView里的第二个tab的模块隐藏域赋值
							Ext.getCmp("productBottomTab_Id").setValue(modules[2]);// 给IframeView里的第二个tab的模块隐藏域赋值
						}
						secondTab_Code=productBottomTab_Id;
					}
					if(modules[1].indexOf("Image")>-1){
						if(imageBottomTab_Id==(modules[2])){
							Ext.getCmp("imageBottomTab_Id").setValue("");// 给IframeView里的第二个tab的模块隐藏域赋值
							Ext.getCmp("imageBottomTab_Id").setValue(modules[2]);// 给IframeView里的第二个tab的模块隐藏域赋值
						}
						secondTab_Code=imageBottomTab_Id;
					}
					
	
				}else{
					secondTab_Code="";
				}
		}
	
	
	} catch (e) {
		//Ext.Msg.alert("exception", " name: " + e.name + " \n message: "
						//+ e.message + " \n lineNumber: " + e.lineNumber
						//+ " \n fileName: " + e.fileName + " \n stack: "
						//+ e.stack);
	}
	return secondTab_Code;
	
};


refreshPanel=function(leftOrg_Id,secondTab_Code,rec){
	var module_Code = Ext.getCmp("topModule_Id").getValue();// 拿到IframeView
	var tab_Code = Ext.getCmp("bottomTab_Id").getValue();// 拿到IframeView
	//var secondTab_Code = Ext.getCmp("secondBottomTab_Id").getValue();// 拿到第二个tab隐藏域的值
	var tab_Id = Ext.getCmp(tab_Code);
	var url;
	var countId;
	
	if (tab_Id != undefined) {
		tab_Id.show();
	}
	var modules = module_Code.split("_");
	
	
	var panel_Id = "";
	if (module_Code != "video" && module_Code != "map_MapDraw" && module_Code != "realtime_RealtimeMonitor"
		&& module_Code != "well_wellPanel"
		&& module_Code != "blockdata_Ids"
		&& module_Code != "RealTimeEvaluation_Well"
		&& module_Code !="RealTimeEvaluation_GroupValve"
		&& module_Code !="DailyReport_Well"
		&& module_Code !="DailyEvaluation_Well"
		&& module_Code !="DailyEvaluation_GroupValve") {
		if (modules.length > 2) {
			if(secondTab_Code!= modules[2]){
				modules[2]=secondTab_Code;
			}
			panel_Id = tab_Code + "_" + secondTab_Code + "_Id";
			// alert(panel_Id);
			if (modules[2] == "ProductionStatistics") {
				var jssj_ = Ext.getCmp("Statistics_date_Id").rawValue;
						// 检索动态列表头及内容信息
							Ext.Ajax.request({
								method : 'POST',
								url : context+ '/viewOutPutStatisticsController/showRecentlyDay?flag=con',
								params: {
						             orgId: leftOrg_Id,
						             jssj:jssj_
						           },
								success : function(response, opts) {
									// 处理后json
									var obj = Ext.decode(response.responseText);
									var getDomHtml = Ext.get("computeStatisticsTablePanel_Id");
								    getDomHtml.dom.innerHTML = obj.compute;
								    senfe("compute","#fff","#FAFAFA","#F4F4F4","#DFE8F6");
									var ProductionStatisticsChartData_Ids=Ext.getCmp("ProductionStatisticsChartData_Ids");
									if(isNotVal(ProductionStatisticsChartData_Ids)){
										ProductionStatisticsChartData_Ids.setValue("");
										ProductionStatisticsChartData_Ids.setValue(response.responseText);
									}
									initComputeChartType(obj);
									// ==end
								},
								failure : function(response, opts) {
									Ext.Msg.alert("信息提示", "后台获取数据失败！");
								}
							});
			}

		} else {

			panel_Id = tab_Code + "_Id";
		}
		//alert(panel_Id);
		var ext_panel = Ext.getCmp(panel_Id);
		if (ext_panel != undefined||tab_Code=="BalanceHistory"||tab_Code=="BalanceCycle") {
			// 工况诊断的统计信息刷新及图形
			if (secondTab_Code == "WorkingConditionDistributionStatistic") {
				ext_panel.getStore().load();
			} else if (secondTab_Code == "SingleDinagnosisAnalysis") {
				var leftOrg_Id = Ext.getCmp("leftOrg_Id");
				if (!Ext.isEmpty(leftOrg_Id)) {
					leftOrg_Id = leftOrg_Id.getValue();
				}
				ext_panel.getStore().load();
				var iframe_Id = Ext.get("iframeSingleDyn_Id");
				//iframe_Id.dom.src = context+ "/login/list?orgId="+ leftOrg_Id;
			} else if (secondTab_Code == "DynContrastDinagnosisAnalysis") {
				var leftOrg_Id = Ext.getCmp("leftOrg_Id");
				if (!Ext.isEmpty(leftOrg_Id)) {
					leftOrg_Id = leftOrg_Id.getValue();
				}
				ext_panel.getStore().load();
			} else if (modules[2] == "ProductionStatistics"
					&& secondTab_Code == "ProductionStatistics") {
				var chartImage_Id = Ext.getCmp("ProductionStatisticsChart_TypeId").getValue();// 拿到IframeView
				var ProductionStatisticsChart_TypeId = Ext
						.getCmp("ProductionStatisticsChart_TypeId").getValue();
				if (ProductionStatisticsChart_TypeId == "ColumnInfoCharts_Id") {
					showComputeChart("AP.view.compute.ColumnInfoChart");
				} else if (ProductionStatisticsChart_TypeId == "PieInfoCharts_Id") {
					showComputeChart("AP.view.compute.PieInfoChart");
				}
			} else if (tab_Code == "CurvePumpingUnit") {
				ext_panel.getStore().load();
				Ext.getCmp("CurvePumpingUnit_LineChartId").store.load();
			} else if (tab_Code == "CurveWaterInjectionWell") {
				ext_panel.getStore().load();
				Ext.getCmp("CurveWaterInjectionWell_LineChartId").store.load();
			} else if(tab_Code=="SurfaceCardQuery"){
//				page=1;
//				Ext.create("AP.store.graphicalQuery.SurfaceCardStore");
			} else if(tab_Code=="PumpCardQuery"){
				page=1;
				Ext.create("AP.store.graphicalQuery.PumpCardStore");
			} else if(tab_Code=="RodPressQuery"){
				page=1;
				Ext.create("AP.store.graphicalQuery.RodPressStore");
			} else if(tab_Code=="PumpEfficiencyQuery"){
				page=1;
				Ext.create("AP.store.graphicalQuery.PumpEfficiencyStore");
			} else if(tab_Code=="BalanceHistory"){
				var tabPanel = Ext.getCmp("BalanceHistoryTab_Id");
				var activeId = tabPanel.getActiveTab().id;
				if(activeId=="HistoryTorqueMaxValue_Id"){
					Ext.getCmp("TorqueMaxValueHistoryWellListGrid_Id").getStore().load();
				}
			}else if(tab_Code=="BalanceCycle"){
				var tabPanel = Ext.getCmp("BalanceCycleTab_Id");
				var activeId = tabPanel.getActiveTab().id;
				if(activeId=="CycleTorqueMaxValue_Id"){
					var tabPanel2 = Ext.getCmp("CycleTorqueMaxValueTappanel_Id");
					var activeId2 = tabPanel2.getActiveTab().id;
					if(activeId2=="CycleTorqueMaxValuePanel_Id"){
						Ext.getCmp("TorqueMaxValueCycleWellListGrid_Id").getStore().load();
					}else{
						Ext.getCmp("TorqueMaxValueTotalWellListGrid_Id").getStore().load();
					}
				}
			} else {
				ext_panel.getStore().load();
			}
		} else {
			// Ext.Msg.alert("info", '抱歉，该模块正在开发中... ');
		}
	}else if(module_Code == "well_wellPanel"){
		CreateAndLoadWellInfoTable(true);
	}else if(module_Code == "blockdata_Ids"){
		CreateAndLoadReservoirPropertyTable(true);
	}else if(module_Code == "RealTimeEvaluation_Well"){
		Ext.getCmp('CBMWellRealtimeAnalysisWellCom_Id').setValue("");
		loadCBMWellSingleStatData();
	}else if(module_Code == "RealTimeEvaluation_GroupValve"){
		Ext.getCmp('GroupValveRealtimeAnalysisGroupValveCom_Id').setValue("");
		loadGroupValveSingleStatData();
	}else if(module_Code == "DailyReport_Well"){
		CreateCBMWellDailyReportTable();
	}else if(module_Code == "DailyEvaluation_Well"){
		Ext.getCmp('CBMWellDailyAnalysisWellCom_Id').setValue("");
		loadCBMWellDailyStatData();
	}else if(module_Code == "DailyEvaluation_GroupValve"){
		Ext.getCmp('GroupValveDailyAnalysisWellCom_Id').setValue("");
		loadGroupValveDailyStatData();
	}else {
		return false;
	}
	
}
