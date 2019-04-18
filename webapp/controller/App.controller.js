sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast"
], function(Controller, JSONModel, MessageToast) {
    "use strict";

    return Controller.extend("my_amazingapptempest.controller.App", {
        onInit: function() {
            var model1 = new sap.ui.model.json.JSONModel();
            model1.loadData("model/FormData.json");
            this.getView().setModel(model1);

        },
        onPress: function() {
            let a = this.getView().getModel().getProperty("/Form/0/firstname");
            alert(a);
        },
        onPress2: function() {
            this.getView().getModel().setProperty("/Form/0/firstname", "default")
        },
        onMenuSelect: function(oControlEvent) {
            MessageToast.show("RadioButton 3")
        }
    });
});