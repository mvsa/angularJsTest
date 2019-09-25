
//Primeira letra no nome maiuscula e restante minuscula
angular.module("listaTelefonica").filter("name", function(){
    return function (input){
        var listaDeNomes = input.split(" ");
        var listaDeNomesFormatada = listaDeNomes.map(function(nome){
            if(/(da|de)/.test(nome)) return nome; //tirar o maisculo de "da" "de"
            return nome.charAt(0).toUpperCase() + nome.substring(1).toLowerCase();  
        });
        return listaDeNomesFormatada.join(" ");
    };
});



