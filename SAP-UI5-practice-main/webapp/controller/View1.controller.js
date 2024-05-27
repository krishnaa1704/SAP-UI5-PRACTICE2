sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/m/MessageBox",
    "sap/ui/core/Fragment",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,MessageToast,Fragment) {
        "use strict";

        return Controller.extend("project1.controller.View1", {
            
        
            onMouseOver: function(){
            var oButton = this.byId("yourButtonId");

            if (oButton.getText() === "Show Message Toast") {
              oButton.setText("Submit!");
            } else {
              oButton.setText("Show Message Toast");
            }

        },
        check:function(){
          var oButton1=this.byId("check").getValue();
          oButton1=Number(oButton1)
          if(oButton1 > 18){
            MessageToast.show("Eligible");
            
          }else{
            MessageToast.show("Not Eligible");
         
          }
        },
        image : function(aEvent){
           var img=this.getView().byId("img");
           if(aEvent.getSource().getPressed()){
            img.setVisible(true);
           }else{
            img.setVisible(false);
           }
        },
        onPost : function(bEvent){
          var value=bEvent.getParameter("value");
          MessageToast.show("Posted new feed entry: " + value);

        },
        onClick : function(){
          var state=this.getView().byId("nav");
          state.setCollapsed(!state.getCollapsed());
        },
        })
    });
