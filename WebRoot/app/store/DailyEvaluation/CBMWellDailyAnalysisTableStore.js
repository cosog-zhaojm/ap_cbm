Ext.define('AP.store.DailyEvaluation.CBMWellDailyAnalysisTableStore', {
    extend: 'Ext.data.Store',
    alias: 'widget.CBMWellDailyAnalysisTableStore',
    autoLoad: true,
    pageSize: 10000,
    proxy: {
        type: 'ajax',
        url: context + '/dailyEvaluationController/getCBMWellDailyAnalysisAndAcqAndControlData',
        actionMethods: {
            read: 'POST'
        },
    reader: {
            type: 'json',
            rootProperty: 'totalRoot',
            totalProperty: 'totalCount',
            keepRawData: true
        }
    },
    listeners: {
        load: function (store, record, f, op, o) {
        	var get_rawData = store.proxy.reader.rawData;
        	var isControl=get_rawData.isControl;
    		var dataStr="{\"items\":[";
    		dataStr+="{\"item\":\"在线时间(h)\",\"itemCode\":\"commTime\",\"value\":\""+get_rawData.commTime+"\",\"curve\":\"\"},";
    		dataStr+="{\"item\":\"在线时率(小数)\",\"itemCode\":\"commTimeEfficiency\",\"value\":\""+get_rawData.commTimeEfficiency+"\",\"curve\":\"\"},";
    		
    		dataStr+="{\"item\":\"运行时间(h)\",\"itemCode\":\"runStatus\",\"value\":\""+get_rawData.runStatus+"\",\"curve\":\"\"},";
    		dataStr+="{\"item\":\"运行时率(小数)\",\"itemCode\":\"runTimeEfficiency\",\"value\":\""+get_rawData.runTimeEfficiency+"\",\"curve\":\"\"},";
    		
    		dataStr+="{\"item\":\"日产气量(m^3/d)\",\"itemCode\":\"gasTodayProd\",\"value\":\""+get_rawData.gasTodayProd+"\",\"curve\":\"\"},";
    		dataStr+="{\"item\":\"日产水量(m^3/d)\",\"itemCode\":\"liquidFlowMeterProd\",\"value\":\""+get_rawData.liquidFlowMeterProd+"\",\"curve\":\"\"}";
    		dataStr+="]}";
    		
    		var acqSataStr="{\"items\":[";
    		acqSataStr+="]}";
    		
    		var storeData=Ext.JSON.decode(dataStr);
    		var acqStoreData=Ext.JSON.decode(acqSataStr);
    		
    		
    		var store=Ext.create('Ext.data.Store', {
			    fields:['item', 'itemCode','value', 'curve'],
			    data:storeData,
			    proxy: {
			        type: 'memory',
			        reader: {
			            type: 'json',
			            root: 'items'
			        }
			    }
			});
    		var acqStore=Ext.create('Ext.data.Store', {
			    fields:['item', 'itemCode','value', 'curve'],
			    data:acqStoreData,
			    proxy: {
			        type: 'memory',
			        reader: {
			            type: 'json',
			            root: 'items'
			        }
			    }
			});
    		
    		var GridPanel=Ext.getCmp("CBMWellDailyAnalysisDataGridPanel_Id");
    		if(!isNotVal(GridPanel)){
    			GridPanel=Ext.create('Ext.grid.Panel', {
    				id:'CBMWellDailyAnalysisDataGridPanel_Id',
    				border: false,
    				columnLines: true,
    				forceFit: false,
    				store: store,
    			    columns: [
    			        { 
    			        	header: '名称',  
    			        	dataIndex: 'item',
    			        	align:'left',
    			        	flex:3,
    			        	renderer:function(value){
    			        		return "<span data-qtip=\""+(value==undefined?"":value)+"\">"+(value==undefined?"":value)+"</span>";
    			        	}
    			        },
    			        { 
    			        	header: '值', 
    			        	dataIndex: 'value',
    			        	align:'center',
    			        	flex:1,
    			        	renderer:function(value){
    			        		return "<span data-qtip=\""+(value==undefined?"":value)+"\">"+(value==undefined?"":value)+"</span>";
    			        	}
    			        },
    			        { header: '趋势曲线', dataIndex: 'curve',align:'center',flex:1,renderer :function(value,e,o){return iconCBMDailyAnalysisCurve(value,e,o)} }
    			    ]
    			});
    			Ext.getCmp("CBMWellDailyAnalysisTableCalDataPanel_Id").add(GridPanel);
    		}else{
    			GridPanel.reconfigure(store);
    		}
    		
    		var acqGridPanel=Ext.getCmp("CBMWellDailyAcqDataGridPanel_Id");
    		if(!isNotVal(acqGridPanel)){
    			acqGridPanel=Ext.create('Ext.grid.Panel', {
    				id:'CBMWellDailyAcqDataGridPanel_Id',
    				border: false,
    				columnLines: true,
    				forceFit: false,
    				store: acqStore,
    			    columns: [
    			    	{ 
    			        	header: '名称',  
    			        	dataIndex: 'item',
    			        	align:'left',
    			        	flex:3,
    			        	renderer:function(value,o,p,e){
    			        		return "<span data-qtip=\""+(value==undefined?"":value)+"\">"+(value==undefined?"":value)+"</span>";
    			        	}
    			        },
    			        { 
    			        	header: '值', 
    			        	dataIndex: 'value',
    			        	align:'center',
    			        	flex:1,
    			        	renderer:function(value,o,p,e){
    			        		var AlarmShowStyle=Ext.JSON.decode(Ext.getCmp("AlarmShowStyle_Id").getValue());
    			        		var BackgroundColor='#FFFFFF';
    			        	 	var Color='#000000';
    			        	 	var Opacity=1;
    			        	 	var alarmLevel=p.data.alarmLevel;
    			        	 	if(value==undefined||value=="undefined"){
    			        	 		value="";
    			        		}
    			        	 	var tipval=value;
    			        		var rgba=color16ToRgba(BackgroundColor,Opacity);
    			        	 	o.style='background-color:'+rgba+';color:'+Color+';';
    			        	 	return '<span data-qtip="'+tipval+'" data-dismissDelay=10000>'+value+'</span>';
    			        	}
    			        },
    			        { header: '趋势曲线', dataIndex: 'curve',align:'center',flex:1,renderer :function(value,e,o){return iconCBMDailyAnalysisCurve(value,e,o)} }
    			    ]
    			});
    			Ext.getCmp("CBMWellRTAnalysisTableAcqDataPanel_Id").add(acqGridPanel);
    		}else{
    			acqGridPanel.reconfigure(acqStore);
    		}
        },
        beforeload: function (store, options) {
        	var id  = Ext.getCmp("CBMWellAnalysisDaily_Id").getSelectionModel().getSelection()[0].data.id;
        	var wellName=Ext.getCmp('CBMWellDailyAnalysisWellCom_Id').getValue();
        	var selectedWellName  = Ext.getCmp("CBMWellAnalysisDaily_Id").getSelectionModel().getSelection()[0].data.wellName;
        	var new_params = {
        			id: id,
        			wellName:wellName,
        			selectedWellName:selectedWellName
                };
           Ext.apply(store.proxy.extraParams, new_params);
        },
        datachanged: function (v, o) {
            //onLabelSizeChange(v, o, "statictisTotalsId");
        }
    }
});