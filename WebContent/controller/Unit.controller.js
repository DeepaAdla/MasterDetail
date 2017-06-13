sap.ui.define([
	"com/liu/split/controller/BaseController"
], function (BaseController) {
	"use strict";
	return BaseController.extend("com.liu.split.controller.Unit", {
//		onInit: function () {
//			var oRouter = this.getRouter();
//			oRouter.getRoute("spkBhn").attachMatched(this._onRouteMatched, this);
//			// Hint: we don't want to do it this way
//			/*
//			oRouter.attachRouteMatched(function (oEvent){
//				var sRouteName, oArgs, oView;
//				sRouteName = oEvent.getParameter("name");
//				if (sRouteName === "employee"){
//					this._onRouteMatched(oEvent);
//				}
//			}, this);
//			*/
//		},
//		_onRouteMatched : function (oEvent) {
//			var oArgs, oView, sPath, sBatch;
//			
//			oArgs = oEvent.getParameter("arguments");
//			oView = this.getView();	
//			
//			if (oArgs.batch == undefined){
//				sBatch = "";			
//			}else{
//				sBatch = oArgs.batch;
//			}
//			
//			oView.bindElement({
//				path : "/BahanSet(Bukrs='"+ oArgs.bukrs +"',Spkid='" + oArgs.spkId + "',Itemno='" + oArgs.itemno +
//					   "',Bhncode='" + oArgs.bhncode + "',Batch='" + sBatch + "')",
//				events : {
//					change: this._onBindingChange.bind(this),
//					dataRequested: function (oEvent) {
//						
//					},
//					dataReceived: function (oEvent) {
//						
//					}
//				}
//			});
//		},
//		_onBindingChange : function (oEvent) {
//			// No data for the binding
//			if (!this.getView().getBindingContext()) {
//				this.getRouter().getTargets().display("notFound");
//			}
//		}	

		
		onItemPressed : function(oEvent){
			var oItem, oCtx, oRouter;
			oItem = oEvent.getParameter("listItem");
			oCtx = oItem.getBindingContext();
			var bukrs = oCtx.getProperty("Bukrs");
			this.getRouter().navTo("spkAkt",{
				bukrs : oCtx.getProperty("Bukrs"),
				spkId : oCtx.getProperty("Spkid"),
				itemno : oCtx.getProperty("Itemno")				
			});
		}
	});
});