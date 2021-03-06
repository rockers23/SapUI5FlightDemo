var oCompanyModel = (function(uri,service,user,password)
{
    var dflt_uri = uri || "http://localhost:8080/sap/Gateway/GWY/";
    var dflt_service = service || "BUPA_INFORMATION/";
    var dflt_user = user || "***";
    var dflt_password = password || "***";

    var oModel = new sap.ui.model.odata.ODataModel( dflt_uri + dflt_service, false, dflt_user, dflt_password );
    //var oModel = new sap.ui.model.json.JSONModel( dflt_uri + dflt_service, false, dflt_user, dflt_password );
    
    return{ 
        getModel: function(){ return oModel; },
        getMetadata: function(){ return oModel.oMetadata.dataServices.schema[0]; },
    }
    
}());