angular.module("listaTelefonica").directive("uiAccordions", function(){
    return{
        controller: function ($scope, $element, $attrs){
            //Como é uma função construtora preciso usar this
            var accordions = [];
            this.registerAccordion = function (accordion){
                accordions.push(accordion);
            };
            this.closeAll = function(){
                accordions.forEach(function(accordion){
                    accordion.isOpened = false;
                });
            }
        }
    };
});    

angular.module("listaTelefonica").directive("uiAccordion", function(){
    return{
        templateUrl: "partials/accordion.html",
        transclude: true,
        scope:{
            title: "@title"
        },
        require: "^uiAccordions", //o circunflexo serve para prefixar a diretiva pai accordions
        link:function(scope,element,attrs,ctrl){
            ctrl.registerAccordion(scope);
            scope.open = function (){
                ctrl.closeAll();
                scope.isOpened=true;
            }
        }
    };
});

//fechar o escopo da diretiva para torna-la independente

//vou usar o controler para mediar a interação de diretivas, quero qu quando abra um accordion eu feche o outro 
//vou precisar de uma diretiva pai para os acordes