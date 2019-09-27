//no ciclo de vida os providers vem antes da instanciação dos objetos (value,config, etc),
// pois pertencem a um ciclo de vida inicial de configuração
angular.module("serialGenerator", []);
angular.module("serialGenerator").provider("serialGenerator", function (){
    var _length = 20; // digamos que eu queira que o usuario possa configurar esse valor

    this.setLength = function (length){
        _length = length;
    };


    this.$get = function (){
        return {
            generate : function (){
                var serial = "";
                while(serial.length < _length) {
                    serial += String.fromCharCode(Math.floor(Math.random() * 64) + 32);
                };
                return serial; 
            }      
        };
    };
});



//com constant injetado:

//angular.module("listaTelefonica").provider("serialGenerator", function (config){
//    console.log(config) // vai deixar o valor disponivel aqui

