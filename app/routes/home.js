module.exports = function(application){
    app.get("/", function(req, res){
        application.app.controllers.home_ctrl.index(application, req, res);
    });
}// fim do exports