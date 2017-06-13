sap.ui.define([
	"com/liu/split/controller/BaseController",
	'sap/ui/model/Filter',
	"sap/ui/Device"
], function (BaseController, Filter, Device) {
	"use strict";
	return BaseController.extend("com.liu.split.controller.App", {
		onInit: function(){
			this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
        }		
		
	});
});