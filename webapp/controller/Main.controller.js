sap.ui.define(["sap/ui/core/mvc/Controller"], function(Controller) {
	"use strict";
	return Controller.extend("com.ordina.parkconnectHackaton_ParkConnect.controller.Main", {
		onInit: function() {
			//initalize models and set them to the view
			// this.getView().setModel(models.createOpenWeatherModel(),"oDataModel");
			// this.getView().setModel(models.createAPIModel(),"openweather");
			// this.getView().setModel(models.createPersistenceModel(),"persistenceModel");
			// this.getCitiesByPerson();
			// //calling the geolocator, ignore the IDE error 
			// navigator.geolocation.getCurrentPosition(this.onGeoSuccess, this.onGeoError, {enableHighAccuracy:true});
		},
		onSettingsPress: function() {
			// var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			// oRouter.navTo("settings");
			var hanaOdatModel = new sap.ui.model.odata.ODataModel("/oDataParkingService");
			var data = {};
	
			data["USERNAME"] = "Jo2";
			data["PASS"] = "blabla";
			data["FIRSTNAME"] = "userId";
			data["LASTNAME"] = "C";

			hanaOdatModel.create("/Users", data, {
				success: function(oData) {
					console.log("success");

				},
				error: function(err) {
					console.log(err);
				}
			});
		},
		/**
		 *@memberOf com.ordina.parkconnectHackaton_ParkConnect.controller.Main
		 */
		onStartPress: function(oEvent) {
			//This code was generated by the layout editor.
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("start");
		},
		/**
		 *@memberOf com.ordina.parkconnectHackaton_ParkConnect.controller.Main
		 */
		onPlannificationPress: function() {
			//This code was generated by the layout editor.
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("drive");
		},
		/**
		 *@memberOf com.ordina.parkconnectHackaton_ParkConnect.controller.Main
		 */
		onBookPress: function() {
			//This code was generated by the layout editor.
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("book");
		}
	});
});