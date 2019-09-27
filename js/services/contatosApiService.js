angular.module("listaTelefonica").factory("contatosAPI", function ($http,config){
    var _getContatos = function (){ // convencão usar variavel com _ para escopo local
        return $http.get('data/data.json');
    };

    var _getContato = function (id){
        return $http.get(config.baseUrl + "/contatos/" + id);
    };

    var _saveContato = function (contato){ // convencão usar variavel com _ para escopo local
        return $http.post(config.baseUrl + "/contatos", contato); // usando BaseUrl do configValue
    };

    return{
        getContatos : _getContatos,
        saveContato : _saveContato,
        getContato : _getContato
    }; 
});