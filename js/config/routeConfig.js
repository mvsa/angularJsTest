angular.module("listaTelefonica").config(function($routeProvider){
  $routeProvider.when("/contatos",{
      templateUrl: "partials/contatos.html",
      controller:"listaTelefonicaCtrl",
      resolve: {
        contatos: function(contatosAPI){
            return contatosAPI.getContatos();
        },
        operadoras: function(operadorasAPI){
            return operadorasAPI.getOperadoras();
        }
      }
  });


  $routeProvider.when("/novoContato",{
    templateUrl: "partials/novoContato.html",
    controller: "novoContatoCtrl",
    resolve:{
        operadoras: function(operadorasAPI){
            return operadorasAPI.getOperadoras();
        }
    }
  });
  $routeProvider.when("/detalhesContato/:id",{
    templateUrl: "partials/detalhesContato.html",
    controller: "detalhesContatoCtrl",
    resolve:{
      contato: function(contatosAPI,$route){
        return contatosAPI.getContato($route.current.params.id)
      }
    }
  });

  $routeProvider.when("/error",{
    templateUrl: "partials/error.html",
  });

  
  $routeProvider.otherwise({redirectTo: "/contatos"});
});


