sap.ui.define([
	"com/liu/split/controller/BaseController",
	'sap/ui/model/Filter',
	"sap/ui/Device"
], function (BaseController, Filter, Device) {
	"use strict";
	return BaseController.extend("com.liu.split.controller.Master", {
		onSelectionChange : function(oEvent){
			var oItem, oCtx;
			oItem = oEvent.getSource();
			if (Device.system.desktop){
				oCtx = oItem.getSelectedItem().getBindingContext();
			}else{
				oCtx = oItem.getBindingContext();
			}
			
			//oCtx = oItem.getSelectedItem().getBindingContext(); use only for List onSelectionChange event
			//oCtx = oItem.getBindingContext(); use only for StandardListItem onPress event			
			this.getRouter().navTo("spkhdr",{
				spkId : oCtx.getProperty("Spkid"),
				bukrs : oCtx.getProperty("Bukrs")
			});
		},
		
		onSearch: function(oEvent){
			var aFilters = [];
			var sQuery = oEvent.getSource().getValue();			
			//var sQuery = oEvent.getParameter("query");						
			if (sQuery && sQuery.length > 0) {
				var filter = new Filter("Spkid", sap.ui.model.FilterOperator.Contains, sQuery);
				aFilters.push(filter);
			};
			
			var list = this.getView().byId("listSPK");
			var binding = list.getBinding("items");
			binding.filter(aFilters);
		},
		
		onRefresh: function(){
			this.byId("listSPK").getBinding("items").refresh();
		}
	});
});