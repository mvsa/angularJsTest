angular.module("listaTelefonica").directive("uiAlert", function (){
    return{
        templateUrl:"partials/alert.html",
        restrict: "A",
        scope: {
            title: "@title",
            message: "=message"
        },
        transclude:true
    };
});


//se eu fizer: templateUrl:"partials/alert.html", ele vai substituir a div externa(<ui-alert> que esta no index) por essa que estou trazendo
               //replace:true



//na hora de importar na index, ele vai separar o nome, vai virar: ui-alert. Se der segue esse padrão de duas palavras

//return template:<div>codigohtml</div>

