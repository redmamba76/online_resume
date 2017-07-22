var app = require("./config/server");

var server = app.listen(8080, function(){
    console.log("Server On");
});

var io = require("socket.io").listen(server);

app.set("io", io);

// variavel para contabilizar quantidade de usuarios conectados simultaneamente
var count_usr_online_now = 0;

io.on("connection", function(socket, data){
    count_usr_online_now++;
    var nome_usuario = data.nome_usuario;
    /**
     * Fazer a captura dos dados do usuário
     * salvar o email no banco de dados 
     * e abrir conexão do chat.
     */

});