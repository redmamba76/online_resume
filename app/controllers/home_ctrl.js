module.exports.index = function(application, req, res){

    var connection = app.config.db_connection();
    var adminDAO = new application.app.models.AdminDAO(connection);

    adminDAO.getDadosDoAdm( function(error, result){
        res.render("home/index", { dadosAdmin : result });
    });


}// fim do exports