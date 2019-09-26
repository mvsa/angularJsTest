angular.module("listaTelefonica").directive("uiDate", function($filter){
    return{
        require: "ngModel",
        link: function(scope,element,attrs,ctrl){
            var _formatDate = function (date){
                date = date.replace(/[^0-9]+/g, ""); // Tudo aquilo que n for digito de zero a 9 vou substituir por vazio, limpar data para so ficar numero
                if(date.length > 2){
                    date = date.substring(0,2) + "/" + date.substring(2);
                }
                if(date.length > 5){
                    date = date.substring(0,5) + "/" + date.substring(5,9);
                }
                return date;
            };
            
            element.bind("keyup", function(){// **evento atribuido para a execução do console.log
               // console.log(ctrl.$viewValue); // Para conseguir ver o que esta sendo ser digitado, mas tenho que atribuir a execução de console.log a um evento**
                ctrl.$setViewValue(_formatDate(ctrl.$viewValue));
                ctrl.$render();
            });    
            
            //interceptar o bind no scope
            ctrl.$parsers.push(function(value){
                if(value.length === 10){
                    return value;

                   // var dateArray = value.split("/");    
                    //return new Date(dateArray[2], dateArray[1]-1, dateArray[0]).getTime();  //Ano , mes -1 , Dia

                }
            });
            //pega uma data em milisegundos e converte usando uma mascara (opcional)
            ctrl.$formatters.push(function (value){
                return $filter("date")(value, "dd/MM/yyyy");

            });

        }
    };
});


// paramentros do function de link:
// scope (caso n tenha scope isolado), vai ser o mesmo scope do contrler, mas n é muito indicado usar assim, pois perde reusabilidade
//element(ler documentação) 
//attrs - 
//require: estabelece um vinculo com outra diretiva, interagindo por meio do controller

//ctrl ali significa a passagem do controler de ngModel

//ver documentação do .element, ngModel