//limitar a quantidade de caracteres de uma string, incluindo ... (da pra fazer no css melhor)

angular.module("listaTelefonica").filter("ellipsis", function(){
    return function(input,size){
        if(input.length<=size) return input; //se o nome ja for menor que o size definido
        var output = input.substring(0,(size || 3)) + "...";
        return output;  
    };
});